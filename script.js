const envelope = document.getElementById("envelope");
const cover = document.getElementById("cover");
const clickHere = document.getElementsByClassName("clickHere")[0];
const letterSheet = document.getElementById("letterSheet");
const letter = document.getElementById("letter");
const shadowLetter = document.getElementById("shadowLetter");
const closeButton = document.getElementById("close-button");

let isLetterOpen = false;

function openLetter() {
  if (isLetterOpen) return;

  isLetterOpen = true;
  envelope.style.cursor = 'default';
  cover.classList.add("open");
  clickHere.style.display = "none";

  setTimeout(() => {
    letterSheet.classList.add("zoomIn");
    letter.style.animation = 'none';
    shadowLetter.style.animation = 'none';
  }, 1000);
}

function closeLetter() {
  if (!isLetterOpen) return;

  isLetterOpen = false;

  letterSheet.classList.remove("zoomIn");
  setTimeout(() => {
    cover.classList.remove("open");
    clickHere.style.display = "block";
    envelope.style.cursor = 'pointer';

    letter.style.animation = 'letter-lift 3s ease-in-out infinite';
    shadowLetter.style.animation = 'shadow-lift 3s ease-in-out infinite';
  }, 500);
}

envelope.addEventListener('click', openLetter);
closeButton.addEventListener('click', (event) => {
  event.stopPropagation();
  closeLetter();
});