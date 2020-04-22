
export class Point{
  // private x: number
  // private y: number

  constructor(private _x?: number, private _y?: number){ }

  get x(){
    return this._x
  }

  set x(value){
    if(value < 0)
      throw new Error('Value cannot be less than 0.')
    this._x = value
  }

  draw(){
    // ...
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  getDistance(another: Point){
    // ...
  }
}
