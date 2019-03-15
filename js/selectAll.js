var selectAll = document.querySelector(".selectAll");
var selector = document.querySelectorAll(".selector");
var status = true;
for (let i = 0; i < selector.length; i++) {
    selectAll.onclick = function () {
        if (selectAll.checked == true) {
            for (let i = 0; i < selector.length; i++) {
                selector[i].checked = true;
                selector[i].classList.add("active");
            }
        } else {
            for (let i = 0; i < selector.length; i++) {
                selector[i].classList.remove("active");
                selector[i].checked = false;
            }
        }

    }
}
for (let i = 0; i < selector.length; i++) {
    selector[i].onclick = function(){
        selector[i].classList.toggle("active");
        console.log(selector[i]);
        for(let j = 0 ;j < selector.length; j++){
            if(!selector[j].classList.contains("active")){
                selectAll.checked = false;
                return;
            }
        }            
        selectAll.checked = true;
    }
}