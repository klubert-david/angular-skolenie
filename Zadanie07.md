# Zadanie 07

## Môj obchod - parametrizované routes

**Zadanie**

- v priečinku `src/app/product` vygenerujte nový komponent `product-detail`
- v šablóne z tohto nového komponentu zobrazte všetky údaje z produktu, ktoré máte v dispozícií - ľubovoľne aj s obrázkom
  - nezabudnite pridať tlačidlo späť na návrat na zoznam produktov
- v priečinku `src/services` vygenerujte novú service `product`
- presuňte pole produktov z `product-list` componentu do novovytvorenej `ProductService` a refaktorujte kód
- pridajte parametrizovaný route `detail/:id` medzi `routes` s mapovaním na `ProductDetail` component
- v konštruktore `product-detail` komponentu inicializujte `ActivatedRoute` a `ProductService`
- pri inicializácií komponentu získajte id produktu z url route `this.route.snapshot.paramMap.get("id")`
- na základe id si dohľadajte `find` v `ProductService`, konkrétny produkt a zobrazte jeho obsah
- pridajte routerLink, smerujúci do detailu produktu, v `product-item` na `title` produktu

## EN

**Assignment**

* In the folder `src/app/package`, generate a new component called `product-detail`
* In the template of this new component, display all available product data (you can include an image as well)
  * Don’t forget to add a “Back” button that links back to the product list
* In the folder `src/services`, generate a new service called `product`
* Move the array of products from the `product-list` component into the newly created `ProductService` and refactor the code accordingly
* Add a parameterized route `detail/:id` to your `routes`, mapped to the `ProductDetail` component
* In the constructor of the `product-detail` component, initialize `ActivatedRoute` and `ProductService`
* On component initialization, retrieve the product ID from the route using `this.route.snapshot.paramMap.get("id")`
* Use `find` in the `ProductService` to look up the product by ID and display its content
* In the `product-item` component, wrap the product `title` with a `routerLink` pointing to the product’s detail page
