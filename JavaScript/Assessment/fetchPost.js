// 1. fetching Posts

var table=document.getElementById('list-1')
var tableHead=document.createElement('thead')
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
            
            <button onClick="onDelete1(${nId})" class="btn">Delete</button>

            <button onClick="update1(${nId})" class="btn">Update</button>
            
            </div>

            <input type="text" class="titleUp hide" id="inT${nId}" placeholder="Enter Updated Title"></input> 
            
            <input type="text" class="bodyUp hide" id="inB${nId}" placeholder="Enter Updated Body"></input>`
        
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

// 2. OnDelete Function

function onDelete1(newId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status == 200) {
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
  }

function update1(id){
  var listId = document.querySelector(`tr.list-item td:first-child`);
  
  while (listId) {
    console.log("update");
    if (listId.innerHTML.startsWith(`${id}`)){
        var inp1=document.getElementById(`inT${id}`)
        inp1.classList.toggle('hide')
                
        var inp2=document.getElementById(`inB${id}`)
        inp2.classList.toggle('hide')
      
    }
}
}



// 3. OnEdit function
  
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
            while (listId) {
              if (listId.innerHTML.startsWith(`${id}`)){

                upTitle=document.getElementById(`inT${id}`).value
                upBody=document.getElementById(`inB${id}`).value
  
                var listItem2=document.querySelector(`tr.list-item td:first-child`).nextElementSibling
                var listItem3=document.querySelector(`tr.list-item td:first-child`).nextElementSibling.nextElementSibling
  
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
  