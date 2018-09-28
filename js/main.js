document.querySelector('#add').addEventListener('click', sumNums);
document.querySelector('#minus').addEventListener('click', subtNums);
var result = document.querySelector('h1')

var sum = 0;
var subt = 0;

function sumNums() {
  var a = parseFloat(document.getElementById('firstbox').value);
  var b = parseFloat(document.getElementById('number').textContent);
  sum = a + b;
  result.textContent = `${sum}`;
  if ( sum <= -1 ) {
    result.style.color = 'red';
    } else {
        result.style.color = 'black'
    }
    return sum;
};

function subtNums() {
    var a = parseFloat(document.getElementById('firstbox').value);
    var b = parseFloat(document.getElementById('number').textContent);
    subt = b - a;
    result.textContent = `${subt}`;
    if ( subt <= -1 ) {
        result.style.color = 'red';
        } else {
            result.style.color = 'black'
        } return subt;
};