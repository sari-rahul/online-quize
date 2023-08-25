/**index page */
let startBtn = document.getElementById("start-btn");
console.log(startBtn);

let form = document.getElementById("my-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    startBtn.style.display = "inline-block";
    console.log("calling displayquestion");
    displayQuestion();
});

