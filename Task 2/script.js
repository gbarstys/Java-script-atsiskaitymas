/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var countBtn = document.getElementById('btn__element');
var countNum = document.getElementById('btn__state');

countBtn.addEventListener('click', countUp);

function countUp(){
    countNum.innerHTML++;
}