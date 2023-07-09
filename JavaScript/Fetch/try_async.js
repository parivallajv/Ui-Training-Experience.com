const url="https://jsonplaceholder.typicode.com/users"

async function getData(){
try{
let response=await fetch(url)

if(!response.ok)throw new Error('resquest not available')
let data=await response.json()
console.log(data)
}
catch(err){
    console.warn(err.message)
}
}
getData()