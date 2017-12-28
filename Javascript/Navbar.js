document.getElementById('NavExpand').addEventListener('click', myFunction)

//Function to make the navbar responsive
function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}

//javascript for reducing the distance the page scrolls when jumping to an anchored heading
        var shiftWindow = function () { scrollBy(0, -62) };
        window.addEventListener("hashchange", shiftWindow);
        function load() { if (window.location.hash) shiftWindow(); }

// When the user scrolls down 300px from the top of the document, show the back to top button
window.onscroll = function () { DisplayToTopButton() };

function DisplayToTopButton() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("TopBtn").style.display = "block";
    } else {
        document.getElementById("TopBtn").style.display = "none";
    }
}

document.getElementById('TopBtn').addEventListener('click', ScrollToTop)

function ScrollToTop() {
    window.scrollTo(0, 0);
}