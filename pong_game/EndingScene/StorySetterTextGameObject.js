import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";
import StorySetterUpdate from "./StorySetterUpdate.js";

class StorySetterTextGameObject extends GameObject{
    constructor(x,y){
      super();
      this.components.push(new Text(this, x,y, "", "bold 50px sans-serif"));
      this.components.push(new TextDraw(this, "orange", "black"));
      this.components.push(new StorySetterUpdate(this));
  
    }
  
  }
  
  export default StorySetterTextGameObject;