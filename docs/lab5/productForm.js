"use strict";
let btnSubmit = document.getElementById("submit");

btnSubmit.onclick = () => {
    let txtProdNum = document.getElementById("productNumber").value;
    let txtQty = document.getElementById("quantity").value;
    let txtName = document.getElementById("fullName").value;
    let selSupplier = document.getElementById("supplier").value;
    let txtPrice = document.getElementById("price").value;
    let txtDate = document.getElementById("date").value;

    alert(`Product number: ${txtProdNum}\nQuantity: ${txtQty}\nFull Name: ${txtName}\nSupplier: ${selSupplier}\nPrice: ${txtPrice}\nDate: ${txtDate}`);
}