//set slide index variable to 1
let slideIndex = 1;
//call showslides function and pass it the parameter of slideindex
showSlides(slideIndex);

//event listener for the previous slide button which calls the previous slide fucntion
document.getElementById('PreviousSlide').addEventListener('click', PreviousSlide);
//event listener for the next slide button which calls the next slide fucntion
document.getElementById('NextSlide').addEventListener('click', NextSlide);

//These two function were originally 1 function
//changed to 2 to be able to use event listners instaed of onclick
function NextSlide() {
    //again calls the showslide function but instead adds 1 to the slide index to move to the next slide
    showSlides(slideIndex += 1);
}

function PreviousSlide() {
    //again calls the showslide function but instead minuses 1 to the slide index to move to the previous slide
    showSlides(slideIndex += -1);
}

//event listeners for the navigation dots beneath the slideshow which will call the relevant functions
document.getElementById('FirstDot').addEventListener('click', FirstSlide);
document.getElementById('SecondDot').addEventListener('click', SecondSlide);
document.getElementById('ThirdDot').addEventListener('click', ThirdSlide);

//Like before, the 3 functions below used to be one function
//function to navigate to first side when the first dot is selected
function FirstSlide() {
    //Calls showSlides function and sets slide index to 1
    showSlides(slideIndex = 1);
}
//function to navigate to second side when the second dot is selected
function SecondSlide() {
    //Calls showSlides function and sets slide index to 2
    showSlides(slideIndex = 2);
}
//function to navigate to first side when the first dot is selected
function ThirdSlide() {
    //Calls showSlides function and sets slide index to 3
    showSlides(slideIndex = 3);
}
//function to show the slides
function showSlides(n) {
    //set a variable for i
    let i;
    //set variable for slides and give it the value of myslides class
    let slides = document.getElementsByClassName("mySlides");
    //set variable for dots and give it the value of dot class
    let dots = document.getElementsByClassName("dot");
    //if statement that allows the slideshow to loop back to the first slide at the end of the slideshow
    if (n > slides.length) { slideIndex = 1 }
    //if statement that allows the slideshow to loop back to the last slide if the previous button is clicked on the first slide
    if (n < 1) { slideIndex = slides.length }
    //for statement that doesnt display the slides that the user hasnt chosen
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}