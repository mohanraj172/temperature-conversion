

const button = document.getElementById("btn").onclick = function (){
const textbox = document.getElementById("inputs");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Result = document.getElementById("result");
let temp;

    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp* 9 / 5 + 32;
        Result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        Result.textContent = temp.toFixed(1) + "°C";

    }
    else{
        Result.textContent = "select a unit";
    }

}