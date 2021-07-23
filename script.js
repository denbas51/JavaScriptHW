function createBuffer() {
  let text = ""
  return function buffer(item) {
    if (typeof item == "string") return (text += item)
    else if (item == undefined) return text
  }
}
let buffer = createBuffer()

buffer("A")
buffer("XYZ")
console.log(buffer()) // AXYZ

function signUp(userName, password) {
  var obj = {}
  obj["userName"] = userName
  obj.signIn = function (newPassword) {
    if (newPassword == password) {
      return console.log(`Sign in success for ${userName}`)
    } else {
      return console.log("Password is incorrect")
    }
  }
  return obj
}
let user = signUp("billy", "qwerty")
user.signIn("a") // Password is incorrect
user.signIn("qwerty") // Sign in success for billy
