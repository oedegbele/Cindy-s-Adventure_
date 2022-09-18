import Scene from "../../engine/Scene.js";
import BackgroundGameObjectForMainScene2 from "../WallGameObject.js"
import ExtraCharacterSpaceForNameOnMainScene2 from "../WallGameObject.js"
import ButtonGameObjectForMainScene2 from "./MainScene2ButtonGameObject.js"
import TextGameObjectForMainScene2 from "./MainScene2TextGameObject.js"
import CindyGameObject from "../Sprites/CindySprite/CindyGameObject.js";
import ArmoredKnightGameObjects from "../Sprites/ArmoredKnightSprite.js/ArmoredKnightGameObjects.js";
import RectangleGameObject from "../WallGameObject.js"
import Names from "../Sprites/CharacterNameFile/Names.js";
class MainScene2 extends Scene {
    constructor() {
        super("Main Pong Scene");
    }

    start() {

        let startX = 100;
        let startY = 100;
        let canvas = document.getElementById('canv');
        let ctx = canvas.getContext('2d');
      
        this.gameObjects.push(new BackgroundGameObjectForMainScene2(60, 0, 1400, ctx.canvas.height, "grey"));
        for (let gameObject of ArmoredKnightGameObjects){
            this.gameObjects.push(gameObject);
        }
    for (let gameObject of CindyGameObject){
        this.gameObjects.push(gameObject); 
      }

 

      this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 300, -260,"white"));
        this.gameObjects.push(new ExtraCharacterSpaceForNameOnMainScene2(startX - 40, startY + 600, 1400, -200, "white"));
        for(let gameObject of Names){
            this.gameObjects.push(gameObject);
        }
  
        this.gameObjects.push(new ButtonGameObjectForMainScene2(1310, 700, 150, -180, 1340, 625, "purple"));
        this.gameObjects.push(new TextGameObjectForMainScene2(60, 550,)); // TextBox Text
    }
} export default MainScene2