function testClick () {
    const body = document.querySelector(".buttonClick")
    const textClicked = document.querySelector(".textClick")

    body.addEventListener(`click`, () => {
        return document.querySelector(".textClick").className = "textClicked2"
    })
}

export default testClick