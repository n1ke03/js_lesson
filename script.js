let myName = "Ivan";
//let myName = 6+356;
let number = 7;
let number2 = 7.2;
let isDay = false;

let result = number + 1 - 2 * 5 / 5;
result = number + number2;
console.log(name);
console.log(result);

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
console.log(phrase)
// Логические операторы
console.log("Равенство", number == number2);
console.log("Меньше", number < number2);
console.log("Больше", number > number2);
console.log("Меньше или равно", number <= number2);
console.log("Больше или равно", number >= number2);
console.log("Не равно", number != number2);
console.log(myName, "is", typeof name);
// Калькулятор
let a = prompt("Укажи первое значение");
let b = prompt("Укажи второе значение");
let itogo = Number(a)+Number(b);
alert("Итого: "+itogo);