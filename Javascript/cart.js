prodSelect = new Array(products.length).fill(0);
const cart_cont = document.getElementById("cart-container");
const cart_icon = document.getElementById("cart-icon");
const cart_icon_resp = document.getElementById("cart-icon-resp");


function createCart(prod, index) {
	if(prodSelect[index] != 0){
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
					<p class="card-subtitle">${prod.presentacion}</p><br>
					<input type="number" class="form-control" id="amount-picker-off" value="${prodSelect[index]}" min="0" max="20"/> 
				</div>
			</div>
		</div>
		`

		cart_cont.appendChild(htmlCart);
	}
}

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