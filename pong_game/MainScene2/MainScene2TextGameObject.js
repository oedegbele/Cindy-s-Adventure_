import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";
import MainScene2Update from "./MainScene2Update.js";
class MainScene2TextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "", "35px sans"));
    this.components.push(new TextDraw(this, "black", "black"));
    this.components.push(new MainScene2Update(this));

  }

}

export default MainScene2TextGameObject;