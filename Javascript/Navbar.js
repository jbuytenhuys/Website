//Event listener for when the responsive navbar icon is clicked.
//this will call the function 'ExpandNavBar'
document.getElementById('NavExpand').addEventListener('click', ExpandNavBar)

//Function to make the navbar responsive
//assigns the responsive class in the css to the navbar class if the fucntion is called
function ExpandNavBar() {
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

//when the user starts scrolling, the function 'DisplayToTopButton' will be called
window.onscroll = function () { DisplayToTopButton() };

// When the user scrolls down 300px from the top of the document, show the back to top button
function DisplayToTopButton() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("TopBtn").style.display = "block";
    } else {
        document.getElementById("TopBtn").style.display = "none";
    }
}
//event listener for the back to top button which calls the 'ScrollToTop'
document.getElementById('TopBtn').addEventListener('click', ScrollToTop)
//function for scrolling back to the top of the page
function ScrollToTop() {
    window.scrollTo(0, 0);
}