var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);
}

function Validation(){
  let name = document.forms['validationform']['name'].value;
  let lastname = document.forms['validationform']['lastname'].value;
  let email = document.forms['validationform']['email'].value;
  if(!name || !lastname || !email){  
    alert('Моля попълнете полетата!');
    return false;
  } 
  alert(`Добре дошли ${name}!`);
}


showSlides();

let about = document.getElementById('about');
let transport = document.getElementById('transport');
let storage = document.getElementById('storage');
let containers = document.getElementById('containers');
let blog = document.getElementById('blog');
let types = document.getElementById('types-of-transport');
let contact = document.getElementById('contact');

ScrollReveal().reveal(about);
ScrollReveal().reveal(transport);
ScrollReveal().reveal(storage);
ScrollReveal().reveal(containers);
ScrollReveal().reveal(blog);
ScrollReveal().reveal(types);
ScrollReveal().reveal(contact);