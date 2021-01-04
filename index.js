document.addEventListener("DOMContentLoaded", (event) => {
  rotate(resume);
  rotate(about);
  rotate(projects);
  rotate(blog);
});

let resume = document.querySelector("#resume");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let blog = document.querySelector("#blog");
let h2 = document.querySelector("h2");
let toggle = true;
// resume.addEventListener("mouseover", function () {
//   if (toggle === true) {
//     resume.style.transform = "rotate(7deg)";
//     toggle = false;
//   } else {
//     resume.style.transform = "rotate(-7deg)";
//     toggle = true;
//   }
// });

let rotate = function (plank) {
  plank.addEventListener("mouseover", function () {
    if (toggle === true) {
      plank.style.transform = "rotate(5deg)";
      toggle = false;
    } else {
      plank.style.transform = "rotate(-5deg)";
      toggle = true;
    }
  });
};
