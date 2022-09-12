import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject5 from "./SceneTransitionGameObject5.js";

class SceneTransition5 extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject5(100,100));
  }
}

export default SceneTransition5;
