// let s = String.fromCharCode(97);  -> 'a'
// 'a'.charCodeAt(0); -> 97
// русский алфавит: маленькие буквы: от 1072 до 1103, большие буквы: от 1040 до 1071

function cesar(str, shift, action) {
  shift = shift % 32; // избежания переполнения
  let ans = "";
  let n;
  if (action == "encode") {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 1040 && str.charCodeAt(i) <= 1071) {
        n = str.charCodeAt(i) - 1040;
        n = (n + shift) % 32; // ё отсутствует
        n = n + 1040;
        ans = ans + String.fromCharCode(n);
      } else if (str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1103) {
        n = str.charCodeAt(i) - 1072;
        n = (n + shift) % 32;
        n = n + 1072;
        ans = ans + String.fromCharCode(n);
      } else {
        ans = ans + str[i];
      }
    }
    return ans;
  } else if (action == "decode") {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 1040 && str.charCodeAt(i) <= 1071) {
        n = str.charCodeAt(i) - 1040;
        n = (n - shift + 32) % 32; // ё отсутствует
        n = n + 1040;
        ans = ans + String.fromCharCode(n);
      } else if (str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1103) {
        n = str.charCodeAt(i) - 1072;
        n = (n - shift + 32) % 32;
        n = n + 1072;
        ans = ans + String.fromCharCode(n);
      } else {
        ans = ans + str[i];
      }
    }
    return ans;
  } else {
    return "ERROR";
  }
}
let str = prompt("Введите str");
let shift = prompt("Введите shift");
let action = prompt("Введите action (encode или decode)");
alert(cesar(str, shift, action));

/* else if (str[i].charCodeAt(0) >= 160 && str[i].charCodeAt(0) <= 175) {
        n = str[i].charCodeAt(0) - 160;
        n = (n + shift) % 32;
        if (n <= 16) {
          n = n + 160;
        } else {
          n = n + 224;
        }
        ans = ans + String.fromCharCode(n);
      } else if (str[i].charCodeAt(0) >= 224 && str[i].charCodeAt(0) <= 239) {
        n = str[i].charCodeAt(0) - 224;
        n = (n + shift) % 32;
        if (n <= 16) {
          n = n + 160;
        } else {
          n = n + 224;
        }
        ans = ans + String.fromCharCode(n);*/
