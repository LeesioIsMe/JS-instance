
function myFunction() {
    var input = document.getElementById("input").value.toUpperCase();
    var li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        var a = li[i].querySelector("a");
        if (a.innerHTML.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }

    }
}