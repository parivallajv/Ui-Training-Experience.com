var url="https://jsonplaceholder.typicode.com/users/"

fetch(url)
.then(res=>{
    if(!res.ok) throw new Error('you have entered is not a valid response')
    return res.json()
})
// .then(res=>res.json())
.then(data=>console.log(data[0].name))
.catch(err=>console.warn(err.message))

// 2. this is normal function and it is always fail
// var response=fetch(url)
// console.log(response)
// var data = response.json()
// console.log(data)