const person = {
  name: 'Rodney',
  age: 29,
  greet(args1) {
    console.log(`My name is ${this.name}`)
  }
}

// person.greet()

const hobbies = ['Sport', 'Cooking']
// hobbies.forEach((hobbie) => console.log(hobbie))
// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby))

// const copiedArray = [...hobbies]
// const copiedPerson = {...person}
// console.log(copiedArray)
// console.log(copiedPerson)

const toArray = (...a) => {
  return a
}

console.log(toArray(2, 4, 6, 8, 10))