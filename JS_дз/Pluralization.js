var n = prompt("Введите число");
function pluralizeRecords(n) {
  var k = n % 100; // волнуют только последние 2 цифры
  if (k >= 11 && k <= 19) {
    return `В результате выполнения запроса было найдено ${n} записей`;
  }
  k = k % 10;
  if (k == 1) return `В результате выполнения запроса было найдено ${n} запись`;
  if (k > 1 && k < 5)
    return `В результате выполнения запроса было найдено ${n} записи`;
}
//console.log(pluralizeRecords(n));
alert(pluralizeRecords(n));
