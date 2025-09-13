let inputValue = document.getElementById("input-box");
console.log(inputValue);

let buttons = document.querySelectorAll("button");
console.log(buttons);

let result = "";

let buttonsArr = Array.from(buttons);


buttonsArr.forEach(buttons => {
    buttons.addEventListener('Click', (e) =>{
        if (e.target.innerHTML == "="){
            result = eval(result)
            inputValue.value = result
        }else {
            result += e.target.innerHTML
            inputValue.value = result
        }
    })
})