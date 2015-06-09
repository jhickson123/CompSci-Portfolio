var keyZero = document.getElementById("zero");
keyZero.addEventListener("click", mathify);

var keyOne = document.getElementById("one");
keyOne.addEventListener("click", mathify);

var keyTwo = document.getElementById("two");
keyTwo.addEventListener("click", mathify);

var keyThree = document.getElementById("three");
keyThree.addEventListener("click", mathify);

var keyFour = document.getElementById("four");
keyFour.addEventListener("click", mathify);

var keyFive = document.getElementById("five");
keyFive.addEventListener("click", mathify);

var keySix = document.getElementById("six");
keySix.addEventListener("click", mathify);

var keySeven = document.getElementById("seven");
keySeven.addEventListener("click", mathify);

var keyEight = document.getElementById("eight");
keyEight.addEventListener("click", mathify);

var keyNine = document.getElementById("nine");
keyNine.addEventListener("click", mathify);

var keyAdd = document.getElementById("add");
keyAdd.addEventListener("click", mathify);

var keyClear = document.getElementById("clear");
keyClear.addEventListener("click", mathify);

var keyEquals = document.getElementById("equals");
keyEquals.addEventListener("click", mathify);

var keyDivide = document.getElementById("divide");
keyDivide.addEventListener("click", mathify);

var keyMultiply = document.getElementById("multiply");
keyMultiply.addEventListener("click", mathify);

var keySubtract = document.getElementById("subtract");
keySubtract.addEventListener("click", mathify);

var output = document.getElementById("display");

function mathify(){
  
  var btnVal;
  var opVal;
  var num1;
  var num2;
  var answer;

	if(this.classList.contains("opp")){
        output.insertAdjacentHTML('beforeend', this.innerHTML);
        //opVal = this.innerHTML;
        //num1 = btnVal.;
        //output.innerHTML = btnVal;
	}
	else if(this.innerHTML === "="){
        //num2 = btnVal;
        //output.innerHTML = opVal;
        output.insertAdjacentHTML('beforeend', this.innerHTML);
        //answer = parseInt(num1) + parseInt(num2);
        //output.innerHTML = answer;      
      
	}
	else if(this.innerHTML === "Clear"){
        output.innerHTML = null;
        btnVal = output.innerHTML;
	}
	else{
	   output.insertAdjacentHTML('beforeend', this.innerHTML);
	   btnVal = output.innerHTML;

}
}