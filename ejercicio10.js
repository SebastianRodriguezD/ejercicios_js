function average(numbers) {
  let suma = 0
  for (let index = 0; index < numbers.length; index++) {
    suma += numbers[index]
  }
  const promedio = suma / numbers.length

  return promedio
}

const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers))
