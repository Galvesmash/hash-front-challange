/* File to handle codes related to Error Overlay input */
class ErrorOverlay extends HTMLElement {
  constructor() {
    super();
    // Hide overlay when clicked
    this.addEventListener('click', () => {
      this.style.display = 'none';
    });
  }

  connectedCallback() {
    // Applies style to this html component
    this.style.display = 'none';
  }
}
// component declaration
customElements.define('error-overlay', ErrorOverlay);