var camposCompletos = false
function validarInputs(input){
    switch(input.target.name){
        case 'nombre':
            if(expresionesRegulares.nombre.test(input.target.value)){
                document.getElementsByClassName('form__container')[0].classList.add('correcto')
                document.getElementsByClassName('form__container')[0].classList.remove('incorrecto')
                camposCompletos = true
            }else{
                document.getElementsByClassName('form__container')[0].classList.remove('correcto')
                document.getElementsByClassName('form__container')[0].classList.add('incorrecto')
                camposCompletos = false
            }
        break;
        case 'usuario':
            if(expresionesRegulares.usuario.test(input.target.value)){
                document.getElementsByClassName('form__container')[1].classList.add('correcto')
                document.getElementsByClassName('form__container')[1].classList.remove('incorrecto')
                camposCompletos = true
            }else{
                document.getElementsByClassName('form__container')[1].classList.remove('correcto')
                document.getElementsByClassName('form__container')[1].classList.add('incorrecto')
                camposCompletos = false
            }
        break;
        case 'email':
            if(expresionesRegulares.email.test(input.target.value)){
                document.getElementsByClassName('form__container')[2].classList.add('correcto')
                document.getElementsByClassName('form__container')[2].classList.remove('incorrecto')
                camposCompletos = true
            }else{
                document.getElementsByClassName('form__container')[2].classList.remove('correcto')
                document.getElementsByClassName('form__container')[2].classList.add('incorrecto')
                camposCompletos = false
            }
        break;
        case 'contraseña':
            if(expresionesRegulares.contraseña.test(input.target.value)){
                document.getElementsByClassName('form__container')[3].classList.add('correcto')
                document.getElementsByClassName('form__container')[3].classList.remove('incorrecto')
                camposCompletos = true
            }else{
                document.getElementsByClassName('form__container')[3].classList.remove('correcto')
                document.getElementsByClassName('form__container')[3].classList.add('incorrecto')
                camposCompletos = false
            }
        break;
        case 'checkbox':
        break;
    }
}
const expresionesRegulares ={
    nombre:/^[a-zA-ZÄ-ÿ\s]{1,40}$/,
    usuario:/^[a-zA-ZÄ-ÿ\W\d\_]{1,16}$/,
    email:/^[\w\d.-]*@?[\w\d]*\.[\w\d]+$/,
    contraseña:/^.{5,16}\S$/
}
const formularios = document.getElementsByClassName('main__form')
const inputs = document.querySelectorAll('.main__form input')
inputs.forEach(input=>{
    input.addEventListener('keyup', validarInputs)
    input.addEventListener('blur', validarInputs)
})

formularios[0].addEventListener('submit',(event)=>{
    event.preventDefault()
    if(camposCompletos){
        formularios[0].reset()
        document.getElementsByClassName('form__container')[0].classList.remove('correcto')
        document.getElementsByClassName('form__container')[1].classList.remove('correcto')
        document.getElementsByClassName('form__container')[2].classList.remove('correcto')
        document.getElementsByClassName('form__container')[3].classList.remove('correcto')
    }
})