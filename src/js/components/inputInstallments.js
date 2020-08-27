/* File to handle codes related to installments input */
class InputInstallments extends HTMLElement {
  constructor() {
    super();
    // Verifies value, apply mask and show warning if needed
    this.addEventListener('focusout', () => {
      let value = this.normalizeInstallments(this.children[1].value);
      if (isNaN(value)) {
        this.children[1].value = '';
        this.children[2].innerText = 'Mínimo de 1 parcela e máximo de 12 parcelas.';
        this.children[2].style.display = 'initial';
      } else if (value < 1) {
        this.children[1].value = 1;
        this.children[2].innerText = 'Mínimo de 1 parcela.';
        this.children[2].style.display = 'initial';
      } else if (value > 12) {
        this.children[1].value = 12;
        this.children[2].innerText = 'Máximo de 12 parcelas.';
        this.children[2].style.display = 'initial';
      } else {
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

  /* Normalize installments input value */
  normalizeInstallments(value) {
    return parseInt(value);
  }
}
// component declaration
customElements.define('input-installments', InputInstallments);