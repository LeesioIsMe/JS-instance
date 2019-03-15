var listTitle = document.querySelectorAll(".list-title");
var listItems = document.querySelectorAll(".list-items");
listItems[0].classList.add("show");
for (let i = 0; i < listTitle.length; i++) {
    listTitle[i].onclick = function () {
        var index = i;
        
        for (let j = 0; j < listTitle.length; j++) {
            if(index == j){
                listTitle[j].classList.add("border");
                listItems[j].classList.add("show");
                listItems[j].classList.remove("hide");
            }
            else{
                listTitle[j].classList.remove("border");
                listItems[j].classList.add("hide");
                listItems[j].classList.remove("show");
            }
        }
    }
}
