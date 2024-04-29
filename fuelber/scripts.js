function fadeIn(element, opacity, targetOpacity, speed) {

  var intervalId = setInterval(function() {
    
    if (opacity < targetOpacity) {
      opacity += 0.01; // Increment opacity gradually
      element.style.opacity = opacity;
      
    } else {
      clearInterval(intervalId); // Stop the interval when target opacity is reached
    }
  }, speed); // Adjust the interval duration for desired speed
  
}
// SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  a = false;
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let text = document.getElementsByClassName("text");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    text[i].style.display  = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  text[slideIndex-1].style.opacity = 1;
  text[slideIndex-1].style.display = "flex";
  
    
    

}

// SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES // SLIDES //



// ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS
let yTracker = 0;
let opacityList = [];
opacityList.push(0,0,0);
const elements = [];

let triggerAnimation = false;



window.onscroll = function() {
  yTracker = window.scrollY;
  ScrollState();
  elementBringer();
};


function  ScrollState() {
    if (yTracker > 58) {
        document.getElementsByClassName("grid")[0].style.opacity = ".5";
    }
    else {
        document.getElementsByClassName("grid")[0].style.opacity = "1";
    }

  }

function elementBringer() {
  if (!triggerAnimation && yTracker > 500) {
    triggerAnimation = true;
    elements.push(document.getElementsByClassName("mission")[0]);
    elements.push(document.getElementsByClassName("mission1")[0]);
    elements.push(document.getElementsByClassName("mission2")[0]);
    for (let i = 0; i < elements.length; i++) {
      fadeIn(elements[i], 0, .73, 15);
    }
  }
}


// ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS // ANIMATIONS

