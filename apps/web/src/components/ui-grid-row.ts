export class GridRowElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.classList.add('row');
  }
}
customElements.define('ui-grid-row', GridRowElement);
