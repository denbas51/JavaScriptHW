const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    let random = getRandomIntInclusive(1, 6)
    if (1 <= random && random <= 5) {
      console.log("Start the game...")
      resolve(random)
    } else if (random == 6) {
      reject(new Error("Exit"))
    }
  }, 2000)
})

promise
  .then((data) => {
    if (data == 1) {
      console.log("Stay here")
    } else if (data >= 2) {
      console.log(`Go ${data} steps`)
    }
  })
  .catch((error) => {
    console.log(error)
  })

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
}
