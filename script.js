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
addPhotoButton.addEventListener('click', addPhoto);
