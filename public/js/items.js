fetchGET('/items', function(err, items) {
  if (err) {
    console.log(err);
  } else {
    console.log("front", items);
    renderHome(items);
  }
});

function renderHome(arr) {
  var itemTable = document.getElementById('items');
  arr.forEach(function(item) {
    //Create a new row and set the id to the id of the item displayed.
    var itemContainer = document.createElement('tr');
    itemContainer.setAttribute('id', "item_" + item.id);

    //Set the values of each column for that row.
    var itemName = document.createElement('td');
    itemName.setAttribute('class', 'content__items--col');
    itemName.textContent = item.name;
    var itemImage = document.createElement('img');
    itemImage.setAttribute('src', item.image);
    itemImage.setAttribute('class', 'content--image');
    itemName.appendChild(itemImage);
    itemContainer.appendChild(itemName);

    var description = document.createElement('td');
    description.setAttribute('class', 'content__items--col');
    description.textContent = item.description;
    itemContainer.appendChild(description);

    var price = document.createElement('td');
    price.setAttribute('class', 'content__items--col');
    price.textContent = item.price + "$";
    itemContainer.appendChild(price);

    var buyContainer = document.createElement('td');
    buyContainer.setAttribute('class', 'content__items--col');
    var buy = document.createElement('a');
    buy.setAttribute('href', '#');
    buy.setAttribute('class', 'items__purchase-link');
    buy.textContent = "Add to Cart";
    buyContainer.appendChild(buy);
    itemContainer.appendChild(buyContainer);

    //Append the new row to the table
    itemTable.appendChild(itemContainer);
  });
}
