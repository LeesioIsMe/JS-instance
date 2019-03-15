var snackbar = document.querySelector("#snackbar");
var btn = document.querySelector("#btn");
var showBtn = document.querySelector("#showBtn");
function showSnackbar() {
    snackbar.classList.add("show");
    btn.onclick = function () {
        snackbar.classList.remove("show");
        clearTimeout(idTimeout);
    }
    var idTimeout = setTimeout(function () {
        snackbar.classList.remove("show");
    }, 5000)
}
