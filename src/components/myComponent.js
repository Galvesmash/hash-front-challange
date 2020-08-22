class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      this.style.color === 'red' ? this.style.color = 'blue' : this.style.color = 'red';
    });
  }
  connectedCallback() {
    this.style.color = 'blue';
  }
}
customElements.define('my-component', MyComponent);