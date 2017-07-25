//VARIABLES
var number = document.getElementsByClassName('button');
var sign = document.getElementsByClassName('buttonFirst');
var result = document.getElementById('result');
var calcul = [];


function val(number) {

  for (let i = 0; i < number.length; i++) {
    number[i].onclick = function() {
      var numbers = parseFloat(number[i].innerHTML);
      calcul.push(numbers);
      result.innerHTML = calcul.join("");
    }
  }
}

val(number);

function valeur(sign) {
  for (let i = 0; i < sign.length; i++) {
    sign[i].onclick = function() {
      calcul.push(sign[i].innerHTML);
      result.innerHTML = calcul.join("");
    }
  }
}
valeur(sign);

function suppr(){
  sign[4].onclick = function(){
  result.innerHTML="";
  calcul=[];
    console.log(sign[4]);
  }
}
suppr();
