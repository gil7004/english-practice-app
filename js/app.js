/* 30일 영어회화 - 앱 로직 (순수 JavaScript, 프레임워크 없음)
 *
 * 저장하는 것 (모두 이 기기 브라우저의 localStorage):
 *   ep30_start : 시작일 (YYYY-MM-DD). 처음 열었을 때 그날로 자동 저장 -> 그날이 Day 1
 *   ep30_done  : 완료한 Day 기록  { "1": "2026-09-19", ... }
 *   ep30_view  : 학습표 보기 방식 ("grid" | "list")
 */
(function () {
  'use strict';

  var TOTAL = SCENARIOS.length;
  var KEYS = { start: 'ep30_start', done: 'ep30_done', view: 'ep30_view' };
  var WEEK = ['일', '월', '화', '수', '목', '금', '토'];

  var $app = document.getElementById('app');
  var $toast = document.getElementById('toast');
  var $tabs = document.querySelectorAll('#tabbar a');

  /* ---------- 저장소 (localStorage가 막혀 있으면 메모리로 대신) ---------- */
  var mem = {};
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw !== null) return JSON.parse(raw);
    } catch (e) { /* 무시 */ }
    return key in mem ? mem[key] : fallback;
  }
  function save(key, value) {
    mem[key] = value;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 무시 */ }
  }

  /* ---------- 날짜 ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseYmd(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function diffDays(a, b) {
    return Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) -
                       Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);
  }
  /* 오늘 날짜. 주소 끝에 ?date=2026-10-05 를 붙이면 그 날짜로 시험해 볼 수 있어요. */
  function now() {
    var q = new URLSearchParams(location.search).get('date');
    return q && /^\d{4}-\d{2}-\d{2}$/.test(q) ? parseYmd(q) : new Date();
  }
  function fmtDate(d) {
    return d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 (' + WEEK[d.getDay()] + ')';
  }
  function shortDate(d) { return (d.getMonth() + 1) + '/' + d.getDate(); }

  /* ---------- 진행 상태 ---------- */
  var start = load(KEYS.start, null);
  function ensureStart() {
    if (typeof start !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(start)) {
      start = ymd(now());
      save(KEYS.start, start);
    }
  }
  /* 오늘이 몇 일차인지 (30을 넘을 수 있음) */
  function dayNumber() { return Math.max(1, diffDays(parseYmd(start), now()) + 1); }
  function dateOfDay(d) { return addDays(parseYmd(start), d - 1); }
  function isUnlocked(d) { return d <= dayNumber(); }
  function getDone() { return load(KEYS.done, {}); }
  function doneCount() {
    var m = getDone();
    return Object.keys(m).filter(function (k) { return +k >= 1 && +k <= TOTAL; }).length;
  }

  /* ---------- 작은 도구들 ---------- */
  function h(tag, props) {
    var el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') el.className = v;
        else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2).toLowerCase(), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, child) {
    if (child === null || child === undefined || child === false) return;
    if (Array.isArray(child)) { child.forEach(function (c) { append(el, c); }); return; }
    el.appendChild(child.nodeType ? child : document.createTextNode(child));
  }

  var toastTimer;
  function toast(msg) {
    $toast.textContent = msg;
    $toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { $toast.classList.remove('show'); }, 2200);
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) { toast('이 브라우저는 음성 읽기를 지원하지 않아요.'); return; }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) { /* 무시 */ }
  }
  function speakBtn(text) {
    return h('button', {
      class: 'spk', type: 'button', 'aria-label': '영어 발음 듣기',
      onclick: function (e) { e.stopPropagation(); speak(text); }
    }, '🔊');
  }

  /* ---------- 화면: 하루 시나리오 ---------- */
  function bubble(line, s) {
    var who = line[0];
    var el = h('div', { class: 'bubble', role: 'button', tabindex: '0', 'aria-expanded': 'false' },
      h('div', { class: 'en' }, line[1]),
      h('div', { class: 'ko' }, line[2]));
    function toggle() {
      var open = el.classList.toggle('open');
      el.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    el.addEventListener('click', toggle);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    return h('div', { class: 'row ' + who },
      h('div', { class: 'who' }, who === 'me' ? 'You (Gil)' : s.partner[0]),
      h('div', { class: 'line' }, el, speakBtn(line[1])));
  }

  function doneBar(d, isToday) {
    var btn = h('button', { type: 'button' });
    function paint() {
      var done = !!getDone()[d];
      btn.className = 'btn big ' + (done ? 'done' : 'primary');
      btn.textContent = done ? '✓ 완료했어요 (탭하면 취소)' : (isToday ? '✓ 오늘 완료' : '✓ Day ' + d + ' 완료 표시');
    }
    btn.addEventListener('click', function () {
      var m = getDone();
      if (m[d]) {
        delete m[d];
        save(KEYS.done, m);
        toast('완료 표시를 취소했어요');
      } else {
        m[d] = ymd(now());
        save(KEYS.done, m);
        toast('🎉 Day ' + d + ' 완료! 수고했어요');
      }
      paint();
    });
    paint();
    return h('div', { class: 'donebar' }, btn);
  }

  function viewDay(d, opts) {
    var s = SCENARIOS[d - 1];
    var n = dayNumber();
    var root = h('div', { class: 'view' });

    if (!opts.today) root.appendChild(h('a', { class: 'back', href: '#/list' }, '‹ 학습표'));

    root.appendChild(h('header', { class: 'hero' },
      h('div', { class: 'hero-top' },
        h('span', { class: 'chip' }, 'DAY ' + d + ' / ' + TOTAL),
        h('span', { class: 'date' }, fmtDate(dateOfDay(d)))),
      h('h1', null, h('span', { class: 'emoji' }, s.emoji), s.title)));

    if (opts.today && n > TOTAL) {
      root.appendChild(h('div', { class: 'banner' },
        '🎉 30일 과정을 모두 마쳤어요! 아래는 마지막 날 내용이에요. 처음부터 다시 하려면 설정에서 다시 시작하세요.'));
    }

    root.appendChild(h('section', { class: 'card' },
      h('h2', null, '📍 상황'),
      h('p', null, s.situation),
      h('p', { class: 'partner' }, '대화 상대: ', h('b', null, s.partner[0]), ' (' + s.partner[1] + ')')));

    var chat = h('div', { class: 'chat' }, s.dialogue.map(function (line) { return bubble(line, s); }));
    var allBtn = h('button', { class: 'btn ghost small', type: 'button' }, '한글 번역 전체 보기');
    allBtn.addEventListener('click', function () {
      var on = chat.classList.toggle('all-ko');
      allBtn.textContent = on ? '한글 번역 숨기기' : '한글 번역 전체 보기';
      if (!on) {
        Array.prototype.forEach.call(chat.querySelectorAll('.bubble.open'), function (b) {
          b.classList.remove('open');
          b.setAttribute('aria-expanded', 'false');
        });
      }
    });
    root.appendChild(h('div', { class: 'toolbar' }, h('h2', null, '💬 대화문'), allBtn));
    root.appendChild(h('p', { class: 'hint' }, '영어를 먼저 읽어 보고, 말풍선을 탭하면 한글 뜻이 보여요. 🔊를 누르면 발음을 들을 수 있어요.'));
    root.appendChild(chat);

    root.appendChild(h('section', { class: 'card' },
      h('h2', null, '⭐ 핵심 표현'),
      h('ul', { class: 'expr' }, s.expressions.map(function (e) {
        return h('li', null,
          h('div', null, h('div', { class: 'e-en' }, e[0]), h('div', { class: 'e-ko' }, e[1])),
          speakBtn(e[0].replace(/~/g, '').replace(/\s+/g, ' ').trim()));
      }))));

    root.appendChild(doneBar(d, opts.today));
    return root;
  }

  /* ---------- 화면: 학습표 (달력 / 목록) ---------- */
  function viewList() {
    var n = dayNumber();
    var done = getDone();
    var cnt = doneCount();
    var mode = load(KEYS.view, 'grid');
    var todayDay = n <= TOTAL ? n : 0;
    var root = h('div', { class: 'view' });

    root.appendChild(h('section', { class: 'card', style: 'margin-top:0' },
      h('div', { class: 'progress-top' },
        h('b', null, cnt + ' / ' + TOTAL + ' 완료'),
        h('span', null, n <= TOTAL ? '오늘은 Day ' + n : '30일 과정 종료 🎉')),
      h('div', { class: 'bar' }, h('i', { style: 'width:' + Math.round(cnt / TOTAL * 100) + '%' }))));

    function setMode(m) {
      save(KEYS.view, m);
      var el = viewList();
      $app.innerHTML = '';
      $app.appendChild(el);
    }
    root.appendChild(h('div', { class: 'seg' },
      h('button', { type: 'button', class: mode === 'grid' ? 'on' : '', onclick: function () { setMode('grid'); } }, '달력'),
      h('button', { type: 'button', class: mode === 'list' ? 'on' : '', onclick: function () { setMode('list'); } }, '목록')));

    function lockedToast(d) {
      toast('🔒 Day ' + d + '은(는) ' + shortDate(dateOfDay(d)) + '에 열려요');
    }

    var wrap = h('div', { class: mode === 'grid' ? 'grid' : 'list' });
    SCENARIOS.forEach(function (s) {
      var d = s.day;
      var open = isUnlocked(d);
      var cls = [];
      if (d === todayDay) cls.push('today');
      if (done[d]) cls.push('done');
      if (!open) cls.push('locked');
      var date = shortDate(dateOfDay(d));
      var node;

      if (mode === 'grid') {
        node = h(open ? 'a' : 'button', { class: 'cell ' + cls.join(' '), type: open ? null : 'button', href: open ? '#/day/' + d : null },
          h('span', { class: 'c-day' }, 'Day ' + d),
          h('span', { class: 'c-emoji' }, open ? s.emoji : '🔒'),
          h('span', { class: 'c-date' }, (done[d] ? '✓ ' : '') + date));
      } else {
        var state = done[d] ? '✓ 완료' : (d === todayDay ? '오늘' : (open ? '미완료' : '🔒'));
        node = h(open ? 'a' : 'button', { class: 'item ' + cls.join(' '), type: open ? null : 'button', href: open ? '#/day/' + d : null },
          h('span', { class: 'i-day' }, 'Day ' + d),
          h('span', { class: 'i-emoji' }, open ? s.emoji : '🔒'),
          h('span', { class: 'i-title' }, s.title, h('span', { class: 'i-date' }, date)),
          h('span', { class: 'i-state' }, state));
      }
      if (!open) node.addEventListener('click', function () { lockedToast(d); });
      wrap.appendChild(node);
    });
    root.appendChild(wrap);
    return root;
  }

  /* ---------- 화면: 설정 ---------- */
  function viewSettings() {
    var root = h('div', { class: 'view' });
    var standalone = window.navigator.standalone === true ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);

    var dateInput = h('input', { type: 'date', value: start, max: ymd(now()), 'aria-label': '시작일' });
    dateInput.addEventListener('change', function () {
      if (!dateInput.value) return;
      start = dateInput.value;
      save(KEYS.start, start);
      toast('시작일을 바꿨어요. 오늘은 Day ' + Math.min(dayNumber(), TOTAL) + ' 입니다');
    });

    root.appendChild(h('section', { class: 'card', style: 'margin-top:0' },
      h('h2', null, '🗓️ 시작일'),
      h('p', null, '시작일이 Day 1이고, 하루가 지날 때마다 다음 Day가 열려요.'),
      h('div', { class: 'field' }, h('span', null, '시작일'), dateInput),
      h('p', { class: 'note' }, '오늘: ' + fmtDate(now()) + ' → Day ' + Math.min(dayNumber(), TOTAL))));

    root.appendChild(h('section', { class: 'card' },
      h('h2', null, '🔄 다시 시작 / 초기화'),
      h('div', { class: 'stack' },
        h('button', {
          class: 'btn ghost', type: 'button',
          onclick: function () {
            if (!confirm('오늘을 Day 1로 하고 처음부터 다시 시작할까요?\n지금까지의 완료 기록도 모두 지워져요.')) return;
            start = ymd(now());
            save(KEYS.start, start);
            save(KEYS.done, {});
            toast('오늘부터 Day 1로 다시 시작해요');
            location.hash = '#/today';
          }
        }, '오늘부터 Day 1로 다시 시작'),
        h('button', {
          class: 'btn danger', type: 'button',
          onclick: function () {
            if (!confirm('완료 기록만 모두 지울까요? (시작일은 그대로예요)')) return;
            save(KEYS.done, {});
            toast('완료 기록을 지웠어요');
          }
        }, '완료 기록만 초기화'))));

    root.appendChild(h('section', { class: 'card' },
      h('h2', null, '📲 아이폰 홈 화면에 추가'),
      standalone
        ? h('p', null, '✅ 지금 홈 화면 앱으로 실행 중이에요.')
        : h('div', null,
            h('p', null, 'Safari로 이 페이지를 연 뒤:'),
            h('ol', { class: 'steps' },
              h('li', null, '화면 아래(또는 위)의 공유 버튼(□↑)을 누르세요.'),
              h('li', null, '"홈 화면에 추가"를 고르세요.'),
              h('li', null, '오른쪽 위 "추가"를 누르면 앱 아이콘이 생겨요.'))),
      h('p', { class: 'note' }, '학습 기록은 이 기기의 이 브라우저(또는 홈 화면 앱)에만 저장돼요. 다른 기기와는 연결되지 않아요.')));

    return root;
  }

  /* ---------- 주소(#) 보고 화면 바꾸기 ---------- */
  var lastDateKey = null;

  function router() {
    ensureStart();
    lastDateKey = ymd(now());
    var hash = location.hash || '#/today';
    var m = hash.match(/^#\/day\/(\d+)$/);
    var el, active;

    if (m) {
      var d = +m[1];
      if (d < 1 || d > TOTAL) { location.replace('#/list'); return; }
      if (!isUnlocked(d)) {
        toast('🔒 Day ' + d + '은(는) ' + shortDate(dateOfDay(d)) + '에 열려요');
        location.replace('#/list');
        return;
      }
      el = viewDay(d, { today: false });
      active = 'list';
    } else if (hash === '#/list') {
      el = viewList();
      active = 'list';
    } else if (hash === '#/settings') {
      el = viewSettings();
      active = 'settings';
    } else {
      el = viewDay(Math.min(dayNumber(), TOTAL), { today: true });
      active = 'today';
    }

    $app.innerHTML = '';
    $app.appendChild(el);
    Array.prototype.forEach.call($tabs, function (a) {
      a.classList.toggle('active', a.getAttribute('data-tab') === active);
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', router);
  /* 앱을 켜 둔 채 날짜가 바뀌었다가 돌아오면 새로 그려요 */
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && lastDateKey !== ymd(now())) router();
  });

  router();

  /* 오프라인에서도 열리게 (인터넷 주소로 열었을 때만 동작) */
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* 무시 */ });
    });
  }
})();
