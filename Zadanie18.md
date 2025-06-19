# Zadanie 18

## Môj obchod - HTTP klient - interceptors

**Zadanie**

- vytvorte v priečinku `src/app/product` nový priečinok `category`
- vygenerujte do tohto priečinka nový komponent `category-filter`
- vytvorte v `ProductService` novú funkciu `loadCategories()`, ktorá bude volať GET endpoint `https://fakestoreapi.com/products/categories` a uložte ich do premennej `categories` v service
- pre každú kategóriu vykreslite `<button>` s názvom kategórie
- v onInite `category-filter` volajte `loadCategories` z `ProductService`
- pridajte novovytvorený `category-filter` nad zoznam produktov `product-list`
- vytvorte v `ProductService` novú funkciu `loadByCategory(category)`, ktorá bude volať GET endpoint `https://fakestoreapi.com/products/category/{categoryNázov}`
- po kliku na button s názvom kategórie zavolajte na `ProductService` novú funkciu `loadByCategory` s názvom zvolenej kategórie

## BONUS:
- vytvorte v priečinku `/src/app` nový priečinok `interceptors`
- vygenerujte do interceptors priečinka nový `cache` interceptor pomocou príkazu `ng generate interceptor cache`
- vo vygenerom interceptore pridajte premennú `let cache: HttpEvent<unknown>;`
- v samotnej funkcií interceptora pridajte podmienku v prípade ak request.method nie je `GET` alebo ak `request.url` neobsahuje `categories` pokračujete ` return next(req)`
- v prípade ak existuje niečo v cache tak to vrátite `return of(cache)`
- v prípade ak neexistuje niečo v cache tak request, rovnako ako v prvom prípade, vrátite naspäť avšak uložíte si jeho obsah do cache `tap`
- `cacheInterceptor` je potrebné pridať do appConfig v do provideHttpClient volaním `withInterceptors([cacheInterceptor])`


## EN

**Assignment**

* Create a new folder `category` inside `src/app/product`
* Generate a new component named `category-filter` in this folder
* In `ProductService`, create a new method `loadCategories()` that performs a GET request to `https://fakestoreapi.com/products/categories` and stores the result in a `categories` variable
* For each category, render a `<button>` displaying the category name
* In the `onInit` of `category-filter`, call `loadCategories()` from `ProductService`
* Add the `category-filter` component above the `product-list` in the layout
* Create a new method `loadByCategory(category)` in `ProductService`, which performs a GET request to `https://fakestoreapi.com/products/category/{categoryName}`
* On button click in `category-filter`, call `loadByCategory` from `ProductService` with the selected category name

## BONUS:

* Create a new folder `interceptors` inside `/src/app`
* Generate a new interceptor named `cache` using the command: `ng generate interceptor cache`
* In the generated interceptor, add a variable `let cache: HttpEvent<unknown>;`
* In the `intercept` function:
  * If the request method is not `GET` or the URL does not contain `categories`, return `next.handle(req)`
  * If there is something stored in `cache`, return it using `return of(cache)`
  * If not, forward the request using `next.handle(req)` and store the response in `cache` using `tap`
* Register the `cacheInterceptor` in `app.config.ts` by adding it to the `provideHttpClient()` call via `withInterceptors([cacheInterceptor])`
