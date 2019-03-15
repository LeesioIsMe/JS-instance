function judge(ev) {
    var userName = document.querySelector("#userName");
    var error = document.querySelector("#error");
    ev.preventDefault();
    var userNameValue = userName.value;
    if (userNameValue.trim() == "") {
        error.style.display = "block";
        error.innerHTML = "用户名不能为空";
        return;
    }
    if(/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,15}$/.test(userNameValue)){
        error.style.display = "none";
    }else{
        error.innerHTML = "8-18位的数字字母下划线";
    }
}
