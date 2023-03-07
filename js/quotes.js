const quotes = [
    {
        quote: "버는 것 보다 적게 쓰는 법을 안다면 현자의 돌을 가진 것과 같다.",
        author: "Benjamin Franklin",
    },
    {
        quote: "명확히 설정된 목표가 없으면, 우리는 사소한 일상을 충실히 살다 결국 그 일상의 노예가 되고 만다.",
        author: "Robert Heinlein",
    },
    {
        quote: "낱말 하나가 삶의 모든 무게와 고통에서 우리를 해방시킨다. 그 말은 사랑이다.",
            author: "Sophocles",
    },
    {
        quote: "난 여자의 감정을 농락하는 남자를 좋게 생각할 수 없어. 종종 남들이 생각하는 것보다 훨씬 더 많이 상처 받을 수 있거든.",
        author: "Jane Austen",
    },
    {
        quote: "길을 떠나기 전, 여행자는 여행에서 달성할 목적과 동기를 가지고 있어야 한다.",
        author: "George Santayana",
    },
    {
        quote: "인생은 백치가 지껄이는 이야기와 같다. 시끄럽고 정신없으나 아무 뜻도 없다.",
        author: "William Shakespeare",
    },
    {
        quote: "어려운 직업에서 성공하려면 자신을 굳게 믿어야 한다. 이것이 탁월한 재능을 지닌 사람보다 재능은 평범하지만 강한 투지를 가진 사람이 훨씬 더 성공하는 이유다.",
        author: "Sophia Loren",
    },
    {
        quote: "내 어머니는 성취와 성공의 차이를 분명히 하셨다. 어머니는 말씀하셨다. '성취란 네가 열심히 공부하고 일했으며 네가 가진 최선을 다했다는 인식이다. 성공은 남들에게 추앙받는 것이며, 이것이 멋진 일이긴 하나 그렇게 중요하거나 만족을 주는 것은 아니다. 항상 성취를 목적으로 삼고 성공에 대해선 잊어라.'",
        author: "Helen Hayes",
    },
    {
        quote: "명확히 설정된 목표가 없으면, 우리는 사소한 일상을 충실히 살다 결국 그 일상의 노예가 되고 만다.",
        author: "Robert Heinlein",
    },
    {
        quote: "어디에든 교황 같은 사람들이 있다. 물론 그들은 특정 역할을 한다. 그들은 우리를 물질적으로 지원해준다. 그러나 어떤 것도 창조하지 않는 이들이기에 예술가의 창작 활동을 막을 수 있도록 해서는 안된다.",
        author: "Diane Frolov",
    },
    {
        quote: "친구란 무엇인가? 두 개의 몸에 깃든 하나의 영혼이다.",
        author: "Aristotle",
},
    {
        quote: "누구에게나 친구는 어느 누구에게도 친구가 아니다.",
        author: "Aristotle",
    },
    {
        quote: "왜 힘깨나 쓰는 사람들은 시시한 아령이나 들며 스스로를 지치게 할까? 차라리 포도원을 일구는 게 더 가치있는 운동인 것을.",
        author: "Marcus Valerius Martialis",
    },
    {
        quote: "해가 지는 것을 보게 해 주겠노라. 짐이 요구하겠노라. 그러나 내 통치 기술에 따라 조건이 갖추어지길 기다려야하느니라.",
        author: "Antoine de Saint-Exupery",

    }
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;