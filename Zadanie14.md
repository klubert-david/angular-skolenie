# Zadanie 14

## Môj obchod - Reaktívne programovanie - mini-cart

**Zadanie**

- v priečinku `src/app/header` vygenerujte nový komponent `mini-cart`
- `mini-cart` komponent zobrazte v hlavičke `header` komponente nad logom a nadpisom
- do šablóny novovytvoreného komponentu presuňte zo šablóny `product-list` achor s preklikom a textom `🛒 Košík`
- v triede `mini-cart` vytvorte novú premennú `numberOfItems` typu `number`
- `numberOfItems` zobrazte v šablóne `mini-cart` so sprievodným textom `Počet položiek:`
- pridajte `onInit` kde do `numberOfItems` napočítate `reduce` počet položiek v košíku z `cartService.cart`

## EN

**Assignment**

- In the `src/app/header` folder, generate a new component named `mini-cart`
- Display the `mini-cart` component inside the `header` component, above the logo and heading
- Move the anchor tag with the cart link and text `🛒 Košík` from the `product-list` template into the `mini-cart` template
- In the `mini-cart` class, create a new variable `numberOfItems` of type `number`
- Display `numberOfItems` in the `mini-cart` template with the accompanying text `Počet položiek:`
- Add an `OnInit` method where you use `reduce` to calculate the total number of items in the cart from `cartService.cart` and assign it to `numberOfItems`
