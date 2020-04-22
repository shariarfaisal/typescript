export {}


let name: string = 'Faisal!'
let isBeginner: boolean = true
let total: number = 0
let sentence: string = `Hey, My name is ${name}`

let n:null = null
let u:undefined = undefined

let isNew: boolean = null
let myName: string = undefined

let list1: number[] = [13,4,5]
let liste: Array<number> = [1,3,4]
let list3: any[] = [3,'follow',true]

let person1: [string,number] = ['faisal',34]

enum Color { Red, Green, Blue }

let c:Color = Color.Green

let reandomValue: any = 10
reandomValue = true
reandomValue = 'Faisal'

console.log(reandomValue.name );
console.log(reandomValue.toString());


let anotherVariable: unknown = 'Hello fellows!'
console.log(hasName({name: 0}));

let a;
a = 'hi'
a = true
a = 20

let b = 30
// b = 'wassap!' // it will throw an error because of it declares a value with number ...

let multiType: number | boolean
multiType = 20
multiType = true
// multiType = 'sucks'  // will throw an error

function hasName(obj: any): obj is { name: string }{
  return !!obj && typeof obj === 'object' && 'name' in obj
}

console.log(sentence);



// Function

function add(num1: number,num2: number): number {
  return num1 + num2
}

add(3,8)

interface Person{
  firstName: string
  lastname?: string
}


function fullName(person: Person): string {
  return `My fullname is ${person.firstName} ${person.lastname}`
}

const faisal = {
  firstName: 'Sharia Emon',
  lastname: 'faisal'
}

fullName(faisal)


class Employee{
  employeeName: string

  constructor(name: string){
    this.employeeName = name
  }

  greet(): string{
    return `Good Morning ${this.employeeName}`
  }
}

const emp1 = new Employee('Faisal')
console.log(emp1.employeeName);
console.log(emp1.greet());

class Manager extends Employee{
  constructor(managerName: string){
    super(managerName)
  }

  delegateWork(){
    console.log(`Manager delegating tasks!`);
  }
}

let m1 = new Manager('Faisal')
m1.delegateWork()
console.log(m1.greet());
