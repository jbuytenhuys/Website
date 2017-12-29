# DeMontfort Vets Website

## Initial Designs and prototype
### First Draft
This is the first design of how the page will be layed out and showing that it is intended to be a single page app. More designs will follow as this is only a draft.
Things like the navbar still need to be added.
![First Design](Images/InitialDesign.JPG)

###Finalised design

## Issues
- **OnClicks** - As the slideshow i have used was adapted from a w3schools tutorial, it still contained some onclicks within the html. 
In order to change these to event listeners i had to create some new functions as it would not allow me to pass a parameter through the event listener. 
An example of this is given below.
#### Before
```javascript
function plusSlides(n) {
	showSlides(slideIndex += n);
}
```
#### After
```javascript
function NextSlide() {
    showSlides(slideIndex += 1);
}

function PreviousSlide() {
    showSlides(slideIndex += -1);
}
```


## Changes made after user testing feedback