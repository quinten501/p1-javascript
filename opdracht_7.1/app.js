let txt = document.getElementById("txt");

let budget = 100;
let product = prompt("Hoe veel kost het product");

if (budget >= product) {
    txt.innerText = "U heeft genoeg geld!";
    txt.style.color = "green";
} else {
    txt.innerText = "Helaas, te weinig geldt"
    txt.style.color = "red";
}