var menuBtn = document.querySelector('.hamburger-btn');
var navbarLinksWrapper = document.querySelector('.navbar-links');
var navbarLinks = document.querySelectorAll('.navbar-links li a');

menuBtn.addEventListener('click', toggleMenu);
// function for toggling menu button and menu
function toggleMenu(){
	menuBtn.classList.toggle('active');
	navbarLinksWrapper.classList.toggle('active');
}

for(var i = 0; i < navbarLinks.length; i++){
	navbarLinks[i].addEventListener('click', toggleMenu);
}

// Partners Section 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'</i>",
             "<i class='fa-solid fa-arrow-right'</i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Testimonials Section c 
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'</i>",
             "<i class='fa-solid fa-arrow-right'</i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
})

// Code To Show/Hide Menu Bar When Scrolling
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 140){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
