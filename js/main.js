$(function(){
	if (window.matchMedia('(min-width: 1560px)').matches){
		$('.slider__inner').slick({
			autoplay: true,
			arrows: false,
			autoplaySpeed: 3000
		});
	} else{
		$('.slider__inner').slick({
			nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
			prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
			infinite: false
		});
	};
	
	$('.activity__slider-inner').slick({
		nextArrow:'<button type="button" class="activity__slick-btn activity__slick-next"></button>',
		prevArrow:'<button type="button" class="activity__slick-btn activity__slick-prev"></button>',
		infinite: false
	});

	if (window.matchMedia('(min-width: 701px)').matches){
		$('.reviews__slider-inner').slick({
			nextArrow:'<button type="button" class="reviews__slick-btn reviews__slick-next"></button>',
			prevArrow:'<button type="button" class="reviews__slick-btn reviews__slick-prev"></button>',
			infinite: false,
			dots: true
		});
	} else {
		$('.reviews__slider-inner').slick({
			nextArrow:'<button type="button" class="reviews__slick-btn reviews__slick-next"></button>',
			prevArrow:'<button type="button" class="reviews__slick-btn reviews__slick-prev"></button>',
			infinite: false,
			dots: false,
		});
	}
	
	$('.header__btn-menu').on('click', function(){
		$('.menu__lists').slideToggle();
	});
});

let headerLinguagesArrow = document.querySelector('.header__linguages-arrow');
let headerLinguagesName = document.querySelector('.header__linguages-name');
let headerLinguagesBlock = document.querySelector('.header__linguages-block');
let formName = document.querySelector('#form-name');
let logInForm = document.querySelector('#logInForm');
let formBtn = document.querySelector('.form__btn');
let formPhone = document.querySelector('#form-phone');

function addLinguages() {
	headerLinguagesArrow.classList.toggle('arrow-rotate');
	headerLinguagesBlock.classList.toggle('header__linguages-active');
};

function chooseLinguages(event){
	let target = event.target;
	headerLinguagesName.innerHTML = '';
	headerLinguagesName.innerHTML = target.innerHTML;
	addLinguages();
};

function formIn(event){
	event.preventDefault();
	
  if(!formName.value){ 
		formName.style.borderColor = '#ff0000';
	}
	else if (!formPhone.value){ 
		formPhone.style.borderColor = '#ff0000';
	} else{
		formName.style.borderColor = '';
		formPhone.style.borderColor = '';
	}
	formName.value = '';
	formPhone.value = ''; 
};

formPhone.addEventListener('focus', _ => {
	if(!/^\+\d*$/.test(formPhone.value)){
		formPhone.value = '+';
	} else{
		formPhone.style.borderColor = '#ff0000';
	}
  });
  
  formPhone.addEventListener('keypress', e => {
	if(!/\d/.test(e.key))
	  e.preventDefault();
  });

headerLinguagesArrow.addEventListener('click', addLinguages);
headerLinguagesBlock.addEventListener('click', chooseLinguages);
formBtn.addEventListener('click', formIn);