import GameObject from "../../engine/GameObject.js"
import Text from "../../engine/Text.js"
import TextDraw from "../../engine/TextDraw.js"
import SceneTransitionUpdate6 from "./SceneTransitionUpdate6.js";


class SceneTransitionGameObject6 extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"End", "100px sans"))
    this.components.push(new TextDraw(this, "orange", "blue"))
    this.components.push(new SceneTransitionUpdate6(this))
  }
}

export default SceneTransitionGameObject6;