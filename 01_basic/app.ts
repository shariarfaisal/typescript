import { Point } from './point'


// let a: number
// let b: boolean
// let c: string
// let d: any
// let e: number[] = [1,3,4]
// let f: any[] = [2,true,'ddd',false,[]]


// const ColorRed = 0
// const ColorGreen = 1
// const ColorBlue = 2
//
// enum Color { Red, Green, Blue }
//
// let backgroundColor = Color.Green


// let msg;
// msg = 'Will you marry me?'
// let endWithMe = (<string>msg).endsWith('me')
// // let endWithMe = (msg as string).endsWith('me')
// console.log(endWithMe);


// let log = function(msg){
//   console.log(msg);
// }
//
// let doLog = () => console.log()

// interface Point{
//   x: number
//   y: number
// }
//
// let drawPoint = (point: Point) => {
//   //...
// }
//
// drawPoint({
//   x: 4,
//   y: 3
// })

let point = new Point(3,4)
point.draw()
