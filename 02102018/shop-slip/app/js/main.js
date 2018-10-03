//const application = {};

document.addEventListener("DOMContentLoaded", function () {

    /**
     * takes data by file json 
     */
    function takeData() {
        fetch('json/product.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Ops' + response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        // Create event 
                        var event = new CustomEvent('fetchEnd', {
                            "detail": data
                        });
                        //console.log("dispatch fetchEnd");
                        document.dispatchEvent(event); // dispatching event
                    });
                }
            )

            .catch(function (err) {
                console.log('Fetch error', err);
            });
    }

    // Add event to listener
    document.addEventListener("fetchEnd", (event) => {
        var data = event.detail;
        // console.log(data);
        for (let i = 0; i < data.productList.length; i++) {
            const element = data.productList[i];
            //   console.log(element);
        }
        var sizeCheck = document.querySelectorAll('input[name=checkbox-size]');
        var image = document.getElementById('product-image');
        var red = document.getElementById('red');
        var black = document.getElementById('black');
        const divyArray = Array.from(sizeCheck);
        console.log(divyArray);
        divyArray.forEach(el => {
            el.addEventListener('change', function () {
                switch (el.value) {
                    case "S":
                        {
                            for (let i = 0; i < data.productList.length; i++) {
                                if (data.productList[i].size === "S") {
                                    var price = data.productList[i].price;
                                    document.getElementById('price').innerText = "Prezzo: " + price + data.currency;
                                    if ((data.productList[i].color = "red") && (data.productList[i].color = "black")) {
                                        image.innerHTML += '<img alt="" class="cell small-6" src="img/slip-red.jpg"/>';
                                        red.removeAttribute("disabled");  // 
                                        black.removeAttribute("disabled"); //
                                    }
                                    // if (data.productList[i].color != "black") {
                                    //     black.setAttribute('disabled', false);
                                    // } else {
                                    // }
                                }
                            }
                        }
                        break;
                    case "M":
                        {
                            for (let i = 0; i < data.productList.length; i++) {
                                if (data.productList[i].size === "M") {
                                    var price = data.productList[i].price;
                                    document.getElementById('price').innerText = "Prezzo: " + price + data.currency;
                                    if (data.productList[i].color != "red") {
                                        document.getElementById('red').setAttribute('disabled', false);
                                    } else if (data.productList[i].color != "black") {
                                        document.getElementById('black').setAttribute('disabled', false);
                                    } else {

                                    }
                                }
                            }
                        }
                        break;

                }
                /* if (el.value === "S") {
                    console.log('ciao');
                    for (let i = 0; i < data.productList.length; i++) {
                        if (data.productList[i].size === "S") {
                            var price = data.productList[i].price;
                            document.getElementById('price').innerText = "Prezzo: " + price + data.currency;
                            if (data.productList[i].color = "red") {
                                image.innerHTML += '<img alt="" class="cell small-6" src="img/slip-red.jpg"/>';
                                // document.getElementById('red').setAttribute('disabled', false);
                            }
                            if (data.productList[i].color != "black") {
                                document.getElementById('black').setAttribute('disabled', false);
                            } else {
                                //image.innerHTML+='<img alt="" class="cell small-6" src="img/slip-red.jpg"/>';
                            }
                        }
                    }
                } else if (el.value === "M") {
                    for (let i = 0; i < data.productList.length; i++) {
                        if (data.productList[i].size === "M") {
                            var price = data.productList[i].price;
                            document.getElementById('price').innerText = "Prezzo: " + price + data.currency;
                            if (data.productList[i].color != "red") {
                                document.getElementById('red').setAttribute('disabled', false);
                            } else if (data.productList[i].color != "black") {
                                document.getElementById('black').setAttribute('disabled', false);
                            } else {

                            }
                        }
                    }
                } */
            })
        })
    })
    // call the initializer function
    takeData();

});