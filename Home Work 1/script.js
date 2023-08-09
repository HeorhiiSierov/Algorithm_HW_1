function findMaxNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Если массив пуст, возвращаем undefined
  }

  let max = arr[0]; // Предполагаем, что первый элемент максимальный

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Если текущий элемент больше максимума, обновляем максимум
    }
  }

  return max;
}

const numbers = [10, 5, 7, 20, 15];
const maxNumber = findMaxNumber(numbers);
console.log("Наибольшее число:", maxNumber);

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, ""); // Приводим строку к нижнему регистру и удаляем пробелы

  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // Если символы не совпадают, строка не является палиндромом
    }
  }

  return true;
}

const testString1 = "radar";
console.log("Палиндром?", isPalindrome(testString1)); // Ожидается true

const testString2 = "hello";
console.log("Палиндром?", isPalindrome(testString2)); // Ожидается false
