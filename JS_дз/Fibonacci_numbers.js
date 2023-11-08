var n = prompt("Введите число");
function fibb(n) {
  if (n <= 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibb(n - 1) + fibb(n - 2);
}
//console.log(fibb(n));
alert(fibb(n));
