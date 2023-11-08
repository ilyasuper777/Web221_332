let getSortedArray = function (array, key) {
  for (let i = 0; i < array.length - 1; i++) {
    let swap = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j][key] < array[i][key]) {
        array[i] = array[j];
        array[j] = swap;
        swap = array[i];
      }
    }
  }
  return array;
};

let key = prompt("Введите ключ");
let array = [
  { name: "Ilya", age: 19, surname: "Averin", heihgt: 177, weight: 85 },
  { name: "Slava", age: 18, surname: "Keznetsov", heihgt: 185, weight: 70 },
  { name: "Yan", age: 19, surname: "Malyshevski", heihgt: 195, weight: 70 },
  { name: "Roma", age: 18, surname: "Nechaev", heihgt: 182, weight: 65 },
];
alert("Смотреть ответ в консоли");
console.log(getSortedArray(array, key));
