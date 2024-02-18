let submenuVisible = false; // Variable to track submenu visibility

function showPage(pageId) {
    var pages = document.querySelectorAll('.content');
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            // Pause videos before hiding the home page content
            if (page.id === 'home') {
                pauseVideos(page);
            }
            page.style.display = 'none';
        }
    });
    toggleMenu();
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-show');
    if (submenuVisible) {
        toggleSubmenu(); // Close the submenu when closing the menu
    }
}

function toggleSubmenu() {
    var submenu = document.getElementById('submenu');
    if (!submenuVisible) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
    submenuVisible = !submenuVisible; // Toggle submenu visibility

}

//idk if this works bruh

function pauseVideos() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        // Check if the iframe contains a YouTube video
        if (iframe.src.includes('youtube.com')) {
            // Pause the YouTube video
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });
}