import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('fd-button')
export class FdTitle extends LitElement {
  static override styles = css`
    .fdz-title {
      font-size: 1.5em;
      font-weight: bold;
    }
  `;

  @property()
  label = '';

  override render() {
    return html` <h1 class="fdz-title">${this.label}</h1> `;
  }
}
