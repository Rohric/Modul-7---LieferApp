// Bestell funkion
// Bestellung finden                                        Check
// bestellung speichern bzw in oderBox pushen               Check
// bestellung zusammenrechen                                noCheck
//Bestellung im warenkorb erhöhen verringern bzw löschen    halfCheck
//bestellung zusammenrechnen                                noCheck
//zur kasse mit dialog aus mit dankes text                  noCheck

// Bestellung finden

let orderBox = [];

function addToOrder(refCatalog, refCategory, refItem) {
  const item = menuCatalog[refCatalog][refCategory][refItem]; // daten des Eintrages
  if (typeof item.Anzahl >0) 
    item.Anzahl = 0;
    item.Anzahl += 1;
  

  if (!orderBox.includes(item)) orderBox.push(item); // in das Array orderBox pushen
  console.log(orderBox); // FunkionsTest

}
