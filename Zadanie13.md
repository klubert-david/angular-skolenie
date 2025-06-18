# Zadanie 13

## Môj obchod - @Output

**Zadanie**

- v triede `product-item` komponentu vytvorte nový `EventEmmitter` s názvom `addToCartClicked`
- po kliku na tlačidlo, namiesto volania `cartService` a navigovania do košíka emitnite na `addToCartClicked` udalosť, obsahom bude aktuálny `product`
- v šablóne komponentu `product-list` pridajte event binding na `<app-product-item>` kde prepojíte `(addToCartClicked)` event s novou `addToCart` funkciou priamo v `product-list` componente
- pôvodnú logiku volania `cartService.addToCart` a navigovania do košíka presuňte do parent komponentu tzn. `product-list`

## EN

**Assignment**

* In the `product-item` component class, create a new `EventEmitter` named `addToCartClicked`
* On button click, instead of calling the `cartService` and navigating to the cart, emit an event through `addToCartClicked` with the current `product` as its payload
* In the `product-list` component template, add an event binding on `<app-product-item>` to connect the `(addToCartClicked)` event to a new `addToCart` function defined in the `product-list` component
* Move the original logic for calling `cartService.addToCart` and navigating to the cart into the parent component, i.e., `product-list`
