
// Script for custom header tag
class customHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Header -->
        <header>
            <nav>
                <a href="index.html"><img src="./img/nn_logo.png" height="100px" width="100px"></a>
                <ul class="nav-menu">
                    <li class="nav-item"><a href="index.html#sluzby" class="nav-link">Služby</a></li>
                    <li class="nav-item"><a href="index.html#nasa-praca" class="nav-link">Naša práca</a></li>
                    <li class="nav-item"><a href="index.html#onas" class="nav-link">O nás</a></li>
                    <li class="nav-item"><a href="index.html#kontakt" class="nav-link">Kontakt</a></li>
                </ul>
                <div class="hamburger">
                <i id="menu" class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>
                </div>
            </nav>    
        </header>
        `
    }
}

customElements.define("custom-header", customHeader)


// Script for custom footer tag
class customFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer -->
        <footer>
            <div class="container">
                <div id="kontakt" class="kontakt">
                    <h2>Kontakt</h2>
                    <p><i class="fa-solid fa-phone fa-sm" style="color: #ffffff;"></i> 0944 264 904</p>
                    <p><i class="fa-regular fa-envelope fa-lg" style="color: #ffffff;"></i> Car.detailingnn@gmail.com</p>
                </div>
                <div class="adresa">
                    <h2>Adresa</h2>
                    <p>Trstice 92542</p>
                </div>
                <div class="social">
                    <h2>Social</h2>
                    <p><a href="https://www.instagram.com/car.detailingnn/" target="_blank"><i class="fa-brands fa-instagram fa-lg" style="color: #ffffff;"></i> car.detailingnn</a></p>
                    <p><a href="https://www.facebook.com/search/top?q=cardetailing%20nn" target="_blank"><i class="fa-brands fa-facebook fa-lg" style="color: #ffffff;"></i> CarDetailing NN</a></p>
                </div>
            </div>
            <p>Copyright&copy; 2023 NNDetailing. Všetky práva vyhradené</p>
        </footer>
        `
    }
}

customElements.define("custom-footer", customFooter)
