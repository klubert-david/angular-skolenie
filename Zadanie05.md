# Zadanie 05

## Môj obchod - services

**Zadanie**

- v koreni `src/app` vytvorte nový priečinok `services`
- v tomto priečinku vygenerujte novú service pomocou príkazu `ng generate service cart`
- v novovytvorenej `CartService` pridajte novú premennú `cart`, ktorá bude poľom `CartItem {product: Product, quantity: number}`
- vytvorte pomocnú funkciu `addToCart`, kde na vstupe bude `product` a počet kusov
  - dohľadajte `find` medzi položkami v `cart` podľa `id` productu
  - ak existuje, navýšte počet o množstvo zo vstupu
  - ak neexistuje, tak ju pridajte do košíka
- vytvorte nový priečinok `cart`
- vygenerujte do neho nový komponent `cart-list`
- v konštruktore `cart-list` nainicializujte `cartService` službu
- zobrazte `cart-list` pod zoznamom produktov v hlavnom aplikačnom komponente
- v šablóne `cart-list` pridajte nadpis Košik, názov prvého produktu v košíku a počet kusov
- nakoľko zatiaľ nevieme interagovať s používateľom, pridajte do `ngOnInit` v komponente `product-list` volanie `addToCart` ľubovoľného produktu a množstva

## EN

**Assignment**

* In the root of `src/app`, create a new folder called `services`
* In this folder, generate a new service using the command: `ng generate service cart`
* In the newly created `CartService`, add a new variable `cart`, which will be an array of `CartItem { product: Product, quantity: number }`
* Create a helper function `addToCart` that takes a `product` and a quantity as arguments
  * Use `find` to look for a matching item in `cart` based on the product's `id`
  * If it exists, increase the quantity by the input amount
  * If it doesn't exist, add it to the cart
* Create a new folder named `cart`
* Inside it, generate a new component called `cart-list`
* In the constructor of `cart-list`, initialize the `CartService`
* Display the `cart-list` component below the product list in the main application component
* In the `cart-list` template, add a heading "Cart", the name of the first product in the cart, and its quantity
* Since we can't interact with the user yet, add a call to `addToCart` in the `ngOnInit` of the `product-list` component, using any product and quantity

