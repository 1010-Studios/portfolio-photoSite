//Navbar Handling
const _nav = document.querySelector('.nav');
const _toggleCollapse = document.querySelector('.toggle-collapse');

_toggleCollapse.addEventListener('click', () => {
	_nav.classList.toggle('collapse');
});

const _navBtns = document.querySelectorAll('.nav-link');

_navBtns.forEach((link) => {
	link.addEventListener('click', function () {
		_nav.classList.remove('collapse');
	});
});

//photo Carousel
let slideIndex = 1;
const slides = document.querySelectorAll('.photo-content');

moveSlide = (e) => {
	e.preventDefault();
	const n = parseInt(e.target.value);
	console.log(e.target.value);
	slideIndex += n;
	showSlide(slideIndex);
};

showSlide = (n) => {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('photo-focus');
	}

	slides[slideIndex - 1].classList.add('photo-focus');
	console.log(slides);
};

slideShow = () => {
	slideIndex++;
	showSlide(slideIndex);
};

const slideShowTimer = setInterval(slideShow, 4000);

const _carouselBtns = document.querySelectorAll('.btn-carousel');
_carouselBtns.forEach((item) => {
	item.addEventListener('click', moveSlide);
});
