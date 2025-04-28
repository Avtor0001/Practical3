// Слайдер
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider')
    const slides = document.querySelectorAll('.slide')
    const prevBtn = document.querySelector('.prev__btn')
    const nextBtn = document.querySelector('.next__btn')
    const dots = document.querySelectorAll('.dot')

    let currentSlide = 0
    const slideCount = slides.length

    function initSlider() {
        updateSlider()
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`
        
        dots.forEach(dot => dot.classList.remove('active'))
        dots[currentSlide].classList.add('active')
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount
        updateSlider()
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount
        updateSlider()
    }

    function goToSlide(index){
        currentSlide = index
        updateSlider()
    }

    nextBtn.addEventListener('click', nextSlide)
    prevBtn.addEventListener('click', prevSlide)

    dots.forEach(dot => {
        dot.addEventListener('click', function(){
            const slideIndex = parseInt(this.getAttribute('data-slide'))
            goToSlide(slideIndex)
        })
    })

    initSlider()
})


// Модальное окно
window.addEventListener("load", () => {
    const modal = document.getElementById("cookieModal");
    modal.style.display = "block";
});

document.querySelector(".btn-accept").onclick = () => {
    document.getElementById("cookieModal").style.display = "none";
};

document.querySelector(".btn-necessary").onclick = () => {
    document.getElementById("cookieModal").style.display = "none";
};




// Аккордеон
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});





// Бургер меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile_menu_link');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		mobileLinks.forEach(l => l.classList.remove('active'));
		link.classList.add('active');
	});
});




// Табы(вкладки)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		tabButtons.forEach(btn => btn.classList.remove('active'));
		tabContents.forEach(content => content.classList.remove('active'));

		button.classList.add('active');
		document.getElementById(button.getAttribute('data-tab')).classList.add('active');
	});
});




