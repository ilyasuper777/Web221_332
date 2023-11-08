var x = prompt("Введите число, которое будете возводить в степень:", "");
var n = prompt("Введите степень:", "");
function pow(x, n) {
  let ans = 1;
  for (var i = 0; i < n; i++) {
    ans = ans * x;
  }
  return ans;
}
//onsole.log(pow(x, n));
alert(pow(x, n));
