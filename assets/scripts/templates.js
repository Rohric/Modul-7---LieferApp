// Templatefunkion zur Anzeige der einzelnen Catalog Einträgen
function templateMenuCatalog(catalogItem, refFunction) {
  return ` <article class="catalog_table ">

                <section class="catalog_item">
                    <h2>${catalogItem.Name}</h2>
                    <p>${catalogItem.Beschreibung}</p>
                    <em>${catalogItem.Lore}</em>
                </section>

                <section class="button_catalog">
                    <small>${catalogItem.Berry} Berry</small>
                    <button onclick="${refFunction}">in den korb</button>
                </section>
                
            </article>`;
}

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

