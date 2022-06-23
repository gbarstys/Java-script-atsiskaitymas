/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

// document.getElementById('output-container').style.visibility = 'hidden';

// creates table and input in html

// document.getElementById('output-container').style.visibility = 'visible';
var output = document.getElementById('output');
output.innerHTML = 
`
<table id="usersTable" style="display: none;" width="100%" border="1px solid black">
        <thead>
            <tr>
                <th id="header-style" width="15%">id</th>
                <th id="header-style" width="35%">login</th>
                <th id="header-style" width="50%">avatar</th>
            </tr>
        </thead>
        <tbody dataPlace></tbody>
    </table>
`

// Fetchina informacija ir api
function loadData(){
    return fetch('https://api.github.com/users')
    .then(response => response.json());
}
// atspausdina visa data is data place
loadData().then(data => {
    createTable(data)
})
.catch(e => console.log(e))

function createTable(data){
    // suranda data place
    var dataPlace = document.querySelector("[dataPlace]");
    // isvaro dataplace
    dataPlace.innerHTML = "";

    // appendina data i dataplace
    data.map(x => {
        var tr = document.createElement("tr");
        tr.innerHTML = 
        `
        <th width="15%">${x.id}</th>
        <th width="35%">${x.login}</th>
        <th width="50%"><img src="${x.avatar_url}" width="150"></th>
        `
        dataPlace.append(tr);
    })
}

// mygtukas 
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("usersTable").style.display = "";
    document.getElementById("btn").style.display = "none";
    document.getElementById("message").style.display = "none";
})