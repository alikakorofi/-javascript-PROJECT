const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
// let navmenu = document.querySelector('.navmenu');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navmenu.classList.toggle('open');
// }



// JavaScript for showing purchase form with product details
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-button');
    const purchaseForm = document.querySelector('.purchase-form');
    const productDetails = document.getElementById('product-details');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.dataset.name;
            const productPrice = this.dataset.price;

            productDetails.innerHTML += `
                <p>Product: ${productName}</p>
                <p>Price: ${productPrice}</p>
            `;

            purchaseForm.style.display = 'block';
        });
    });
});

