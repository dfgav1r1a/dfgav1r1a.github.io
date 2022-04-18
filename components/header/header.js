
//creating custom element
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Daniel Gaviria's Portfolio</h1>
        `;
    }
}

customElements.define('header-component', Header);