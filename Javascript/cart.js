const cart_cont = document.getElementById("cart-container");
const cart_icon = document.getElementById("cart-icon");
const cart_icon_resp = document.getElementById("cart-icon-resp");

const price_p = document.getElementById("price");
const price_d = document.getElementById("domicilio");
const price_t = document.getElementById("price-total");

if(localStorage.getItem("prodSelect")){
	prodSelect = JSON.parse(localStorage.getItem("prodSelect"));
	createCart();
	highlightCart();
}else{
	prodSelect = new Array(products.length).fill(0);
	localStorage.setItem("prodSelect", JSON.stringify(prodSelect));
}

//Iterate trough the list and fill the cart with the selected products
function createCart() {
	while (cart_cont.firstChild) {
    	cart_cont.firstChild.remove()
	}	

	for (var i = 0; i < prodSelect.length; i++) {
		prod = products[i]; 	
		numProds = prodSelect[i];

		if(numProds != 0){
			var htmlCart = document.createElement('div');
			htmlCart.setAttribute('class', 'card mb-3');
			htmlCart.innerHTML =
			`
			<div class="row">
				<div class="col-sm-4">
					<img src="Assets/${prod.imagen}" class="img-fluid card-row hidden-sm rounded-start">
				</div>
				<div class="col-sm-8 ">
					<div class="card-body">
						<h5 class="card-title">${prod.nombre}</h5>
						<p class="card-subtitle">${prod.presentacion}</p></br>
						<div class="row"> 
							<div class="col-sm-4">
								<p class="price-text"><strong>x  ${numProds} </strong></p>
							</div>
							<div class="col-sm-8" class=cart-button">
								<button onClick="deleteFromCart(${i})" id="buttonDelete" class="btn btn-outline-danger price-text"> Eliminar </button> 
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
			`

			cart_cont.appendChild(htmlCart);
		}
	}

	//Calculate price of current prducts in cart and plce it in the html if cart is in the index.html
	var price = countPrice();
	var dom = 4000;
	var totalPrice = price + dom;
	console.log(price)

	price_p.innerHTML = '';
	price_p.innerHTML = ` <strong> Pedido: </strong> $${formatPrice(price)} `;

	price_d.innerHTML = '';
	price_d.innerHTML = ` <strong> Domicilio: </strong> $${formatPrice(dom)} `;

	price_t.innerHTML = '';
	price_t.innerHTML = ` <strong> Total:  $${formatPrice(totalPrice)} </strong> `;
		
}

//Gives price for items in cart
function countPrice(){
	var precio = 0;
	for (var i = 0; i < prodSelect.length; i++) {
		precioUnd = products[i].precio;
		cantidad = prodSelect[i]; 
		
		precio += precioUnd * cantidad;
	}
	return precio;
}

//After having something on the cart highlight both the mobile and desktop cart icon
function highlightCart(){
	full = false;
	for (var i = 0; i < prodSelect.length; i++) {
		if(prodSelect[i] != 0){
			full = true;
			break;
		}
	}

	if(full){
		cart_icon.classList.add('cart-full');
		cart_icon_resp.classList.add('cart-full');
		cart_icon.classList.remove('cart');
		cart_icon_resp.classList.remove('cart');
	}else{
		cart_icon.classList.add('cart');
		cart_icon_resp.classList.add('cart');
		cart_icon.classList.remove('cart-full');
		cart_icon_resp.classList.remove('cart-full');
	}
}

function deleteFromCart(i){
	prodSelect[i] = 0;
	localStorage.setItem("prodSelect", JSON.stringify(prodSelect));
	createCart();
	highlightCart();
}