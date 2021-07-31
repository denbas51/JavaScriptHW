// 1) Напишите функцию, которая изменяет фоновый цвет текста последнего параграфа в блоке

// <body>, а так же функцию, которая меняет блоки footer и main местами.

// _

// HTML-файл должен быть со следующей структурой в секции <body> :

// <div id="wrapper">
//   <div id="footer">
//     <h1>Footer</h1>
//   </div>
//   <div id="main">
//     <p>I am first paragraph</p>
//     <p>I am second paragraph</p>
//     <p>I am last paragraph</p>
//   </div>
// </div>

// function changeColor(col) {
//   let lastP = document.querySelector("#main")
//   lastP.lastElementChild.style.backgroundColor = col
// }
// changeColor("red")

// function changePosition() {
//   let footer = document.querySelector("#footer")
//   footer.parentNode.append(footer)
// }
// changePosition()

// 2) Напишите функцию, которая спрашивает у пользователя разрешения добавить картинку (confirm()) и в случае согласия добавляет картинку на страницу (ссылку на картинку пользователь должен задавать самостоятельно).

// _

// HTML-файл должен быть со следующей структурой в секции <body> :

// <div id="wrapper">
//   <h1>Images</h1>
// </div>
// function getImg(link) {
//   if (confirm("add Img?")) {
//     let h1 = document.querySelector("h1")
//     let img = document.createElement("img")
//     img.src = link
//     h1.append(img)
//   }
// }
// getImg("https://miro.medium.com/max/500/0*6e2K0U6ZkN9Ju9iL.jpg")

// 3) Для этого задания вам понадобится файл index.html прикрепленный внизу.

// Запросите у пользователя число и добавьте в форму теги <input> (перед кнопкной Register) равных этому числую.

// Требования к тегу <input>:

// каждый инпут должен содержать класс input-item, value = `Input ${index}`;
// последний инпут должен иметь дополнительный класс margin-zero;
// создайте собственный класс, со свойством background-color и добавьте его всем нечетным инпутам;
// очистите значение каждому третьему инпуту и задайте ему атрибут placeholder с любым текстом.
// Ожидаемый результат прикреплен внизу.

let number = +prompt("Enter the number")
for (let index = number; index >= 1; index--) {
  let input = document.createElement("input")
  let form = document.querySelector("form")
  form.prepend(input)
  input.className = "input-item"
  input.setAttribute("value", `Input ${index}`)
  document.querySelector("input:last-of-type").classList.add("margin-zero")
  if (index % 2) {
    input.classList.add("newClass")
    input.style.backgroundColor = "#2d5e7e"
  }
  if (!(index % 3)) {
    input.removeAttribute("value")
    input.setAttribute("placeholder", "some text")
    console.log(index)
  }
}
