var container=document.createElement('div')
document.body.appendChild(container)

var div=document.createElement('div')
div.classList.add('list')
div.id="sub-container"
container.appendChild(div)

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(json=>{
    let obj={}
    newArr=[]
    json.forEach(products => {

        let obj={
            pId:products.id,
            title:products.title,
            price:products.price,
            image:products.image
        }
        
        newArr.push(obj)
    });
    
    console.log(newArr)
    newArr.forEach(obj => {
        var div=document.createElement('div')
        div.classList.add('list')
        container.appendChild(div)

        var span=document.createElement("span")
        span.append(`${obj.pId} . `)
        div.appendChild(span)
        span.classList.add("paragraph")

        var titlespan=document.createElement("span")
        titlespan.append(`${obj.title}   `)
        div.appendChild(titlespan)
        div.append(obj.price)

        var image=document.createElement('img')
        image.append(`${obj.image}`)
        image.src=obj.image
        image.style.width="200px"
        image.style.height="200px"
        image.classList.add('image')
        div.appendChild(image)

        var Delbutton=document.createElement('button')
        Delbutton.innerHTML="Delete"

        var editButton=document.createElement('button')
        editButton.innerHTML="Edit"

        Delbutton.classList.add('btn-area')
        editButton.classList.add('btn-area')

        div.append(Delbutton)
        div.append(editButton)

        // Delbutton.addEventListener('click',function(){
        //     for(i=0;i<newArr.length;i++){
        //         if()
        //     }
        // })

    });
})
