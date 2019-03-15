// 女装
var womenWear = document.querySelector(".womenWear");
var womenMore = womenWear.querySelector(".more");
womenMore.addEventListener("click", function () {
    womenWear.classList.toggle("addHeight");
    var womenMoreIcon = womenMore.querySelector(".icon");
    console.log(womenMoreIcon)
    if (womenWear.classList.contains("addHeight")) {
        womenMore.innerHTML = womenMore.innerHTML.toString().replace("更多", "收起").replace("icon", "icon change");
        womenMoreIcon.classList.add("change");
    } else {
        womenMore.innerHTML = womenMore.innerHTML.toString().replace("收起", "更多").replace("icon change", "icon");
    }
})

// 尺码
var size = document.querySelector(".size");
var sizeMore = size.querySelector(".more");
var sizeMultiple = size.querySelector(".multiple");
var sizeCancel = size.querySelector(".cancel");

sizeMore.addEventListener("click", function () {
    size.classList.toggle("addMoreHeight");
    var sizeMoreIcon = sizeMore.querySelector(".icon");
    console.log(sizeMoreIcon)
    if (size.classList.contains("addMoreHeight")) {
        sizeMore.innerHTML = sizeMore.innerHTML.toString().replace("更多", "收起").replace("icon", "icon change");
        sizeMoreIcon.classList.add("change");
    } else {
        sizeMore.innerHTML = sizeMore.innerHTML.toString().replace("收起", "更多").replace("icon change", "icon");
    }
})
sizeMultiple.addEventListener("click", function () {
    size.classList.toggle("addMulHeight");
    var sizeMulIcon = sizeMultiple.querySelector(".icon2");
    console.log(sizeMulIcon)
    if (size.classList.contains("addMulHeight")) {
        sizeMultiple.style.display = "none";
        sizeMore.style.display = "none";
        sizeMulIcon.classList.add("change");
    }
})
sizeCancel.addEventListener("click", function () {
    size.classList.remove("addMulHeight");
    sizeMultiple.style.display = "block";
    sizeMore.style.display = "block"
})

// 版型
var version = document.querySelector(".version");
var versionMultiple = version.querySelector(".multiple");
var versionCancel = version.querySelector(".cancel");
versionMultiple.addEventListener("click", function () {
    version.classList.toggle("addMulHeight");
    var versionMulIcon = sizeMultiple.querySelector(".icon2");
    console.log(versionMulIcon)
    if (version.classList.contains("addMulHeight")) {
        versionMultiple.style.display = "none";
        versionMulIcon.classList.add("change");
    }
})
versionCancel.addEventListener("click", function () {
    version.classList.remove("addMulHeight");
    versionMultiple.style.display = "block";
})

// 高级选项
var superSelect = document.querySelector(".superSelect");
var superMultiple = superSelect.querySelectorAll(".multiple");
var superCancel = superSelect.querySelectorAll(".cancel");
var superItems = superSelect.querySelectorAll(".superItems");
var superHide = superSelect.querySelectorAll(".super-hide");

for (let i = 0; i < superItems.length; i++) {
    superItems[i].addEventListener("mouseover", function () {
        superHide[i].classList.add("show");
    })
    superItems[i].addEventListener("mouseleave", function () {
        superHide[i].classList.remove("show");
        superHide[i].classList.remove("addMulHeight");
    })
    superMultiple[i].addEventListener("click", function () {
        superHide[i].classList.add("addMulHeight");
    })
    superCancel[i].addEventListener("click", function () {
        superHide[i].classList.remove("addMulHeight");
        superMultiple[i].style.display = "block";
    })
}


// 品牌
var brand = document.querySelector(".brand");
var sort = brand.querySelector(".sort");
var brandMore = brand.querySelector(".more");
var brandMultiple = brand.querySelector(".multiple");
var sLis = sort.querySelectorAll("li");
var brandIcons = document.querySelector(".brandIcons");
var bLis = brandIcons.querySelectorAll("li");
var bImgs = brandIcons.querySelectorAll("li img");
var bAs = brandIcons.querySelectorAll("li a");
var bSpans = brandIcons.querySelectorAll("li span");
var brandCancel = brandIcons.querySelector(".cancel");
var bselected = brandIcons.querySelector(".selected");
for (let i = 1; i <= bLis.length; i++) {
    bLis[i - 1].style.borderRight = "none";
    bLis[i - 1].style.borderTop = "none";
    bSpans[i - 1].style.display = "none";
    if (i % 6 == 0 && i % 6 != 1) {
        bLis[i - 1].style.borderRight = "1px solid #ccc";
    }
    if (i <= 6) {
        bLis[i - 1].style.borderTop = "1px solid #ccc";
    }
    if (i == bLis.length) {
        bLis[i - 1].style.borderRight = "1px solid #ccc";
    }
    bLis[i - 1].onmouseover = function () {
        bAs[i - 1].style.border = "2px solid red";
        bImgs[i - 1].style.display = "none";
        bSpans[i - 1].style.display = "inline-block";
    }
    bLis[i - 1].onmouseleave = function () {
        bAs[i - 1].style.border = "none";
        bImgs[i - 1].style.display = "inline-block";
        bSpans[i - 1].style.display = "none";
    }
}
brandMore.addEventListener("click", function () {
    brandIcons.classList.toggle("addMoreHeight");
    sort.style.display = "block";
    var brandMoreIcon = brandMore.querySelector(".icon");
    console.log(brand)
    if (brandIcons.classList.contains("addMoreHeight")) {
        brandMore.innerHTML = brandMore.innerHTML.toString().replace("更多", "收起").replace("icon", "icon change");
        brandMoreIcon.classList.add("change");
    } else {
        sort.style.display = "none";
        brandMore.innerHTML = brandMore.innerHTML.toString().replace("收起", "更多").replace("icon change", "icon");
    }
    for (let i = 0; i < bLis.length; i++){
        bLis[i].classList.remove("hide");
        bLis[i].classList.remove("show");
    }
})
brandMultiple.addEventListener("click", function () {
    brandIcons.classList.toggle("addMulHeight");
    sort.style.display = "block";
    var brandMulIcon = brandMultiple.querySelector(".icon2");
    console.log(brandMulIcon)
    if (brandIcons.classList.contains("addMulHeight")) {
        brandMultiple.style.display = "none";
        brandMore.style.display = "none";
        brandMulIcon.classList.add("change");
        bselected.style.display = "block";
    }
})
brandCancel.addEventListener("click", function () {
    brandIcons.classList.remove("addMulHeight");
    brandMultiple.style.display = "block";
    sort.style.display = "none";
    bselected.style.display = "none";
    brandMore.style.display = "block";
    for (let i = 0; i < bAs.length; i++){
        bAs[i].classList.remove("clicked");
        bLis[i].classList.remove("hide");
        bLis[i].classList.remove("show");
    }
    var childName = brandIcons.querySelectorAll(".selected span");
    console.log(childName);
    for (let j = 0; j < childName.length; j++) {
        bselected.removeChild(childName[j]);
    }
})
var j = 0;
for (let i = 0; i < bAs.length; i++) {
    bAs[i].addEventListener("click", function () {
        if (brandIcons.classList.contains("addMulHeight")) {
            bAs[i].classList.toggle("clicked");
            console.log(bAs[i]);
        }

        if (bAs[i].classList.contains("clicked")) {
            var span = document.createElement("span");
            span.style.padding = "0 10px";
            span.style.height = "20px";
            span.style.display = "inline-block";
            span.style.color = "red";
            span.style.border = "1px solid red";
            span.style.margin = "0 10px 0 0";
            span.id = "span"+i;
            bselected.appendChild(span);
            span.innerHTML = bSpans[i].innerHTML + j;
            console.log(bAs[i]);
            j++;
        }else{
            var childName = brandIcons.querySelectorAll(".selected span");
            // 循环获得id为span i的那个span元素，然后删除 
            for(let j = 0 ; j < childName.length ;j++){
                if(childName[j].id == "span" + i){
                    bselected.removeChild(childName[j]);
                }
            }
            console.log(bAs[i]);
        }
    })
}
// 品牌筛选
for(let i = 0;i < sLis.length ;i++){
    sLis[i].addEventListener("mouseover",function(){
        for(let j = 0 ;j < bLis.length ; j++){
            bLis[j].classList.add("hide");
            if(bSpans[j].title.toUpperCase().substr(0,1).indexOf(sLis[i].innerHTML) >= 0){
                bLis[j].classList.remove("hide");
                bLis[j].classList.add("show");
                console.log(bLis[j]);
            }else{
                bLis[j].classList.remove("show");
                bLis[j].classList.add("hide");
                console.log(bLis[j]);
            }
        }
    })
}