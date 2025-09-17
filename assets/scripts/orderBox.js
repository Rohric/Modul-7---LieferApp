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

  for (let index = 0; index < orderBox.length; index++) {
    const refOrder = orderBox[index];
    orders += templateOrderBox(refOrder, `reduceFromOrder(${index})`);
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
  console.log(orderBox); // FunkionsTest
  renderOrderBox();
  orderMath();
  console.log(total);
}

// Disch wieder entfernen, erst eins bei null alles slicen. funkioniert nihct
function reduceFromOrder(orders) {
  const item = orderBox[orders]; // daten des Eintrages
  item.Anzahl -= 1;
  if (item.Anzahl === 0) orderBox.splice(orders, 1); // Aus dem Array slicen

  console.log(orderBox); // FunkionsTest
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
