//document.addEventListener("DOMContentLoaded", function())

// target the hamburger
//add an eventlistener click
document.querySelector('.firdousToggle').addEventListener("click", function(stop){
    // stop the default action
    // toggle the class of navigation
stop.preventDefault();
document.querySelector(".navigation").classList.toggle("navigationHide");
})