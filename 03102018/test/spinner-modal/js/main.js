var data;

const fetchCompleted = new Event("fetchCompleted");

document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
        document.querySelector('.loader__background').style.display = "flex"; // MOSTRA IL LOADER
        dataFetch();
    }, 2500)

    function dataFetch() {
        fetch('json/data.json').then(response => { return response.json() })
            .then(myJSON => {
                data = myJSON;
                setTimeout(() => document.dispatchEvent(fetchCompleted), 2500) // SIMULA 2,5 SECONDI PER CARICARE I DATI

            });
    }
    document.addEventListener("fetchCompleted", sender => {                 // AL CARICAMENTO DEI DATI
        document.querySelector('.loader__background').style.display = "none"; // NASCONDE IL LOADER
        let modal = document.querySelector('.modal');                       // MOSTRA IL MODALE
        modal.style.display = "block";
        modal.querySelector(".modal__title").innerHTML = data.titolo;       // IL MODALE VIENE RIEMPITO CON I DATI DAL JSON
        modal.querySelector(".modal__paragraph").innerHTML = data.descrizione;
    });


});
function closeModal() {
    document.querySelector('.modal').style.display = "none";
}