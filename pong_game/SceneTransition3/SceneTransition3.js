import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject3 from "./SceneTransitionGameObject3.js";

class SceneTransition3 extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject3(100,100));
  }
}

export default SceneTransition3;
