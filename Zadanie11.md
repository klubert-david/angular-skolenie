# Zadanie 11

## Môj obchod - Pipes

**Zadanie**

- z `product-list` komponentu presuňte výpočet `totalPrice` do `cart-list` komponentu
- presuňte rovnako aj zobrazovanie `total-price` v šablóne a upravte aj samotný výpočet, aby reflektoval celkovú sumu položiek v košíku vynásobenú o počet jednotlivých položiek
- v celej aplikácií nahraďte zobrazenie &euro; použitím `CurrencyPipe` s hodnotou "EUR"
- vygenerujte novú pipe s názvom `rate` v novom priečinku `src/app/pipes`
- v tejto pipe upravíme funkciu `transform` nasledujcím spôsobom
  - na vstupe získame číslo, na výstupe budeme vracať reťazec
  - zaokrúhlime toto číslo smerom nahor `Math.ceil(value)`
  - pomocou `'★'.repeat` vykreslíme počet plných hviezd
  - doplníme zvyšným počtom `'☆'.repeat` prázdných hviezd
- novovytvorenú pipe, importujte a následne použite na zobrazenie Hodnotenia v `product-detail`

## EN

**Assignment**

- Move the `totalPrice` calculation from the `product-list` component to the `cart-list` component
- Also move the display of `totalPrice` to the `cart-list` template, and adjust the calculation to reflect the total price of all cart items, each multiplied by its quantity
- Throughout the application, replace the use of `&euro;` with the `CurrencyPipe`, using the "EUR" currency code
- Generate a new pipe named `rate` in a new folder `src/app/pipes`
- In the `transform` function of this pipe:

  - Accept a number as input and return a string as output
  - Round the number up using `Math.ceil(value)`
  - Use `'★'.repeat(...)` to display the number of filled stars
  - Use `'☆'.repeat(...)` to fill in the remaining stars up to the max

- Import and use the newly created pipe to display the Rating in the `product-detail` component
