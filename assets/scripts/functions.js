const menuFish = menuCatalog.mainDishes.fishDishes
const menuMeat = menuCatalog.mainDishes.meatDishes

const menuCake = menuCatalog.desserts.dessertsCake
const menuSorbet = menuCatalog.desserts.sorbet

const menuDrinks = menuCatalog.drinks

const menuAll = menuFish;menuMeat;menuCake;menuSorbet;menuDrinks

function getCatalogListFor(){
    const menuList = "";
for (let item = 0; item < menuAll.length; item++) {
    menuList += templateMenuCatalog(category);

}
    if (category === 'Fisch') return menuFish;
    if (category === 'Fleisch') return menuMeat;
    if (category === 'Kuchen') return menuCake;
    if (category === 'Sorbet') return menuSorbet;
    if (category === 'Drinks') return menuDrinks;

}