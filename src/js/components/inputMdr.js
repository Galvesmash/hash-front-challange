/* File to handle codes related to mdr input */
class InputMdr extends HTMLElement {
  constructor() {
    super();
    // Verifies value, apply mask and show warning if needed
    this.addEventListener('focusout', () => {
      let value = this.normalizeMdr(this.children[1].value);
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
      // Tries to submit form after verifying value
      submitForm();
    });
  }

  connectedCallback() {
    // Applies style to this html component
    this.style.display = 'contents';
  }

  /* Normalize mdr input value */
  normalizeMdr(value) {
    return parseInt(value.replace('%', ''));
  }
}
// component declaration
customElements.define('input-mdr', InputMdr);