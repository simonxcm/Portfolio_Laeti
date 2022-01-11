'use strict';


function moveTitle() {
    document.getElementById("videoBox-title").classList.add("horizontal-title");
}

function resetTitle() {
    document.getElementById("videoBox-title").classList.remove("horizontal-title");
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