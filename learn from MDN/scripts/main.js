let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc === "images/ndsu66su3x751.png"){
        myImage.setAttribute('src',"images/avengers-endgame-i-am-iron-man-i76482.jpg");
        } else {
            myImage.setAttribute('src',"images/ndsu66su3x751.png");
        }



}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUsername();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Firefox logo' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Firefox logo' + storedName;
}

myButton.onclick = function() {
    setUsername();
}