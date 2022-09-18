import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";
import MainScene3Update from "./MainScene3Update.js";
class MainScene3TextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "", "35px sans"));
    this.components.push(new TextDraw(this, "black", "black"));
    this.components.push(new MainScene3Update(this));

  }

}

export default MainScene3TextGameObject;