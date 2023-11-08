var x = prompt("Введите число");
function minDigit(x) {
  var ans = 10; // это пока что не цифра
  while (x > 0) {
    if (x % 10 < ans) {
      ans = x % 10;
    }
    x = Math.floor(x / 10);
  }
  return ans;
}
//console.log(minDigit(x));
alert(minDigit(x));
