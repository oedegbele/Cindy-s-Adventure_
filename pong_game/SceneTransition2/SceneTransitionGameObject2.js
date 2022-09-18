import GameObject from "../../engine/GameObject.js"
import Text from "../../engine/Text.js"
import TextDraw from "../../engine/TextDraw.js"
import SceneTransitionUpdate2 from "./SceneTransitionUpdate2.js";


class SceneTransitionGameObject2 extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Cindy Explains her situation....", "100px sans"))
    this.components.push(new TextDraw(this, "orange", "blue"))
    this.components.push(new SceneTransitionUpdate2(this))
  }
}

export default SceneTransitionGameObject2;