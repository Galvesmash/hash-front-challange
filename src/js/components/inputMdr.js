class inputMdr extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('focusout', () => {
      let value = parseInt(this.children[1].value.replace('%', ''));
      if (isNaN(value)) {
        this.children[1].value = '';
        this.children[2].innerText = 'Valor inválido.';
        this.children[2].style.display = 'initial';
      } else if (value < 0) {
        this.children[1].value = '0%';
        this.children[2].innerText = 'Mínimo de 0%.';
        this.children[2].style.display = 'initial';
      } else if (value > 100) {
        this.children[1].value = '100%';
        this.children[2].innerText = 'Máximo de 100%.';
        this.children[2].style.display = 'initial';
      } else {
        this.children[1].value = `${value}%`;
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
customElements.define('input-mdr', inputMdr);