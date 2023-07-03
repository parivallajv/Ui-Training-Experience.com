var contentValue=document.getElementById('textContent')

var initialValue=contentValue.innerHTML;

// var input=document.getElementById('input-no')

var backGround=document.getElementById('bg-image')



// setInterval(function (){

//     contentValue.innerHTML=input.value

//     input.value=input.value > 0 ? input.value-1 : 0;

//     backGround.src = input.value % 2 == 0 ? './wallpaperflare.com_wallpaper (1).jpg':'./wallpaperflare.com_wallpaper (2).jpg'

//     contentValue.style.fontSize=input.value > 0 ? input.value * 100 + "px" : "100px";

//     backGround.style.width=input.value > 0 ? input.value * 10 +"%" : "10%";

//     // backGround.style.height=input.value > 1 ? input.value*100+"%" : "10%"

// },1000);

setInterval(function (){

    contentValue.innerHTML=initialValue

    initialValue=initialValue > 0 ? initialValue-1 : 0;

    backGround.src = initialValue % 2 == 0 ? '../Dom/wallpaperflare.com_wallpaper (1).jpg':'../Dom/wallpaperflare.com_wallpaper (2).jpg'

    contentValue.style.fontSize=initialValue > 0 ? initialValue * 100 + "px" : "100px";

    backGround.style.width=initialValue > 0 ? initialValue * 10 +"%" : "10%";

    contentValue.style.color=initialValue % 2 == 0 ? "white":"black"

    // backGround.style.height=input.value > 1 ? input.value*100+"%" : "10%"

},1000);



