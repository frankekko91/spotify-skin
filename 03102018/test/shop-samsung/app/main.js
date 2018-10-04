"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    var event = new Event('end-fetch');

    var searchButton = document.getElementById('searchbutton');
    var searchBox = document.getElementById('searchbox');
    searchButton.addEventListener('click', event => {
        searchBox.style.display == "none" ? searchBox.style.display = "block" : searchBox.style.display = "none";

    })

    fetch('data.json')
        .then(function (response) {return response.json()})
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));

            document.addEventListener('end-fetch', function (e) {

                //conteiner of Json elements from the 1 index till the end
                var myElements = myJson.elements.splice(1);

                var bannerElement = myJson.elements[0];
                document.querySelector(".banner__title").innerHTML = bannerElement.title;
                document.querySelector(".banner__paragraph").innerHTML = bannerElement.subTitle;
                document.querySelector(".banner__image").src = bannerElement.img;
                console.log(myElements);

                //create a new Div
                var newDiv = document.createElement("div");
                var newDiv2 = document.createElement("div");

                newDiv.className = 'grid-container';
                newDiv2.className = 'grid-x grid-margin-x align-right';

                var mainBanner = document.querySelector(".banner");
                // append new div to existing div

                var leftBox = mainBanner.appendChild(newDiv);
                var rightBox = leftBox.appendChild(newDiv2);

                var boxContainer = document.querySelector(".box-container");

                var div1 = document.createElement('div');
                div1.className = 'grid-x grid-margin-x grid-margin-y';

                for (var i = 0; i < myElements.length; i++) {
                    var myBox = boxContainer.appendChild(div1);
                    var myBox2 = document.createElement("div");
                    myBox2.className = 'cell medium-6 grid-x';
                    myBox2.style.backgroundImage = `url(${myElements[i].img}`;
                    myBox2.style.backgroundRepeat = "no-repeat";
                    var cell = myBox.appendChild(myBox2);
                    cell.innerHTML += '<h3 class="cell">' + myElements[i].title + '</h3>';
                    cell.innerHTML += '<p class="cell medium-6">' + myElements[i].paragraph + '</p>';
                    // cell.innerHTML += '<a class="button cell medium-offset-4" href="'+ myElements[i].link +'"' + 'Approfondisci</a>';
                    cell.innerHTML += '<a class="button cell small box-button" href="' + myElements[i].link + '">Buy</a>';
                }

            }, false);
            // document.dispatchEvent(event);

        });
});