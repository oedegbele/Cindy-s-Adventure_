import GameObject from "../../engine/GameObject.js"
import FourthSceneUpdate from "./FourthSceneUpdate.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";
import Input from "../../engine/Input.js";

class TextGameObject4 extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "", "35px sans"));
    this.components.push(new TextDraw(this, "black", "black"));
    this.components.push(new FourthSceneUpdate(this));

  }
}
export default TextGameObject4;