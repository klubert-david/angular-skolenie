# Zadanie 14 fix

## Môj obchod - Reaktívne programovanie - mini-cart fix

**Zadanie**

- prerobte cart v `CartService` na writeable signal, refaktornite celú aplikáciu
- prerobte `addToCart` funkciu na `update` signalu cart
  - prehľadajte položky podľa poradia alebo id
  - ak existuje, záznam vráťte nové pole s navýšením počtom položiek
  - ak neexistuje, vráťte nové pole s novým záznamom
  - použiť môžete spread operátor `...`
- prerobte `numberOfItems` v `mini-cart` na `computed` signal - presuňte doň logiku z pôvodného `onInit`
- prerobte `totalPrice` v `cart-list` na `computed` signal - presuňte doň logiku z pôvodného `onInit`

## EN

**Assignment**

* Refactor the `cart` in `CartService` to be a **writable signal** instead of a regular variable
* Refactor the entire app to work with this new reactive signal structure
* Update the `addToCart` function to use `cart.update()` instead of directly modifying the array
  * Search the existing cart items by order or product `id`
  * If the product exists, return a new array with the quantity increased accordingly
  * If the product does not exist, return a new array with a new cart entry
  * You may use the spread operator `...` to keep immutability
* Refactor `numberOfItems` in `mini-cart` to be a **computed signal**, and move the original logic from `ngOnInit` into this signal

* Refactor `totalPrice` in `cart-list` to also be a **computed signal**, using the original logic from `ngOnInit` that multiplies quantity and price for all items in the cart
