"use strict";
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
// const person: {name: string, age: number: hobbies: string[]} = {
//   name: 'Faisal',
//   age: 21,
//   hobbies: ['Reading','Sports','Traveling']
// }
var person = {
    name: 'Faisal',
    age: 21,
    hobbies: ['Reading', 'Sports', 'Traveling'],
    position: 'Admin'
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);
