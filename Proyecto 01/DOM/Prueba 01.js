
var donRoa = document.querySelector(".donRoa");
donRoa.innerHTML = "Haz click aqui";

var id = document.querySelector("#aid");
id.innerText = "Rosalio Monterrosa Valle";

var listado = document.querySelector("li");
listado.innerHTML = "Rosalio #1";

var parrafo = document.querySelector(".parrafo");
parrafo.innerText = "La mama de la mama de la mama";

parrafo.addEventListener('mouseover',function(){
    parrafo.style.color = 'green';
    parrafo.style.border = 'solid 2px green';
})

parrafo.addEventListener('mouseout',function(){
    parrafo.style.color = 'black';
    parrafo.style.border = 'none';
})

donRoa.addEventListener('click',function(){
    donRoa.style.color = 'red';
    donRoa.textContent = "Soy don Roa";
})