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
