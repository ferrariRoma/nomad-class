const images = [
  "sky.jpg",
  "winter.jpg",
  "dream.jpg",
  "bottle.jpg",
  "autumn.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// document.body.style.backgroundImage = `url(img/${randPick})`;
// document.body.style.backgroundSize = `100%`;
// document.body.style.backgroundSize = `100vh`;
