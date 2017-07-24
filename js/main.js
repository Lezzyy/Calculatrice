//VARIABLES
var number = document.getElementsByClassName('button');
var sign = document.getElementsByClassName('buttonFirst');
var result = document.getElementById('result');
var calcul = [];



function val(touches) {
  for (let i = 0; i < touches.length; i++) {
    touches[i].onclick = function() {
      calcul.push(touches[i].innerHTML);
      result.innerHTML = calcul;
    }
  }
}
val(number);
val(sign);
