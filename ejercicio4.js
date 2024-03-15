1.1

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

1.2
avengers[0] = 'IRONMAN'
console.log(avengers)

1.3
console.log(avengers.length)

1.4

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

1.5

const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters1.pop()

console.log(rickAndMortyCharacters1)
console.log(rickAndMortyCharacters1[0])
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1])

1.6
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2)
