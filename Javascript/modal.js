var modal = document.getElementById('prod-modal')
modal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-index')

  const prod = products[recipient];

  var modalTitle = modal.querySelector('#title-prod-modal')
  var modalSubtitle = modal.querySelector('#subtitle-prod-modal')
  var modalText = modal.querySelector('#text-prod-modal')
  var modalPrice = modal.querySelector('#price-prod-modal')
  var modalImg = modal.querySelector('#img-prod-modal')

  modalImg.src = "Assets/" + prod.imagen;
  modalTitle.textContent = prod.nombre;
  modalSubtitle.textContent = prod.presentacion;
  modalText.textContent = prod.descripcion;
  modalPrice.textContent = "Precio: $" + formatPrice(prod.precio);
})
