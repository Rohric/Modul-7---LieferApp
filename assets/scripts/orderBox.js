let orderBox = [];
let total = "";

// Rendering the OrderBox
function renderOrderBox() {
  const refOrderFromBox = document.getElementById("orderBoxList");
  let orders = "";

  // if orderBox is empty show this
  if (orderBox.length === 0) {
    refOrderFromBox.innerHTML = `
      <li class="order_box_empty">Noch leer – mach’ die Segel klar!</li>
    `;
    return; // fertig
  }

  for (let order = 0; order < orderBox.length; order++) {
    const refOrder = orderBox[order];

    const clickAdd = `increaseFromOrder(${order})`; 
    const clickRemove = `reduceFromOrder(${order})`;
    const clickDelete = `deleteOrder(${order})`; 

    orders += templateOrderBox(refOrder, clickAdd, clickDelete, clickRemove);
  }
  refOrderFromBox.innerHTML = orders;
}

// add selected Dish tomorderBox
function addToOrder(refCatalog, refCategory, refItem) {
  const item = menuCatalog[refCatalog][refCategory][refItem];
  if (!orderBox.includes(item)) orderBox.push(item); 
  item.Anzahl += 1;
  renderOrderBox();
  calculateTotalPrice();
}

// Item in OrderBox plus one
function increaseFromOrder(order) {
  const item = orderBox[order]; 
  item.Anzahl += 1;
  console.log(orderBox); 
  renderOrderBox();
  calculateTotalPrice();
}
// Item in OrderBox minus one
function reduceFromOrder(order) {
  const item = orderBox[order]; // daten des Eintrages
  item.Anzahl -= 1;
  if (item.Anzahl === 0) orderBox.splice(order, 1); // Aus dem Array slicen

  console.log(orderBox); // FunkionsTest
  renderOrderBox();
  calculateTotalPrice();
}
// Item in OrderBox delete complete
function deleteOrder(order) {
  const item = orderBox[order]; // daten des Eintrages
  item.Anzahl = 0;
  orderBox.splice(order, 1); // Aus dem Array slicen

  renderOrderBox();
  calculateTotalPrice();
  console.log(orderBox); // FunkionsTest
}

// open checkout Dialog and delete all in orderBox
const dialogRef = document.getElementById("dialogCheckout");

function checkout() {

  dialogRef.showModal();
  dialogRef.classList.add('opened')
  // all orderBox Items set Amount/Anzahl to 0
  for (let index = 0; index < orderBox.length; index++) {
    const item = orderBox[index];
    item.Anzahl = 0;
  }
  // emty complete orderBox
  orderBox.splice(0, orderBox.length);

  renderOrderBox();
  calculateTotalPrice();
}

// close checkoutDialog
function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}


// Math for the total price
function calculateTotalPrice() {
  const refOrderSum = document.getElementById("orderSumme");
  total = 0;

  for (let index = 0; index < orderBox.length; index++) {
    const order = orderBox[index];
    const amount = Number(order.Anzahl);
    const price = Number(order.Berry);
    total += amount * price;
  }
  if (refOrderSum) refOrderSum.textContent = formatBerry(total);
  return total;
}
// format price in germanFormat
function formatBerry(wert) {
  const nummer = Number(wert);
  return (
    new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(nummer) + " Berry"
  );
}

