newArr = [];
var table = document.getElementById('list-1');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  })
  .then(data => {
    data.forEach(element => {
      var nId = element.id;
      var nTitle = element.title;
      var nBody = element.body;

      var listDiv = document.createElement('div');
      listDiv.classList.add('list-item');
      var liTitle = document.createElement('li');
      liTitle.innerHTML = `${nId}. ${nTitle}`;

      var liBody = document.createElement('li');
      liBody.innerHTML = `${nBody}  <div id="buttons"><button onClick="onEdit()" class="btn">Edit</button> <button onClick="onDelete(${nId})" class="btn">Delete</button></div>`;
      listDiv.appendChild(liTitle);
      listDiv.appendChild(liBody);

      table.appendChild(listDiv);
    });
  });

function onDelete(newId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${newId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.status == 200) {
        
        var listItem = document.querySelector(`div.list-item li:first-child`);
        console.log(listItem)
        while (listItem) {
          if (listItem.innerHTML.startsWith(`${newId}.`)) {
            listItem.parentElement.remove();
            break;
          }
          listItem = listItem.parentElement.nextElementSibling.querySelector('li:first-child');
        }
      } 
    })
    
}
