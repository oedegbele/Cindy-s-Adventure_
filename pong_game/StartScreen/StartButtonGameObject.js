import Rectangle from "../../engine/Rectangle.js";
import RectangleDraw from "../../engine/RectangleDraw.js";
import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";
import StartButtonUpdateComponent from "./StartButtonUpdateComponent.js";
class StartButtonGameObject extends GameObject{
    constructor(x,y,w,h,a,b,color){
        super(parent);
        this.components.push(new Text( this,a,b, "Press Start", "60px sans"));
        this.components.push(new RectangleDraw(this,color));
        this.components.push(new TextDraw(this,"white","black"));
        this.components.push(new Rectangle(this,x,y,w,h));
        this.components.push(new StartButtonUpdateComponent(this));
    
    }
}
export default StartButtonGameObject;