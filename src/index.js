const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector('h2');

const superEventHandler = {
    Over:function(){
        title.innerText = "The mouse is here!";
        title.style.color = colors[0];
    },
    Leave:function(){
        title.innerText = "The mouse is gone!";
        title.style.color = colors[1];
    },
    ClickR:function(){
        title.innerText = "That was a right click";
        title.style.color = colors[2];
    },
    Resize:function(){
        title.innerText = "You just resized"; 
        title.style.color = colors[3];
    }
};

title.addEventListener("mouseover",superEventHandler.Over);
title.addEventListener("mouseleave",superEventHandler.Leave);
window.addEventListener("contextmenu",superEventHandler.ClickR);
window.addEventListener("resize",superEventHandler.Resize);
