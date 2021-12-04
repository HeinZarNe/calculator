let key = document.querySelector(".key")
let display = document.querySelector(".display")

// let showInDisplay = x => display.innerHTML += "x"
// let calc = _ => display.innerText = eval(display.innerText)
let showInDisplay = (x) => display.innerText += x;
let calc = _ => display.innerText = eval(display.innerText);
let backspace = _ => display.innerText = display.innerText.substring(0, display.innerText.length - 1)
let allClear = _ => display.innerText = ""