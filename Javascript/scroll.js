const header = document.querySelector('#header');
const cart_resp = document.querySelector('#cart-link-resp');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo-img');

//When scrolled NavBar is stickied top, header raises padding and logo lowers size 
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('fixed-top');
        logo.classList.add('logo-img-scroll');
        header.classList.add('header-scroll');
        if(!document.location.href.includes("checkout")){
            cart_resp.classList.add('cart-link-resp-scroll')
        }
        
    } else {
        navbar.classList.remove('fixed-top');
        logo.classList.remove('logo-img-scroll')
        header.classList.remove('header-scroll')
        if(!document.location.href.includes("checkout")){
            cart_resp.classList.remove('cart-link-resp-scroll')
        }

    }
};