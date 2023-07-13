 // Problem - 2
 var pets = ["Dog", "Chicken","Cat","Rabbit","Cow","Goat"];

    selector=document.querySelector('.selector')

    var res=pets.map((data)=>{

        id=selector.childElementCount
        
        var opt=document.createElement('option')
        opt.id=`${id}`
        opt.innerHTML=`${data}`
        opt.setAttribute("onchange",`changeImg(${id})`)
        
        opt.innerHTML=`${data}`

        selector.appendChild(opt)
    })


    function changeImg(id){

        console.log(id);
        
        var lId=document.getElementById(`${id}`)
        
        // console.log(id);
        if(lId.innerHTML.startsWith(`${id}`)){

            var div=document.createElement('div')

            var dataId=`petData.id${0}`
            var img=dataId.nextElementSibling
            // div.innerHTML=img
        }

    }

 let petData=[
    {
        id:1,
        petName:"Dog",
        Image:'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1380&t=st=1689245745~exp=1689246345~hmac=7458b11ae85667aafe72c6334d07b51ac19a8c856c6168d59c51ae611a413b76'
    },
    {
        id:2,
        petName:"Chicken",
        Image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id:3,
        petName:"Cat",
        Image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id:4,
        petName:"Rabbit",
        Image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id:5,
        petName:"Cow",
        Image:"https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg"
    },
    {
        id:6,
        petName:"Goat",
        Image:"https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
 ]

