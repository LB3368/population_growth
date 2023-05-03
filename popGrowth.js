const nbYear = (p0, percent, aug, p) => {
  let year = 0
  let population = p0
  while (population < p) {
    population += population * percent / 100 + aug
    year++
  }
  return year
}

const result = nbYear(1500, 5, 100, 5000)
console.log(result)