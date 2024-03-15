const PeliculaPequeña = []
const PeliculaMediana = []
const PeliculaGrande = []
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    PeliculaPequeña.push(movie)
  }
  if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    PeliculaMediana.push(movie)
  }
  if (movie.durationInMinutes > 200) {
    PeliculaGrande.push(movie)
  }
}

console.log('Pelicula Pequeña: ', PeliculaPequeña)
console.log('Pelicula Mediana: ', PeliculaMediana)
console.log('Pelicula Grande: ', PeliculaGrande)
