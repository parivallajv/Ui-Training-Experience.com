// 2. Fetching Todos

newArr2=[]
var table2=document.getElementById('list-3')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>{
    if(res.status==200){
        data=res.json()
        // console.log("fetchUser");
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

        var liBody=document.createElement('li')
        liBody.innerHTML=`${nBody}  <div id=buttons><button onClick="onEdit(${nId})" class="btn">Edit</button> <button onClick="onDelete(${nId})" class="btn">Delete</button></div>`
        listDiv.appendChild(liTitle)
        listDiv.appendChild(liBody)

        table2.appendChild(listDiv)
            }    
        )
    }
);
