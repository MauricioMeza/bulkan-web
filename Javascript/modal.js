var modal = document.getElementById('prod-modal')
var modalTitle = modal.querySelector('#title-prod-modal')
var modalSubtitle = modal.querySelector('#subtitle-prod-modal')
var modalText = modal.querySelector('#text-prod-modal')
var modalPrice = modal.querySelector('#price-prod-modal')
var modalImg = modal.querySelector('#img-prod-modal')

var $pick = $("#amount-picker")
var addButton = document.getElementById('addButton')

var recipient;

modal.addEventListener('show.bs.modal', function (event) {
  //--Button that triggered the modal
  var button = event.relatedTarget
  //--Extract info from data-bs-* attributes
  recipient = button.getAttribute('data-bs-index')

  //--Get product for this modal and set its info
  const prod = products[recipient];

  modalImg.src = "Assets/" + prod.imagen;
  modalTitle.textContent = prod.nombre;
  modalSubtitle.textContent = prod.presentacion;
  modalText.textContent = prod.descripcion;
  modalPrice.textContent = "Precio: $" + formatPrice(prod.precio);

  //--Check amount in order and set it to picker
  var quantity = 1;
  if(prodSelect[recipient] != 0){
    quantity = prodSelect[recipient]
  }
  $pick.val(quantity);

  //--Make button add the product and its amount to cart
  try{
    addButton.removeEventListener('click', addProd)
  }catch(error){
    console.log(error)
    console.log("first time adding functionality")
  }
  addButton.addEventListener('click', addProd)
  
})

var addProd = function(event){
  prodSelect[recipient] = parseInt($pick.val());
  createCart();
  highlightCart();
}
