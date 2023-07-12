// 3. Fetching users

var table2=document.getElementById('list-3')
var tableHead3=document.createElement('thead')
table2.appendChild(tableHead3)

var th31=document.createElement('th')
th31.classList.add('title-color')
th31.innerHTML="Id"
tableHead3.appendChild(th31)

var th32=document.createElement('th')
th32.classList.add('title-color')
th32.innerHTML="Name"
tableHead3.appendChild(th32)

var th33=document.createElement('th')
th33.classList.add('title-color')
th33.innerHTML="Company Name"
tableHead3.appendChild(th33)

var th34=document.createElement('th')
th34.classList.add('title-color')
th34.innerHTML="Action"
tableHead3.appendChild(th34)

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

        var listDiv=document.createElement('tr')
        listDiv.classList.add('list-item3')

        var lId=document.createElement('td')
        lId.innerHTML=`${nId}`

        var liTitle=document.createElement('td')
        liTitle.innerHTML=`${nTitle}`

        var liBody=document.createElement('td')
        liBody.innerHTML=`${nBody}`

        var liButtons=document.createElement('td')
        liButtons.id="buttons"
        liButtons.innerHTML=`<button onClick="onEdit3(${nId})" class="btn">Edit </button> 
        <button onClick="onDelete3(${nId})" class="btn">Delete</button>
        <input type="text" placeholder="Enter Updated Name" id="innnT${nId}"></input> 
        <input type="text" placeholder="Enter Company Name" id="innnB${nId}"></input>`

        // var liBody=document.createElement('li')
        // liBody.innerHTML=`${nBody} `
        listDiv.appendChild(lId)
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)
        listDiv.appendChild(liButtons)
        table2.appendChild(listDiv)
        }    
    )
  }
);


// 2. OnDelete function

function onDelete3(newId){
    fetch(`https://jsonplaceholder.typicode.com/users/${newId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status == 200) {
          var listItem = document.querySelector(`tr.list-item3 td:first-child`);
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
  
function onEdit3(id) {

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
          var listId = document.querySelector(`tr.list-item3 td:first-child`);
            while (listId) {
              if (listId.innerHTML.startsWith(`${id}`)){
  
                upTitle=document.getElementById(`innnT${id}`).value
                upBody=document.getElementById(`innnB${id}`).value
  
                var listItem2=document.querySelector(`tr.list-item3 td:first-child`).nextElementSibling
                var listItem3=document.querySelector(`tr.list-item3 td:first-child`).nextElementSibling.nextElementSibling
  
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
  