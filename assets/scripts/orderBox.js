// Bestell funkion
// Bestellung finden                                        Check
// bestellung speichern bzw in oderBox pushen               Check
// bestellung zusammenrechen                                noCheck
// Bestellung im warenkorb erhöhen verringern bzw löschen   Check
// bestellung zusammenrechnen                                noCheck
// zur kasse mit dialog aus mit dankes text                  noCheck

let orderBox = [];
let total = "";


// Rendering vom WarenKorb-OrderBox / zusatz wäre eine zusätzliche sortierung
function renderOrderBox() {
  const refOrderFromBox = document.getElementById("orderBoxList");
  let orders = "";

  for (let order = 0; order < orderBox.length; order++) {
    const refOrder = orderBox[order];

    const clickAdd    = `increaseFromOrder(${order})`; // Anzahl ++
    const clickRemove = `reduceFromOrder(${order})`;   // Anzahl --
    const clickDelete = `deleteOrder(${order})`;       // sofort löschen

    // const clickCheckout = `deleteOrder(${order})`;       // checkout, dialog öffnen und alles löschen

    orders += templateOrderBox(refOrder, clickAdd, clickDelete, clickRemove);

  }
  refOrderFromBox.innerHTML = orders;
}

// Disch zu Warenkorb hinzufüren - funioniert
function addToOrder(refCatalog, refCategory, refItem) {
  const item = menuCatalog[refCatalog][refCategory][refItem]; // daten des Eintrages

  // wenn object noch nicht vorhanden ist, dann komplettes object hochpuschen, immer nur eins durch die if
  if (!orderBox.includes(item)) orderBox.push(item); // in das Array orderBox pushen
  // nur item Anzahl ins array puschen bzw aktualiesieren
  item.Anzahl += 1;
  // console.log(orderBox); // FunkionsTest
  renderOrderBox();
  orderMath();
}


// function zum erhöhen der Anzahl im Warenkorb
function increaseFromOrder(order){
  const item = orderBox[order]; // daten des Eintrages
  item.Anzahl += 1;
  console.log(orderBox); // FunkionsTest
  renderOrderBox();
  orderMath();
}
// function zum verringern der Anzahl im Warenkorb
function reduceFromOrder(order) {
  const item = orderBox[order]; // daten des Eintrages
  item.Anzahl -= 1;
  if (item.Anzahl === 0) orderBox.splice(order, 1); // Aus dem Array slicen

  console.log(orderBox); // FunkionsTest
  renderOrderBox();
  orderMath();
}
// function zum Löschen der gesamten Anzahl der einzelen Dish im Warenkorb
function deleteOrder(order){
  const item = orderBox[order]; // daten des Eintrages
  item.Anzahl = 0;
  orderBox.splice(order,1); // Aus dem Array slicen

  renderOrderBox();
  orderMath();
  console.log(orderBox); // FunkionsTest

}
// checkout, dialog öffnen und alles löschen
function checkout() {
  // Alle Warenkorb-Items zurücksetzen
  for (let index = 0; index < orderBox.length; index++) {
    const item = orderBox[index];
    item.Anzahl = 0;
  }

  //Warenkorb leeren
 orderBox.splice(0, orderBox.length)

  // 3) UI aktualisieren
  renderOrderBox();
  orderMath();
}


// Die Berechnung für den totalen Preis
function orderMath() {
  const refOrderSum = document.getElementById("orderSumme");
  total = 0;

  for (let index = 0; index < orderBox.length; index++) {
    const order = orderBox[index];
    const amount = Number(order.Anzahl);
    const price = Number(order.Berry);
    total += amount * price;
  }
  if (refOrderSum) refOrderSum.textContent = total;
  return total;
}
