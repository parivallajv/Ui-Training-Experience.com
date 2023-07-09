var Username=document.getElementById('fName')
var Password=document.getElementById('password')
var submitBtn=document.getElementById('sub-btn')

var ErrMailPara=document.getElementById('namePara')
var passErrPara=document.getElementById('passwordPara')

var flag1=false
var flag2=false

Username.addEventListener('input',function(e){
    var pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g
    var currentValue=e.target.value

    var valid=pattern.test(currentValue)
    console.log(valid)
    if(valid==false){
        ErrMailPara.style.display="block"
        flag1=false
        
    }
    else{
        ErrMailPara.style.display="none"
        flag1=true
    }
})

Password.addEventListener('input',function(e){

    var pattern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
    var currentValue=e.target.value

    var valid=pattern.test(currentValue)

    if(valid==false){
        passErrPara.style.display="block"
        flag2=false 
    }
    else{
        passErrPara.style.display="none"
        flag2=true
    }
})

submitBtn.addEventListener('click',function(e){
    
    if((flag1==true)&(flag2==true)){
        console.log('true')
        e.preventDefault()
        window.location.href="https://www.google.com"      
    }
    else{
        console.log('false')
        e.preventDefault();
    }
})

function redirect(){
    
}


