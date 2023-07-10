var container = document.createElement('div');
document.body.appendChild(container);
var div = document.createElement('div');
div.classList.add('list');
div.id = "sub-container";
container.appendChild(div);
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(json => {
    let newArr = [];
    json.forEach(products => {
      let obj = {
        pId: products.id,
        title: products.title,
        price: products.price,
        image: products.image
      };
      newArr.push(obj);
    });
    newArr.forEach(obj => {
      var div = document.createElement('div');
      div.classList.add('list');
      container.appendChild(div);
      var span = document.createElement("span");
      span.append(`${obj.pId} . `);
      div.appendChild(span);
      span.classList.add("paragraph");
      var titlespan = document.createElement("span");
      titlespan.append(`${obj.title}   `);
      div.appendChild(titlespan);
      div.append(obj.price);
      var image = document.createElement('img');
      image.src = obj.image;
      image.style.width = "200px";
      image.style.height = "200px";
      image.classList.add('image');
      div.appendChild(image);
      var delButton = document.createElement('button');
      delButton.innerHTML = "Delete";
      delButton.classList.add('btn-area');
      div.appendChild(delButton);
      delButton.addEventListener('click', () => {
        newArr = newArr.filter(item => item.pId !== obj.pId); // Remove product from newArr array
        container.removeChild(div); // Remove DOM element
      });
      var editButton = document.createElement('button');
      editButton.innerHTML = "Edit";
      editButton.classList.add('btn-area');
      div.appendChild(editButton);
    });
  });