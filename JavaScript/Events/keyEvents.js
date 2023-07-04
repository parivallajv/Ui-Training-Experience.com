var nameInp=document.getElementById('inp-name')

var formInp=document.getElementById('form-inp')


// nameInp.addEventListener('keydown',function(){
//     console.log("keydown is happened")
// })
// nameInp.addEventListener('keyup',function(){
//     console.log("keyup is happened")
// })
// nameInp.addEventListener('keypress',function(e){
//     console.log("keypress is happened")
//     e.preventDefault()
// })

// 1. check the keycode value
// nameInp.addEventListener('keydown',function(e){
//     if(e.keyCode===27){
//         alert('alert is not allowed')
//     }
// })

nameInp.addEventListener('keydown',function(e){
    console.log(e.keyCode+" is presssed")
})