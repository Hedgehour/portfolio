export class GridElement extends HTMLElement {
  connectedCallback() {
    this.classList.add('container');
  }
}
customElements.define('ui-grid', GridElement);
