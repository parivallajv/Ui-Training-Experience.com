// 1. fetching Posts

var table=document.getElementById('list-1')
var tableHead=document.createElement('thead')
// tableHead.style.backgroundColor="lightBlue"
table.appendChild(tableHead)

var th1=document.createElement('th')
th1.classList.add('title-color')
th1.innerHTML="Id"
tableHead.appendChild(th1)
var th2=document.createElement('th')
th2.classList.add('title-color')
th2.innerHTML="title"
tableHead.appendChild(th2)
var th3=document.createElement('th')
th3.classList.add('title-color')
th3.innerHTML="body"
tableHead.appendChild(th3)
var th4=document.createElement('th')
th4.classList.add('title-color')
th4.innerHTML="Action"
tableHead.appendChild(th4)


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>{
    if(res.status==200){
        data=res.json()
    }
    return data
})
.then(data=>{
   
        data.forEach(element => {
        nId=element.id
        nTitle=element.title
        nBody=element.body

        var listDiv=document.createElement('tr')
        listDiv.classList.add('list-item')

        var lId=document.createElement('td')
        lId.innerHTML=`${nId}`

        var liTitle=document.createElement('td')
        liTitle.innerHTML=`${nTitle}`
        liTitle.id=`t${nId}`

        var liBody=document.createElement('td')
        liBody.innerHTML=`${nBody}`
        liBody.id=`b${nId}`

        var liButtons=document.createElement('div')
        liButtons.id="buttons"
        liButtons.innerHTML=`<div id=buttons>
            <button onClick="onEdit(${nId})" class="btn">Edit</button> 
            <button onClick="onDelete(${nId})" class="btn">Delete</button>
            </div>
            <input type="text" class="titleUp" id="inT${nId}" placeholder="Enter Updated Title"></input> 
            <input type="text" class="bodyUp" id="inB${nId}" placeholder="Enter Updated Body"></input>`
        

        var container=document.getElementById('list-1')
        listDiv.appendChild(lId)
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)
        listDiv.appendChild(liButtons)
        table.appendChild(listDiv)
            }    
        )
    }
);    

// 2. Fetching Todos

      var table1=document.getElementById('list-2')
      var tableHead2=document.createElement('thead')
      table1.appendChild(tableHead2)

      var th21=document.createElement('th')
      th21.classList.add('title-color')
      th21.innerHTML="Id"
      tableHead2.appendChild(th21)

      var th22=document.createElement('th')
      th22.classList.add('title-color')
      th22.innerHTML="title"
      tableHead2.appendChild(th22)

      var th23=document.createElement('th')
      th23.classList.add('title-color')
      th23.innerHTML="Status"
      tableHead2.appendChild(th23)

      var th24=document.createElement('th')
      th24.classList.add('title-color')
      th24.innerHTML="Action"
      tableHead2.appendChild(th24)


fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>{
    if(res.status==200){
        data=res.json()
    }
    return data
})
.then(data=>{
   
    data.forEach(element => {
        nId=element.id
        nTitle=element.title
        nBody=element.completed

        var listDiv=document.createElement('tr')
        listDiv.classList.add('list-item')

        var lId=document.createElement('td')
        lId.innerHTML=`${nId}`

        var liTitle=document.createElement('td')
        liTitle.innerHTML=`${nTitle}`

        var liBody=document.createElement('td')
        liBody.innerHTML=`${nBody}`

        var liButtons2=document.createElement('div')
        liButtons2.innerHTML=`<div id=buttons>
        <button onClick="onEdit(${nId})" class="btn">Edit</button> 
        <button onClick="onDelete(${nId})" class="btn">Delete</button>
        </div> 
        <input type="text" placeholder="Enter Updated Title"></input> 
        <input type="text" placeholder="Enter status"></input>`
        
        listDiv.appendChild(lId)
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)
        listDiv.appendChild(liButtons2)

        table1.appendChild(listDiv)
            }    
        )
    }
);

// 3. Fetching users


var table2=document.getElementById('list-3')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>{
    if(res.status==200){
        data=res.json()
    }
    return data
})
.then(data=>{
   
    data.forEach(element => {
        nId=element.id
        nTitle=element.name
        nBody=element.company.name

        var listDiv=document.createElement('div')
        listDiv.classList.add('list-item')

        var liTitle=document.createElement('li')
        liTitle.innerHTML=`${nId}. ${nTitle}`

        var liButtons=document.createElement('div')
        liButtons.id="buttons"
        liButtons.innerHTML=`<button onClick="onEdit(${nId})" class="btn">Edit</button> <button onClick="onDelete(${nId})" class="btn">Delete</button><input type="text" placeholder="Enter Updated Title"></input> <input type="text" placeholder="Enter Status"></input> <button onClick="update()">Update</button>`

        var liBody=document.createElement('li')
        liBody.innerHTML=`${nBody} `
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)
        listDiv.appendChild(liButtons)
        table2.appendChild(listDiv)

        }    
    )
  }
);


function onDelete(newId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status == 200) {
          // console.log("delete")
          var listItem = document.querySelector(`tr.list-item td:first-child`);
          while (listItem) {
            if (listItem.innerHTML.startsWith(`${newId}`)) {
              listItem.parentElement.remove();
              break;
            }
            listItem = listItem.parentElement.nextElementSibling.querySelector('td:first-child');
            
          }
        } 
      })


      fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status == 200) {
          // console.log("delete")
          var listItem2 = document.querySelector(`tr.list-item td:first-child`);
          while (listItem2) {
            if (listItem2.innerHTML.startsWith(`${newId}`)) {
              listItem2.parentElement.remove();
              break;
            }
            listItem2 = listItem2.parentElement.nextElementSibling.querySelector('td:first-child');
            
          }
        } 
      })
      
  }

function onEdit(id) {

  var upTitle;
  var upBody;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: upTitle,
        body: upBody
        
      })
    })
      .then(res =>{
        if (res.status == 200) {
          res.json()
          }
        }
      )
      .then(data=>{
        var listId = document.querySelector(`tr.list-item td:first-child`);
          // console.log(listId)
          while (listId) {
            if (listId.innerHTML.startsWith(`${id}`)){

              upTitle=document.getElementById(`inT${id}`).value
              upBody=document.getElementById(`inB${id}`).value

              var listItem2=document.querySelector(`tr.list-item td:first-child`).nextElementSibling
              var listItem3=document.querySelector(`tr.list-item td:first-child`).nextElementSibling.nextElementSibling

              // item1=listItem.parentElement.nextElementSibling.querySelector('li:first-child')
              // item2=listItem.parentElement.nextElementSibling.querySelector('li:first-child').nextElementSibling
              console.log(listId)
              listItem2.innerHTML=upTitle;
              listItem3.innerHTML=upBody;

              break;
            }
            listId = listId.parentElement.nextElementSibling.querySelector('li:first-child');
            // listItem2= listId.parentElement.nextElementSibling.querySelector('li:first-child').nextElementSibling;
            // listItem3= listItem3.parentElement.nextElementSibling.querySelector('li:first-child').nextElementSibling.nextElementSibling;
            // listItem.innerHTML

            

            // listItem = listItem.parentElement.nextElementSibling.querySelector('li:first-child');
            // listItem2 = listItem.parentElement.nextElementSibling.querySelector('li:first-child');
          }
        } 
    )
}
// function update(){
//     var liUpdate;
// }
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

function onPost(){

  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST'
  })
  .then(res=>{
    if(res.status==200){
      res.json()
      console.log(res)
    }
  })
  .then(data=>{
    console.log(data)
    alert(`Post send Successfully! at ${table.childElementCount}st element`)
    var postTitle=document.getElementById("post-title").value
    var postBody=document.getElementById("post-body").value

    console.log("The posted values are : ")
    console.log(postTitle)
    console.log(postBody)

  })
}

function onCompose(){
  var comp=document.getElementById('post-box')
  comp.classList.remove('post-box')
}
