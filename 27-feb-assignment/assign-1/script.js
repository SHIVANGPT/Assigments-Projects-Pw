let counterText = document.querySelector(".counter-text");
let increseBtn = document.querySelector(".btn-increase");
let decreaseBtn = document.querySelector(".btn-decrease");
let resetBtn = document.querySelector(".btn-reset");

increseBtn.addEventListener("click", () => {
  ++counterText.value;
});
decreaseBtn.addEventListener("click", () => {
  --counterText.value;
});
resetBtn.addEventListener("click", () => {
  counterText.value = 0;
});
