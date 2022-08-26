
`renderFromFormData`

```javascript

function(formData) {

    for (const [key, value] of formData) {

        if (value.length == 0) {
        formData.delete(key);
        continue
        }

        formData.delete(key);

        let selected_input = null;
        let inputs = document.querySelectorAll(`${selectors.tagsForm} input[name="${key}"]`);
        const selects = {
        'default': "filter.v.",
        'option': "filter.v.option.",
        'metafield': "filter.p."
        }

        inputs.forEach(input => {
        if (input.value === value) {
            selected_input = input;
        }
        })

        let filterType = selected_input.dataset['filterType'];
        formData.set(`${selects[filterType]}${selected_input.name}`, value);
    }

    const searchParams = new URLSearchParams(formData);
    this.renderCollectionPage(searchParams);
}
```

### Make the removal of Cart Item AJAX

In `theme.js`

1. Add the below selector to `theme.Cart.selectors`
```javascript
productRemove: '.cart__item-remove',
```

2. Add below to `CartForm` function
```javascript
this.removeProductBtns = form.querySelectorAll(selectors.productRemove);
```

3. New function to remove cart Items using AJAX API
```javascript
removeProduct: function(evt) {
    if (this.removeProductBtns.length > 0) {
        this.removeProductBtns.forEach(removeBtn => {

        removeBtn.addEventListener('click', evt => {
            evt.preventDefault()
            const productKey = removeBtn.closest('.cart__item').dataset.key;

            document.dispatchEvent(new CustomEvent('cart:quantity' + this.namespace, {
                detail: [productKey, 0, this.wrapper]
            }));
        })
        })
    }
    }
```