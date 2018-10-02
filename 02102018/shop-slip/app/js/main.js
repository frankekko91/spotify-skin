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
                        var event = new CustomEvent('fetchEnd', { "detail": data });
                        //console.log("dispatch fetchEnd");
                        document.dispatchEvent(event);   // dispatching event
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
        console.log(data);
         for (let i = 0; i < data.productList.length ; i++) {
          const element  = data.productList[i];
          console.log(element);
        }
 
        
    })
    // call the initializer function
    takeData();

    });
