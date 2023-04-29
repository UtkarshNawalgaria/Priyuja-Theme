if (!customElements.get('discount-code')) {
    class DiscountCode extends HTMLElement {
        constructor() {
            super();
            this.discountCode = this.querySelector('.js-discount-code');
            this.copyButton = this.querySelector('.js-copy-button');
            this.init();
        }

        init() {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                this.copyButton.addEventListener('click', this.copyCode.bind(this));
                this.discountCode.addEventListener('click', this.copyCode.bind(this));
            } else {
                this.copyButton.hidden = true;
            }
        }

        copyCode() {
            const discountCodeText = this.discountCode.textContent.trim();
            navigator.clipboard.writeText(discountCodeText);
            alert("Copied Code: " + discountCodeText);
        }
    }

    customElements.define('discount-code', DiscountCode);
}