const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const repeticiones = {}
  for (const word of param) {
    if (repeticiones[word]) {
      repeticiones[word]++
    } else {
      repeticiones[word] = 1
    }
  }
  return repeticiones
}

const resultado = repeatCounter(counterWords)

console.log(resultado)
