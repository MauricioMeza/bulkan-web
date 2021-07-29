prodSelect = new Array(products.length).fill(0);
const cart_cont = document.getElementById("cart-container");
const cart_icon = document.getElementById("cart-icon");
const cart_icon_resp = document.getElementById("cart-icon-resp");

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
			<div class="row g-0">
				<div class="col-md-4">
					<img src="Assets/${prod.imagen}" class="img-fluid rounded-start">
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">${prod.nombre}</h5>
						<p class="card-subtitle">${prod.presentacion}</p></br>
						<div class="row"> 
							<div class="col-md-6">
								<p class="price-text"><strong>No: </strong> ${numProds}</p>
							</div>
							<div class="col-md-6">
								<button onClick="deleteFromCart(${i})" id="buttonDelete" class="btn btn-danger price-text"> Eliminar </button> 
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
			`
			cart_cont.appendChild(htmlCart);
		}
	}
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
	createCart();
	highlightCart();
}