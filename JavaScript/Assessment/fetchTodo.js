// 2. Fetching Todos

newArr1=[]
var table1=document.getElementById('list-2')

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

        var listDiv=document.createElement('div')
        listDiv.classList.add('list-item')
        var liTitle=document.createElement('li')
        liTitle.innerHTML=`${nId}. ${nTitle}`

        var liBody=document.createElement('li')
        liBody.innerHTML=`${nBody}  <div id=buttons><button onClick="onEdit(${nId})" class="btn">Edit</button> <button onClick="onDelete(${nId})" class="btn">Delete</button></div>`
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)

        table1.appendChild(listDiv)
            }    
        )
    }
);
