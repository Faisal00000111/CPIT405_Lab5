// Add a variable to keep track of the zoom level
let zoomLevel = 100;  // in percentage

// Function to handle zooming in
function zoomIn() {
    zoomLevel += 10;
    updateZoom();
}

// Function to handle zooming out
function zoomOut() {
    zoomLevel -= 10;
    if (zoomLevel < 0) zoomLevel = 0;
    updateZoom();
}

// Function to update the zoom level for all images
function updateZoom() {
    const allImages = document.querySelectorAll('#photo-gallery img');
    allImages.forEach(img => {
        img.style.width = `${zoomLevel}%`;
        img.style.height = 'auto';
    });
}

function createImgElement(photoURL) {
    const imgElem = document.createElement('img');
    imgElem.src = photoURL;
    return imgElem;
}

// this will add the img element to photo gallery (div element)
function addPhotoToGallery(imgElem) {
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);
}

function addDeleteButton(imgElem) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function () {
        imgElem.remove();
        deleteButton.remove();
    });
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(deleteButton);
}

function addPhoto() {
    const photoURL = prompt("Enter photo URL:");
    const imgElem = createImgElement(photoURL);
    console.log(photoURL);
    addPhotoToGallery(imgElem);
    addDeleteButton(imgElem);
}

const addPhotoButton = document.getElementById('addPhotoBtn');
const zoomInButton = document.getElementById('zoomInBtn');
const zoomOutButton = document.getElementById('zoomOutBtn');

addPhotoButton.addEventListener('click', addPhoto);
zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);
