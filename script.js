function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showMessage(text) {
  document.getElementById("funText").innerText = text;
}

function openModal(text) {
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function releaseHearts() {
  alert("I love you forever ❤️");
}
function openAlert(img, text) {
  document.getElementById("alertImg").src = img;
  document.getElementById("alertText").innerText = text;
  document.getElementById("alertModal").style.display = "flex";
}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // random position left
  heart.style.left = Math.random() * 90 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  heart.style.width = 15 + Math.random() * 15 + 'px';
  heart.style.height = heart.style.width;

  document.querySelector('.hearts-container').appendChild(heart);

  // remove after animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function openAlert(img, text) {
  document.getElementById("alertImg").src = img;
  document.getElementById("alertText").innerText = text;
  document.getElementById("alertModal").style.display = "flex";

}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  const gifs = document.querySelectorAll(".story-gif");

  gifs.forEach((gif, i) => {
    gif.style.position = "fixed";
    gif.style.bottom = "10px";
    gif.style.left = `${10 + i * 18}%`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-container");

  if (container) {
    const items = container.querySelectorAll("video, img");
    const total = items.length;

    items.forEach((item, i) => {
      const angle = (360 / total) * i;
      item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
    });
  }
});
