var a = prompt("Введите первое число");
var b = prompt("Введите второе число");
function gcd(a, b) {
  var x = 1;
  for (var i = 2; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      x = i;
    }
  }
  return x;
}
var x = gcd(a, b);
//console.log(x);
alert(x);
