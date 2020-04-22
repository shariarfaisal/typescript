
/*
1. number
2. string
3. boolean
4. array -> string[], number[], any[]
5. object
6. interface
7. tuple -> [string,number] , [number,string] ...
8. enum
9. Function -> bad practice ...
10. (type,type,...) => type -> good practice ...
11. unknown
12. void
13. never
*/

/*
function add(a: number,b: number): number{
  return a + b
}
console.log(add(3,5))
*/

// Alias -> custom type ...
type Combinable = string | number
type ManagerType = 'Admin' | 'Author'| 'Read-Only' // union alias

interface Person{
  name: string
  age: number
  hobbies: string[],
  position: ManagerType
}

// const person: {name: string, age: number: hobbies: string[]} = {
//   name: 'Faisal',
//   age: 21,
//   hobbies: ['Reading','Sports','Traveling']
// }

const person: Person = {
  name: 'Faisal',
  age: 21,
  hobbies: ['Reading','Sports','Traveling'],
  position: 'Admin'
}

for(let hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}

console.log(person.name)
