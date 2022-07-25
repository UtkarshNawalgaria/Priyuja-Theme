
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