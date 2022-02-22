var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FdTitle = class FdTitle extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    render() {
        return html ` <h1 class="fdz-title">${this.label}</h1> `;
    }
};
FdTitle.styles = css `
    .fdz-title {
      font-size: 1.5em;
      font-weight: bold;
    }
  `;
__decorate([
    property()
], FdTitle.prototype, "label", void 0);
FdTitle = __decorate([
    customElement('fd-button')
], FdTitle);
export { FdTitle };
//# sourceMappingURL=title.js.map