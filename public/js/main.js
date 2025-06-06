document.getElementById("compose").addEventListener("click", () => {
    document.getElementById("compose-screen").classList.toggle("show-compose");
})

document.getElementById("close-compose").addEventListener("click", () => {
    document.getElementById("compose-screen").classList.remove("show-compose");
})

document.getElementById("light_dark_mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})