const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(array) {
  const nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    if (!nuevoArray.includes(array[i])) {
      nuevoArray.push(array[i])
    }
  }

  return nuevoArray
}

const result = removeDuplicates(duplicates)
console.log(result)
