let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

let winPatterns = [
    [0, 1, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 4, 7],
    [1, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
    });
});