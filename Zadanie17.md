# Zadanie 17

## Môj obchod - HTTP klient

**Zadanie**

- pridajte do `app.config.ts` appConfigu `provideHttpClient()`
- v `ProductService` odstráňte statické pole produktov a ponechajte prázdne pole
- pridajte do konštruktora `HttpClient`
- pridajte do `ProductService` funkciu `loadAllProducts` ktorá zavolá get na endpoint `https://fakestoreapi.com/products` a získané pole vloží do `products`
- `loadAllProducts` pridajte do `onInit` callbacku `product-list`

## EN

**Assignment**

* In `app.config.ts`, add `provideHttpClient()` to the app configuration
* In `ProductService`, remove the static product array and keep an empty array instead
* Inject `HttpClient` into the constructor of `ProductService`
* Add a method `loadAllProducts` that performs a GET request to `https://fakestoreapi.com/products` and stores the retrieved array into the `products` variable
* Call `loadAllProducts` inside the `onInit` lifecycle callback of the `product-list` component
