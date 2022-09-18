import Component from "../../engine/Component.js";
import Time from "../../engine/Time.js"
import Game from "../../engine/Game.js"
class MagicalForestSceneUpdateComponent extends Component {
    constructor(parent) {
      super(parent);
      this.time = 0;
    }
    update() {
      this.time += Time.secondsBetweenFrame;
      if(this.time > 2){ // Change to Onclick later
        Game.changeScene(3)
      }
    }
  } export default MagicalForestSceneUpdateComponent