let vegetable = {
  name: "onion",
  color: "white",
  shape: "round",
}
const { name, color } = vegetable
console.log(`${name}s are usually ${color}`)
const { shape } = vegetable
console.log(`${name}s are usually ${shape}`)

let vegetables = [
  { name: "cucumber", color: "green" },
  { name: "tomato", color: "red" },
]
const [cucumber, tomato] = vegetables
console.log(`${cucumber.name}s are usually ${cucumber.color}`)
console.log(`${tomato.name}s are usually ${tomato.color}`)

let students = [
  { name: "Kate", age: 25 },
  { name: "Artur", age: 30 },
  { name: "Nick", age: 15 },
  { name: "Alex", age: 28 },
  { name: "Zhenia", age: 45 },
]
students.push(students.shift(students[0]))
const [Artur, ...otherStudents] = students

console.log(Artur, otherStudents.length)
