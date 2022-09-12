import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";
import Time from "../../engine/Time.js";


class SceneTransitionUpdate2 extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    if(this.time > 2){
      Game.changeScene(5);
    }
  }
}

export default SceneTransitionUpdate2;