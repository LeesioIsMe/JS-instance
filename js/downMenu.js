var title = document.querySelectorAll(".title");
// var downMenu = document.querySelectorAll(".downMenu");
var items = document.querySelectorAll(".items");

for(let i in title){
    title[i].onclick = function(){
        if(items[i].classList.contains("show")){
            items[i].classList.remove("show");
            return;
        }
        items[i].classList.add("show");
    }

}