/*
 * 30일 영어회화 연습 - 시나리오 데이터 (초급 / beginner)
 *
 * 등장인물
 *   주인공(You)  : Gil Kim (길)  - 대화 속에서는 "Gil"
 *   배쌤         : Teacher Bae   - 직장 동료 / 친구 / 이웃으로 나오는 시나리오(7, 23, 24, 28, 29, 30일차)
 *
 * 형식:
 *   day         : 1~30
 *   emoji       : 목록에 보여줄 아이콘
 *   title       : 제목(한글)
 *   situation   : 상황 설명(한글)
 *   partner     : 상대방 역할 [영어, 한글]
 *   dialogue    : [화자, 영어, 한글] 12~14줄  (화자: "me" = You, "other" = 상대방)
 *   expressions : [영어, 한글] 핵심 표현
 */
const SCENARIOS = [
  {
    day: 1,
    emoji: "☕",
    title: "카페에서 첫 주문",
    situation: "동네 카페에 들어가서 아이스 아메리카노와 케이크를 주문하고, 이름을 말한 뒤 카드로 계산해요.",
    partner: ["Barista", "바리스타"],
    dialogue: [
      ["other", "Hi there! Welcome. What can I get for you today?", "안녕하세요! 어서 오세요. 오늘은 뭘 드릴까요?"],
      ["me", "Hi. Could I get an iced americano, please?", "안녕하세요. 아이스 아메리카노 한 잔 주시겠어요?"],
      ["other", "Sure. What size would you like?", "네. 사이즈는 어떤 걸로 드릴까요?"],
      ["me", "Medium, please.", "미디엄으로 주세요."],
      ["other", "Would you like anything to eat with that?", "같이 드실 거 필요하세요?"],
      ["me", "Actually, yes. I'd like a slice of cheesecake too.", "네, 사실 있어요. 치즈케이크 한 조각도 주세요."],
      ["other", "Great choice. Is that for here or to go?", "좋은 선택이에요. 여기서 드세요, 가져가세요?"],
      ["me", "For here, please.", "여기서 먹을게요."],
      ["other", "OK. That'll be 9,500 won. Can I get a name for the order?", "알겠습니다. 9,500원이에요. 주문자 성함을 알려주시겠어요?"],
      ["me", "It's Gil.", "길이에요."],
      ["other", "Thanks, Gil. You can pay by card right here.", "감사합니다, 길 님. 여기서 카드로 결제하시면 돼요."],
      ["me", "Sure. Here you go.", "네. 여기 있어요."],
      ["other", "Thank you. We'll call your name when it's ready.", "감사합니다. 준비되면 이름을 불러드릴게요."],
      ["me", "Thanks so much!", "정말 감사합니다!"]
    ],
    expressions: [
      ["Could I get ~, please?", "~ 주시겠어요?"],
      ["What size would you like?", "사이즈는 어떤 걸로 드릴까요?"],
      ["Is that for here or to go?", "여기서 드세요, 가져가세요?"],
      ["Can I get a name for the order?", "주문자 성함을 알려주시겠어요?"],
      ["Here you go.", "여기 있어요. (건네줄 때)"],
      ["We'll call your name when it's ready.", "준비되면 이름을 불러드릴게요."]
    ]
  },
  {
    day: 2,
    emoji: "🥤",
    title: "카페 주문이 잘못 나왔어요",
    situation: "아이스로 시켰는데 뜨거운 커피가 나왔어요. 정중하게 말해서 다시 받아요.",
    partner: ["Barista", "바리스타"],
    dialogue: [
      ["me", "Excuse me. I think there's a mistake with my order.", "실례합니다. 제 주문이 잘못 나온 것 같아요."],
      ["other", "Oh, I'm sorry. What seems to be the problem?", "아, 죄송해요. 어떤 문제인가요?"],
      ["me", "I ordered an iced americano, but this one is hot.", "아이스 아메리카노를 주문했는데, 이건 뜨거워요."],
      ["other", "Let me check. Oh, you're right. This is a hot americano.", "확인해 볼게요. 아, 맞네요. 뜨거운 아메리카노네요."],
      ["me", "And I asked for no sugar, but it tastes sweet.", "그리고 설탕은 빼 달라고 했는데, 달아요."],
      ["other", "I'm so sorry about that. I'll make a new one for you right away.", "정말 죄송합니다. 바로 새로 만들어 드릴게요."],
      ["me", "Thank you. Do you know how long it will take?", "감사합니다. 얼마나 걸릴지 아세요?"],
      ["other", "It should only take about three minutes.", "3분 정도면 될 거예요."],
      ["me", "OK, that's fine. I'll wait over there.", "네, 괜찮아요. 저쪽에서 기다릴게요."],
      ["other", "Thank you for being so patient. Here's a free cookie for the wait.", "기다려 주셔서 감사해요. 기다리신 값으로 쿠키 하나 드릴게요."],
      ["me", "Oh, that's very kind of you. Thank you!", "아, 정말 친절하시네요. 감사합니다!"],
      ["other", "No problem. Sorry again, and enjoy your drink!", "천만에요. 다시 한번 죄송하고, 맛있게 드세요!"]
    ],
    expressions: [
      ["I think there's a mistake with my order.", "제 주문이 잘못 나온 것 같아요."],
      ["What seems to be the problem?", "어떤 문제인가요?"],
      ["I ordered ~, but ~.", "~를 주문했는데, ~예요."],
      ["I'll make a new one for you right away.", "바로 새로 만들어 드릴게요."],
      ["Thank you for being so patient.", "기다려 주셔서 감사합니다."],
      ["How long will it take?", "얼마나 걸려요?"]
    ]
  },
  {
    day: 3,
    emoji: "🚇",
    title: "지하철에서 길 묻기",
    situation: "강남역에 가야 하는데 어디서 타야 할지 몰라요. 지나가는 사람에게 길을 물어요.",
    partner: ["Stranger", "지나가는 사람"],
    dialogue: [
      ["me", "Excuse me. Could you help me, please?", "실례합니다. 좀 도와주시겠어요?"],
      ["other", "Sure. What do you need?", "그럼요. 뭐가 필요하세요?"],
      ["me", "I'm trying to get to Gangnam Station. Am I on the right line?", "강남역에 가려고 하는데요. 제가 맞는 노선에 있나요?"],
      ["other", "Not really. You need to take line 2. This is line 3.", "아니에요. 2호선을 타야 해요. 이건 3호선이에요."],
      ["me", "Oh, I see. How can I get to line 2 from here?", "아, 그렇군요. 여기서 2호선으로 어떻게 가요?"],
      ["other", "You can transfer at the next station. Just follow the green signs.", "다음 역에서 갈아타면 돼요. 초록색 표지판을 따라가세요."],
      ["me", "OK. And how many stops is it from there?", "네. 거기서 몇 정거장이에요?"],
      ["other", "It's about five stops. It takes about fifteen minutes.", "다섯 정거장쯤이에요. 15분 정도 걸려요."],
      ["me", "Do I need to change trains again?", "또 갈아타야 하나요?"],
      ["other", "No, you don't. Line 2 goes straight to Gangnam Station.", "아니요. 2호선이 강남역까지 바로 가요."],
      ["me", "That's great. Thank you so much for your help!", "잘됐네요. 도와주셔서 정말 감사합니다!"],
      ["other", "You're welcome. Have a nice day!", "천만에요. 좋은 하루 보내세요!"]
    ],
    expressions: [
      ["Could you help me, please?", "좀 도와주시겠어요?"],
      ["I'm trying to get to ~.", "~에 가려고 해요."],
      ["Am I on the right line?", "제가 맞는 노선에 있나요?"],
      ["How can I get to ~ from here?", "여기서 ~에 어떻게 가요?"],
      ["You can transfer at ~.", "~에서 갈아타면 돼요."],
      ["Do I need to change trains?", "열차를 갈아타야 하나요?"]
    ]
  },
  {
    day: 4,
    emoji: "🚕",
    title: "택시 타고 목적지 말하기",
    situation: "택시를 타고 서울역으로 가요. 에어컨을 부탁하고 내려서 카드로 결제해요.",
    partner: ["Taxi driver", "택시 기사"],
    dialogue: [
      ["other", "Hello. Where are you heading?", "안녕하세요. 어디로 가세요?"],
      ["me", "Hi. Could you take me to Seoul Station, please?", "안녕하세요. 서울역으로 가 주시겠어요?"],
      ["other", "Sure. Do you know which exit you want?", "네. 어느 출구로 갈지 아세요?"],
      ["me", "Exit 3 is fine. Is the traffic bad today?", "3번 출구면 돼요. 오늘 차가 많이 막혀요?"],
      ["other", "Yes, it's a little heavy. It might take about 25 minutes.", "네, 좀 많이 막혀요. 25분쯤 걸릴 것 같아요."],
      ["me", "That's OK. I'm not in a hurry.", "괜찮아요. 급하지 않아요."],
      ["other", "Great. Is the temperature OK for you?", "좋아요. 온도는 괜찮으세요?"],
      ["me", "Actually, could you turn on the air conditioner, please? It's a bit hot.", "사실 에어컨을 좀 켜 주시겠어요? 조금 더워서요."],
      ["other", "Of course. Is this better?", "물론이죠. 이제 좀 나아요?"],
      ["me", "Yes, much better. Thank you. Could you stop right here, please?", "네, 훨씬 좋아요. 감사합니다. 여기서 세워 주시겠어요?"],
      ["other", "Sure. That'll be 12,000 won. Card or cash?", "네. 12,000원입니다. 카드예요, 현금이에요?"],
      ["me", "I'll pay by card. Here you go.", "카드로 낼게요. 여기 있어요."]
    ],
    expressions: [
      ["Could you take me to ~, please?", "~로 가 주시겠어요?"],
      ["Is the traffic bad today?", "오늘 차가 많이 막혀요?"],
      ["I'm not in a hurry.", "급하지 않아요."],
      ["Could you turn on the air conditioner?", "에어컨을 켜 주시겠어요?"],
      ["Could you stop right here, please?", "여기서 세워 주시겠어요?"],
      ["Card or cash?", "카드예요, 현금이에요?"]
    ]
  },
  {
    day: 5,
    emoji: "🏥",
    title: "병원 접수",
    situation: "어제부터 열이 나고 목이 아파서 병원에 왔어요. 접수하고 서류를 작성해요.",
    partner: ["Receptionist", "접수 직원"],
    dialogue: [
      ["other", "Good morning. How can I help you today?", "안녕하세요. 오늘 어떻게 도와드릴까요?"],
      ["me", "Hi. I'd like to see a doctor, please.", "안녕하세요. 진료를 받고 싶어요."],
      ["other", "Do you have an appointment?", "예약하셨나요?"],
      ["me", "No, I don't. Is that OK?", "아니요, 안 했어요. 괜찮나요?"],
      ["other", "That's fine. You can register now. May I have your name and ID, please?", "괜찮아요. 지금 접수하시면 돼요. 성함과 신분증을 주시겠어요?"],
      ["me", "Sure. My name is Gil Kim. Here is my ID.", "네. 제 이름은 김길이에요. 신분증 여기 있어요."],
      ["other", "Thank you. What seems to be the problem?", "감사합니다. 어디가 불편하세요?"],
      ["me", "I've had a fever since yesterday, and my throat really hurts.", "어제부터 열이 나고, 목이 정말 아파요."],
      ["other", "I see. Do you have a cough too?", "그렇군요. 기침도 하세요?"],
      ["me", "Yes, a little bit.", "네, 조금요."],
      ["other", "OK. Please fill out this form and have a seat.", "알겠습니다. 이 서류를 작성하시고 앉아서 기다려 주세요."],
      ["me", "Thank you. How long do I have to wait?", "감사합니다. 얼마나 기다려야 하나요?"],
      ["other", "About twenty minutes. We'll call your name.", "20분쯤요. 이름을 불러드릴게요."],
      ["me", "OK. Thank you very much.", "네. 정말 감사합니다."]
    ],
    expressions: [
      ["I'd like to see a doctor.", "진료를 받고 싶어요."],
      ["Do you have an appointment?", "예약하셨나요?"],
      ["I've had a fever since yesterday.", "어제부터 열이 났어요."],
      ["My throat really hurts.", "목이 정말 아파요."],
      ["Please fill out this form.", "이 서류를 작성해 주세요."],
      ["How long do I have to wait?", "얼마나 기다려야 하나요?"]
    ]
  },
  {
    day: 6,
    emoji: "💊",
    title: "약국에서 약 사기",
    situation: "머리가 아파서 약국에 갔어요. 약을 추천받고 먹는 방법을 물어봐요.",
    partner: ["Pharmacist", "약사"],
    dialogue: [
      ["other", "Hello. How can I help you?", "안녕하세요. 무엇을 도와드릴까요?"],
      ["me", "Hi. I have a bad headache. Could you recommend some medicine?", "안녕하세요. 머리가 많이 아파요. 약을 추천해 주시겠어요?"],
      ["other", "Sure. How long have you had the headache?", "그럼요. 두통이 얼마나 됐어요?"],
      ["me", "Since this morning.", "오늘 아침부터요."],
      ["other", "Do you have any allergies to medicine?", "약 알레르기가 있으세요?"],
      ["me", "No, I don't.", "아니요, 없어요."],
      ["other", "OK. This one works well. Take one pill after each meal.", "알겠습니다. 이게 잘 들어요. 매 식사 후에 한 알씩 드세요."],
      ["me", "How many times a day should I take it?", "하루에 몇 번 먹어야 해요?"],
      ["other", "Three times a day, but no more than that.", "하루 세 번이고, 그 이상은 안 돼요."],
      ["me", "Can I take it on an empty stomach?", "빈속에 먹어도 되나요?"],
      ["other", "No, it's better to eat something first.", "아니요, 먼저 뭘 좀 드시는 게 좋아요."],
      ["me", "I see. I'll take it after lunch. Thank you!", "알겠어요. 점심 먹고 먹을게요. 감사합니다!"]
    ],
    expressions: [
      ["I have a bad headache.", "머리가 많이 아파요."],
      ["Could you recommend some medicine?", "약을 추천해 주시겠어요?"],
      ["Do you have any allergies?", "알레르기가 있으세요?"],
      ["Take one pill after each meal.", "매 식사 후에 한 알씩 드세요."],
      ["How many times a day should I take it?", "하루에 몇 번 먹어야 해요?"],
      ["on an empty stomach", "빈속에"]
    ]
  },
  {
    day: 7,
    emoji: "💼",
    title: "회사 회의에 지각",
    situation: "지하철이 늦어서 회의에 지각했어요. 배쌤에게 사과하고 놓친 내용을 물어봐요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["other", "Oh, Gil. You're here. We already started the meeting.", "아, 길. 왔네요. 회의는 이미 시작했어요."],
      ["me", "I'm so sorry I'm late, Bae. The subway was delayed this morning.", "늦어서 정말 죄송해요, 배쌤. 오늘 아침 지하철이 지연됐어요."],
      ["other", "It's OK. Please have a seat.", "괜찮아요. 앉으세요."],
      ["me", "Thank you. What did I miss?", "감사합니다. 제가 뭘 놓쳤나요?"],
      ["other", "We just talked about the schedule for the new project.", "새 프로젝트 일정에 대해서만 이야기했어요."],
      ["me", "Got it. Is there anything I need to do?", "알겠어요. 제가 해야 할 일이 있나요?"],
      ["other", "Yes. Could you prepare the report by Friday?", "네. 금요일까지 보고서를 준비해 주실 수 있나요?"],
      ["me", "Sure, no problem. Could I get the meeting notes later?", "그럼요, 문제없어요. 나중에 회의록도 받을 수 있을까요?"],
      ["other", "Of course. I'll send them to you after the meeting.", "물론이죠. 회의 끝나고 보내드릴게요."],
      ["me", "Thank you. I'll leave earlier tomorrow so I can be on time.", "감사합니다. 내일은 일찍 나와서 제시간에 올게요."],
      ["other", "Don't worry about it. Let's continue.", "너무 걱정 마세요. 계속하죠."],
      ["me", "Thanks for understanding, Bae.", "이해해 주셔서 감사해요, 배쌤."]
    ],
    expressions: [
      ["I'm so sorry I'm late.", "늦어서 정말 죄송해요."],
      ["The subway was delayed.", "지하철이 지연됐어요."],
      ["What did I miss?", "제가 뭘 놓쳤나요?"],
      ["Is there anything I need to do?", "제가 해야 할 일이 있나요?"],
      ["by Friday", "금요일까지"],
      ["Thanks for understanding.", "이해해 주셔서 감사해요."]
    ]
  },
  {
    day: 8,
    emoji: "🛵",
    title: "배달음식이 늦을 때",
    situation: "주문한 음식이 한참 지나도 안 와요. 배달 기사님과 통화하고 문 앞에 놓아 달라고 해요.",
    partner: ["Delivery driver", "배달 기사님"],
    dialogue: [
      ["other", "Hello, this is the delivery driver. Is this Gil Kim?", "안녕하세요, 배달 기사입니다. 김길 님이세요?"],
      ["me", "Yes, this is Gil. My food is very late. Where are you now?", "네, 길이에요. 음식이 너무 늦어요. 지금 어디세요?"],
      ["other", "I'm really sorry. There's a lot of traffic, but I'm almost at your building.", "정말 죄송합니다. 차가 많이 막혔는데, 건물에 거의 다 왔어요."],
      ["me", "How many more minutes will it take?", "몇 분 더 걸려요?"],
      ["other", "About five minutes. I'll be there soon.", "5분쯤요. 곧 도착해요."],
      ["me", "OK. Could you leave it at the door? I'm busy right now.", "알겠어요. 문 앞에 두시겠어요? 제가 지금 바빠서요."],
      ["other", "Sure. Which floor are you on?", "네. 몇 층이세요?"],
      ["me", "I'm on the seventh floor, apartment 703.", "7층 703호예요."],
      ["other", "Got it. I'll leave it in front of the door and knock.", "알겠습니다. 문 앞에 두고 노크할게요."],
      ["me", "Thank you. Please drive carefully.", "감사합니다. 조심히 운전하세요."],
      ["other", "Thank you. Enjoy your meal!", "감사합니다. 맛있게 드세요!"],
      ["me", "You too. Have a good day!", "기사님도요. 좋은 하루 보내세요!"]
    ],
    expressions: [
      ["My food is very late.", "음식이 너무 늦어요."],
      ["Where are you now?", "지금 어디세요?"],
      ["How many more minutes will it take?", "몇 분 더 걸려요?"],
      ["Could you leave it at the door?", "문 앞에 두시겠어요?"],
      ["I'll leave it in front of the door.", "문 앞에 두겠습니다."],
      ["Please drive carefully.", "조심히 운전하세요."]
    ]
  },
  {
    day: 9,
    emoji: "📦",
    title: "택배 분실 문의",
    situation: "배송 완료라고 나오는데 택배를 받지 못했어요. 고객센터에 전화해서 확인을 부탁해요.",
    partner: ["Customer service agent", "고객센터 상담원"],
    dialogue: [
      ["other", "Hello. Thank you for calling customer service. How can I help you?", "안녕하세요. 고객센터에 전화 주셔서 감사합니다. 무엇을 도와드릴까요?"],
      ["me", "Hi. I'm waiting for a package, but it hasn't arrived yet.", "안녕하세요. 택배를 기다리고 있는데 아직 안 왔어요."],
      ["other", "I'm sorry to hear that. May I have your tracking number?", "안타깝네요. 송장번호를 알려주시겠어요?"],
      ["me", "Sure. It's 1234-5678.", "네. 1234-5678이에요."],
      ["other", "Thank you. Let me check. It says the package was delivered yesterday.", "감사합니다. 확인해 볼게요. 어제 배송 완료로 되어 있네요."],
      ["me", "That's strange. I didn't receive anything.", "이상하네요. 저는 아무것도 못 받았어요."],
      ["other", "Did you check with your neighbors or the security office?", "이웃이나 경비실에는 확인해 보셨어요?"],
      ["me", "Yes, I did, but nobody has it.", "네, 했는데 아무도 갖고 있지 않아요."],
      ["other", "I see. I'll contact the delivery driver and ask about it.", "알겠습니다. 배송 기사님께 연락해서 물어볼게요."],
      ["me", "Could you call me back after you talk to the driver?", "기사님과 통화하신 후에 저에게 다시 전화 주실 수 있나요?"],
      ["other", "Of course. I'll call you within an hour.", "물론이죠. 한 시간 안에 전화드릴게요."],
      ["me", "Thank you. I'll be waiting for your call.", "감사합니다. 전화 기다리고 있을게요."]
    ],
    expressions: [
      ["It hasn't arrived yet.", "아직 도착하지 않았어요."],
      ["May I have your tracking number?", "송장번호를 알려주시겠어요?"],
      ["It says the package was delivered.", "배송 완료로 되어 있어요."],
      ["I didn't receive anything.", "아무것도 받지 못했어요."],
      ["Could you call me back?", "다시 전화 주실 수 있나요?"],
      ["within an hour", "한 시간 안에"]
    ]
  },
  {
    day: 10,
    emoji: "📞",
    title: "식당 예약하기",
    situation: "금요일 저녁에 친구들과 갈 식당을 전화로 예약해요. 창가 자리도 부탁해요.",
    partner: ["Restaurant staff", "식당 직원"],
    dialogue: [
      ["other", "Hello. Table Restaurant. How can I help you?", "안녕하세요. 테이블 레스토랑입니다. 무엇을 도와드릴까요?"],
      ["me", "Hi. I'd like to make a reservation for this Friday.", "안녕하세요. 이번 금요일로 예약하고 싶어요."],
      ["other", "Sure. What time would you like?", "네. 몇 시로 하시겠어요?"],
      ["me", "Seven o'clock in the evening, if possible.", "가능하면 저녁 7시로요."],
      ["other", "How many people will be coming?", "몇 분이 오시나요?"],
      ["me", "There will be four of us.", "저희 네 명이에요."],
      ["other", "Let me check. Yes, we have a table for four at seven.", "확인해 볼게요. 네, 7시에 4인석이 있어요."],
      ["me", "That's great. Do you have a table by the window?", "잘됐네요. 창가 자리가 있나요?"],
      ["other", "I'll try to get you one. Can I have your name and phone number?", "최대한 창가로 해 드릴게요. 성함과 전화번호를 알려주시겠어요?"],
      ["me", "It's Gil Kim. My number is 010-1234-5678.", "김길이에요. 번호는 010-1234-5678이에요."],
      ["other", "Thank you, Gil. Your reservation is confirmed for Friday at seven.", "감사합니다, 길 님. 금요일 7시로 예약이 확정되었어요."],
      ["me", "Perfect. Thank you. See you on Friday!", "좋아요. 감사합니다. 금요일에 뵐게요!"]
    ],
    expressions: [
      ["I'd like to make a reservation.", "예약하고 싶어요."],
      ["if possible", "가능하면"],
      ["There will be four of us.", "저희 네 명이에요."],
      ["a table by the window", "창가 자리"],
      ["Can I have your name and phone number?", "성함과 전화번호를 알려주시겠어요?"],
      ["Your reservation is confirmed.", "예약이 확정되었습니다."]
    ]
  },
  {
    day: 11,
    emoji: "🍚",
    title: "식당에서 주문과 계산",
    situation: "식당에서 비빔밥을 주문하고, 김치를 더 부탁한 뒤 계산서를 달라고 해요.",
    partner: ["Server", "식당 직원"],
    dialogue: [
      ["other", "Hi. Are you ready to order?", "안녕하세요. 주문하시겠어요?"],
      ["me", "Yes. I'll have the bibimbap, please.", "네. 비빔밥 주세요."],
      ["other", "OK. Would you like anything to drink?", "알겠습니다. 마실 것도 드릴까요?"],
      ["me", "Just water, please.", "물만 주세요."],
      ["other", "Sure. Is spicy food OK for you?", "네. 매운 음식은 괜찮으세요?"],
      ["me", "I can eat a little, but not too spicy, please.", "조금은 먹을 수 있는데, 너무 맵지 않게 해 주세요."],
      ["other", "Got it. It'll be ready in about ten minutes.", "알겠습니다. 10분쯤 후에 나와요."],
      ["me", "OK, thank you.", "네, 감사합니다."],
      ["other", "Here's your bibimbap. Enjoy your meal!", "비빔밥 나왔습니다. 맛있게 드세요!"],
      ["me", "Thank you. Excuse me, could I get some more kimchi?", "감사합니다. 실례지만, 김치를 좀 더 주실 수 있나요?"],
      ["other", "Of course. Here you go.", "물론이죠. 여기 있어요."],
      ["me", "Thank you. It's really delicious.", "감사합니다. 정말 맛있어요."],
      ["other", "I'm glad you like it. Would you like anything else?", "마음에 드신다니 다행이에요. 더 필요한 건 없으세요?"],
      ["me", "No, that's all. Could I have the check, please?", "아니요, 그게 다예요. 계산서 주시겠어요?"]
    ],
    expressions: [
      ["I'll have ~, please.", "~ 주세요. (주문할 때)"],
      ["Not too spicy, please.", "너무 맵지 않게 해 주세요."],
      ["Enjoy your meal!", "맛있게 드세요!"],
      ["Could I get some more ~?", "~를 좀 더 주실 수 있나요?"],
      ["That's all.", "그게 다예요."],
      ["Could I have the check, please?", "계산서 주시겠어요?"]
    ]
  },
  {
    day: 12,
    emoji: "🚌",
    title: "버스 노선 묻기",
    situation: "버스를 탔는데 시청에 가는 버스가 맞는지, 어디서 내려야 하는지 기사님께 물어봐요.",
    partner: ["Bus driver", "버스 기사님"],
    dialogue: [
      ["me", "Excuse me. Does this bus go to City Hall?", "실례합니다. 이 버스 시청에 가나요?"],
      ["other", "Yes, it does.", "네, 갑니다."],
      ["me", "Great. How much is the fare?", "잘됐네요. 요금이 얼마예요?"],
      ["other", "It's 1,500 won. Please tap your card right there.", "1,500원이에요. 바로 저기에 카드를 대 주세요."],
      ["me", "OK. Could you tell me when we get there? I'm not sure where to get off.", "네. 도착하면 알려 주실 수 있나요? 어디서 내려야 할지 잘 몰라서요."],
      ["other", "Sure. It's about twenty minutes from here.", "그럼요. 여기서 20분쯤 걸려요."],
      ["me", "Which stop should I get off at?", "어느 정류장에서 내려야 해요?"],
      ["other", "You should get off at the fourth stop from here.", "여기서 네 번째 정류장에서 내리시면 돼요."],
      ["me", "The fourth stop. Got it.", "네 번째 정류장이요. 알겠어요."],
      ["other", "Don't worry. I'll let you know when we're close.", "걱정 마세요. 가까워지면 알려드릴게요."],
      ["me", "Thank you so much. That's very kind.", "정말 감사합니다. 정말 친절하시네요."],
      ["other", "No problem. Please have a seat.", "별말씀을요. 앉으세요."]
    ],
    expressions: [
      ["Does this bus go to ~?", "이 버스 ~에 가나요?"],
      ["How much is the fare?", "요금이 얼마예요?"],
      ["Please tap your card.", "카드를 대 주세요."],
      ["Could you tell me when we get there?", "도착하면 알려 주실 수 있나요?"],
      ["Which stop should I get off at?", "어느 정류장에서 내려야 해요?"],
      ["I'll let you know.", "알려드릴게요."]
    ]
  },
  {
    day: 13,
    emoji: "🏨",
    title: "숙소 체크인",
    situation: "호텔에 도착해서 예약 확인을 하고 체크인해요. 조식과 체크아웃 시간도 물어봐요.",
    partner: ["Front desk staff", "프런트 직원"],
    dialogue: [
      ["other", "Good evening. Welcome to the hotel. How can I help you?", "안녕하세요. 호텔에 오신 걸 환영합니다. 무엇을 도와드릴까요?"],
      ["me", "Hi. I'd like to check in, please.", "안녕하세요. 체크인하고 싶어요."],
      ["other", "Of course. Do you have a reservation?", "물론이죠. 예약하셨나요?"],
      ["me", "Yes. It's under Gil Kim.", "네. 김길 이름으로 했어요."],
      ["other", "Thank you. May I see your passport, please?", "감사합니다. 여권을 보여주시겠어요?"],
      ["me", "Sure. Here you are.", "네. 여기 있어요."],
      ["other", "Thank you. You'll be staying for two nights in room 502. Here's your key.", "감사합니다. 502호에서 2박 하시게 됩니다. 열쇠 여기 있어요."],
      ["me", "Great. What time is breakfast?", "좋아요. 조식은 몇 시예요?"],
      ["other", "Breakfast is from seven to ten in the morning on the second floor.", "조식은 아침 7시부터 10시까지 2층에서 해요."],
      ["me", "And what time is check-out?", "그리고 체크아웃은 몇 시예요?"],
      ["other", "Check-out is at eleven a.m.", "체크아웃은 오전 11시예요."],
      ["me", "Got it. Thank you very much!", "알겠어요. 정말 감사합니다!"]
    ],
    expressions: [
      ["I'd like to check in.", "체크인하고 싶어요."],
      ["It's under ~.", "~ 이름으로 예약했어요."],
      ["May I see your passport?", "여권을 보여주시겠어요?"],
      ["Here you are.", "여기 있어요. (건네줄 때)"],
      ["What time is breakfast?", "조식은 몇 시예요?"],
      ["What time is check-out?", "체크아웃은 몇 시예요?"]
    ]
  },
  {
    day: 14,
    emoji: "🥵",
    title: "호텔 방 문제 (에어컨 고장)",
    situation: "호텔 방 에어컨이 고장 났어요. 프런트에 전화해서 해결해 달라고 하고 수건도 부탁해요.",
    partner: ["Front desk staff", "프런트 직원"],
    dialogue: [
      ["me", "Hello. This is Gil Kim in room 502.", "여보세요. 502호 김길이에요."],
      ["other", "Hello. How can I help you?", "안녕하세요. 무엇을 도와드릴까요?"],
      ["me", "The air conditioner in my room doesn't work.", "제 방 에어컨이 작동하지 않아요."],
      ["other", "I'm very sorry about that. Is it not turning on at all?", "정말 죄송합니다. 아예 안 켜지나요?"],
      ["me", "It turns on, but only warm air comes out. It's very hot in here.", "켜지긴 하는데 따뜻한 바람만 나와요. 여기 너무 더워요."],
      ["other", "I understand. I'll send someone to your room right away.", "알겠습니다. 바로 직원을 방으로 보내드릴게요."],
      ["me", "Thank you. How long will it take?", "감사합니다. 얼마나 걸려요?"],
      ["other", "About ten minutes.", "10분쯤요."],
      ["me", "OK. Also, could you bring some extra towels?", "알겠어요. 그리고 수건도 좀 더 가져다주실 수 있나요?"],
      ["other", "Of course. How many would you like?", "물론이죠. 몇 장 드릴까요?"],
      ["me", "Two, please.", "두 장 주세요."],
      ["other", "No problem. We'll bring them together. Sorry again for the trouble.", "문제없어요. 같이 가져다드릴게요. 불편을 드려 다시 한번 죄송합니다."]
    ],
    expressions: [
      ["This is ~ in room 502.", "502호 ~예요."],
      ["It doesn't work.", "작동하지 않아요."],
      ["Only warm air comes out.", "따뜻한 바람만 나와요."],
      ["I'll send someone right away.", "바로 직원을 보내드릴게요."],
      ["Could you bring some extra towels?", "수건을 더 가져다주실 수 있나요?"],
      ["Sorry for the trouble.", "불편을 드려 죄송합니다."]
    ]
  },
  {
    day: 15,
    emoji: "✈️",
    title: "공항에서 짐 부치기",
    situation: "공항 카운터에서 캐리어를 부치고 창가 좌석을 부탁해요. 게이트 위치도 물어봐요.",
    partner: ["Airline staff", "항공사 직원"],
    dialogue: [
      ["other", "Good morning. May I see your passport, please?", "안녕하세요. 여권을 보여주시겠어요?"],
      ["me", "Sure. Here you are.", "네. 여기 있어요."],
      ["other", "Thank you. Are you checking any bags today?", "감사합니다. 오늘 부칠 짐이 있으세요?"],
      ["me", "Yes, just one suitcase.", "네, 캐리어 하나만요."],
      ["other", "Please put it on the scale. OK, it's 18 kilograms. That's fine.", "저울에 올려 주세요. 네, 18킬로그램이네요. 괜찮아요."],
      ["me", "Great. Could I have a window seat, please?", "좋아요. 창가 좌석으로 주시겠어요?"],
      ["other", "Let me check. Yes, I can give you seat 24A. It's by the window.", "확인해 볼게요. 네, 24A 좌석을 드릴 수 있어요. 창가예요."],
      ["me", "Perfect. Thank you.", "좋아요. 감사합니다."],
      ["other", "Here's your boarding pass. Your gate is number 12, and boarding starts at 9:30.", "탑승권이에요. 게이트는 12번이고, 탑승은 9시 30분에 시작해요."],
      ["me", "Got it. Where is gate 12?", "알겠어요. 12번 게이트는 어디예요?"],
      ["other", "Go straight, and it will be on your right after security.", "쭉 가시면 보안 검색 후에 오른쪽에 있어요."],
      ["me", "Thank you for your help!", "도와주셔서 감사합니다!"]
    ],
    expressions: [
      ["Are you checking any bags?", "부칠 짐이 있으세요?"],
      ["just one suitcase", "캐리어 하나만"],
      ["Could I have a window seat?", "창가 좌석으로 주시겠어요?"],
      ["boarding pass", "탑승권"],
      ["Where is gate 12?", "12번 게이트는 어디예요?"],
      ["Boarding starts at ~.", "탑승은 ~에 시작해요."]
    ]
  },
  {
    day: 16,
    emoji: "🏪",
    title: "편의점 카드 결제 오류",
    situation: "편의점에서 카드를 냈는데 결제가 안 돼요. 다시 시도하고 다른 카드로 계산해요.",
    partner: ["Cashier", "편의점 직원"],
    dialogue: [
      ["other", "Hello. That will be 4,800 won.", "안녕하세요. 4,800원입니다."],
      ["me", "OK. Here's my card.", "네. 여기 카드요."],
      ["other", "I'm sorry. It says the payment didn't go through.", "죄송해요. 결제가 안 됐다고 나오네요."],
      ["me", "Oh, really? Could you try one more time?", "아, 정말요? 한 번만 더 해 주시겠어요?"],
      ["other", "Sure. ... It still shows an error.", "네. ... 여전히 오류가 떠요."],
      ["me", "That's strange. Let me try another card.", "이상하네요. 다른 카드로 해볼게요."],
      ["other", "No problem. Please insert the card here.", "괜찮아요. 여기에 카드를 꽂아 주세요."],
      ["me", "Here you go. Does it work now?", "여기요. 이제 되나요?"],
      ["other", "Yes, it went through. Would you like a bag?", "네, 결제됐어요. 봉투 필요하세요?"],
      ["me", "No, thanks. I have my own bag.", "아니요, 괜찮아요. 제 가방이 있어요."],
      ["other", "Great. Here's your receipt.", "좋아요. 영수증 여기 있어요."],
      ["me", "Thank you. Have a nice day!", "감사합니다. 좋은 하루 보내세요!"]
    ],
    expressions: [
      ["The payment didn't go through.", "결제가 안 됐어요."],
      ["Could you try one more time?", "한 번만 더 해 주시겠어요?"],
      ["It still shows an error.", "여전히 오류가 떠요."],
      ["Let me try another card.", "다른 카드로 해볼게요."],
      ["Does it work now?", "이제 되나요?"],
      ["Would you like a bag?", "봉투 필요하세요?"]
    ]
  },
  {
    day: 17,
    emoji: "💇",
    title: "미용실 예약과 머리 자르기",
    situation: "예약해 둔 미용실에서 머리를 조금만 다듬어 달라고 해요.",
    partner: ["Hairdresser", "미용사"],
    dialogue: [
      ["other", "Hello. Welcome. Do you have a reservation?", "안녕하세요. 어서 오세요. 예약하셨나요?"],
      ["me", "Yes. I have an appointment at three o'clock under Gil Kim.", "네. 3시에 김길 이름으로 예약했어요."],
      ["other", "Yes, I see it. Please have a seat here. What would you like to do today?", "네, 확인됐어요. 여기 앉으세요. 오늘 어떻게 해드릴까요?"],
      ["me", "I'd like a trim, please. I don't want a big change.", "다듬어 주세요. 크게 바꾸고 싶지는 않아요."],
      ["other", "Sure. How short would you like it?", "네. 얼마나 짧게 하고 싶으세요?"],
      ["me", "About two centimeters shorter, and please keep the front the same.", "2센티 정도만 짧게 해 주시고, 앞머리는 그대로 두세요."],
      ["other", "OK. Would you like me to shorten the sides too?", "알겠습니다. 옆머리도 짧게 할까요?"],
      ["me", "Yes, please make the sides a little shorter.", "네, 옆머리도 조금만 짧게 해 주세요."],
      ["other", "Got it. Please let me know if it's too short.", "알겠어요. 너무 짧으면 말씀해 주세요."],
      ["me", "Sounds good. Thank you.", "좋아요. 감사합니다."],
      ["other", "All done! How do you like it?", "다 됐어요! 마음에 드세요?"],
      ["me", "Let me see. Oh, it looks great!", "어디 볼게요. 아, 아주 좋아요!"],
      ["other", "Great. Would you like a quick wash before you go?", "다행이에요. 가시기 전에 간단히 감으실래요?"],
      ["me", "No, thank you. I'll wash it at home.", "아니요, 괜찮아요. 집에서 감을게요."]
    ],
    expressions: [
      ["I have an appointment at ~.", "~시에 예약했어요."],
      ["I'd like a trim, please.", "다듬어 주세요."],
      ["How short would you like it?", "얼마나 짧게 하고 싶으세요?"],
      ["a little shorter", "조금 더 짧게"],
      ["Please keep the front the same.", "앞머리는 그대로 두세요."],
      ["How do you like it?", "마음에 드세요?"]
    ]
  },
  {
    day: 18,
    emoji: "👕",
    title: "옷 가게에서 사이즈 바꾸기",
    situation: "어제 산 셔츠가 작아서 가게에 가져가 더 큰 사이즈로 교환해요.",
    partner: ["Shop clerk", "옷 가게 점원"],
    dialogue: [
      ["me", "Hi. I bought this shirt yesterday, but it's too small.", "안녕하세요. 어제 이 셔츠를 샀는데 너무 작아요."],
      ["other", "I'm sorry about that. Would you like to exchange it?", "죄송합니다. 교환하시겠어요?"],
      ["me", "Yes, please. Can I change it for a bigger size?", "네. 더 큰 사이즈로 바꿀 수 있나요?"],
      ["other", "Of course. Do you have your receipt with you?", "물론이죠. 영수증 가지고 계세요?"],
      ["me", "Yes, here it is.", "네, 여기 있어요."],
      ["other", "Thank you. What size would you like?", "감사합니다. 어떤 사이즈로 드릴까요?"],
      ["me", "Large, please.", "라지로 주세요."],
      ["other", "Let me check the stock. ... Yes, we have one in large.", "재고를 확인해 볼게요. ... 네, 라지가 하나 있어요."],
      ["me", "Great. Can I try it on first?", "잘됐네요. 먼저 입어 봐도 될까요?"],
      ["other", "Sure. The fitting room is over there.", "그럼요. 탈의실은 저쪽이에요."],
      ["me", "It fits perfectly. I'll take it.", "딱 맞아요. 이걸로 할게요."],
      ["other", "Wonderful. I'll take care of the exchange now.", "잘됐네요. 지금 교환 처리해 드릴게요."]
    ],
    expressions: [
      ["It's too small / too big.", "너무 작아요 / 너무 커요."],
      ["Can I change it for a bigger size?", "더 큰 사이즈로 바꿀 수 있나요?"],
      ["Do you have your receipt with you?", "영수증 가지고 계세요?"],
      ["Let me check the stock.", "재고를 확인해 볼게요."],
      ["Can I try it on first?", "먼저 입어 봐도 될까요?"],
      ["It fits perfectly.", "딱 맞아요."]
    ]
  },
  {
    day: 19,
    emoji: "💵",
    title: "환전하기",
    situation: "환전소에서 달러를 원화로 바꿔요. 환율과 수수료도 물어봐요.",
    partner: ["Currency exchange clerk", "환전소 직원"],
    dialogue: [
      ["me", "Hi. I'd like to exchange some dollars into Korean won.", "안녕하세요. 달러를 원화로 환전하고 싶어요."],
      ["other", "Sure. How much would you like to exchange?", "네. 얼마를 환전하시겠어요?"],
      ["me", "300 US dollars, please.", "300달러요."],
      ["other", "OK. May I see your passport?", "알겠습니다. 여권을 보여주시겠어요?"],
      ["me", "Here you go. What's the exchange rate today?", "여기 있어요. 오늘 환율이 얼마예요?"],
      ["other", "Today's rate is 1,350 won per dollar.", "오늘 환율은 1달러에 1,350원이에요."],
      ["me", "So how much will I get in total?", "그럼 전부 얼마를 받게 되나요?"],
      ["other", "You'll get 405,000 won.", "405,000원을 받으세요."],
      ["me", "Is there any fee?", "수수료가 있나요?"],
      ["other", "No, there's no fee for this amount.", "아니요, 이 금액에는 수수료가 없어요."],
      ["me", "Great. Could I get some of it in small bills?", "좋아요. 일부는 작은 지폐로 받을 수 있을까요?"],
      ["other", "Sure. Here's your money. Please count it.", "그럼요. 여기 돈이에요. 세어 보세요."]
    ],
    expressions: [
      ["I'd like to exchange ~ into ~.", "~를 ~로 환전하고 싶어요."],
      ["What's the exchange rate today?", "오늘 환율이 얼마예요?"],
      ["1,350 won per dollar", "1달러에 1,350원"],
      ["How much will I get in total?", "전부 얼마를 받게 되나요?"],
      ["Is there any fee?", "수수료가 있나요?"],
      ["small bills", "작은 지폐"]
    ]
  },
  {
    day: 20,
    emoji: "🏦",
    title: "은행에서 계좌 문의",
    situation: "은행에서 새 계좌를 만들고 체크카드와 모바일 뱅킹도 문의해요.",
    partner: ["Bank teller", "은행 직원"],
    dialogue: [
      ["me", "Hi. I'd like to open a bank account, please.", "안녕하세요. 계좌를 만들고 싶어요."],
      ["other", "Sure. May I see your ID?", "그럼요. 신분증을 보여주시겠어요?"],
      ["me", "Here you go.", "여기 있어요."],
      ["other", "Thank you. Please fill out this form.", "감사합니다. 이 서류를 작성해 주세요."],
      ["me", "OK. Can I also get a debit card?", "네. 체크카드도 받을 수 있나요?"],
      ["other", "Yes, it will take about ten minutes.", "네, 10분쯤 걸려요."],
      ["me", "Can I also use mobile banking?", "모바일 뱅킹도 쓸 수 있나요?"],
      ["other", "Yes. I can help you install the app on your phone.", "네. 휴대폰에 앱 설치하는 걸 도와드릴게요."],
      ["me", "That would be great. Is there a monthly fee for this account?", "그러면 좋겠어요. 이 계좌는 월 수수료가 있나요?"],
      ["other", "No, it's free.", "아니요, 무료예요."],
      ["me", "Great. Thank you very much for your help.", "좋아요. 도와주셔서 정말 감사합니다."],
      ["other", "You're welcome. Please wait here for your card.", "천만에요. 카드가 나올 때까지 여기서 기다려 주세요."]
    ],
    expressions: [
      ["I'd like to open a bank account.", "계좌를 만들고 싶어요."],
      ["Please fill out this form.", "이 서류를 작성해 주세요."],
      ["debit card", "체크카드"],
      ["mobile banking", "모바일 뱅킹"],
      ["Is there a monthly fee?", "월 수수료가 있나요?"],
      ["It's free.", "무료예요."]
    ]
  },
  {
    day: 21,
    emoji: "🛒",
    title: "마트 계산대에서 봉투 요청",
    situation: "마트에서 장을 보고 계산대에서 봉투를 사고 휴대폰으로 결제해요.",
    partner: ["Cashier", "마트 계산원"],
    dialogue: [
      ["other", "Hello. Do you have a membership card?", "안녕하세요. 멤버십 카드 있으세요?"],
      ["me", "Yes, I do. Here it is.", "네, 있어요. 여기요."],
      ["other", "Thank you. Do you need a plastic bag?", "감사합니다. 비닐봉투 필요하세요?"],
      ["me", "Yes, one large bag, please.", "네, 큰 봉투 하나 주세요."],
      ["other", "It's 100 won for the bag. Is that OK?", "봉투는 100원인데요. 괜찮으세요?"],
      ["me", "That's fine.", "괜찮아요."],
      ["other", "OK. Your total is 32,400 won.", "알겠습니다. 총 32,400원이에요."],
      ["me", "Can I pay with my phone?", "휴대폰으로 결제할 수 있나요?"],
      ["other", "Yes. Please tap your phone here.", "네. 여기에 휴대폰을 대 주세요."],
      ["me", "Like this?", "이렇게요?"],
      ["other", "Yes, that's it. The payment is done. Would you like a receipt?", "네, 맞아요. 결제됐어요. 영수증 드릴까요?"],
      ["me", "Yes, please. Thank you!", "네, 주세요. 감사합니다!"]
    ],
    expressions: [
      ["Do you have a membership card?", "멤버십 카드 있으세요?"],
      ["Do you need a plastic bag?", "비닐봉투 필요하세요?"],
      ["Your total is ~.", "총 ~입니다."],
      ["Can I pay with my phone?", "휴대폰으로 결제할 수 있나요?"],
      ["Please tap your phone here.", "여기에 휴대폰을 대 주세요."],
      ["Would you like a receipt?", "영수증 드릴까요?"]
    ]
  },
  {
    day: 22,
    emoji: "🔄",
    title: "환불·교환 요청",
    situation: "산 지 일주일 된 물건이 고장 났어요. 영수증을 보여주고 환불을 요청해요.",
    partner: ["Store staff", "매장 직원"],
    dialogue: [
      ["me", "Hi. I'd like to return this, please.", "안녕하세요. 이걸 반품하고 싶어요."],
      ["other", "Sure. Is there a problem with it?", "네. 무슨 문제가 있나요?"],
      ["me", "Yes, it's broken. It doesn't turn on.", "네, 고장 났어요. 켜지지 않아요."],
      ["other", "I'm sorry to hear that. Do you have the receipt?", "안타깝네요. 영수증 있으세요?"],
      ["me", "Yes, here it is. I bought it last week.", "네, 여기 있어요. 지난주에 샀어요."],
      ["other", "Thank you. It's still within 14 days, so it's fine. Would you like a refund or an exchange?", "감사합니다. 아직 14일 이내라서 괜찮아요. 환불하실래요, 교환하실래요?"],
      ["me", "A refund, please.", "환불해 주세요."],
      ["other", "OK. It will take three to five days.", "알겠습니다. 3~5일 걸려요."],
      ["me", "Will the money go back to my card?", "돈은 제 카드로 돌아오나요?"],
      ["other", "Yes, it will go back to the same card you used.", "네, 사용하신 같은 카드로 돌아가요."],
      ["me", "Great. Thank you for your help.", "좋아요. 도와주셔서 감사합니다."],
      ["other", "You're welcome. Sorry for the trouble.", "천만에요. 불편을 드려 죄송합니다."]
    ],
    expressions: [
      ["I'd like to return this.", "이걸 반품하고 싶어요."],
      ["It's broken. It doesn't turn on.", "고장 났어요. 켜지지 않아요."],
      ["within 14 days", "14일 이내"],
      ["a refund or an exchange", "환불 또는 교환"],
      ["It will take three to five days.", "3~5일 걸려요."],
      ["the same card you used", "사용하신 같은 카드"]
    ]
  },
  {
    day: 23,
    emoji: "🤝",
    title: "자기소개 (새 직장 동료)",
    situation: "새 직장에서 첫날, 배쌤과 인사를 나누고 자기소개를 해요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["other", "Hi! You must be the new team member.", "안녕하세요! 새로 오신 분이시죠?"],
      ["me", "Yes, I am. Nice to meet you. I'm Gil Kim.", "네, 맞아요. 만나서 반가워요. 저는 김길이에요."],
      ["other", "Nice to meet you too, Gil. I'm Bae. Welcome to the team!", "저도 반가워요, 길. 저는 배쌤이에요. 팀에 온 걸 환영해요!"],
      ["me", "Thank you. I'm a little nervous, but I'm excited.", "감사합니다. 조금 긴장되지만 설레요."],
      ["other", "Don't worry. Everyone here is friendly. Which team are you on?", "걱정 마세요. 여기 다들 친절해요. 어느 팀이세요?"],
      ["me", "I'm on the sales team. How about you?", "저는 영업팀이에요. 배쌤은요?"],
      ["other", "I'm on the marketing team, so we'll work together a lot.", "저는 마케팅팀이라서 우리는 같이 일할 일이 많을 거예요."],
      ["me", "That's great. Have you worked here for a long time?", "잘됐네요. 여기서 오래 일하셨어요?"],
      ["other", "About three years. Where are you from, Gil?", "3년쯤 됐어요. 길은 어디 출신이에요?"],
      ["me", "I'm from Busan, but I've lived in Seoul for two years.", "부산 출신인데, 서울에서 2년째 살고 있어요."],
      ["other", "Oh, nice! Do you like it here?", "오, 좋네요! 서울은 마음에 들어요?"],
      ["me", "Yes, but the subway is very crowded!", "네, 그런데 지하철이 너무 붐벼요!"],
      ["other", "Ha, I know. Let's have lunch together sometime.", "하하, 맞아요. 언제 같이 점심 먹어요."],
      ["me", "I'd love to. Thank you, Bae!", "좋아요. 고마워요, 배쌤!"]
    ],
    expressions: [
      ["Nice to meet you.", "만나서 반가워요."],
      ["Welcome to the team!", "팀에 온 걸 환영해요!"],
      ["I'm on the ~ team.", "저는 ~팀이에요."],
      ["Where are you from?", "어디 출신이세요?"],
      ["I've lived in Seoul for two years.", "서울에서 2년째 살고 있어요."],
      ["I'd love to.", "좋아요. (기꺼이 할게요)"]
    ]
  },
  {
    day: 24,
    emoji: "🍜",
    title: "동료에게 점심 제안",
    situation: "점심시간이 다 돼서 배쌤에게 같이 점심을 먹자고 제안하고 메뉴를 정해요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["me", "Hey, Bae. It's almost noon. Are you hungry?", "저기, 배쌤. 벌써 12시가 다 됐어요. 배고프세요?"],
      ["other", "Yes, I'm starving. I skipped breakfast.", "네, 너무 배고파요. 아침을 걸렀거든요."],
      ["me", "Me too. Do you want to have lunch together?", "저도요. 같이 점심 먹을래요?"],
      ["other", "Sure! What do you feel like eating?", "좋아요! 뭐 먹고 싶어요?"],
      ["me", "How about Korean food? There's a good place nearby.", "한식 어때요? 근처에 좋은 곳이 있어요."],
      ["other", "Hmm, I had Korean food yesterday.", "음, 어제 한식 먹었어요."],
      ["me", "OK. Then how about noodles?", "그렇군요. 그럼 국수는 어때요?"],
      ["other", "Noodles sound great. Is it far from here?", "국수 좋아요. 여기서 멀어요?"],
      ["me", "No, it's about a five-minute walk.", "아니요, 걸어서 5분쯤이에요."],
      ["other", "Perfect. Let's go!", "딱 좋아요. 가요!"],
      ["me", "It's my treat today. You helped me a lot this week.", "오늘은 제가 살게요. 이번 주에 많이 도와주셨잖아요."],
      ["other", "Really? Thank you so much, Gil!", "정말요? 정말 고마워요, 길!"]
    ],
    expressions: [
      ["I'm starving.", "너무 배고파요."],
      ["Do you want to have lunch together?", "같이 점심 먹을래요?"],
      ["What do you feel like eating?", "뭐 먹고 싶어요?"],
      ["How about ~?", "~ 어때요?"],
      ["It's about a five-minute walk.", "걸어서 5분쯤이에요."],
      ["It's my treat.", "제가 살게요."]
    ]
  },
  {
    day: 25,
    emoji: "📱",
    title: "휴대폰 요금·통신사 문의",
    situation: "데이터가 매달 부족해서 통신사에서 요금제를 바꿔요.",
    partner: ["Telecom staff", "통신사 직원"],
    dialogue: [
      ["me", "Hi. I'd like to change my phone plan.", "안녕하세요. 요금제를 바꾸고 싶어요."],
      ["other", "Sure. What plan do you have now?", "네. 지금 어떤 요금제를 쓰세요?"],
      ["me", "I have the 50,000 won plan.", "5만 원 요금제를 쓰고 있어요."],
      ["other", "Do you use a lot of data?", "데이터를 많이 쓰세요?"],
      ["me", "Yes. I run out of data every month before the end of the month.", "네. 매달 월말이 되기 전에 데이터를 다 써요."],
      ["other", "I see. Then how about the unlimited data plan?", "그렇군요. 그럼 데이터 무제한 요금제는 어떠세요?"],
      ["me", "How much is it per month?", "한 달에 얼마예요?"],
      ["other", "It's 65,000 won per month.", "한 달에 65,000원이에요."],
      ["me", "OK. Can I switch starting next month?", "네. 다음 달부터 바꿀 수 있나요?"],
      ["other", "Of course. I'll set it up for you. Please sign here.", "물론이죠. 제가 설정해 드릴게요. 여기에 서명해 주세요."],
      ["me", "Here you go. Will I get a text message to confirm?", "여기 있어요. 확인 문자를 받게 되나요?"],
      ["other", "Yes, you'll get one within an hour.", "네, 한 시간 안에 받으실 거예요."]
    ],
    expressions: [
      ["I'd like to change my phone plan.", "요금제를 바꾸고 싶어요."],
      ["I run out of data every month.", "매달 데이터가 다 떨어져요."],
      ["unlimited data plan", "데이터 무제한 요금제"],
      ["How much is it per month?", "한 달에 얼마예요?"],
      ["Can I switch starting next month?", "다음 달부터 바꿀 수 있나요?"],
      ["Please sign here.", "여기에 서명해 주세요."]
    ]
  },
  {
    day: 26,
    emoji: "🏋️",
    title: "헬스장 등록",
    situation: "집 근처 헬스장에 등록하려고 가격, 사물함, 운영시간을 물어봐요.",
    partner: ["Gym staff", "헬스장 직원"],
    dialogue: [
      ["me", "Hi. I'd like to join the gym.", "안녕하세요. 헬스장에 등록하고 싶어요."],
      ["other", "Welcome! We have one-month and three-month memberships.", "환영합니다! 1개월권과 3개월권이 있어요."],
      ["me", "How much is the three-month membership?", "3개월권은 얼마예요?"],
      ["other", "It's 150,000 won.", "15만 원이에요."],
      ["me", "Does that include a locker?", "그건 사물함도 포함인가요?"],
      ["other", "Yes, it includes a locker and a workout shirt.", "네, 사물함과 운동복도 포함이에요."],
      ["me", "That's good. Can I try it for one day first?", "좋네요. 먼저 하루만 체험해 볼 수 있나요?"],
      ["other", "Sure. You can have one free trial day.", "그럼요. 하루 무료 체험이 가능해요."],
      ["me", "Great. What are your opening hours?", "좋아요. 운영시간이 어떻게 되나요?"],
      ["other", "We're open from six in the morning to eleven at night.", "아침 6시부터 밤 11시까지 열어요."],
      ["me", "OK. I'll come tomorrow for the free trial.", "네. 내일 무료 체험하러 올게요."],
      ["other", "Perfect. We'll see you tomorrow!", "좋아요. 내일 뵙겠습니다!"]
    ],
    expressions: [
      ["I'd like to join the gym.", "헬스장에 등록하고 싶어요."],
      ["How much is the ~ membership?", "~ 회원권은 얼마예요?"],
      ["Does that include ~?", "그건 ~도 포함인가요?"],
      ["Can I try it for one day first?", "먼저 하루만 체험해 볼 수 있나요?"],
      ["free trial day", "무료 체험일"],
      ["What are your opening hours?", "운영시간이 어떻게 되나요?"]
    ]
  },
  {
    day: 27,
    emoji: "👛",
    title: "분실물 센터 (지갑 분실)",
    situation: "지하철에 지갑을 두고 내렸어요. 분실물 센터에 가서 생김새를 설명하고 연락처를 남겨요.",
    partner: ["Lost and found staff", "분실물 센터 직원"],
    dialogue: [
      ["me", "Excuse me. I lost my wallet.", "실례합니다. 지갑을 잃어버렸어요."],
      ["other", "I'm sorry to hear that. Where do you think you lost it?", "안타깝네요. 어디서 잃어버린 것 같으세요?"],
      ["me", "I think I left it on the subway this morning.", "오늘 아침 지하철에 두고 내린 것 같아요."],
      ["other", "Which line were you on?", "몇 호선을 타셨어요?"],
      ["me", "Line 2, going toward Gangnam.", "2호선이고, 강남 방면이었어요."],
      ["other", "OK. Can you describe your wallet?", "알겠습니다. 지갑이 어떻게 생겼는지 설명해 주시겠어요?"],
      ["me", "It's a small black leather wallet.", "작은 검은색 가죽 지갑이에요."],
      ["other", "What was inside?", "안에 뭐가 들어 있었나요?"],
      ["me", "My ID card, two credit cards, and some cash.", "신분증, 신용카드 두 장, 그리고 현금이 조금 있었어요."],
      ["other", "I see. Please write your name and phone number on this paper.", "알겠습니다. 이 종이에 이름과 전화번호를 적어 주세요."],
      ["me", "Sure. Here you go. Will you call me if you find it?", "네. 여기 있어요. 찾으면 전화 주실래요?"],
      ["other", "Yes, we will call you right away.", "네, 바로 전화드릴게요."],
      ["me", "Thank you. How long will it take?", "감사합니다. 얼마나 걸릴까요?"],
      ["other", "It usually takes one or two days. Please try not to worry.", "보통 하루나 이틀 걸려요. 너무 걱정하지 마세요."]
    ],
    expressions: [
      ["I lost my wallet.", "지갑을 잃어버렸어요."],
      ["I left it on the subway.", "지하철에 두고 내렸어요."],
      ["Can you describe your wallet?", "지갑이 어떻게 생겼는지 설명해 주시겠어요?"],
      ["What was inside?", "안에 뭐가 들어 있었나요?"],
      ["Will you call me if you find it?", "찾으면 전화 주실래요?"],
      ["Please try not to worry.", "너무 걱정하지 마세요."]
    ]
  },
  {
    day: 28,
    emoji: "🏠",
    title: "이웃과 인사·소음 부탁",
    situation: "윗집에 사는 배쌤에게 인사하고, 밤에 나는 소음을 정중하게 줄여 달라고 부탁해요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["me", "Hello. I'm Gil from apartment 302, right below you.", "안녕하세요. 바로 아랫집 302호에 사는 길이에요."],
      ["other", "Oh, hi Gil! I'm Bae. Nice to meet you.", "아, 안녕하세요 길! 저는 배쌤이에요. 반가워요."],
      ["me", "Nice to meet you too. I'm sorry to bother you.", "저도 반가워요. 귀찮게 해서 죄송해요."],
      ["other", "No problem. What's up?", "괜찮아요. 무슨 일이세요?"],
      ["me", "Well, I heard some noise last night around eleven.", "음, 어젯밤 11시쯤에 소음이 좀 들렸어요."],
      ["other", "Oh no. I'm so sorry. We had a few friends over for a small party.", "아이고. 정말 죄송해요. 친구 몇 명이 와서 작은 파티를 했어요."],
      ["me", "I understand. But could you please keep it down after ten p.m.?", "이해해요. 그런데 밤 10시 이후에는 조용히 해 주실 수 있을까요?"],
      ["other", "Of course. I'm really sorry. It won't happen again.", "물론이죠. 정말 죄송해요. 다시는 그러지 않을게요."],
      ["me", "Thank you. I have to get up early for work.", "감사합니다. 제가 일 때문에 일찍 일어나야 해서요."],
      ["other", "I understand. I'll tell my friends next time too.", "이해해요. 다음에는 친구들에게도 말해 둘게요."],
      ["me", "I appreciate it. Thank you for understanding.", "고마워요. 이해해 주셔서 감사해요."],
      ["other", "Thanks for telling me nicely. Have a good day!", "좋게 말해 줘서 고마워요. 좋은 하루 보내세요!"]
    ],
    expressions: [
      ["I'm sorry to bother you.", "귀찮게 해서 죄송해요."],
      ["I heard some noise last night.", "어젯밤에 소음이 들렸어요."],
      ["Could you please keep it down?", "조용히 해 주실 수 있을까요?"],
      ["after ten p.m.", "밤 10시 이후에"],
      ["It won't happen again.", "다시는 그러지 않을게요."],
      ["I appreciate it.", "고맙게 생각해요."]
    ]
  },
  {
    day: 29,
    emoji: "🎬",
    title: "친구와 약속 잡기",
    situation: "친구 배쌤이 토요일에 영화를 보자고 해요. 시간과 장소를 맞춰서 약속을 정해요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["other", "Hey, Gil! Are you free this Saturday?", "안녕, 길! 이번 토요일에 시간 돼?"],
      ["me", "I think so. Why? What's up?", "그럴 거야. 왜? 무슨 일이야?"],
      ["other", "I'd like to go see a movie. Do you want to come?", "영화 보러 가고 싶어. 같이 갈래?"],
      ["me", "Sounds great! What time are you thinking?", "좋아! 몇 시쯤 생각해?"],
      ["other", "How about 2 p.m.?", "오후 2시 어때?"],
      ["me", "Hmm, I have a class until three. Can we go a little later?", "음, 3시까지 수업이 있어. 조금 더 늦게 가도 될까?"],
      ["other", "Sure. Then how about 4 p.m.?", "그럼. 그러면 4시는 어때?"],
      ["me", "That's perfect. Where should we meet?", "딱 좋아. 어디서 만날까?"],
      ["other", "Let's meet in front of the movie theater.", "영화관 앞에서 만나자."],
      ["me", "OK. Should I buy the tickets?", "좋아. 내가 표를 살까?"],
      ["other", "No, I'll buy them online. You can get the snacks!", "아니, 내가 온라인으로 살게. 넌 간식을 사!"],
      ["me", "Deal! See you on Saturday!", "좋아! 토요일에 보자!"]
    ],
    expressions: [
      ["Are you free this Saturday?", "이번 토요일에 시간 돼?"],
      ["Do you want to come?", "같이 갈래?"],
      ["Sounds great!", "좋아!"],
      ["Can we go a little later?", "조금 더 늦게 가도 될까?"],
      ["Where should we meet?", "어디서 만날까?"],
      ["Deal!", "좋아! (약속할 때)"]
    ]
  },
  {
    day: 30,
    emoji: "🎉",
    title: "30일 마무리, 여행 계획 이야기",
    situation: "30일 연습을 끝냈어요! 배쌤과 함께 지난 30일을 돌아보고 다음 목표와 해외여행 계획을 이야기해요.",
    partner: ["Teacher Bae", "배쌤"],
    dialogue: [
      ["other", "Gil! You finished 30 days of English practice!", "길! 30일 영어 연습을 끝냈네요!"],
      ["me", "I know! I can't believe it. I'm so proud of myself.", "그러게요! 믿기지 않아요. 제가 너무 뿌듯해요."],
      ["other", "You should be. What was the hardest part?", "그럴 만해요. 가장 어려웠던 게 뭐였어요?"],
      ["me", "Speaking fast, I think. But it got easier every day.", "빨리 말하는 거였던 것 같아요. 그런데 매일 조금씩 쉬워졌어요."],
      ["other", "That's great. What are you going to do next?", "잘됐네요. 다음에는 뭘 할 거예요?"],
      ["me", "I want to travel abroad and speak English with real people.", "해외여행을 가서 진짜 사람들과 영어로 말해 보고 싶어요."],
      ["other", "Wow, that's a great goal! Where do you want to go?", "와, 정말 멋진 목표네요! 어디 가고 싶어요?"],
      ["me", "I want to go to Canada.", "캐나다에 가고 싶어요."],
      ["other", "Why Canada?", "왜 캐나다예요?"],
      ["me", "I want to see the mountains and the lakes.", "산과 호수를 보고 싶어서요."],
      ["other", "That sounds beautiful. I'm sure you can do it.", "정말 아름답겠네요. 길이라면 분명 할 수 있어요."],
      ["me", "Thank you, Bae. You helped me a lot.", "고마워요, 배쌤. 많이 도와주셨어요."],
      ["other", "Anytime. Keep practicing, and let's talk again tomorrow!", "언제든지요. 계속 연습하고, 내일 또 이야기해요!"],
      ["me", "I will. See you tomorrow!", "그럴게요. 내일 봐요!"]
    ],
    expressions: [
      ["I'm so proud of myself.", "제가 너무 뿌듯해요."],
      ["What was the hardest part?", "가장 어려웠던 게 뭐였어요?"],
      ["What are you going to do next?", "다음에는 뭘 할 거예요?"],
      ["I want to travel abroad.", "해외여행을 가고 싶어요."],
      ["Why Canada?", "왜 캐나다예요?"],
      ["Keep practicing!", "계속 연습하세요!"]
    ]
  }
];
