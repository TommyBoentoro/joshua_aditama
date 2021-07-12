const navbarToggle = () => {
    const menuToggle = document.querySelector(".menu-toggle input");
    const nav = document.querySelector("nav ul")

    menuToggle.addEventListener(`click`, () => {
        nav.classList.toggle("nav ul")
    })
}

export default navbarToggle