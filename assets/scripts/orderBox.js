let orderBox = [];

// Bestell funkion
// Bestellung finden                                        Check
// bestellung speichern bzw in oderBox pushen               Check
// bestellung zusammenrechen                                noCheck
//Bestellung im warenkorb erhöhen verringern bzw löschen    noCheck
//bestellung zusammenrechnen                                noCheck
//zur kasse mit dialog aus mit dankes text                  noCheck

// Bestellung finden



function addToOrder (refCatalog,refCategory,refItem){
    const item = menuCatalog[refCatalog][refCategory][refItem] // daten des Eintrages 
    orderBox.push(item); // in das Array orderBox pushen
    console.log(orderBox); // FunkionsTest
}