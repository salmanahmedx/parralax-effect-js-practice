document.addEventListener("mousemove", function (e) {
    let displayHeight = window.innerHeight;
    let displayWidth = window.innerWidth;
    const images = document.querySelectorAll(".img")
    let dynamicTransX;
    let dynamicTransY;
    images.forEach(function (img) {
        let dataValue = img.getAttribute("data-value");
        dynamicTransX = (displayWidth - e.pageX * dataValue) / 400;
        dynamicTransY = (displayHeight - e.pageY * dataValue) / 400;
        img.style.transform = `translate(${dynamicTransX}px, ${dynamicTransY}px)`
    })

})