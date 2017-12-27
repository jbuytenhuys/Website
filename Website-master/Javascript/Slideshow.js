﻿var slideIndex = 1;
showSlides(slideIndex);

document.getElementById('PreviousSlide').addEventListener('click', PreviousSlide);
document.getElementById('NextSlide').addEventListener('click', NextSlide);

function NextSlide() {
    showSlides(slideIndex += 1);
}

function PreviousSlide() {
    showSlides(slideIndex += -1);
}

document.getElementById('FirstDot').addEventListener('click', FirstSlide);
document.getElementById('SecondDot').addEventListener('click', SecondSlide);
document.getElementById('ThirdDot').addEventListener('click', ThirdSlide);


function FirstSlide() {
    showSlides(slideIndex = 1);
}

function SecondSlide() {
    showSlides(slideIndex = 2);
}

function ThirdSlide() {
    showSlides(slideIndex = 3);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}