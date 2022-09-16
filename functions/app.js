//Oefening 1
const calculate = function(num1, num2) {
    let answer = num1 + num2
    alert(answer)
}

calculate(10,50)

//Oefening 2
const multiplyByFive = function(num) {
    let answer = num * 5
    alert(answer);
}

multiplyByFive(50);

//Oefening 3
const checkInput = function(num, num2) {
    if(num > num2){
        console.log(num);
    } else {
        console.log(num2);
    }
}

checkInput(1,5);

//Oefening 4
const calculateMinutes = function(num) {
    let answer = num / 60
    console.log(answer);
}

calculateMinutes(120);