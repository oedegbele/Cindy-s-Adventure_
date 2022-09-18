import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject6 from "./SceneTransitionGameObject6.js";

class SceneTransition6 extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject6(100,100));
  }
}

export default SceneTransition6;
