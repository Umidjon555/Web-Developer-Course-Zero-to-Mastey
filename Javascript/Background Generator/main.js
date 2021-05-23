var css = document.querySelector("h3");

var color_1 = document.getElementsByClassName("color1")[0];

var color_2 = document.getElementsByClassName("color2")[0];

var body = document.getElementById("gradient");


color_1.addEventListener("input", change_background);

color_2.addEventListener("input", change_background);


function change_background(){
body.style.background = "linear-gradient(to right, "
+ color_1.value + ", "
+ color_2.value 
+ ")";

css.textContent = body.style.background + ";";
}