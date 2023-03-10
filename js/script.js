// var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("Containers");
//   var circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }
//   slides[slidePosition-1].style.display = "block";
//   circles[slidePosition-1].className += " enable";
// } 

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 10000); // Change image every 2 seconds
} 

const form = document.getElementById('contact-form');

form.addEventListener('submit',function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();

  const errors = [];

  if (name === ''){
    errors.push('name is required');
  }

  if (email === ''){
    errors.push('email is required');
  } else if(!isValidEmail(email)) {
    errors.push('email is invalid');
  }

  if (subject === '') {
    errors.push('subject is required');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    form.submit();
    alert('Submited')
  }

});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}