const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, name) {
  for (let index = 0; index < array.length; index++)
    if (array[index] === name) {
      return [true, index]
    }
  return false
}

console.log(finderName(nameFinder, 'Tony'))
console.log(finderName(nameFinder, 'Sebas'))
