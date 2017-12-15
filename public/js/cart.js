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
		price.setAttribute('id','price');
		price.setAttribute('class', 'content__items--col');
		price.textContent = item.price;
		row.appendChild(price);

		var del = document.createElement('td');
		var anchor = document.createElement('a');
		var inner = document.createElement('i');
		anchor.setAttribute('id','item_'+ item.id);
		del.setAttribute('id','item_'+ item.id);
		anchor.setAttribute('href','#');
		anchor.setAttribute('onclick','deleteItem(this)');
		inner.setAttribute('class', 'fa fa-trash');
		anchor.appendChild(inner);
		del.setAttribute('class', 'content__items--col');
		del.appendChild(anchor);
		row.appendChild(del);




		table.appendChild(row);



	});


	var last_row = document.createElement('tr');
	last_row.id = 'last_row';
	var textprice = document.createElement('td');
	var t_price = document.createElement('td');
	t_price.id = 't_price';
	textprice.textContent = 'Total Price';
	last_row.appendChild(textprice);
	last_row.appendChild(t_price);
	table.appendChild(last_row);

	window.setInterval(function() {
		var total = getTotalprice().toFixed(2);
		document.querySelector('#t_price').innerHTML = total;

	},500);


}

function getTotalprice() {
		var nodelist = document.querySelectorAll('#price');
		var arr = Array.from(nodelist);
		var total_price = 0;
		console.log(arr[0].innerHTML);
		arr.forEach(function (item) {
			total_price+=Number(item.innerHTML);
		});
		return total_price;
	}


function deleteItem(element) {
	var index = element.parentNode.parentNode.rowIndex;
	document.querySelector('#items').deleteRow(index);

}

function buy() {
	var amount = getTotalprice().toFixed(2);
	if (amount>500) {
		alert('You cannot buy items above 500');
	} else {
		var balance = (500-amount).toFixed(2);
		alert('Thanks for shopping with us, your balance is: '+ '$'+balance);
		window.location = "http://localhost:3000/buy.html";
	}
}

fetchGET('/cart', function(err, items) {
	if (err) {
		console.log(err);
	} else {
		console.log("front", items);
		renderCart(items);
	}
});
