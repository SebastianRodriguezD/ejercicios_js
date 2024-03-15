function averageWord(array) {
  let suma = 0
  let count = 0

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'number') {
      suma += array[index]
    } else if (typeof array[index] === 'string') {
      suma += array[index].length
      count++
    }
  }
  return suma / count
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
console.log(averageWord(mixedElements))
