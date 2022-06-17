<<<<<<< HEAD
//Меню бургер
const burgerMenu = document.querySelector('.menu__burger');
const contentMenu = document.querySelector('.menu__content');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        contentMenu.classList.toggle('_active');
    });
}




//Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        if (burgerMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            contentMenu.classList.remove('_active');
        }
    })
}



/* ПОПИТ-КА сделать анимацию при нажатии на навигационные кнопочки (хз как дальше, может поможет тебе :*)

const underline = document.querySelector('.menu__hrefitem')
if (underline) {
    underline.addEventListener("click", function (e) {
        underline.classList.toggle('_animation');
    });
}

*/
=======
//Меню бургер
const burgerMenu = document.querySelector('.menu__burger');
const contentMenu = document.querySelector('.menu__content');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        contentMenu.classList.toggle('_active');
    });
}




//Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        if (burgerMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            contentMenu.classList.remove('_active');
        }
    })
}



/* ПОПИТ-КА сделать анимацию при нажатии на навигационные кнопочки (хз как дальше, может поможет тебе :*)

const underline = document.querySelector('.menu__hrefitem')
if (underline) {
    underline.addEventListener("click", function (e) {
        underline.classList.toggle('_animation');
    });
}

*/
>>>>>>> 729263d (test)
