// Templatefunkion zur Anzeige des start und end Bereiches
function templateSectionStart(CatalogBereich, Kategorie, imgSrc) {
  return `
    <section class="catalog_section" id="${Kategorie}">
      <header class="catalog_heading">
        <img src="${imgSrc}" alt="${Kategorie}" width="56" height="56">
        <h2 id="${CatalogBereich}-title">${Kategorie}</h2>
      </header>
  `;
}

// Templatefunkion zur Anzeige der einzelnen Catalog Einträgen
function templateMenuCatalog(catalogDish, refFunction) {
  return `
  <article class="catalog_table ">

        <section class="catalog_item">
            <h2>${catalogDish.Name}</h2>
            <p>${catalogDish.Beschreibung}</p>
            <em>${catalogDish.Lore}</em>
        </section>

        <section class="button_catalog">
            <small>${catalogDish.Berry} Berry</small>
            <button onclick="${refFunction}">in den korb</button>
        </section>
                
  </article>`;
}

// Templatefunkion zur Anzeige des Warenkorbes
function templateOrderBox(refOrder, clickAdd,clickDelete,clickRemove) {

  const menge = Number(refOrder.Anzahl); // Menge als Zahl
  const preis = Number(refOrder.Berry); // Preis als Zahl
  const zwischensumme = menge * preis; // Menge × Preis

  return `
  
  <li class="order_box_item">
      <h3 class="order_title">${refOrder.Name}</h3>       

        <button onclick="${clickAdd}">hinzufügen</button>
        <button onclick="${clickRemove}">entfernen</button>
        <button onclick="${clickDelete}">löschen</button>
   
      <ul class="order_points">                             
        <li>Menge: × ${refOrder.Anzahl}</li>
        <li>Einzelpreis: ${refOrder.Berry} Berry</li>
         <li>Zwischensumme: ${zwischensumme} Berry</li>
      </ul>
    </li>
  `;
}
