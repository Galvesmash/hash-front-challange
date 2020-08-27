/* File to handle codes related to sale value input */
class inputSaleValue extends HTMLElement {
  constructor() {
    super();
    // Verifies value, apply mask and show warning if needed
    this.addEventListener('focusout', () => {
      let value = normalizeSaleValue(this.children[1].value);
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
}
// omponent declaration
customElements.define('input-sale-value', inputSaleValue);