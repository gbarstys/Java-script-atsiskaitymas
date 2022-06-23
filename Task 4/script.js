/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
var dataPlace = document.getElementById("output");

function getData(){
    return fetch(ENDPOINT)
    .then(response => response.json())
}

getData()
.then(data => {
    appendData(data)
})
.catch(e => console(e))

function appendData(data){
    data.map(x => {
        var newCard = document.createElement("div");
        newCard.classList.add("card");

        var models = x.models;
        newCard.innerHTML =
        `
        <div id="stylemodel">
        <h2>${x.brand}</h2>
            <h4>Models:<h4>
            </div>
            <ul id="modeliai">
                ${models.map(x => `<li id="list-style">${x}</li>`).join("")}
            </ul>
        `
        dataPlace.append(newCard);
    })
}


