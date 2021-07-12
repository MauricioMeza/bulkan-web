const popRow = document.getElementById("pop-row");
const licRow = document.getElementById("lic-row");
const crcRow = document.getElementById("crc-row");
const otrRow = document.getElementById("otr-row");

products.forEach(createCard)

function createCard(prod, index){
	if(prod.disponible){
		//Create HTML Card
		precio = formatPrice(prod.precio);
		var htmlCard = document.createElement('div');
		htmlCard.setAttribute('class', 'col-lg-3 mx-auto my-3');
		htmlCard.innerHTML =
		`<div class="card carrousel-card shadow">
			<a data-bs-toggle="modal" data-bs-target="#prod-modal" data-bs-index=${index}>
				<img class="card-img-top img-select" src="Assets/${prod.imagen}" alt="Card image">
			</a>
			<div class="card-body">
				<h4 class="card-title">${prod.nombre}</h4>
				<h5 class="card-subtitle">${prod.presentacion}</h5>
				<p class="card-text">$${precio}</p>
				<a class="card-btn btn btn-secondary" data-bs-toggle="modal" data-bs-target="#prod-modal" data-bs-index=${index}> Informacion del Producto </a>
			</div>
		</div>`

		//Set it to one or more row containers
		switch(prod.tipo){
			case "l":
				licRow.appendChild(htmlCard.cloneNode(true));
			break;
			case "c":
				crcRow.appendChild(htmlCard.cloneNode(true));
			break;
			case "o":
				otrRow.appendChild(htmlCard.cloneNode(true));
			break;
		}

		if(prod.popular){
			popRow.appendChild(htmlCard.cloneNode(true));	
		}
	}
}

function formatPrice(num){
	return (num/1000).toFixed(3)	
}

/*
<div class="col-lg-3 mx-auto my-3">
	<div class="card carrousel-card shadow">
		<img class="card-img-top img-select" src="Assets/poker-6pack.jpg" alt="Card image">
		<div class="card-body">
			<h4 class="card-title">Cerveza Poker</h4>
			<h5 class="card-subtitle">Six Pack</h5>
			<p class="card-text">$15.000</p>
		</div>
	</div>
</div>
*/