export class GridColElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.classList.add('col');
  }
}
customElements.define('ui-grid-col', GridColElement);
