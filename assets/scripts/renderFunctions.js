// render funktion zur anzeige der items
function renderAllMainDishes() {
  const refCatalogItems = document.getElementById("menuCatalogTable");
  refCatalogItems.innerHTML = "";

  // Items aus dem Array holen und definieren um später darauf zuzugreifen zb für die buttons oder filter #plk
  const itemFish = menuCatalog.mainDishes.fishDishes;
  const itemMeat = menuCatalog.mainDishes.meatDishes;
  const itemCake = menuCatalog.desserts.dessertsCake;
  const itemSorbet = menuCatalog.desserts.dessertsSorbet;
  const itemDrinks = menuCatalog.drinks.cocktails;

  // HTML-render vorberieten(Buffer->zwischenspeicher) 
  // Freddy fragen warum ich das nicht direkt pber refCatalogItems machen
  let htmlAll = "";

  // Fisch anhängen
  htmlAll += templateSectionStart('Hauptgerichte','Fisch und Meeresfrüchte','assets/images/fisch.jpg')
  for (let indexDish = 0; indexDish < itemFish.length; indexDish++) {
    const catalogItem = itemFish[indexDish];
    htmlAll += templateMenuCatalog(catalogItem, `addToOrder('mainDishes','fishDishes',${indexDish})`);
  };

  // Fleisch anhängen
  htmlAll += templateSectionStart('Hauptgerichte','Fleisch','assets/images/fleisch.jpg')
  for (let indexDish = 0; indexDish < itemMeat.length; indexDish++) {
    const catalogItem = itemMeat[indexDish];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Kuchen anhängen
  htmlAll+= templateSectionStart('Desserts','Kuchen','assets/images/kuchen.jpg')
  for (let indexDish = 0; indexDish < itemCake.length; indexDish++) {
    const catalogItem = itemCake[indexDish];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Sorbet anhängen
  htmlAll+= templateSectionStart('Desserts','Sorbets','assets/images/sorbets.jpg')
  for (let indexDish = 0; indexDish < itemSorbet.length; indexDish++) {
    const catalogItem = itemSorbet[indexDish];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Cocktails anhängen
  htmlAll+= templateSectionStart('Getränke','Cocktails','assets/images/drinks.jpg')
  for (let indexDish = 0; indexDish < itemDrinks.length; indexDish++) {
    const catalogItem = itemDrinks[indexDish];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  

  // über DOM ins HTML übergebn
  refCatalogItems.innerHTML = htmlAll;
}





