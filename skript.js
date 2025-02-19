function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function checkScreenSize() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth >= 1024) {
        sidebar.classList.add("open");
    } else {
        sidebar.classList.remove("open");
    }
}

window.addEventListener("resize", checkScreenSize);
document.addEventListener("DOMContentLoaded", checkScreenSize);