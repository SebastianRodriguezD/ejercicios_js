function sumAll(numbers) {
  let suma = 0

  for (let index = 0; index < numbers.length; index++) {
    suma += numbers[index]
  }
  return suma
}

const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumAll(numbers))
