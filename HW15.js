// let coffeeMachine = {
//   message: "Your coffee is ready!",
//   start: function () {
//     return setTimeout(() => console.log(teaPlease.message), 3000)
//   },
// }

// let teaPlease = {
//   message: "Wanna some tea instead of coffee?",
// }
// coffeeMachine.start() // 'Wanna some tea instead of coffee?'

function concatStr(str1, divider, str2) {
  return console.log(str1 + divider + str2)
}
let hello = concatStr.bind(concatStr, "Hello", " ")
let checkConcat = concatStr("Hello", " ", "Matt") // 'Hello Matt'
// ...
// let finalResult = hello("Matt") // 'Hello Matt'
let finalResult = hello("John") // 'Hello John'

// function showNumbers(start, end, period) {
//   setInterval(() => {
//     while (start <= end) {
//       return console.log(start++)
//     }
//   }, period)
// }
// showNumbers(5, 10, 500)

// function showNumbers(start, end, period) {
//   setTimeout(function interval() {
//     console.log(start)
//     if (start < end) {
//       setTimeout(interval, period)
//     }
//     start++
//   }, period)
// }
// showNumbers(5, 10, 500)

function addBase(base) {
  return function (num) {
    return base + num
  }
}
let addOne = addBase(1)
alert(addOne(5) + addOne(3))

//Результат 10. Функции высшего порядка позволяют нам абстрагировать действия, а не только значения. Они бывают разными. Например, можно сделать функцию, создающую новые функции. у нас вначале выполняется функция addBase и находит первое значение 1 и присваивает его новой функции addOne, потом уже выполняется новая функция, но значение base сохраняется
