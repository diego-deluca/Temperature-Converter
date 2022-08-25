const celsiusInput = document.getElementById("celsius");
const farenheitInput = document.getElementById("farenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = Number(e.target.value);

    switch (e.target.name) {
      case "celsius":
        farenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273.15;
        break;
      case "farenheit":
        celsiusInput.value = (value - 32) / 1.8;
        kelvinInput.value = (value - 32) / 1.8 + 273.15;
        break;
      case "kelvin":
        celsiusInput.value = value - 273.15;
        farenheitInput.value = (value - 273.15) * 1.8 + 32;
        break;
    }
  });
}
