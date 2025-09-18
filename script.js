function init() {
  renderAllMainDishes();
}


const dialogRef = document.getElementById("dialogCheckout");

function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}
