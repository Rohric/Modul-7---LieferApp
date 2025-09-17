// Templatefunkion zur Anzeige des start und end Bereiches 
function templateSectionStart(sectionId, refCatalog, refCategory, img) {
  return `
    <section class="catalog_section" id="${sectionId}">
      <header class="catalog_heading">
        <img src="${img}" alt="${refCategory}" width="56" height="56">
        <h2 id="${refCatalog}-title">${refCategory}</h2>
      </header>
  `;
}

// Templatefunkion zur Anzeige der einzelnen Catalog Einträgen
function templateMenuCatalog(catalogDish, refonClickFor) {
  return ` <article class="catalog_table ">

                <section class="catalog_item">
                    <h2>${catalogDish.Name}</h2>
                    <p>${catalogDish.Beschreibung}</p>
                    <em>${catalogDish.Lore}</em>
                </section>

                <section class="button_catalog">
                    <small>${catalogDish.Berry} Berry</small>
                    <button onclick="${refonClickFor}">in den korb</button>
                </section>
                
            </article>`;
}



