const quotes = [
  {
    quote: "Devide & Conquer",
  },
  {
    quote: "HARD WORK WORKS",
    author: "Denzel Washington",
  },
  {
    quote: "Life is a series of building, testing, chaging and iterating",
    author: "Lauren Mosenthal",
  },
  {
    quote: "위대하게 사는게 아니라, 살아내는게 위대한 것이다.",
    author: "포스코 석좌교수 이재영",
  },
  {
    quote:
      "모든 것이 어렵지 않다고 생각하면, 어려울 건 하나도 없다. 이 정신만 가지고 살아간다면 실패하더라도 끝내 목표에 도달할 것이다.",
    author: "기업가 사이토 히토리",
  },
  {
    quote: "스스로에게 엄격하지 못한 자는 작은 일도 해낼 수 없다.",
    author: "코린이 안동규",
  },
  {
    quote: "언제 시작했냐는 중요하지 않다. 얼마나 열심히 하느냐가 중요하다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "언어는 하나도 중요하지 않다. 컴퓨터를 올바르게 이해하는 것이 정말 중요하다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "무슨 언어를 배워야 하냐고? 평생을 바쳐서 기를 쓰고 모든 언어를 다 해야 한다.",
    author: "코딩의 신 아샬",
  },
  {
    quote: "자료구조와 알고리즘은 학부 2학년 과정이다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "이것도 공부해야 하냐고? 그거 다 하고 그 이상도 해야 한다. 남들이 안하는 것까지도.",
    author: "코딩의 신 아샬",
  },
  {
    quote: "꿈은 있는데 실천을 안하는 것 만큼 불행한 인생은 없다.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "오늘 안하면 내일도 안합니다. 그러니까 잠을 줄여가면서 무조건 오늘 끝내세요.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "내일 좋은 컨디션으로 공부하는 것이 효율이 좋을거라는 속삭임과 타협하는 순간 매일 타협해야 한다.",
    author: "수학 선생님 정승재",
  },
  {
    quote: "이 세상 모든 사람들은 다 사연이 있다.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "어떤 작품은 잘되기도 하고 잘 안되기도 하지만 실망하지말고, 지치지말고, 자책하지 않고 계속하다 보면 생각지도 못한 위로와 보상이 찾아오게 될 것이다.",
    author: "백술예술대상 오정세",
  },
  {
    quote:
      "삶이란 선택하기 따라 달려있다. 남탓 하지마라. 내가 공부하고 일할 의지가 있으면 모든지 이룰 수 있다.",
    author: "감독 루 홀츠(Lou Holtz)",
  },
  {
    quote:
      "지금 최선을 다해야 하고, 지금 열심히 해야 한다. 이 기회가 아깝지도 않나?",
    author: "한국축구 레전드 안정환",
  },
  {
    quote:
      "작은 일에 실망하고 좌절하면 평생 그렇게 살아야 한다. 자신감은 다른 사람이 심어주는 것도 있지만, 본인이 자신감을 찾으면 된다. 누구도 날 도와주지 않는다.",
    author: "한국축구 레전드 안정환",
  },
  {
    quote:
      "'나는 노력했다'고 망상하지 마라. 운동장에서는 거짓말이 없다. 자신을 속이지 말고 자신에게 부끄러운 사람이 되지마라.",
    author: "한국축구 레전드 안정환",
  },
  {
    quote: "젊음의 매 순간이 기회임을 '젊음'은 종종 잊는다.",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randQuote.quote;
author.innerText = randQuote.author;
