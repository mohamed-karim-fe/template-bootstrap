let upperH = document.querySelector(".upper-bar").offsetHeight;
let navH = document.querySelector(".navbar").offsetHeight;
let winH = window.innerHeight;
document.querySelector(".slider").style.height = (winH - (upperH + navH)) + "px";
let array1 = document.querySelectorAll(".carousel-item");
for (i=0;i<array1.length;i++){
    array1[i].style.height = (winH - (upperH + navH)) + "px";
}