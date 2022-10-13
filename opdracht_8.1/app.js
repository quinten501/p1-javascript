let num = document.getElementById("num");
let num2 = document.getElementById("num2");
let txt = document.getElementById("text");

const plus = function() {
    answer = Number(num.value) + Number(num2.value);
    txt.innerText = "Het antwoord is: " + answer;
}

const keer = function() {
    answer = num.value * num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}

const min = function() {
    answer = num.value - num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}

const gedeeddoor = function() {
    answer = num.value / num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}