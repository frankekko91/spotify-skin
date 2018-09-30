var pricePizza = 8;
var qtyPizza = 10;
var shippingPricePizza = 1;
var pricePiadina = 5;
var qtyPiadina = 30;
var shippingPricePiadina = 0.5;
var priceKebab = 4.5;
var qtyKebab = 20;
var shippingPriceKebab = 0.5;
var taxRate = 21;


var bu = document.querySelectorAll('button');

    for (let i = 0;i < bu.length;i++) {
        bu[i].addEventListener('click',function() {
            if(bu[i].name === 'piadina') {
                var item = document.querySelector("input[name=piadina]").value;
                qtyPiadina-=parseInt(item);
                var order = item * pricePiadina;
                var priceWithRate = ((order*taxRate)/100) + order;
                var totalprice = priceWithRate + shippingPricePiadina;
                document.getElementById('shop').innerHTML = "Prezzo totale Piadina (IVA e spedizioni incluse) " + totalprice.toFixed(2) + "€";              
            } else if (bu[i].name === 'kebab') {
                var item = document.querySelector("input[name=kebab]").value;
                qtyKebab-=parseInt(item);
                var order = item * priceKebab;
                var priceWithRate = ((order*taxRate)/100) + order;
                var totalprice = priceWithRate;
                document.getElementById('shop').innerHTML = "Spiacenti, non è possibile acquistare online. E' possibile acquistare i prodotti al centro di raccolta più vicino allo stesso prezzo.Prezzo totale Kebab (IVA inclusa) " + totalprice.toFixed(2) + "€";              
            } else if (bu[i].name === 'pizza') {
                var item = document.querySelector("input[name=pizza]").value;
                qtyPizza-=parseInt(item);
                var order = item * pricePizza;
                var priceWithRate = ((order*taxRate)/100) + order;
                var totalprice = priceWithRate + shippingPricePizza;
                document.getElementById('shop').innerHTML = "Prezzo totale Pizza (IVA e spedizioni incluse) " + totalprice.toFixed(2) + "€";              
            }
        } 
    )}
    
    
    






function getData(productName) {
    return document.getElementById(productName).value;
}