//creating reusable navigation

class Nav extends HTMLElement {
    constructor() {
        super();
    }
//appending header to the page with lifecycle callback
connectedCallback() {
    this.innerHTML = `    
    <!--navigation bar-->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://dfgav1r1a.github.io">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#bio">Bio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="mitxpro-projects.html">MITxPro</a></li>
                  <li><a class="dropdown-item" href="personal-projects.html">Personal</a></li>                  
                </ul>
              </li>
            </ul>            
          </div>
        </div>
    </nav>
    `;
    }
}


//registering the custom element
customElements.define('nav-component', Nav);