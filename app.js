const frameimage = document.querySelector('#frame');
const images = ['Book-open.svg', 'car-side.svg', 'Eye.svg', 'facebook.svg','fire-cooking.jpg', 'women-work.jpg', 'tent-fire.jpg', 'mountin-hiking.jpg'];
let currentIageIndex = 0;

frameimage.addEventListener('click', ()=>{
    currentIageIndex++;

    if(currentIageIndex >= images.length){
        currentIageIndex = 0
    } 

    frameimage.src = 'images/' + images[currentIageIndex]
});