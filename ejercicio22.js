const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const usedFruits = []
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
    while (usedFruits.includes(randomFruit)) {
      randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
    }
    foodSchedule[i].name = randomFruit
    usedFruits.push(randomFruit)
  }
}

console.log(foodSchedule)
