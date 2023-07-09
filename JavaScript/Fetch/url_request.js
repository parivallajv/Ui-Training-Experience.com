const str='https://jsonplaceholder.typicode.com/users/'

function getData(){

    var url=new URL(str)

    var request=new Request (url,{
        headers:{'x-steve':'hello'},
        method:'GET',
        cache:"no-store"
    });

    fetch(request)
    .then(response=>{
        if(!response.ok)throw new Error('you have a problem with response')
        return request.json()
})
    .then(
        data=>console.log(data.id)
    )
    .catch(err=>console.warn(err.message))
}
getData()