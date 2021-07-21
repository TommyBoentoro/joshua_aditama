function hoverTextFunction () {
    const body = document.querySelector(".slickDots-home"); // Ini slick active
    const text = document.querySelector(".textDots") // ini css pertama yg opacity nya 0,5

    body.addEventListener("click", () => {
        //Saya mau replace jadi textdots2
        return document.querySelector(".textDots").className = "textDots2"
        // text.classList.toggle("textDots2")
    })
}

export default hoverTextFunction
