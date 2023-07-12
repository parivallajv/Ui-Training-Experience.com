
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
  listDiv.classList.add('list-item2')

  var lId=document.createElement('td')
  lId.innerHTML=`${nId}`

  var liTitle=document.createElement('td')
  liTitle.innerHTML=`${nTitle}`

  var liBody=document.createElement('td')
  liBody.innerHTML=`${nBody}`

  var liButtons2=document.createElement('div')
  liButtons2.innerHTML=`<div id=buttons>
  <button onClick="onEdit2(${nId})" class="btn">Edit</button> 
  <button onClick="onDelete2(${nId})" class="btn">Delete</button>
  </div> 
  <input type="text" class="titleUp" placeholder="Enter Updated Title" id="innT${nId}"></input> 
  <input type="text" id="innB${nId}" placeholder="Enter status"></input>`
  
  listDiv.appendChild(lId)
  listDiv.appendChild(liTitle)
  listDiv.appendChild(liBody)
  listDiv.appendChild(liButtons2)

  table1.appendChild(listDiv)
      }    
  )
}
);



// 2. OnDelete function

function onDelete2(newId){
    fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status == 200) {
          var listItem = document.querySelector(`tr.list-item2 td:first-child`);
          while (listItem) {
            if (listItem.innerHTML.startsWith(`${newId}`)) {
              listItem.parentElement.remove();
              break;
            }
            listItem = listItem.parentElement.nextElementSibling.querySelector('td:first-child');
          }
        } 
      })
  }

  // 3. OnEdit function
  
function onEdit2(id) {

    var upTitle;
    var upBody;
  
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
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
          var listId = document.querySelector(`tr.list-item2 td:first-child`);
            while (listId) {
              if (listId.innerHTML.startsWith(`${id}`)){
  
                upTitle=document.getElementById(`innT${id}`).value
                upBody=document.getElementById(`innB${id}`).value
  
                var listItem2=document.querySelector(`tr.list-item2 td:first-child`).nextElementSibling
                var listItem3=document.querySelector(`tr.list-item2 td:first-child`).nextElementSibling.nextElementSibling
  
                console.log(listId)
                listItem2.innerHTML=upTitle;
                listItem3.innerHTML=upBody;
  
                break;
              }
              listId = listId.parentElement.nextElementSibling.querySelector('td:first-child');
             
            }
          } 
      )
  }
  
// 4. onPost function
  
function onPost(){

    fetch('https://jsonplaceholder.typicode.com/todos',{
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
  