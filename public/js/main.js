document.getElementById("compose").addEventListener("click", () => {
    document.getElementById("compose-screen").classList.toggle("show-compose");
})

document.getElementById("close-compose").addEventListener("click", () => {
    document.getElementById("compose-screen").classList.remove("show-compose");
})
    
document.getElementById("light_dark_mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
})

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("light_dark_mode").checked = true;
    }
}

// Run initialization
initializeTheme();