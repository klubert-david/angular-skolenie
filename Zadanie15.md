# Zadanie 15

## Môj obchod - Reaktívne programovanie - effect

**Zadanie**

- pridajte do `cart-list` tlačidlo pre vymazanie obsahu košíka `button` s textom `Vyprázdniť`
- podmieňte zobrazenie tohto tlačidla len v prípade ak v košíku aj niečo je
- po kliku zavolajte novú funkciu `clearCart` v `CartService` kde nastavíte `cart` signal na prázdne pole
- pridajte nový effect do konštruktora `CartService` kde uložíte obsah košíka pri každej jeho zmene do localStorage pomocou volania `localStorage.setItem()`

## EN

**Assignment**

* Add a `button` to the `cart-list` template with the text `Vyprázdniť` to clear the cart
* Display this button only if the cart contains items
* On click, call a new method `clearCart` in the `CartService`, where you set the `cart` signal to an empty array
* In the constructor of `CartService`, add a new **effect** that listens to changes of the `cart` signal and saves its content to `localStorage` using `localStorage.setItem()`

