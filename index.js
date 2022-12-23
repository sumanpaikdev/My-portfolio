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
}, 3000)

function closesource(){
    sourcetext.style.display = "none"

}