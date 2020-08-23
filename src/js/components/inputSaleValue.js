class inputSaleValue extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('focusout', () => {
      let value = parseFloat((this.children[1].value).replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
      if (isNaN(value)) {
        this.children[1].value = '';
        this.children[2].innerText = 'Valor inválido.';
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
    });
  }
  connectedCallback() {
    this.style.display = 'contents';
    this.children[2].style.display = 'none';
  }
}
customElements.define('input-sale-value', inputSaleValue);