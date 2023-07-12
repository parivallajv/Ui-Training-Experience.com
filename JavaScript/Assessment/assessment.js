
  var div1=document.getElementById('list-1')
  var div2=document.getElementById('list-2')
  var div3=document.getElementById('list-3')

  var btn1=document.getElementById('p-btn')
  var btn2=document.getElementById('t-btn')
  var btn3=document.getElementById('u-btn')
  
function postDiv(){
  div1.classList.toggle('show')
  div1.classList.remove('hide')
  div2.classList.add('hide')
  div3.classList.add('hide')

  btn1.classList.add('bg-blue')
  btn2.classList.remove('bg-blue')
  btn3.classList.remove('bg-blue')
}
function todosDiv(){
  
  div1.classList.add('hide')
  div2.classList.add('show')
  div2.classList.remove('hide')
  div3.classList.add('hide')

  btn1.classList.remove('bg-blue')
  btn2.classList.add('bg-blue')
  btn3.classList.remove('bg-blue')
}
function usersDiv(){

  div1.classList.add('hide')
  div2.classList.add('hide')
  div3.classList.add('show')
  div3.classList.remove('hide')

  btn1.classList.remove('bg-blue')
  btn2.classList.remove('bg-blue')
  btn3.classList.add('bg-blue')

}

