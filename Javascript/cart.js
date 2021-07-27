prodSelect = new Array(products.length).fill(0);
const cart_cont = document.getElementById("cart-container");


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

console.log(prodSelect)