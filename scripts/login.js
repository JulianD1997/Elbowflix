const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#button-login')
button.addEventListener('click',(e) =>{
    e.preventDefault()
})
username.addEventListener('blur',(event) =>{
    if(username.value.length > 0){
        document.getElementById('username-label').classList.add('oculto')
    }else{
        document.getElementById('username-label').classList.remove('oculto')
    }
})
password.addEventListener('blur',(event) =>{
    if(username.value.length > 0){
        document.getElementById('password-label').classList.add('oculto')
    }else{
        document.getElementById('password-label').classList.remove('oculto')
    }
})