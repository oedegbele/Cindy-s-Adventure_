import Scene from "../../../engine/Scene.js"
import StartGameObject from "./StartGameObject.js";
import ButtonGameObject from "../ButtonGameObject.js";
import Rectangle from "../../engine/Rectangle.js";
import PrefabRectangle from "../../engine/PrefabRectangle.js";
import RectangleGameObject from "../WallGameObject.js"
import StartGameRectangleGameObject from "./StartGameRectangleGameObject.js"
import StartButtonGameObject from "./StartButtonGameObject.js";


class StartScene extends Scene {
  constructor() {

    super("Main Pong Scene");
  }
  

  start(){
    let startX = 100;
    let startY = 100;
    let ctx = document.getElementById("canv").getContext("2d");
    let height = ctx.canvas.height;

    this.gameObjects.push(new StartGameRectangleGameObject(60,0,1400,height,"orange"));
    this.gameObjects.push(new StartGameRectangleGameObject(startX - 40, startY + 10, 1400, 500,"grey"));
    this.gameObjects.push(new StartGameObject(345,203,"Cindy's Adventure","white"));
   this.gameObjects.push(new StartGameObject(350,200,"Cindy's Adventure","orange"));
  //  this.gameObjects.push(new StartGameObject(615,403,"Start","white"));
  //  this.gameObjects.push(new StartGameObject(620,400,"Start","orange"));

   this.gameObjects.push(new StartButtonGameObject(590,240,300,200,615,360,"orange"));

  }

}

export default StartScene;
