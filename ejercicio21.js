const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

for (let index = 0; index < users.length; index++) {
  if (users[index].years < 18) {
    console.log('Usuario menor de edad: ' + users[index].name)
  } else {
    console.log('Usuario mayor de edad: ' + users[index].name)
  }
}
