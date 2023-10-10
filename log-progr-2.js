function convertirTemperatura() {
    const inputCelsius = document.getElementById('tempCelsius').value;
    const temperaturaCelsius = parseFloat(inputCelsius);

    if (isNaN(temperaturaCelsius)) {
        document.getElementById('resultados').innerHTML = "Por favor, ingrese un número válido.";
    } else {
        const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        const temperaturaKelvin = temperaturaCelsius + 273.15;
        const resultadoHTML = `
            <p>Temperatura en grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}</p>
            <p>Temperatura en Kelvin: ${temperaturaKelvin.toFixed(2)}</p>
        `;
        document.getElementById('resultados').innerHTML = resultadoHTML;
        console.log(`Temperatura en grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
        console.log(`Temperatura en Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    }
}