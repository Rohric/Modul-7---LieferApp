// Templatefunkion zur Anzeige der einzelnen Catalog Einträgen
function templateMenuCatalog(item) {
  return ` <article class="catalog_table">

                <section class="catalog_item">
                    <h2>${item.Name}</h2>
                    <p>${item.Beschreibung}</p>
                    <em>${item.Lore}</em>
                </section>

                <section class="button_catalog">
                    <small>${item.Berry} Berry</small>
                    <button onclick="getOrder">in den korb</button>
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
      <div class="catalog_grid">
  `;
}

