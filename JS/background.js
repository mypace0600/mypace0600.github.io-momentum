const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];
const img ="IMG"
const bgImage = document.createElement("img");
bgImage.classList.add("bg");

function getRandomBg(){
    const todayImage = images[Math.floor(Math.random()*images.length)];
    bgImage.src=`../${img}/${todayImage}.jpg`;
};



getRandomBg();
setInterval(getRandomBg,15000);
document.body.appendChild(bgImage);
