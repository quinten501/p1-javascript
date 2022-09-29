let button = document.getElementById("btn");

let count = 0;

const clicker = function() {
    count += 1;
    button.innerText = count + "x geklikt";

}