import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject4 from "./SceneTransitionGameObject4.js";

class SceneTransition4 extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject4(100,100));
  }
}

export default SceneTransition4;
