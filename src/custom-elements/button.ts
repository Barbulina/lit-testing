import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('fd-button')
export class FdButton extends LitElement {
  static override styles = css`
    .fdz-button {
      background-color: pink;
      color: olive;
      border: 1px solid black;
      height: 150px;
      width: 150px;
      transition: all 0.2s ease-in-out;
      border-radius: 5px;
    }
    .fdz-button:hover {
      cursor: pointer;
      background-color: red;
      color: white;
      border-radius: 50%;
    }
  `;

  @property()
  label = '';
  icon = '';

  override render() {
    return html`
      <button class="fdz-button" @click=${this._onClick}>${this.label}</button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('onClick'));
  }
}
