const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

function checkScreenSize() {
    if (window.innerWidth >= 1024) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

window.addEventListener('resize', checkScreenSize);
checkScreenSize();