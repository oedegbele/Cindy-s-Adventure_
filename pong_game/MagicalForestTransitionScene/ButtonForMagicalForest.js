import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import RectangleDraw from "../../engine/RectangleDraw.js";
import Rectangle from "../../engine/Rectangle.js";
import TextDraw from "../../engine/TextDraw.js";


class ButtonObjectForMagicalForest extends GameObject{
    constructor(x,y,w,h,a,b,fillStyle){
        super(parent);
        this.components.push(new Text( this,a,b, "Next", "45px Arial"));
        this.components.push(new RectangleDraw(this,fillStyle));
        this.components.push(new TextDraw(this,"black","white"));
        this.components.push(new Rectangle(this,x,y,w,h));
        
        
        
    }
    } export default ButtonObjectForMagicalForest