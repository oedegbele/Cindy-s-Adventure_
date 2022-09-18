import GameObject from "../../engine/GameObject.js";

import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";

import MagicalForestSceneUpdateComponent from "./MagicalForestSceneUpdateComponent.js";
class MagicalForestSceneTextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "Magical Forest", "35px sans"));
    this.components.push(new TextDraw(this, "black", "black"));
    this.components.push(new MagicalForestSceneUpdateComponent(this));

  }

}

export default MagicalForestSceneTextGameObject;