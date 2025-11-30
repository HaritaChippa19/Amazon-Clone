let sliderBtnLeft = document.querySelector("#slider-btn-left");
let sliderBtnRight = document.querySelector("#slider-btn-right");
let imgItem = document.querySelectorAll(".image-item");


let startSlider = 0;
let endSlider = (imgItem.length-1)*100;
sliderBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element=>{
        element.style.transform= `translateX(${startSlider}%)`;
    })
}

sliderBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element=>{
        element.style.transform= `translateX(${startSlider}%)`;
    })  
}

function renderSlideAuto(){
    if(startSlider >= -endSlider+100){
        handleRightBtn()
    }else{
        startSlider = 0;
    }
}
setInterval(renderSlideAuto,3000);



const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation");
const openNavSlider = document.getElementById("open-nav-slider");
const sidebarCloseNavigation = document.getElementById("sidebar-navigation-close");

openNavSlider.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show");
})

sidebarCloseNavigation.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show");
})