var info = document.querySelectorAll(".info");
var closeBtn = document.querySelectorAll(".closeBtn");

for(let i in info){
    closeBtn[i].onclick = function(){
        info[i].classList.add("close");
    }
}