var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);
var input1 = document.getElementById('Number1'); 
var input2 = document.getElementById('Number2');
var num1, num2, answer;
var dropDown = document.getElementById("DropdownMenu1");
var output = document.getElementById('Answer');

function doMath() {
    if  (dropDown.value == "+"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1) + parseInt(num2);
        output.innerHTML = answer;
    }
    else if  (dropDown.value == "-"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1) - parseInt(num2);
        output.innerHTML = answer;
    }  
    else if  (dropDown.value == "÷"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1) / parseInt(num2);
        output.innerHTML = answer;
    }
    else if  (dropDown.value == "x"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1) * parseInt(num2);
        output.innerHTML = answer;
    }
    else if  (dropDown.value == "%"){
        num1 = input1.value;
        num2 = input2.value;
        //answer = parseInt(num1) % parseInt(num2);
        answer = parseInt(num1)  * parseInt(num2) / 100;

        output.innerHTML = answer;
    } 
    else if  (dropDown.value == "^"){
        num1 = input1.value;
        num2 = input2.value;
        answer = Math.pow(parseInt(num1), parseInt(num2));
        output.innerHTML = answer;
    } 
}