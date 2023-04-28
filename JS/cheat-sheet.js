// let form = document.forms.signUp
// let inputs = form.querySelectorAll('input')


// form.onsubmit = (event) => {
//     event.preventDefault();
//     let errors = ''

//     inputs.forEach((inp) => {
//         inp.style.border = "2px solid blue"

//         if (inp.value.length === 0) {
//             inp.style.border = '2px solid red'
//             errors += ` ${inp.name}`
//             console.log(errors);
//         }
//     })

//     if (!errors) {
//         submit()
//     } else {
//         alert(`You have missed` + errors)
//     }
// }


// function submit() {
//     let user = {}
//     let collector = new FormData(form)
//     collector.forEach((value, key) => {
//         user[key] = value
//         console.log(key);
//         console.log(value);
//     })

//     form.reset()
//     console.log(user);

{/* <form name="signUp">
            <input name="name" type="text">
            <input name="password" type="password">
            <button>Submit</button>
        </form> */}
// }