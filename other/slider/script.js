const images = [
  "./images/pexels-fox-58267-212324.jpg",
  "./images/pexels-francesco-ungaro-2325447.jpg",
  "./images/pexels-lum3n-44775-167684.jpg",
  "./images/pexels-pixabay-247599.jpg",
  "./images/pexels-simon73-1323550.jpg",
];

let index = 0;

const slide = document.getElementById("slide");

setInterval(() => {
  index++;

  if (index >= images.length - 1) {
    index = 0;
  }

  slide.src = images[index];
}, 3000);

const prevClick = () => {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  slide.src = images[index];
};

const nextClick = () => {
  index++;

  if (index >= images.length - 1) {
    index = 0;
  }

  slide.src = images[index];
};
