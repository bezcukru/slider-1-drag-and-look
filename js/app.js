import '../sass/style.scss';


document.addEventListener('DOMContentLoaded', () => {

 const imagesContainerEl = document.querySelector('.slider__images-container');
 const img1El = document.querySelector('.slider__image-container--first img');
 const img2El = document.querySelector('.slider__image-container--second img');

 function adjustImageSize() {
    const imagesContainerWidth = imagesContainerEl.offsetWidth;
    img1El.style.width = imagesContainerWidth + 'px';
    img2El.style.width = imagesContainerWidth + 'px';
    }

window.addEventListener('resize', adjustImageSize);

adjustImageSize();

})
