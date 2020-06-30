import '../sass/style.scss';


document.addEventListener('DOMContentLoaded', () => {

 const imagesContainerEl = document.querySelector('.slider__images-container');
 const img1El = document.querySelector('.slider__image-container--first img');
 const img2El = document.querySelector('.slider__image-container--second img');

 let dragging = false;
 let imagesContainerLeftOffset;
 const img1Container = document.querySelector('.slider__image-container--first');
 const img2Container = document.querySelector('.slider__image-container--second');
 const handleEl = document.querySelector('.slider__handle');
 const dividerEl = document.querySelector('.slider__divider');
 let imagesContainerWidth;

 function getOffset(clientX) {
     const offset = clientX - imagesContainerLeftOffset;
     if (offset < 0) {
         return 0;
     } else if (offset > imagesContainerWidth){
        return imagesContainerWidth;
     } else {
         return offset;
     }
 }

 function move(clientX) {
     const offset = getOffset(clientX);
     const percentage = offset / imagesContainerWidth * 100;
     dividerEl.style.left = percentage + '%';
     img2Container.style.width = percentage + '%';
 }

 function initEvents() {
    handleEl.addEventListener('mousedown', () => {
        dragging = true;
    });

    handleEl.addEventListener('mouseup', () => {
        dragging = false;
    });

    handleEl.addEventListener('touchstart', () => {
        dragging = true;
    });

    handleEl.addEventListener('touchend', () => {
        dragging = false;
    });

    window.addEventListener('mousemove', event => {
        if (dragging) {
            move(event.clientX);
        }
    });

    window.addEventListener('touchmove', event => {
        if (dragging) {
            move(event.touches[0].clientX);
        }
    });

}


 function adjustImageSize() {
    imagesContainerWidth = imagesContainerEl.offsetWidth;
    imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
    img1El.style.width = imagesContainerWidth + 'px';
    img2El.style.width = imagesContainerWidth + 'px';
    }

window.addEventListener('resize', adjustImageSize);

adjustImageSize();
initEvents();

})
