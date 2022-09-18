import Text from "../../engine/Text.js";
import RectangleDraw from "../../engine/RectangleDraw.js";
import Rectangle from "../../engine/Rectangle.js";
import TextDraw from "../../engine/TextDraw.js";
import MainScene2ButtonUpdate from "./MainScene2ButtonUpdate.js"
import GameObject from "../../engine/GameObject.js";
class MainScene2ButtonGameObject extends GameObject{
    constructor(x,y,w,h,a,b,color){
        super(parent);
        this.components.push(new Text( this,a,b, "Next", "45px sans"));
        this.components.push(new RectangleDraw(this,color));
        this.components.push(new TextDraw(this,"black","white"));
        this.components.push(new Rectangle(this,x,y,w,h));
        
        this.components.push(new MainScene2ButtonUpdate(this));
    
    }
}
export default MainScene2ButtonGameObject;