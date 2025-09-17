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
function templateOrderBox(refOrder,refFunction) {
  return `
  
  <li class="order_box_item">
      <h3 class="order_title">${refOrder.Name}</h3>       

        <button>hinzufügen</button>
        <button onclick="${refFunction}">entfernen</button>
        <button>löschen</button>
   
      <ul class="order_points">                             
        <li>Menge: × ${refOrder.Anzahl}</li>
        <li>Einzelpreis: ${refOrder.Berry} Berry</li>
      </ul>
    </li>
  `;
}
