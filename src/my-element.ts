import './custom-elements/button';
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  override render() {
    const buttonLabel = 'ola q ase';
    return html`
      <p>
        <fd-button
          @onClick=${this._handleClick}
          label=${buttonLabel}
        ></fd-button>
      </p>
    `;
  }

  private _handleClick(): void {
    console.log('click');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
