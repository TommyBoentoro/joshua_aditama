function navbarToggle() {
    const menuToggle = document.querySelector(".menu-toggle input");
    const nav = document.querySelectorAll("nav ul")

    menuToggle.addEventListener("click", function(){
        nav.classList.toggle()
    })
}

export default navbarToggle