document.addEventListener("DOMContentLoaded", function () {

    //alert('Fetch');
    /**
     * takes data by file json 
     */
    function takeData() {
        fetch('class.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        //console.log('Ops' + response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        // Create event 
                        var event = new CustomEvent('fetchEnd', { "detail": data });
                        // console.log("dispatch fetchEnd");
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
        //console.log("listener fetchEnd");
        var data = event.detail;
        searchData(data);
    })

    /**
     * @description search all banco and write in data
     * @param {object} data 
     */
    function searchData(data) {
        //console.log("searchData");

        /*  var banco = document.querySelectorAll('.banco');
        for (let i = 0; i < data.class.persons.length ; i++) {
            banco[i].innerText = data.class.persons[i].name + " " + data.class.persons[i].età + " " + data.class.computers[i].name ;
        }; */

        for (let z = 0; z < 24; z++) {
            var student = data.class.persons.find(student => {return student.id == z});
            var computer = data.class.computers.find(computer => {return computer.id == z});
            if (student){
                draw(student.name, student.età, computer.name);
            } else {
                drawBancoVuoto();
            }
        }
    }



        function draw(NamePerson, AgePerson, ComputerName) {
            var canvas = document.querySelector('.grid-container'),
                newDiv = document.createElement('div'),
                newParag = document.createElement('p');
            newDiv.className = "grid-item";
            newParag.className = "banco";
            newParag.innerText = NamePerson + " - " + AgePerson + " - " + ComputerName;
            newDiv.appendChild(newParag);
            canvas.appendChild(newDiv);
        }
        function drawBancoVuoto() {
            var canvas = document.querySelector('.grid-container'),
                newDiv = document.createElement('div');
            newDiv.className = "grid-item-empty";
            canvas.appendChild(newDiv);
        }
        // Call function json
        takeData();

    });
