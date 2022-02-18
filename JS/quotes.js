const quotes = [
    {
       chapter : "Pro 16:9",
       verse : "In his heart a man plans his course, but the LORD determines his steps",
    },
    {
        chapter : "Joh 1:1",
        verse : "In the beginning was the Word, and the Word was with God, and the Word was God",
     },
     {
        chapter : "Joh 1:2-3",
        verse : "He was with God in the beginning Through him all things were made; without him nothing was made that has been made",
     },
     {
        chapter : "Joh 1:4-5",
        verse : "In him was life, and that life was the light of men The light shines in the darkness, but the darkness has not understood it",
     },
     {
        chapter : "Joh 8:12",
        verse : "When Jesus spoke again to the people, he said, I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life",
     },
     {
        chapter : "Joh 14:26",
        verse : "But the Counselor, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you",
     },
     {
        chapter : "Rev 21:1",
        verse : "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away, and there was no longer any sea",
     },
     {
        chapter : "Rev 21:7",
        verse : "He who overcomes will inherit all this, and I will be his God and he will be my son",
     },
     {
        chapter : "Rev 22:7",
        verse : "Behold, I am coming soon! Blessed is he who keeps the words of the prophecy in this book",
     },
     {
        chapter : "Rev 22:12",
        verse : "Behold, I am coming soon! My reward is with me, and I will give to everyone according to what he has done",
     },
]

const chap = document.querySelector("#quote span:first-child");
const vers = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

chap.innerText = todaysQuote.chapter;
vers.innerText = todaysQuote.verse;
