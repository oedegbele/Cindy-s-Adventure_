import Scene from "../../engine/Scene.js";
import BackgroundGameObjectForMainScene3 from "../WallGameObject.js"
import ExtraCharacterSpaceForNameOnMainScene3 from "../WallGameObject.js"
import ButtonGameObjectForMainScene3 from "./MainScene3ButtonGameObject.js"
import TextGameObjectForMainScene3 from "./MainScene3TextGameObject.js"
import CindyGameObject from "../Sprites/CindySprite/CindyGameObject.js";
import ArmoredKnightGameObjects from "../Sprites/ArmoredKnightSprite.js/ArmoredKnightGameObjects.js";
import RectangleGameObject from "../WallGameObject.js"
import Names from "../Sprites/CharacterNameFile/Names.js";
class MainScene3 extends Scene {
    constructor() {
        super("Main Pong Scene");
    }

    start() {

        let startX = 100;
        let startY = 100;
        let canvas = document.getElementById('canv');
        let ctx = canvas.getContext('2d');
      
        this.gameObjects.push(new BackgroundGameObjectForMainScene3(60, 0, 1400, ctx.canvas.height, "grey"));
        for (let gameObject of ArmoredKnightGameObjects){
            this.gameObjects.push(gameObject);
        }
    for (let gameObject of CindyGameObject){
        this.gameObjects.push(gameObject); 
      }

 

      this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 300, -260,"white"));
        this.gameObjects.push(new ExtraCharacterSpaceForNameOnMainScene3(startX - 40, startY + 600, 1400, -200, "white"));
        for(let gameObject of Names){
            this.gameObjects.push(gameObject);
        }
  
        this.gameObjects.push(new ButtonGameObjectForMainScene3(1310, 700, 150, -180, 1340, 625, "purple"));
        this.gameObjects.push(new TextGameObjectForMainScene3(60, 550,)); // TextBox Text
    }
} export default MainScene3