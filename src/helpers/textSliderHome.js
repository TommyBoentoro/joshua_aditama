function hoverTextFunction () {
    const body = document.querySelector(".slick-active"); // Ini slick active
    const text = document.querySelector(".textdots") // ini css pertama yg opacity nya 0,5

    body.addEventListener("click", () => {
        text.classList.replace(".textdots", ".textdots2") //Saya mau replace jadi textdots2
    })
}

export default hoverTextFunction
