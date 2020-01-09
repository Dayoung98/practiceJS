/*const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("you can");
} else {
  console.log("too young");
}*/

//const title = document.getElementById("title");
console.title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
//const BASE_COLOR = "rgb(52, 73, 94)";
//const OTHER_COLOR = "#7f8c8d";
/*title.innerHTML = "Hi! Form Js";
title.style.color = "red";
document.title = "I Own You Now";
console.log(title);
console.dir(document);*/

/*function handleClick() {
  const currentCololr = title.style.color;
  if (currentCololr === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}*/

function handleClick() {
  //const currentClass = title.className;
  /*const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    //title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
  } else {
    //title.className = "";
    title.classList.remove(CLICKED_CLASS);
  }*/
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  //title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

/*function hadleOffline() {
  console.log("LALALAAALA");
}
function handleOnline() {
  console.log("Welcome Back!!!");
}
window.addEventListener("offline", hadleOffline);
window.addEventListener("online", handleOnline);*/

/*function handleResize(event) {
  console.log(event);
}*/
//window.addEventListener("click", handleClick); //not handleResize()
//if i use handleResize() meand call right now!!

//window.addEventListener("resize", handleResize(event));
/*
//String
const what = "Dayoung";
console.log(what);

//Boolean
const wat = false;
console.log(wat);

//Number
const wt = 1234;
console.log(wt);

//Float
const flt = 5.55;
console.log(flt);*/
