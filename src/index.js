import Example from "./scripts/example"

document.addEventListener("DOMContentLoaded", () => {
    const favicon = document.getElementById("favicon")
    console.log("Hello world!")
    new Example(favicon)
})