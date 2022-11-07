const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const arrow5 = document.querySelector(".arrow5");

question1.addEventListener("click", function (e) {
  question1.classList.toggle("active");
  let styles = e.currentTarget.classList;
  if (styles.contains("active")) {
    arrow1.style.transform = "rotate(180deg)";
    answer[0].style.display = "block";
    question[0].style.color = "hsl(238 29% 16%)";
    question[0].style.fontWeight = "700";
  } else {
    arrow1.style.transform = "none";
    answer[0].style.display = "none";
    question[0].style.color = "hsl(237 12% 33%)";
    question[0].style.fontWeight = "normal";
  }
});
question2.addEventListener("click", function (e) {
  question2.classList.toggle("active");
  let styles = e.currentTarget.classList;
  if (styles.contains("active")) {
    arrow2.style.transform = "rotate(180deg)";
    answer[1].style.display = "block";
    question[1].style.color = "hsl(238 29% 16%)";
    question[1].style.fontWeight = "700";
  } else {
    arrow2.style.transform = "none";
    answer[1].style.display = "none";
    question[1].style.color = "hsl(237 12% 33%)";
    question[1].style.fontWeight = "normal";
  }
});

question3.addEventListener("click", function (e) {
  question3.classList.toggle("active");
  let styles = e.currentTarget.classList;
  if (styles.contains("active")) {
    arrow3.style.transform = "rotate(180deg)";
    answer[2].style.display = "block";
    question[2].style.color = "hsl(238 29% 16%)";
    question[2].style.fontWeight = "700";
  } else {
    arrow3.style.transform = "none";
    answer[2].style.display = "none";
    question[2].style.color = "hsl(237 12% 33%)";
    question[2].style.fontWeight = "normal";
  }
});

question4.addEventListener("click", function (e) {
  question4.classList.toggle("active");
  let styles = e.currentTarget.classList;
  if (styles.contains("active")) {
    arrow4.style.transform = "rotate(180deg)";
    answer[3].style.display = "block";
    question[3].style.color = "hsl(238 29% 16%)";
    question[3].style.fontWeight = "700";
  } else {
    arrow4.style.transform = "none";
    answer[3].style.display = "none";
    question[3].style.color = "hsl(237 12% 33%)";
    question[3].style.fontWeight = "normal";
  }
});

question5.addEventListener("click", function (e) {
  question5.classList.toggle("active");
  let styles = e.currentTarget.classList;
  if (styles.contains("active")) {
    arrow5.style.transform = "rotate(180deg)";
    answer[4].style.display = "block";
    question[4].style.color = "hsl(238 29% 16%)";
    question[4].style.fontWeight = "700";
  } else {
    arrow5.style.transform = "none";
    answer[4].style.display = "none";
    question[4].style.color = "hsl(237 12% 33%)";
    question[4].style.fontWeight = "normal";
  }
});

// this method didnt work and I know why, but I cant seem to find a solution to my problem

// question.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     question.classList.toggle("active");
//     let styles = e.currentTarget.classList;
//     if (styles.contains("active")) {
//       arrow1.style.transform = "rotate(180deg)";
//       answer.style.display = "block";
//       question.style.color = "hsl(238 29% 16%)";
//       question.style.fontSize = "0.75em";
//       question.style.fontWeight = "700";
//     } else {
//       arrow1.style.transform = "none";
//       answer.style.display = "none";
//       question.style.color = "hsl(237 12% 33%)";
//       question.style.fontSize = "0.82em";
//       question.style.fontWeight = "normal";
//     }
//   });
// });
