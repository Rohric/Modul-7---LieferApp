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
  for (let idxItem = 0; idxItem < itemFish.length; idxItem++) {
    const catalogItem = itemFish[idxItem];
    htmlAll += templateMenuCatalog(catalogItem, `addToOrder('mainDishes','fishDishes',${idxItem})`);
  };

  // Fleisch anhängen
  htmlAll += templateSectionStart('Hauptgerichte','Fleisch','assets/images/fleisch.jpg')
  for (let idxItem = 0; idxItem < itemMeat.length; idxItem++) {
    const catalogItem = itemMeat[idxItem];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Kuchen anhängen
  htmlAll+= templateSectionStart('Desserts','Kuchen','assets/images/kuchen.jpg')
  for (let idxItem = 0; idxItem < itemCake.length; idxItem++) {
    const catalogItem = itemCake[idxItem];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Sorbet anhängen
  htmlAll+= templateSectionStart('Desserts','Sorbets','assets/images/sorbets.jpg')
  for (let idxItem = 0; idxItem < itemSorbet.length; idxItem++) {
    const catalogItem = itemSorbet[idxItem];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  // Cocktails anhängen
  htmlAll+= templateSectionStart('Getränke','Cocktails','assets/images/drinks.jpg')
  for (let idxItem = 0; idxItem < itemDrinks.length; idxItem++) {
    const catalogItem = itemDrinks[idxItem];
    htmlAll += templateMenuCatalog(catalogItem);
  }

  

  // über DOM ins HTML übergebn
  refCatalogItems.innerHTML = htmlAll;
}





