let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let patternval1 = boxes[pattern[0]].innerText;
        let patternval2 = boxes[pattern[1]].innerText;
        let patternval3 = boxes[pattern[2]].innerText;

        if (patternval1 != "" && patternval2 != "" && patternval3 != "") {
            if (patternval1 === patternval2 && patternval2 === patternval3) {
                console.log("Winner");
            }
        }
    }
}