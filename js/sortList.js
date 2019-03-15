var sortBtn = document.querySelector("#sortBtn");
var ul = document.querySelector("#list");
function sortListUp() {
    var li = ul.querySelectorAll("li");
    for (let i = 0; i < li.length - 1; i++) {
        var temp = 0;
        for (let j = 0; j < li.length - 1 - i; j++) {
            if (li[j].innerHTML.toUpperCase() > li[j + 1].innerHTML.toUpperCase()) {
                temp = li[j].innerHTML;
                li[j].innerHTML = li[j+1].innerHTML;
                li[j+1].innerHTML = temp;
            }
        }
    }
}
function sortListLow() {
    var li = ul.querySelectorAll("li");
    for (let i = 0; i < li.length - 1; i++) {
        var temp = 0;
        for (let j = 0; j < li.length - 1 - i; j++) {
            if (li[j].innerHTML.toUpperCase() < li[j + 1].innerHTML.toUpperCase()) {
                temp = li[j].innerHTML;
                li[j].innerHTML = li[j+1].innerHTML;
                li[j+1].innerHTML = temp;
            }
        }
    }
}
