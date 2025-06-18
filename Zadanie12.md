# Zadanie 12

## Môj obchod - events

**Zadanie**

- v triede `product-item` komponentu vytvorte funkciu `toCart()`, ktorej obsahom bude:
  - volanie `cartService.addToCart` s produktom a počtom `1ks`
  - zmena navigácie `(navigate)` v `routeri` na stránku `/cart`
- do šablóny `product-item` komponentu pridajte `<button>` s textom: `➕ Pridať do košíka` a klikom na `toCart()`
- odstráňte nepotrebné testovacie plnenie `addToCart` v OnInit `product-listu`
- odstráňte totalPrice z `product-list` komponentu a logiku presuňte do `cart-list`

## EN

**Assignment**

* In the `product-item` component class, create a function `toCart()` that will:
  * Call `cartService.addToCart` with the product and a quantity of 1
  * Use the router’s `navigate` method to redirect to the `/cart` page
* In the `product-item` component template, add a `<button>` with the text: `➕ Pridať do košíka` that calls `toCart()` on click
* Remove the unnecessary test `addToCart` call from the `ngOnInit` method
* Remove totalPrice from `product-list` component and add the same logic to the `cart-list`
