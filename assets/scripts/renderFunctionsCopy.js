// inhalte der KatalogeBereiche angeben

const sections = [
  { 
    id: 'Fisch&Meeresfrüchte',                      // eindeutige ID (für Anker)
    refCatalog: 'Hauptgerichte',                    // welcher Katalog also bereich im array
    refCategory: 'Fisch&Meeresfrüchte',             // welche Category, für template
    img: 'assets/images/fisch.jpg',                 // Bild der c´kategorien
    refDish: menuCatalog.mainDishes.fishDishes,     // Quelle der Dish im Array
    onClickFor: (i) => `addToOrder('mainDishes','fishDishes',${i})` // index vom button
  },
  { 
    id: 'Fleisch',
    refCatalog: 'Hauptgerichte',
    refCategory: 'Fleisch',
    img: 'assets/images/fleisch.jpg',
    refDish: menuCatalog.mainDishes.meatDishes,
    onClickFor: (i) => `addToOrder('mainDishes','meatDishes',${i})`
  },
  {
    id: 'Kuchen',
    refCatalog: 'Desserts',
    refCategory: 'Kuchen',
    img: 'assets/images/kuchen.jpg',
    refDish: menuCatalog.desserts.dessertsCake,
    onClickFor: (i) => `addToOrder('desserts','dessertsCake',${i})`
  },
  {
    id: 'Sorbets',
    refCatalog: 'Desserts',
    refCategory: 'Sorbets',
    img: 'assets/images/sorbets.jpg',
    refDish: menuCatalog.desserts.dessertsSorbet,
    onClickFor: (i) => `addToOrder('desserts','dessertsSorbet',${i})`
  },
  {
    id: 'Lieblingsdrinks',
    refCatalog: 'Getränke',
    refCategory: 'Cocktails',
    img: 'assets/images/drinks.jpg',
    refDish: menuCatalog.drinks.cocktails,
    onClickFor: (i) => `addToOrder('drinks','cocktails',${i})`
  }
];

// render funktion zur anzeige der items
function renderAllMainDishes() {
  const refCatalogItems = document.getElementById('menuCatalogTable');
  refCatalogItems.innerHTML = "";



  // HTML-render vorberieten(Buffer->zwischenspeicher)

  let htmlAll = "";                         // Sammel-String: hier hänge ich alles HTML an
  for (const s of sections) {               // Schleife über alle Bereiche (Fisch, Fleisch, …)
    
    // kategorie-Header bauen (Überschrift + Bild)
    htmlAll += templateSectionStart(s.refCategory, s.img, s.refCatalog);
    
    // Jetzt die einzelnen Karten/Items in dieser Section durchgehen
    for (let index = 0; index < s.refDish.length; index++) {
      const item = s.refDish[index];        // das aktuelle Gericht/Getränk-Objekt
  
      // Karte rendern und anhängen, index von onclick weitergeben!
      htmlAll += templateMenuCatalog(item, s.onClickFor(index));
    }
  }
  // Am Ende: das gesamte gebaute HTML in den Container schreiben
  refCatalogItems.innerHTML = htmlAll;
}
