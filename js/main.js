//VARIABLES
var number = document.getElementsByClassName('button');
var multi = document.getElementsByClassName('multi');
var add = document.getElementsByClassName('add');
var minus = document.getElementsByClassName('minus');
var dot = document.getElementsByClassName('dot');
var suppr = document.getElementsByClassName('suppr');
var result = document.getElementById('result');
var calcul = [];




function val(number) {

  for (let i = 0; i < number.length; i++) {
    number[i].onclick = function() {
      var numbers = parseFloat(number[i].innerHTML);
      calcul.push(numbers);
      result.innerHTML = calcul.join("");
      console.log(calcul);
    }
  }
}


val(number);
