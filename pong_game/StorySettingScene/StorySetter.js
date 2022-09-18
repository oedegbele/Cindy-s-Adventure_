import Scene from "../../engine/Scene.js"
import BackgroundGameObject from "../WallGameObject.js"
import RectangleGameObject from "../WallGameObject.js"
import TextGameObject from "./StorySetterTextGameObject.js"
import ButtonGameObject from "./ButtonGameObjectForStory.js"
class StorySetter extends Scene{
    constructor(){
        super("Main Pong Scene");
    }

    start()
    {
        //Add the walls
    let startX = 100;
    let startY = 100;
    let wallWidth = 10;
    let wallLength = 200;
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext('2d');
    

    this.gameObjects.push(new BackgroundGameObject(60,0,1400,ctx.canvas.height,"grey")); //Background 
  
    this.gameObjects.push(new ButtonGameObject(1110, 550, 150, -100, 1140, 500, "orange"));
    this.gameObjects.push(new TextGameObject(60, ctx.canvas.height/2)); // Text 
    }

} export default StorySetter