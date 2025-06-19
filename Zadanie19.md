# Zadanie 19

## Môj obchod - Formuláre

**Zadanie**

- vytvorte v priečinku `src/app` nový priečinok `admin`
- vygenerujte v novovytvorenom priečinku nový komponent s názvom `admin`
- pridajte medzi routes zobrazenie tohto komponentu na path `/route`
- vložte do header šablóny nad `mini-cart` anchor s `routerLink` na `/admin`
- v `admin` komponente pridajte nový formulár `productForm: FormGroup<ProductForm>;`
- naplňte tento `FormGroup` nasledujúcimi `FormControl` s validáciami
  - `id` number, povinné
  - `title` string, povinné aspoň 3 znaky
  - `price` number, povinné min. hodnota 1
  - `description` string, nepovinné
  - `category` string, povinné
- do šablóny `admin` komponentu pridajte `<form>` s atribútovým bindingom `formGroup` na `productForm` a event bindingom `(ngSubmit)` na funkciu `addProductToProducts()`
- pre každý input vytvorte samostatný `<div>` kontajner s `<label>` a `<input>` podľa požadovaného typu + `formControlName` z väzby na `productForm`
- `category` vykreslite ako `<select>` options získajte z `productService.categories`
- pridajte na koniec formulára `<button>` typu submit s textom `Pridaj produkt`
- v prípade ak je `productForm.invalid` je submit button `disabled`
- pridajte `ProductForm` interface pre vyššie uvedené `FormControls`
- vytvorte v `ProductService` novú funkciu `addProduct(newProduct: Partial<Product>)` pre zápis nového produktu cez HTTP klienta POST na `https://fakestoreapi.com/products`
  - po úspešnom zápise zobrazte alert s textom `Produkt bol úspešne pridaný`
  - po neúspešnom zápise zobrazte alert s textom `Produkt sa nepodarilo pridať`
- vytvorte v admin komponente `addProductToProducts()` funkciu, ktorá do konštanty `newProduct: Partial<Product>` vyplní jednotlivé vlastnosti podľa hodnôt z `productForm.value`
- zavolajte `addProduct` v `ProductService` s novým produktom

## EN

**Assignment**

- Create a new folder `admin` in `src/app`
- Generate a new component named `admin` in this folder
- Add a new route for path `/admin` that displays this component
- In the `header` template, insert an anchor link with `routerLink="/admin"` above the `mini-cart`
- In the `admin` component, define a form: `productForm: FormGroup<ProductForm>;`
- Populate this form with the following `FormControl`s and validations:
  - `id`: number, required
  - `title`: string, required, minimum 3 characters
  - `price`: number, required, minimum value 1
  - `description`: string, optional
  - `category`: string, required
- In the `admin` component template:
  - Add a `<form>` element with `[formGroup]="productForm"` and `(ngSubmit)="addProductToProducts()"`
  - For each control, create a `<div>` with a `<label>`, an appropriate `<input>` or `<select>`, and bind it using `formControlName`
  - For `category`, use a `<select>` element with `options` loaded from `productService.categories`
  - Add a submit `<button>` with the text `Pridaj produkt`, and disable it if the form is invalid
- Create a `ProductForm` interface matching the structure of the form controls
- In `ProductService`, create a new method `addProduct(newProduct: Partial<Product>)` that:
  - Sends a POST request to `https://fakestoreapi.com/products`
  - Shows an alert `Produkt bol úspešne pridaný` on success
  - Shows an alert `Produkt sa nepodarilo pridať` on failure
- In the `admin` component, implement the `addProductToProducts()` method:
  - Create a constant `newProduct: Partial<Product>` filled from `productForm.value`
  - Call `ProductService.addProduct(newProduct)` to submit the form data
