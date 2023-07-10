var output=document.getElementById('output')

function display(num){
    output.value=output.value+num
    
}

function clr(){
    output.value=" "
}

function delet(){
    output.value=output.value.slice(0,-1)
}

function calc(){
    output.value=eval(output.value)
}
