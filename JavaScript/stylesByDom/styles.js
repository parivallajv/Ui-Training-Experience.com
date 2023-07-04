// 1. For Increasing and Decreasing FontSize

var increaseFont=document.getElementById('increaseFont')
var decreaseFont=document.getElementById('decreaseFont')

var textContent=document.getElementById('textContent')

var initialSize=Number(window.getComputedStyle(textContent).fontSize.substr(0,2))


increaseFont.addEventListener('click',function(){
    initialSize=initialSize+10
    textContent.style.fontSize=initialSize+"px"

})

decreaseFont.addEventListener('click',function(){
    initialSize=initialSize-10
    textContent.style.fontSize=initialSize+"px"
})

// 2. For toggling textSize 
var toggleButton=document.getElementById("button")
var textContent2=document.getElementById('textContent2')

toggleButton.addEventListener('click',function(){
    if(textContent2.classList.contains("big")){
        textContent2.classList.remove("big")
        textContent2.classList.add("small")   
     }
     else{
        textContent2.classList.remove("small");
        textContent2.classList.add("big")
     }
})

// 3. For SideBar

var menuBtn=document.getElementById('menu-logo')
var menu=document.getElementById("menu-container")

menuBtn.addEventListener('click',function(){
    if(menu.classList.contains("show")){
        menu.classList.toggle("hide")
    }
    else{
        
        menu.classList.toggle("show")
    }

})