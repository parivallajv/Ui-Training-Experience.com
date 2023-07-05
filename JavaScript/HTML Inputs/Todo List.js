// 1. Variable Declarations

var listContainer=document.getElementById('list-container')

var textNode=document.querySelector('.item')

var firstItem=document.getElementById('item 1')

var addItem=document.getElementById('add-btn')

var updateItem=document.getElementById('update-btn')

var deleteItem=document.getElementById('delete-btn')

var nameInp=document.getElementById('inp-name')

var list=document.getElementById('list')

// 2. Function for add Item

addItem.addEventListener('click',function(){

    if(nameInp.value===''||nameInp.value===undefined||nameInp.value===null){
        alert('please enter a value')
    }
    else{
    
    var newListItem=document.createElement('li')

    var editLogo=document.createElement('img')
    editLogo.src='./file-edit-icon.png'
    editLogo.classList.add('edit-logo')
    console.log(editLogo)

    var deleteLogo=document.createElement('img')
    deleteLogo.src='./pngwing.com (1).png'
    deleteLogo.classList.add('delete-logo')

    console.log(editLogo)
    console.log(deleteLogo)

    var textNode=document.createTextNode(nameInp.value)

    newListItem.className="item"
    

    newListItem.id="item "+listContainer.childElementCount

    newListItem.appendChild(textNode)
    newListItem.appendChild(editLogo)
    newListItem.appendChild(deleteLogo)
    
    list.appendChild(newListItem)
    
}

})

// 3. Function for Update Item

updateItem.addEventListener('click',function(){

    list.firstElementChild.innerHTML=nameInp.value

    var editLogo=document.createElement('img')
    editLogo.src='./file-edit-icon.png'
    editLogo.classList.add('edit-logo')
    // console.log(editLogo)

    var deleteLogo=document.createElement('img')
    deleteLogo.src='./pngwing.com (1).png'
    deleteLogo.classList.add('delete-logo')

    list.firstElementChild.appendChild(editLogo)
    list.firstElementChild.appendChild(deleteLogo)
    
    list.firstElementChild.className="item"
    
})

// 4. Function for delete Item

deleteItem.addEventListener('click',function(){
    
    if(list.childElementCount>1){
        
        var firstItem=list.firstElementChild
    list.removeChild(firstItem)
    }
    else{
        alert("we can't delete all list items")
    }
})

// 5. delete particular item



var deleteKey=document.querySelector(".delete-logo:last-child")
console.log(deleteKey)

var position=document.getElementById()

var item2=document.getElementById('item-2')

// var deleteKey=document.querySelector(`.delete-logo:${}`)

// console.log(deleteKey)

deleteKey.addEventListener('click',function(){
   
    console.log(deleteKey)

    item2.remove();

})




