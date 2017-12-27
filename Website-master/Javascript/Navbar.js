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



// When the user scrolls down 300px from the top of the document, show the back to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("TopBtn").style.display = "block";
    } else {
        document.getElementById("TopBtn").style.display = "none";
    }
}