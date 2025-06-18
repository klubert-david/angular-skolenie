# Zadanie 03

## Môj obchod - komponenty - @Input

**Zadanie**

- v koreni `src/app` vytvorte nový priečinok `product`
- premiestnite pôvodný `product-list` do tohto priečinka
- vytiahnite `product.interface.ts` do koreňa tohto priečinka
- vytvorte nový komponent `product-item` v spomínanom priečinku
- vytvorte vstupnú premennú `product`
- v šablóne komponentu vykreslite `id`, `title`, `category` a `price` produktu zo vstupu
- upravte šablónu komponentu `product-list` kde namiesto pôvodného zobrazenie použite novovytvorný komponent `product-item` pre prvé 3 položky z poľa


## EN

**Assignment**

* In the root of `src/app`, create a new folder named `product`
* Move the original `product-list` folder into this new `product` folder
* Move `product.interface.ts` into the root of this folder
* Create a new component called `product-item` in the mentioned folder
* Create an `@Input()` variable named `product`
* In the component `product-item` template, display the `id`, `title`, `category`, and `price` of the input product
* Modify the `product-list` component's template so that instead of the original content, it uses the newly created `product-item` component for the first 3 items of the array
