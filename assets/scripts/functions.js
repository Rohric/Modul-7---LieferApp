// render funktion zur anzeige der items
function renderAllMainDishes(dataItem) {
  const refCatalogItems = document.getElementById("menuCatalogTable");
  refCatalogItems.innerHTML = "";

  // Items aus dem Array holen und definieren um später darauf zuzugreifen zb für die buttons oder filter #plk
  const itemFish = menuCatalog.mainDishes.fishDishes;
  const itemMeat = menuCatalog.mainDishes.meatDishes;
  const itemCake = menuCatalog.desserts.dessertsCake;
  const itemSorbet = menuCatalog.desserts.dessertsSorbet;
  const itemDrinks = menuCatalog.drinks

  // HTML-render vorberieten(Buffer->zwischenspeicher) 
  // Freddy fragen warum ich das nicht direkt pber refCatalogItems machen
  let htmlAll = "";

  // Fisch anhängen
  htmlAll += templateSectionStart('Hauptgerichte','Fisch und Meeresfrüchte','assets/images/fisch.jpg')
  for (let idxItem = 0; idxItem < itemFish.length; idxItem++) {
    const dataItem = itemFish[idxItem];
    htmlAll += templateMenuCatalog(dataItem);
  };

  // Fleisch anhängen
  htmlAll += templateSectionStart('Hauptgerichte','Fleisch','assets/images/fleisch.jpg')
  for (let idxItem = 0; idxItem < itemMeat.length; idxItem++) {
    const dataItem = itemMeat[idxItem];
    htmlAll += templateMenuCatalog(dataItem);
  }

  // Kuchen anhängen
  htmlAll+= templateSectionStart('Desserts','Kuchen','assets/images/kuchen.jpg')
  for (let idxItem = 0; idxItem < itemCake.length; idxItem++) {
    const dataItem = itemCake[idxItem];
    htmlAll += templateMenuCatalog(dataItem);
  }

  // Sorbet anhängen
  htmlAll+= templateSectionStart('Desserts','Sorbets','assets/images/sorbets.jpg')
  for (let idxItem = 0; idxItem < itemSorbet.length; idxItem++) {
    const dataItem = itemSorbet[idxItem];
    htmlAll += templateMenuCatalog(dataItem);
  }

  // Kuchen anhängen
  htmlAll+= templateSectionStart('Getränke','Lieblingsdrinks','assets/images/drinks.jpg')
  for (let idxItem = 0; idxItem < itemDrinks.length; idxItem++) {
    const dataItem = itemDrinks[idxItem];
    htmlAll += templateMenuCatalog(dataItem);
  }

  // über DOM ins HTML übergebn
  refCatalogItems.innerHTML = htmlAll;
}





