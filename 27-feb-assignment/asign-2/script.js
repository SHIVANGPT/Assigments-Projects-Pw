let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let btn6_1 = document.querySelector(".btn-6-1");
let btn6_2 = document.querySelector(".btn-6-2");
console.log(btn1, btn2, btn3, btn4, btn5, btn6_1, btn6_2);

btn1.addEventListener("click", () => {
  btn1.innerText = "HURRAY YOU CLICKED ME🧡🧡🧡🧡🧡";
});
btn2.addEventListener("dblclick", (e) => {
  console.log(e);

  btn2.innerText = "HURRAY YOU DOUBLE CLICKED ME🧡🧡🧡🧡🧡";
});
btn3.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.style.color = "blue";
});
btn4.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.innerText = "You are Out";
});
document.addEventListener("keypress", (event) => {
  btn5.innerHTML = "you just type this keyword ====>" + event.key;
});
document.addEventListener("keydown", (event) => {
  btn6_1.innerHTML = "THis keyword code is " + event.code;
});
document.addEventListener("keyup", (event) => {
  btn6_2.innerHTML = "THis keyword code is " + event.code;
});
