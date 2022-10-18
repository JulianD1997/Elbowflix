const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.nav__menu')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.nav_link').forEach(n =>
    n.addEventListener('click', () => {
        burger.classList.remove('active')
        navMenu.classList.remove('active')
    })
)