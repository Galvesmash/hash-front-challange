class inputInstallments extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('focusout', () => {
      let value = normalizeInstallments(this.children[1].value);
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
      checkForm();
    });
  }
  connectedCallback() {
    this.style.display = 'contents';
    this.children[2].style.display = 'none';
  }
}
customElements.define('input-installments', inputInstallments);