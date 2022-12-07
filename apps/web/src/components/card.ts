export class CardElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.classList.add('card');
  }
}
customElements.define('hedge-card', CardElement);
