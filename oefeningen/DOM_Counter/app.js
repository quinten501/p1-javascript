let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let count = 0;

const counter = function() {
    count += 1;
    txt.innerText = count + "x";
    document.body.style.backgroundColor = "blue";
    btn.style.backgroundColor = "red";
}

const counter2 = function() {
    count -= 1;
    txt.innerText = count + "x";
    document.body.style.backgroundColor = "red";
    btn2.style.backgroundColor = "blue";
}