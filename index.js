


const btnone = document.querySelector(".w");
const btntwo =document.querySelector(".a");
const btnthree = document.querySelector(".s");
const btnfour =document.querySelector(".d");
const btnfive = document.querySelector(".j");
const btnsix =document.querySelector(".k");
const btnseven = document.querySelector(".l");




const wplay = ()=>{
var audio = new Audio ("sounds/crash.mp3");
audio.play();     
};

const aplay = ()=>{
var audio = new Audio ("sounds/kick-bass.mp3");
audio.play();

};

const splay =()=>{
var audio = new Audio ("sounds/snare.mp3");
audio.play(); 
}


const dplay = ()=>{
var audio = new Audio ("sounds/tom-1.mp3");
audio.play(); 
}

const jplay = ()=>{
    var audio = new Audio ("sounds/tom-2.mp3");
audio.play(); 
}


const kplay = ()=> {
    var audio = new Audio ("sounds/tom-3.mp3");
    audio.play();
}


const lplay = ()=>{
    var kick = new Audio('sounds/tom-4.mp3');
          kick.play();
}



btnone.addEventListener("click",wplay);
btntwo.addEventListener("click",aplay);
btnthree.addEventListener("click",splay);
btnfour.addEventListener("click",dplay);
btnfive.addEventListener("click",jplay);
btnsix.addEventListener("click",kplay);
btnseven.addEventListener("click",lplay);









// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();}
//
//   );}
//

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }
