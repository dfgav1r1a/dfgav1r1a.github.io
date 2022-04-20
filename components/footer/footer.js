//defining element
class Footer extends HTMLElement {
    constructor () {
        super();
    }

    //adding element to page
    connectedCallback() {
        this.innerHTML = `
        <!--footer-->
        <div class="container-sm bg-dark">
            <footer class="py-3 my-4">
             <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                 <li class="nav-item"><a href="https://dfgav1r1a.github.io/" class="nav-link px-2 text-muted">Home</a></li>
                 <li class="nav-item"><a href="#navbarDropdown" class="nav-link px-2 text-muted">Projects</a></li>
                 <li class="nav-item"><a href="mailto:dfgaviria.dev@gmail.com"" class="nav-link px-2 text-muted">Contact</a></li>       
             </ul>
             <p class="text-center text-muted">© 2022 Daniel Gaviria</p>
            </footer>
        </div>     
        `;
    }
}

//registering custom element
customElements.define('footer-component', Footer);