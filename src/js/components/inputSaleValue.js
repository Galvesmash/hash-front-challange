/* File to handle codes related to sale value input */
class InputSaleValue extends HTMLElement {
  constructor() {
    super();
    // Verifies value, apply mask and show warning if needed
    this.addEventListener('focusout', () => {
      let value = this.normalizeSaleValue(this.children[1].value);
      if (isNaN(value)) {
        this.children[1].value = '';
        this.children[2].innerText = 'Mínimo de R$0,00.';
        this.children[2].style.display = 'initial';
      } else if (value < 0) {
        this.children[1].value = 'R$ 0,00';
        this.children[2].innerText = 'Mínimo de R$0,00.';
        this.children[2].style.display = 'initial';
      } else {
        let valueParts = parseFloat(value).toFixed(2).toString().split('.');
        valueParts[0] = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        this.children[1].value = `R$ ${valueParts[0]},${valueParts[1]}`;
        this.children[2].innerText = '';
        this.children[2].style.display = 'none';
      }
      // Tries to submit form after verifying value
      submitForm();
    });
  }

  connectedCallback() {
    // Applies style to this html component
    this.style.display = 'contents';
  }

  /* Normalize sale value input value */
  normalizeSaleValue(value) {
    return parseFloat(value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
  }
}
// component declaration
customElements.define('input-sale-value', InputSaleValue);