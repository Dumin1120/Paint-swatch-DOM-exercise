document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("color-form")
    const inColor = document.getElementById("color-sample-input")
    const inName = document.getElementById("color-name-input")
    const outColor = document.getElementById("color-sample")
    const outName = document.getElementById("color-name")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        const newInpColor = document.createElement("input")
        const newInpName = document.createElement("input")
        const nextLine = document.createElement("br")
        const nextLine2 = document.createElement("br")
        const nextLine3 = document.createElement("br")
        const btnDelete = document.createElement("button")
        //const arrStr = ["select color:", "color name:"] //can't figure out how to add
        newInpColor.type = "color"
        newInpName.type = "text"
        newInpName.placeholder = "color name"
        div.style.border = "white solid 2px"
        div.className = "color-swatch"
        div2.className = "color-sample"
        div3.textContent = "black"
        btnDelete.textContent = "Delete this swatch"
        btnDelete.className = "delete-button"
        btnDelete.addEventListener("click", () => btnDelete.parentNode.remove())
        newInpColor.addEventListener("change", () => div2.style.backgroundColor = newInpColor.value)
        newInpName.addEventListener("change", () => div3.textContent = newInpName.value)
        div.append(newInpColor, nextLine, newInpName, nextLine2, nextLine3, div2, div3, btnDelete) //can't pass same argument, wil be replaced
        document.body.appendChild(div)
    })
    inColor.addEventListener("change", () => outColor.style.backgroundColor = inColor.value)
    inName.addEventListener("change", (e) => {
        e.preventDefault() //doesn't work as I want
        outName.textContent = inName.value
    })
})