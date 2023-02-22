const navtoggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navBoxes= document.querySelectorAll('.box');


navtoggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

window.addEventListener('scroll',checkBoxes);

function checkBoxes(){
    const triggerbottom = window.innerHeight / 5* 4;

    navBoxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerbottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}