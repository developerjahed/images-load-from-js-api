function loadImages(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayImages(data));
}


function displayImages(images){
    const imageContainer=document.getElementById('image-container');
    for(const image of images){
       const img=document.createElement('img');
       img.src=image.url;
       imageContainer.appendChild(img);
       img.classList.add('image-box');
    }

}
loadImages()