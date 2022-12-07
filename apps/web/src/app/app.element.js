import { SectionElement } from '../components/section';
import './app.element.css';

export class AppElement extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    super();

    const section = new SectionElement();
    const header = document.createElement('h2');
    header.textContent = 'Section 1';
    section.appendChild(header);

    this.appendChild(section);
  }
}
customElements.define('portfolio-root', AppElement);
