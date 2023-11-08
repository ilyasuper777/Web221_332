function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
function task2(arr) {
  const ans = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!ans.has(arr[i])) {
      ans.set(arr[i], 1);
    } else {
      let k = ans.get(arr[i]);
      k++;
      ans.set(arr[i], k);
    }
  }
  return ans;
}

function task3(matr) {
  var ans = -999999;
  for (let row = 0; row < matr.length; row++) {
    var min_elem = 1000000000;
    for (let column = 0; column < matr[row].length; column++) {
      matr[row][column] < min_elem ? (min_elem = matr[row][column]) : min_elem;
    }
    min_elem > ans ? (ans = min_elem) : ans;
  }
  return ans;
}

var task4_vector = {
  initial_: function (x, y, z) {
    (this.x = x), (this.y = y), (this.z = z);
  },
  sum: function (another_vector) {
    return [
      this.x + another_vector.x,
      this.y + another_vector.y,
      this.z + another_vector.z,
    ];
  },
  minus: function (another_vector) {
    return [
      this.x - another_vector.x,
      this.y - another_vector.y,
      this.z - another_vector.z,
    ];
  },
  mult: function (another_vector) {
    return [
      this.x * another_vector.x,
      this.y * another_vector.y,
      this.z * another_vector.z,
    ];
  },
  mult_on_scalar: function (scalar) {
    return [this.x * scalar, this.y * scalar, this.z * scalar];
  },
  lenght_of_vector: function () {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  },
  scalar_mult: function (another_vector) {
    this.x * another_vector.x +
      this.y * another_vector.y +
      this.z * another_vector.z;
  },
};
function task5(arr5, k5) {
  var n5 = arr5.length;
  k5 = k5 % n5; // избавляемся от переполения (в-приниципе можно было и не делать)
  let out_arr = new Array(n5);
  var num;
  for (let i5 = 0; i5 < n5; i5++) {
    num = (i5 + k5) % n5; // 1-ый станет k-ым, 2-ой станет (k+1)-ым ...
    out_arr[i5] = arr5[num];
  }
  return out_arr;
}
var number_of_tasks = prompt("Введите номер задачи:");
switch (number_of_tasks) {
  case "1":
    var s1 = prompt(
      "Введите числа через пробел для сортировки пузырьком"
    ).split(" ");
    var s1;
    let arr1 = s1.map(Number);
    arr1 = bubbleSort(arr1);
    alert(arr1);
    break;
  case "2":
    var s2 = prompt("Введите числа через пробел").split(" ");
    let ans = s2.map(String);
    //let ans2 = new Map();
    let ans2 = task2(ans);
    console.log(ans2);
    alert("Смотреть ответ в консоли");
    break;
  case "3":
    matr = [
      [7, 1, 2],
      [4, 8, 1],
      [6, 2, 2],
    ];
    let ans3 = task3(matr);
    console.log(ans3);
    alert("Смотреть ответ в консоли");
    break;
  case "4":
    task4_vector.initial_(5, 3, 1);
    //let vec = new task4_vector();
    //vec.initial_(3, 1, 5);
    alert("Смотреть ответ в консоли");
    console.log(task4_vector.mult_on_scalar(3));
    //console.log(task4_vector.sum(vec));
    break;
  case "5":
    var s5 = prompt("Введите числа через пробел").split(" ");
    let arr5 = s5.map(Number);
    let key5 = prompt("Введите ключ");
    alert(task5(arr5, key5));
    break;
  default:
    alert("Такой задачи нет");
}

// Задача 5
// ряд: 5 2 5 7 8
// key 0 : 5 2 5 7 8
// key 1 : 2 5 7 8 5
// key 2 : 5 7 8 5 2
// key 3 : 7 8 5 2 5
// key 4 : 8 5 2 5 7
