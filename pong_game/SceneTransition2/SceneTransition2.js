import Scene from "../../engine/Scene.js"
import SceneTransitionGameObject2 from "./SceneTransitionGameObject2.js";

class SceneTransition2 extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
   this.gameObjects.push(new SceneTransitionGameObject2(100,100));

   
  }
}

export default SceneTransition2;
