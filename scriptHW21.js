let student = {
  firstName: "Denys",
  lastName: "Basanets",
  averageScore: 97,
  getFullName() {
    return console.log(`${this.firstName} ${this.lastName}`)
  },
  isGrantHolder() {
    return this.averageScore >= 4 ? true : false
  },
}
student.getFullName()

function Aspirant(dissertationTopic, isDissertationComplete) {
  this.dissertationTopic = dissertationTopic
  this.isDissertationComplete = isDissertationComplete
  this.isGrantHolder = function () {
    return this.averageScore >= 4.5 && this.isDissertationComplete === true
      ? true
      : false
  }
}
Aspirant.prototype = student
let aspirant = new Aspirant("Hello", false)

console.log(student.isGrantHolder()) // true
console.log(aspirant.isGrantHolder())
for (let prop in aspirant) console.log(prop)

class Plane {
  constructor(name, isFlying = false) {
    this.name = name
    this.isFlying = isFlying
  }
  takeOff() {
    return (this.isFlying = true)
  }
  land() {
    return (this.isFlying = false)
  }
}

let airport = {
  __proto__: Plane,
  planes: [],
  getFlyingPlanes() {
    let filtered = this.planes.filter(function (item) {
      return item.isFlying === true
    })
    return filtered.length
  },
}

let plane1 = new Plane("First")
let plane2 = new Plane("Killer")
plane2.takeOff()
airport.planes.push(plane1, plane2)
console.log(airport.getFlyingPlanes())
