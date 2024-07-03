// const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
// var MinMenu = document.getElementById('Loc-Dishes');
var BrfSubMenu = document.getElementById('MenuLink1');
var BrfSubMenu2 = document.getElementById('MenuLink2');
var BrfSubMenu3 = document.getElementById('MenuLink3');
var SecList = document.getElementById('Menulist');
var Testimonial = document.getElementById('testimonial');
var LocDishes = document.getElementById('Loc-Dishes');
var IntDishes = document.getElementById('Int-Dishes');
var SnackSec = document.getElementById('Snacks');
var DrinksSec = document.getElementById('Drinks');
var DrinksSubMenu = document.getElementById('Drinks-SubMenu');
var LocFodSubMenu = document.getElementById('loc-SubMenu')



BrfSubMenu.addEventListener('click', function(){
    SecList.style.display = 'None';
    Testimonial.style.display = 'None';
    LocDishes.style.display = 'Block';
    IntDishes.style.display = 'None';
    SnackSec.style.display = 'None';
    DrinksSec.style.display = 'None';
})

BrfSubMenu2.addEventListener('click', function(){
    SecList.style.display = 'None';
    Testimonial.style.display = 'None';
    LocDishes.style.display = 'None';
    IntDishes.style.display = 'Block';
    SnackSec.style.display = 'None';
    DrinksSec.style.display = 'None';
})

BrfSubMenu3.addEventListener('click', function(){
    SecList.style.display = 'None';
    Testimonial.style.display = 'None';
    LocDishes.style.display = 'None';
    IntDishes.style.display = 'None';
    SnackSec.style.display = 'Block';
    DrinksSec.style.display = 'None';
})

DrinksSubMenu.addEventListener('click', function(){
    SecList.style.display = 'None';
    Testimonial.style.display = 'None';
    LocDishes.style.display = 'None';
    IntDishes.style.display = 'None';
    SnackSec.style.display = 'None';
    DrinksSec.style.display = 'Block';
    o
})

// function FodSubMenu (){
//     LocDishes.style.display = 'Block';
//     IntDishes.style.display = 'None';
//     SnackSec.style.display = 'None';
//     DrinksSec.style.display = 'None';
    


// }
// FodSubMenu()
// LocFodSubMenu.addEventListener('click', FodSubMenu)




// function showNextTestimonial() {
//     testimonials[currentTestimonial].classList.remove('active');
//     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//     testimonials[currentTestimonial].classList.add('active');
// }

// setInterval(showNextTestimonial, 3000);

// function SubMenuDisplay (){
//     SubMenu.style.display = 'block';
//     Sectionlist.style.display = 'none'
// }
// SubMenuDisplay()
// MenuLink1.addEventListener('click', SubMenuDisplay)

// document.querySelectorAll('.MenuLink').forEach(link => {
//     link.addEventListener('click', function() {
//         const submenu = this.nextElementSibling;
//         submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//     });
// });
