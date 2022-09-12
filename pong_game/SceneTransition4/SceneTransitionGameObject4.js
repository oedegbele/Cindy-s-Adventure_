import GameObject from "../../engine/GameObject.js"
import Text from "../../engine/Text.js"
import TextDraw from "../../engine/TextDraw.js"
import SceneTransitionUpdate4 from "./SceneTransitionUpdate4.js";


class SceneTransitionGameObject4 extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Next Scene....", "100px sans"))
    this.components.push(new TextDraw(this, "orange", "blue"))
    this.components.push(new SceneTransitionUpdate4(this))
  }
}

export default SceneTransitionGameObject4;