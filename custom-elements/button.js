var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FdButton = class FdButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.icon = '';
    }
    render() {
        return html `
      <button class="fdz-button" @click=${this._onClick}>${this.label}</button>
    `;
    }
    _onClick() {
        this.dispatchEvent(new CustomEvent('onClick'));
    }
};
FdButton.styles = css `
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
__decorate([
    property()
], FdButton.prototype, "label", void 0);
FdButton = __decorate([
    customElement('fd-button')
], FdButton);
export { FdButton };
//# sourceMappingURL=button.js.map