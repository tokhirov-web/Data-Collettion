const startBtn = document.querySelector(".start")
const container = document.querySelector(".container")
const animation = document.querySelector(".theBall")

const all = document.querySelector("#overal")
const need = document.querySelector("#require")
const success = document.querySelector("#completed")
const error = document.querySelector("#notCompleted")
const theForm = document.forms.questionary
const allInputs = document.querySelectorAll("input")
const needToFill = document.querySelectorAll(".neccessary")

let bottomWarning = document.querySelectorAll(".fill")
let topWarning = document.querySelectorAll(".essential")
let completed = document.querySelector("#completed")
let notCompleted = document.querySelector("#notCompleted")

let successIndex = 0
let errorIndex = 0




completed.innerHTML = successIndex
notCompleted.innerHTML = errorIndex






startBtn.onclick = () => {

    setTimeout(() => {
        startBtn.style.display = "none"
        animation.style.display = "block"
    }, 100);

    setTimeout(() => {
        animation.style.display = "none"
        container.style.display = "block"
    }, 4500);

    // container.style.display = "block"

    theForm.onsubmit = (event) => {
        event.preventDefault();
        let errors = ''

        needToFill.forEach(inp => {
            inp.style.border = "2px solid #543FD3"

            if (inp.value.length === 0) {
                inp.style.border = "2px solid red"
                errors += ` ${inp.name}`
            }
        })
 
        if (!errors) {
            submit()
            alert("Thank you for the submittion")
        } else {
            alert("Please, fill all the fields!")
        }
    }

    allInputs.forEach(inp => {
        inp.onkeyup = () => {
            // console.log(inp.value);
            // console.log(patterns[inp.name]);
            validation(patterns[inp.name], inp)
        }
    })

    const patterns = {
        name: /^[a-z ,.'-]+$/i,
        email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        number: /^\d+$/,
        age: /^\d+$/,
        javaScript: /^[a-z ,.'-]+$/i,
        css: /^[a-z ,.'-]+$/i,
        html: /^[a-z ,.'-]+$/i,
        information: /^[a-z ,.'-]+$/i,
        car: /^[a-z ,.'-]+$/i,
        surname:/^[a-z ,.'-]+$/i,
    }

    function validation(regex, field) {
        if (regex.test(field.value)) {
            field.parentNode.classList.remove("inputAreaError")
        } else {
            field.parentNode.classList.add("inputAreaError") 
            field.parentNode.querySelector("span").innerHTML = field.name + " is required"
        }
    }

    function submit() {
        let user = {}
        let collector = new FormData(theForm)
        collector.forEach((value, key) => {
            user[key] = value
        })

        theForm.reset()
        console.log(user);
    }

    all.innerHTML = allInputs.length
    need.innerHTML = needToFill.length

    console.log(notCompleted.innerHTML);
}