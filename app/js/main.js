/* MOBILE MENU */

const menuBtn = document.querySelector('.burger-menu-btn');
const headerSection = document.querySelector('.header');
const allLinks = document.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  headerSection.classList.toggle('menu--open');
});

allLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (link.classList.contains('menu__link')) {
      headerSection.classList.toggle('menu--open');
    }
  });
});

/* SLIDER */

const slider = document.querySelector('.slider');
const buttonPrev = slider.querySelector('.slider__arrows-prev');
const buttonNext = slider.querySelector('.slider__arrows-next');
const buttonBack = slider.querySelector('.slider__arrows-back');
const buttonsOpen = slider.querySelectorAll('.slider__open');
const sliderItemBox = slider.querySelector('.slider__items');

let unAcceptClick;

function showSlider(type) {
  buttonNext.style.pointerEvents = 'none';
  buttonPrev.style.pointerEvents = 'none';

  slider.classList.remove('next', 'prev');
  const sliderItems = slider.querySelectorAll('.slider__item');
  if (type === 'next') {
    sliderItemBox.appendChild(sliderItems[0]);
    slider.classList.add('next');
  } else {
    const lastItem = sliderItems.length - 1;
    sliderItemBox.prepend(sliderItems[lastItem]);
    slider.classList.add('prev');
  }
  clearTimeout(unAcceptClick);
  unAcceptClick = setTimeout(() => {
    buttonNext.style.pointerEvents = 'auto';
    buttonPrev.style.pointerEvents = 'auto';
  }, 1500);
}

buttonNext.addEventListener('click', () => {
  showSlider('next');
});
buttonPrev.addEventListener('click', () => {
  showSlider('prev');
});

buttonsOpen.forEach(button => {
  button.addEventListener('click', () => {
    slider.classList.add('show-detail');
  });
});

buttonBack.addEventListener('click', () => {
  slider.classList.remove('show-detail');
});


/* feedback slider */

// const feedbackSlider = new Swiper('.feedback__slider', {
 
//   loop: true,

//   // pagination
//   pagination: {
//     el: '.swiper-pagination',
//   }
// });

/* certificate slider */

// const certificateSlider = new Swiper('.certificate__slider', {
 
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,
//   breakpoints: {
//     441: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     591: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     }
//   },
//   // pagination
//   pagination: {
//     el: '.swiper-pagination',
//   }
// });

/* accordeon */

// const accordeon = document.querySelector('.accordeon');
// const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

// accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
//   accordeonTitle.addEventListener('click', function(){
//     const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

//     accordeonTitle.classList.toggle('accordeon__title--active')
//     currentText.classList.toggle('accordeon__text--expand');

//     if (currentText.classList.contains('accordeon__text--expand')) {
//       currentText.style.maxHeight = currentText.scrollHeight + 'px';
//     } else {
//       currentText.style.maxHeight = 0;
//     }
//   });
// });

/* smooth scroling */

// const allLinks = document.querySelectorAll('a:link');

// allLinks.forEach(function(link) {
// 	link.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		const href = link.getAttribute('href');
// 		// Scroll to top
// 		if (href === '#') {
// 			window.scrollTo({
// 				top: 0,
// 				behavior: 'smooth'
// 			});
// 		}
// 		// Scroll to other links
// 		if (href !== '#' && href.startsWith('#')) {
// 			const sectionEl = document.querySelector(href);
// 			sectionEl.scrollIntoView({
// 				behavior: 'smooth'
// 			});
// 		}

// 		// Close mobile menu after click on menu link
// 		if (link.classList.contains('menu-link')) {
// 			headerSection.classList.toggle('menu--open');
// 		}
// 	});
// });
