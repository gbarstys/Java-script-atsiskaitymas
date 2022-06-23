/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
// paslepia konvertavimo containerius
document.getElementById('output').style.visibility = 'hidden';

// Įvedus skaičių konvertuoja ir parodo html'e
document.getElementById('submit-btn').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('output').style.visibility = 'visible';
    let kgs = document.getElementById('search').value;
    document.getElementById('gramsOutput').innerHTML = kgs/0.0010000;
    document.getElementById('lbOutput').innerHTML = kgs*2.2046;
    document.getElementById('ozOutput').innerHTML = kgs*35.274;
})
