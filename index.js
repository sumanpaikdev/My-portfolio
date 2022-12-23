let cont = document.getElementById("contactbox")

function setup() {
    cont.style.display = "block"
} 
function closediv() {
    cont.style.display = "none"
}

let sourcetext = document.getElementById("closevw")

setTimeout(function closeview() {
    sourcetext.style.display = "block"
}, 4000)

function closesource(){
    sourcetext.style.display = "none"

}



function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 15;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);