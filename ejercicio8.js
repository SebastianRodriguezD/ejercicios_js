function palabraMasLarga(array) {
  let palabraMasLarga = array[0]
  for (let index = 1; index < array.length; index++) {
    if (array[index].length > palabraMasLarga.length) {
      palabraMasLarga = array[index]
    }
  }

  return palabraMasLarga
}

const avengers1 = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(palabraMasLarga(avengers1))
