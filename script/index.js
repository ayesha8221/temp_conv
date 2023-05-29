// // function calculate
// function calcF(){

// let farenheit = document.getElementById('farenheit').value;

//  let result1 = (farenheit * 1.8 + 32)
//  document.getElementById('onscreen').innerHTML= result1.toFixed(2);
// }

// function calcC(){
//     let celsius = document.getElementById('farenheit').value;

//     let result2 = (celsius * 0.5 - 32)
//     document.getElementById('onscreen').innerHTML= result2.toFixed(2);
// }

// function clearInterval() {
//     document.getElementById('farenheit').value= ""
//     document.getElementById('celsius').value= ""
// }

// Function to convert Celsius to Fahrenheit

    // 
// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = ((celsius* 9/5) + 32) .toFixed(2);
//     return fahrenheit
//     // TODO: Implement the conversion logic here
//   }
  
//   // Function to convert Fahrenheit to Celsius
//   function fahrenheitToCelsius(fahrenheit) {
//     let celsius = ((fahrenheit - 32)* 5/9).toFixed(2);
//     return celsius
//     // TODO: Implement the conversion logic here
//   }




  // Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = ((temperature* 9/5) + 32).toFixed(2);
    return fahrenheit;
    // TODO: Implement the conversion logic here
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((temperature - 32)* 5/9).toFixed(2);
    return celsius;
    // TODO: Implement the conversion logic here
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    document.getElementById("result").innerHTML = celsiusToFahrenheit();
    
    // TODO: Call the celsiusToFahrenheit function and display the result         
} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    document.getElementById("result").innerHTML = fahrenheitToCelsius();
    // TODO: Call the fahrenheitToCelsius function and display the result
  } else {
    alert("Invalid conversion type.");
  }

