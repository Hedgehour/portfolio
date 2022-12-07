export class SectionElement extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    super();
    this.value = 'section-1';
  }

  //  onload
  connectedCallback() {
    this.classList.add('section');
    this.setId();
  }

  setId() {
    this.setAttribute('id', this.value);
  }
}

customElements.define('hedge-section', SectionElement);
