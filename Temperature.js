function convertTemperatureRange() {
    // Get the starting and ending temperatures from the input fields
    var startValue = parseFloat(document.getElementById("startInput").value);
    var endValue = parseFloat(document.getElementById("endInput").value);

    // Get the selected scale from the dropdown
    var scale = document.getElementById("scaleSelect").value;

    // Call the convertTemperature function for each temperature in the range and display the results
    document.getElementById("result").innerText = "";

    for (var i = startValue; i <= endValue; i++) {
        var convertedTemperature = convertTemperature(i, scale);
        document.getElementById("result").innerText += `Temperature: ${i} ${scale} = ${convertedTemperature}\n`;
    }
}

// Function to convert temperature between Celsius and Fahrenheit
function convertTemperature(temperature, scale) {
    var convertedTemperature;

    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9 / 5) + 32;
        return convertedTemperature.toFixed(2) + "°F";
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5 / 9;
        return convertedTemperature.toFixed(2) + "°C";
    } else {
        return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}



