import GameObject from "../../../engine/GameObject.js";
import Circle from "../../../engine/Circle.js"
import CircleDraw from "../../../engine/CircleDraw.js"


class CindyCircleParts extends GameObject {
constructor(x,y,w,color){
    super(parent);
    this.components.push(new Circle(this,x,y,w));
    this.components.push(new CircleDraw(this,color))
}
} export default CindyCircleParts