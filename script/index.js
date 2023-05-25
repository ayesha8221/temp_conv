// function calculate
function calcF(){

let farenheit = document.getElementById('farenheit').value;

 let result1 = (farenheit * 1.8 + 32)
 document.getElementById('onscreen').innerHTML= result1.toFixed(2);
}

function calcC(){
    let celsius = document.getElementById('farenheit').value;

    let result2 = (celsius * 0.5 - 32)
    document.getElementById('onscreen').innerHTML= result2.toFixed(2);
}

function clearInterval() {
    document.getElementById('farenheit').value= ""
    document.getElementById('celsius').value= ""
}




