document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photos img");
    photos.forEach(photo => {
        photo.addEventListener("mouseover", () => {
            photo.style.transform = "scale(1.1)";
        });
        photo.addEventListener("mouseout", () => {
            photo.style.transform = "scale(1)";
        });
    });
});
