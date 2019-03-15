$(function () {
    $(".sideBar li").mouseover(function () {
        var index = $(this).index();
        $(".content").each(function (i, c) {
            if (i == index) {
                $(c).show();
            } else {
                $(c).hide();
            }
        })
    }).mouseleave(function () {
        $(".content").each(function (i, c) {
            $(c).hide();
        })
    })

    showPhoto(1);
    function showPhoto(index) {
        $(`.banner li:nth-child(${index}`).show().siblings().hide();
        $(`.pager a:nth-child(${index})`).addClass("current").siblings().removeClass("current");
    }

    function autoPlay() {
        showPhoto(index);
        index++;
        if (index == $(".banner ul li").length + 1) {
            index = 1;
        }
    }
    var index = 2;
    var timer = setInterval(autoPlay, 2000);

    $(".prev").click(function () {
        clearInterval(timer);
        var currentIndex = $(".pager a[class='current']").index() + 1;
        index = currentIndex - 1;
        if (index == 0) {
            index = $(".banner ul li").length;
        }
        showPhoto(index);
        timer = setInterval(autoPlay, 2000);
    })
    $(".next").click(function () {
        clearInterval(timer);
        var currentIndex = $(".pager a[class='current']").index() + 1;
        index = currentIndex + 1;
        if (index == $(".banner ul li").length + 1) {
            index = 1;
        }
        showPhoto(index);
        timer = setInterval(autoPlay, 2000);
    })

})