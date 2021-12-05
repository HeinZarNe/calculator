let key = document.querySelector(".key")
let display = document.querySelector(".display")



let filter = x => {

    let current = display.innerText
    let lastChar = current[current.length - 1]
    let operators = ["+", "-", "*", "/", "%"]

    if (current == "0" && x != ".") {

        backspace()
    }

    if (operators.includes(x) && operators.includes(lastChar)) {

        return false
    }

    if (current.length > 31) {

        alert("Your exceeding maximum number!")
        return false

    }

    return true

}

let showInDisplay = (x) => {

    if (filter(x)) {

        display.innerText += x;

        if (display.innerText.length > 8) {

            display.style.fontSize = "62rem"
        }

        if (display.innerText.length > 17) {

            display.style.fontSize = "42rem"

        }

        if (display.innerText.length > 27) {

            display.style.fontSize = "37rem"

        }

    }

}


let calc = _ => {

    let current = display.innerText
    let lastChar = current[current.length - 1]
    let operators = ["+", "-", "*", "/", "%"]

    if (operators.includes(lastChar)) {

        alert("Please check again!")

    } else {

        display.innerText = eval(display.innerText)

    }

    if (display.innerText.length > 8) {

        display.style.fontSize = "62rem"
    }

    if (display.innerText.length > 17) {

        display.style.fontSize = "42rem"

    }

    if (display.innerText.length > 27) {

        display.style.fontSize = "37rem"

    }

}

let backspace = _ => {

    display.innerText = display.innerText.substring(0, display.innerText.length - 1)

    if (display.innerText.length < 8) {

        display.style.fontSize = "76rem"

    }

    if (display.innerText.length > 8) {

        display.style.fontSize = "62rem"
    }

    if (display.innerText.length > 17) {

        display.style.fontSize = "42rem"

    }

    if (display.innerText.length > 27) {

        display.style.fontSize = "37rem"

    }
}

let allClear = _ => {

    display.innerText = ""
    display.style.fontSize = "76rem"

}

document.querySelector("button").onclick = function() {

    alert("Sorry for disappointing you. This is just a button and I added it for no reason. I hope you like my calculator.")

}