// Templatefunkion zur Anzeige des start und end Bereiches
function templateSectionStart(refCategory, img, refCatalog) {
  return `
    <section class="catalog_section" id="${refCategory}">
      <header class="catalog_header" style="--bg-image: url('${img}')">
        <h2 class="catalog_title">${refCategory}</h2>
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
            <small>${formatBerry(catalogDish.Berry)}</small>
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

      <div class="order_menu">
        <button class="order_buttons" onclick="${clickAdd}">➕</button>
        <button class="order_buttons" onclick="${clickRemove}">➖</button>
        <button class="order_buttons" onclick="${clickDelete}">🗑</button>
      </div>
   
      <ul class="order_points">                             
        <li>Menge: × ${refOrder.Anzahl}</li>
        <li>Einzelpreis: ${formatBerry(preis)}</li>
        <li>Zwischensumme: ${formatBerry(zwischensumme)}</li>
      </ul>
    </li>
  `;
}
