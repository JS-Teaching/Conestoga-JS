console.log("Connected")


const $ = (evt) => document.querySelector(evt)
const id = (name) => document.getElementById(name)
let store = []

const fname = document.getElementById('fname')
const lname = id('lname')
const email = id('email')

const password = id('password')
const passwordConfirm = id('passwordConfirm')


function computeInfo(){
    if(fname.value == "" || lname.value == "" || email.value == "" || password.value == "" || passwordConfirm.value == ""){
        alert("Please fill in all fields")
    }
    else if(password.value!= passwordConfirm.value){
        alert("Passwords do not match")
    }
    else{
        alert("Your information has been saved")
    }

    store.push({
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value
    })
   

    console.log(store)

    fname.value= "";
    lname.value= "";
    email.value= "";
    password.value= "";
    passwordConfirm.value= "";

    fname.focus();
    
}

const btn = document.getElementById('btn')

btn.addEventListener('click', computeInfo)
