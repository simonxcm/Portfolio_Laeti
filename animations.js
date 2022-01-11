'use strict';


function fadeTitle() {
    document.getElementById("videoBox-title").classList.add("fade-title");
}

function resetTitle() {
    document.getElementById("videoBox-title").classList.remove("fade-title");
}



/* 
function verticalTitlesOnHover() {

    let navId = document.getElementById("navbar");

    if (navId.className === "topnav" || navId.className === "topnav sticky") {
        navId.className += " responsive";
    } else if (navId.className === "topnav sticky responsive") {
        navId.className = "topnav sticky";
    } else {
        navId.className = "topnav";
    }
} */