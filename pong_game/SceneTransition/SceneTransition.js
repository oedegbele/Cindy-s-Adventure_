import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject from "./SceneTransitionGameObject.js";

class SceneTransition extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject(100,100));
  }
}

export default SceneTransition;
