class inputMdr extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('focusout', () => {
      let value = normalizeMdr(this.children[1].value);
      if (isNaN(value)) {
        this.children[1].value = '';
        this.children[2].innerText = 'Mínimo de 0% e máximo de 100%.';
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
      checkForm();
    });
  }
  connectedCallback() {
    this.style.display = 'contents';
  }
}
customElements.define('input-mdr', inputMdr);