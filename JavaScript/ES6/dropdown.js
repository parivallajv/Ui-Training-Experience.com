 // Problem - 2
 var pets = ["Dog", "Chicken","Cat","Rabbit","Cow","Goat"];

    let selector=document.querySelector('.selector')
    

    var res=pets.map((data)=>{

        id=selector.childElementCount
        var opt=document.createElement('option')
        opt.id=`${id}`
        opt.innerHTML=`${data}`
        selector.appendChild(opt)
    })

    let petData=[
        {
            id:1,
            petName:"Dog",
            image:'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1380&t=st=1689245745~exp=1689246345~hmac=7458b11ae85667aafe72c6334d07b51ac19a8c856c6168d59c51ae611a413b76'
        },
        {
            id:2,
            petName:"Chicken",
            image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            id:3,
            petName:"Cat",
            image:"https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        },
        {
            id:4,
            petName:"Rabbit",
            image:"https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
        },
        {
            id:5,
            petName:"Cow",
            image:"https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg"
        },
        {
            id:6,
            petName:"Goat",
            image:"https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
     ]
     var container=document.createElement('div')
     var img=document.createElement('img')
     
     img.style.width="300px"
     container.appendChild(img)
     document.body.appendChild(container)
    
    function changeImg(id){
            
    petData.map((data)=>{
            if(data.petName==id){
                
                // var container=document.createElement('div')
                // var img=document.createElement('img')
                img.src=data.image
                // console.log(img);
            }
            
    })











    }

 

