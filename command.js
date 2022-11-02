const urlParams = new URLSearchParams(window.location.search);
// product=Lemon&quantity=9
const product = urlParams.get("product");
const quantity = urlParams.get("quantity");

let printout = document.getElementById("command");
printout.innerHTML = `Product : ${product}<br/> Quantity : ${quantity}`;
