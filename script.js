const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const message = document.getElementById("message");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertButton.addEventListener("click", function () {

    const temperatureValue = temperatureInput.value;
    const selectedUnit = unitSelect.value;

    // Check if input is empty
    if (temperatureValue === "") {
        message.textContent = "Please enter a temperature.";
        message.style.color = "red";
        return;
    }

    const temperature = Number(temperatureValue);

    // Check if input is a valid number
    if (isNaN(temperature)) {
        message.textContent = "Please enter a valid numeric temperature.";
        message.style.color = "red";
        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert from Celsius
    if (selectedUnit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;
    }


    // Convert from Fahrenheit
    else if (selectedUnit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;
    }


    // Convert from Kelvin
    else if (selectedUnit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


    // Check absolute zero
    if (celsius < -273.15) {

        message.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        message.style.color = "red";

        clearResults();

        return;
    }


    // Successful conversion
    message.textContent = "Temperature converted successfully!";
    message.style.color = "green";


    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";

});


function clearResults() {

    celsiusResult.textContent = "-- °C";

    fahrenheitResult.textContent = "-- °F";

    kelvinResult.textContent = "-- K";
}