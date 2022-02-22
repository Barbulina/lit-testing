import './custom-elements/button';
import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {FdButton} from './custom-elements/button';
import {FdTitle} from './custom-elements/title';

@customElement('my-elements')
export class MyElements extends LitElement {}

declare global {
  interface HTMLElementTagNameMap {
    'fd-button': FdButton;
    'fd-title': FdTitle;
  }
}
