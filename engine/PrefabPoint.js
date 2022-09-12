import GameObject from "../engine/GameObject.js"
import Point from "../engine/Point.js";
import PointDraw from "../engine/PointDraw.js";

class PrefabPoint extends GameObject{
  constructor(name, x, y, r){
    super(name);
    this.x = x;
    this.y = y;
    this.r =r;

    this.start();
  }
  start(){
    this.components.push(new Point(this, this.x,this.y));
    this.components.push(new PointDraw(this, "black", "black"));
  }
}

export default PrefabPoint;