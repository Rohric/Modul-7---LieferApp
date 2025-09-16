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
  return ` <article class="catalog_table ">

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



