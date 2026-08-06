const thumbnails = document.querySelectorAll(".lightbox-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("lightbox-close");

thumbnails.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("open");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    });

});

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

});

lightbox.addEventListener("click", event => {

    if(event.target === lightbox){

        lightbox.classList.remove("open");

    }

});

document.addEventListener("keydown", event => {

    if(event.key === "Escape"){

        lightbox.classList.remove("open");

    }

});