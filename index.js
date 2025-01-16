const slides = document.querySelectorAll(".sliders img");

let slideIndex =0;
let intervalId = null;

initiaLizeSlider();

function initiaLizeSlider(){
 slides[slideIndex].classList.add("displaySlide");
}

function showSlide(index){

}

function prevSlide(){

}

function nextSlide(){
  
}


let icon = document.querySelector(".menu-icon");
let ul = document.querySelector(".ul");

icon.addEventListener('click',()=>{
  ul.classList.toggle("showData");
  console.log(ul);
})