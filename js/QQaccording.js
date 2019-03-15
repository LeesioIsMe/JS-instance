var title = document.querySelectorAll(".title");
for (let i = 0; i < title.length; i++) {
    let t = title[i];
    t.addEventListener("click", function () {
        var friends = document.querySelectorAll(".friends");
        var icons = document.querySelectorAll(".icon");
        icons[i].classList.toggle("clickedI");
        friends[i].classList.toggle("show");
        t.style.backgroundColor = "rgb(249,249,249)";
    })
}
var li = document.querySelectorAll(".friends li");
for (let i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        for(let j = 0 ;j < li.length ; j++){
            if(i != j){
                li[j].classList.remove("clicked");
            }else{
                if(!li[j].classList.contains("new-friends"))
                    li[j].classList.add("clicked");
            }
        }
    }
}
var newTitle = document.querySelector(".new-title");
var newFriends = document.querySelector(".new-friends");
var more = document.querySelector(".more");
newTitle.onclick = function(){
    if(newFriends.classList.contains("show")){
        more.style.display = "inline-block";
    }else{
        more.style.display = "none";
    }
}