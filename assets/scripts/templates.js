// Templatefunction to show Header from each Section
function templateSectionStart(refCategory, img, refCatalog) {
  return `
    <section class="catalog_section" id="${refCategory}">
      <header class="catalog_header" style="--bg-image: url('${img}')">
        <h2 class="catalog_title">${refCategory}</h2>
      </header>
  `;
}


// Templatefunction to show each segment from Catalog
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

// Templatefunction to show orderBox
function templateOrderBox(refOrder, clickAdd,clickDelete,clickRemove) {

  const menge = Number(refOrder.Anzahl); // Number is from JS. string to number
  const preis = Number(refOrder.Berry); // 
  const zwischensumme = menge * preis; // 

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
