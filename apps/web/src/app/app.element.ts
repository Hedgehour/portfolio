import { CardElement } from '../components/card';
import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'test-app';
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome ${title} 👋
          </h1>
        </div>
      </div>
    </div>`;

    // this.card = new CardElement();
    // this.appendChild(this.card);
  }
}
customElements.define('portfolio-root', AppElement);
