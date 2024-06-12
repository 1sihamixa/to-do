
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i].charAt() + "<br>" + cars[i].charAt(1) + "<br>" + cars[i].charAt(2) + "<br>" + cars[i].charAt(3) + "<br>";
}

document.getElementById("demo").innerHTML = text;

