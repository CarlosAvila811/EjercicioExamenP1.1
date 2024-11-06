document.getElementById("calculate-btn").addEventListener("click", function() {
   
    const product1 = parseFloat(document.getElementById("product1").value) || 0;
    const product2 = parseFloat(document.getElementById("product2").value) || 0;
    const product3 = parseFloat(document.getElementById("product3").value) || 0;
    const product4 = parseFloat(document.getElementById("product4").value) || 0;
    const product5 = parseFloat(document.getElementById("product5").value) || 0;

    
    if ([product1, product2, product3, product4, product5].includes(NaN) || [product1, product2, product3, product4, product5].includes(0)) {
        alertify.alert("Error", "Por favor ingresa solo valores numéricos en todos los campos.");
        return;
    }

    
    const subtotal = product1 + product2 + product3 + product4 + product5;
    document.getElementById("subtotal").value = subtotal.toFixed(2);

   
    let discount = 0;
    let discountLabel = "Descuento 0%";

    if (subtotal >= 1000 && subtotal < 5000) {
        discount = 0.10; 
        discountLabel = "Descuento 10%";
    } else if (subtotal >= 5000 && subtotal < 9000) {
        discount = 0.20;
        discountLabel = "Descuento 20%";
    } else if (subtotal >= 9000 && subtotal < 13000) {
        discount = 0.30; 
        discountLabel = "Descuento 30%";
    } else if (subtotal >= 13000) {
        discount = 0.40; 
    }


    document.getElementById("discount").value = (subtotal * discount).toFixed(2);
    document.getElementById("discount-label").innerText = discountLabel;

    
    const total = subtotal - (subtotal * discount);
    document.getElementById("total").value = total.toFixed(2);
});

document.getElementById("clear-btn").addEventListener("click", function() {
   
    document.getElementById("product1").value = '';
    document.getElementById("product2").value = '';
    document.getElementById("product3").value = '';
    document.getElementById("product4").value = '';
    document.getElementById("product5").value = '';
    document.getElementById("subtotal").value = '';
    document.getElementById("discount").value = '';
    document.getElementById("total").value = '';
    document.getElementById("discount-label").innerText = "Descuento 0%";
});
