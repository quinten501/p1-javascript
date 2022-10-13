let num = document.getElementById("num");
let num2 = document.getElementById("num2");
let txt = document.getElementById("text");

const plus = function() {
    if ((num.value <= 0) || (num2.value <= 0)) {
    txt.innerText = "Het getal is te laag"
} else {
    answer = Number(num.value) + Number(num2.value);
    txt.innerText = "Het antwoord is: " + answer;
}}

const keer = function() {
    if ((num.value <= 0) || (num2.value <= 0)) {
    txt.innerText = "Het getal is te laag"
} else {
    answer = num.value * num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}}

const min = function() {
    if ((num.value <= 0) || (num2.value <= 0)) {
    txt.innerText = "Het getal is te laag"
} else {
    answer = num.value - num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}}

const gedeeddoor = function() {
    if ((num.value <= 0) || (num2.value <= 0)) {
    txt.innerText = "Het getal is te laag"
} else {
    answer = num.value / num2.value;
    txt.innerText = "Het antwoord is: " + answer;
}}