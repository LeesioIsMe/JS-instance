function move() {
    var content = document.getElementById("content");
    var container = document.getElementById("container");
    var posLeft = 0;
    var posTop = 0;
    var posTop2 = 0;
    var posLeft2 = 0;
    var interval1 = setInterval(function () {

        if ((posTop - 4) < (container.clientHeight - content.clientHeight)) {
            content.style.left = posLeft + "px";
            content.style.top = posTop + "px";
            posLeft += 6;
            posTop += 4;
            posTop2 = posTop;
            posLeft2 = posLeft;
        }
        if ((posTop - 4) >= (container.clientHeight - content.clientHeight) && (posTop2 + 4) != 0) {
            content.style.left = posLeft2 + "px";
            content.style.top = posTop2 + "px";
            posLeft2 += 6;
            posTop2 -= 4;
        }

    }, 50);
}
move();