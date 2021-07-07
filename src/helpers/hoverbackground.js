function hoverFunction() {
    const body = document.querySelector(".backgroundhover");
    const li = document.querySelectorAll("li")

    li.forEach(el =>{
        el.addEventListener("mouseover", ()=>{
            let bg = el.getAttribute("data-bg");
            body.style.background = `url(${bg})no-repeat center /cover`
        })
    })
}

export default hoverFunction