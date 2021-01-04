let resume = document.querySelector("#resume");
let h2 = document.querySelector("h2");
let toggle = true;
resume.addEventListener("mouseover", function () {
  if (toggle === true) {
    resume.style.transform = "rotate(7deg)";
    toggle = false;
  } else {
    resume.style.transform = "rotate(-7deg)";
    toggle = true;
  }
});
