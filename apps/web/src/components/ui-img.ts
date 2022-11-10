import { v4 as uuidv4 } from 'uuid';

export class ImageElement extends HTMLElement {
  static get observedAttributes() {
    return ['src'];
  }

  private element: HTMLImageElement;
  private root: ShadowRoot;
  private src: HTMLImageElement['src'];
  private imgId: string;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });

    const img = document.createElement('img');
    this.imgId = uuidv4();
    this.src = this.getAttribute('src');

    img.setAttribute('id', this.imgId);
    img.setAttribute('src', this.src);
    img.setAttribute('height', 'auto');
    img.setAttribute('width', '60%');
    img.classList.add('card-img-top');

    this.root.appendChild(img.cloneNode(true));
  }

  connectedCallback() {
    console.log('success');
  }

  // then will attibuteChangedCallback will be calles
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      console.log(`Image ${name} changed from ${oldVal} to ${newVal}`);
    }
  }
}
customElements.define('ui-img', ImageElement);
