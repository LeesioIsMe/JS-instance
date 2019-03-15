var content = document.getElementById("content");
var container = document.getElementById("container");
document.querySelector(".yes").onclick = function () {
    content.style.left = Math.random() * 900 + "px";
    content.style.top = Math.random() * 300 + "px";
}
document.querySelector(".no").onclick = function () {
    document.querySelector(".hide").style.display = "block";
}
