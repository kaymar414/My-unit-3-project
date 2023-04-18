
let storyOpening=document.querySelector(".story-opening")
let optionOneScreen=document.querySelector(".option-one-screen")
let optionTwoScreen=document.querySelector(".option-two-screen")
let mangoEnd=document.querySelector(".lifesvaers-end")
let watermelonEnd=document.querySelector(".sourpatch-end")
let winterEnd=document.querySelector(".herseys-end")
let summerEnd=document.querySelector(".snickers-end")

let doorOneButton=document.querySelector(".-one")
let doorTwoButton=document.querySelector(".-two")
let mangoButton=document.querySelector(".lifesavers-button")
let watermelonButton=document.querySelector(".sourpatch-button")
let winterButton=document.querySelector(".herseys-button")
let summerButton=document.querySelector(".snickers-button")

let title=document.querySelector(".title")

optionOneButton.onclick=function(){
  storyOpening.style.display="none";
  title.style.display="none";
  optionOneScreen.style.display="block";
  
};

optionTwoButton.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  optionTwoScreen.style.display="block";
};

lifesaversButton.onclick=function(){
  optionOneScreen.style.display="none";
  lifesaverEnd.style.display="block";
  startOverButton.style.display="block";
}

sourpatchButton.onclick=function(){
  optionOneScreen.style.display="none";
  sourpatchEnd.style.display="block";
  startOverButton.style.display="block";
}

herseyButton.onclick=function(){
  optionTwoScreen.style.display="none";
  herseyEnd.style.display="block";
  startOverButton.style.display="block";
}

snickersButton.onclick=function(){
  optionTwoScreen.style.display="none";
  snickersEnd.style.display="block";
}