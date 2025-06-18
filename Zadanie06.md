# Zadanie 06

## Môj obchod - routes

**Zadanie**

- v šablóne `product-list` komponente pridajte anchor tag s `routerLinkom` na `/cart` a textom `🛒 Košík`
- v šablóne `cart-list` komponente pridajte anchor tag s routerLinkom na `/` a textom `⬅ Späť`
- v `app.routes.ts` upravte mapovanie `routes`, aby odpovedalo správnym cestám a komponentom
- z hlavného aplikačného komponentu odstráňte `product-list` a `cart-list` - nahraďte ich `router-outletom`
- poupratujte importy v hlavnom aplikačnom komponente

## EN

**Assignment**

* In the `product-list` component template, add an anchor tag with a `routerLink` to `/cart` and the text `🛒 Cart`
* In the `cart-list` component template, add an anchor tag with a `routerLink` to `/` and the text `⬅ Back`
* In `app.routes.ts`, update the `routes` mapping so that the correct components are rendered for their respective paths
* Remove `product-list` and `cart-list` from the main application component and replace them with a `router-outlet`
* Clean up the imports in the main application component
