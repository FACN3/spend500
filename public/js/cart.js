function renderCart(items) {
	var table = document.querySelector('#items');
	var total_price = 0;
	items.forEach(function (item) {
		var row = document.createElement('tr');


		var name = document.createElement('td');
		name.setAttribute('class', 'content__items--col');
		name.textContent = item.name;
		row.appendChild(name);

		var description = document.createElement('td');
		description.setAttribute('class', 'content__items--col');
		description.textContent = item.description;
		row.appendChild(description);

		var price = document.createElement('td');
		price.setAttribute('class', 'content__items--col');
		price.textContent = '$' + item.price;
		row.appendChild(price);

		var del = document.createElement('td');
		var anchor = document.createElement('a');
		var inner = document.createElement('i');
		anchor.setAttribute('id','item_'+ item.id);
		del.setAttribute('id','item_'+ item.id);
		anchor.setAttribute('href','#');
		inner.setAttribute('class', 'fa fa-trash');
		anchor.appendChild(inner);
		del.setAttribute('class', 'content__items--col');
		del.appendChild(anchor);
		row.appendChild(del);




		table.appendChild(row);

		total_price += Number(item.price);
		
	});
	var total = '$' + total_price.toFixed(2);

	last_row = document.createElement('tr');
	var textprice = document.createElement('td');
	var t_price = document.createElement('td');
	t_price.textContent = total;
	textprice.textContent = 'Total Price';
	last_row.appendChild(textprice);
	last_row.appendChild(t_price);
	table.appendChild(last_row);


}


document.addEventListener('click',deleteItem(this));


function deleteItem(element) {
	var id = element.id;
	fetchGET('/del', function(error, items) {
		if (error) {console.log(error);}
		alert('Item deleted successfully');
	});
}




fetchGET('/cart', function(err, items) {
	if (err) {
		console.log(err);
	} else {
		console.log("front", items);
		renderCart(items);
	}
});


