var userName = document.querySelector("#username");
var password = document.querySelector("#password");
var user = document.querySelector(".user");
var pass = document.querySelector(".pass");
var userLabel = document.querySelector(".user label");
var passLabel = document.querySelector(".pass label");
var login = document.querySelector("#login");
var reme = document.querySelector(".reme i")
var status = "F";
userName.addEventListener("focus", function () {
    userLabel.style.display = "none";
    user.style.backgroundPosition = "0 -85px";
})
userName.addEventListener("blur", function () {
    if (userName.value == "") {
        userLabel.style.display = "block";
    }
    user.style.backgroundPosition = "0 -43px";
})
password.addEventListener("focus", function () {
    passLabel.style.display = "none";
    pass.style.backgroundPosition = "0 -85px";
})
password.addEventListener("blur", function () {
    if (password.value == "") {
        passLabel.style.display = "block";
    }
    pass.style.backgroundPosition = "0 -43px";
})
reme.addEventListener("click",function(){
    reme.classList.toggle("checked");
    if(reme.classList.contains("checked")){
        status = "T";
    }else{
        status = "F";
    }
})
login.addEventListener("click", function (ev) {
    ev.preventDefault();
    var pattName = /^[A-z]{1}[0-9A-z_]{5,17}$/ig;
    var pattPass = /[0-9A-z_]{6,18}/ig;
    if (pattName.test(userName.value) && pattPass.test(password.value)) {
        var cookieName = userName.value;
        var cookiePass = password.value + status;
        var now = new Date();
        now.setDate(now.getDate() + 7);
        document.cookie = cookieName + "=" + cookiePass + ";expires=" + now.toUTCString();
        location.href = "18.cookie登陆成功.html";
    }
})


