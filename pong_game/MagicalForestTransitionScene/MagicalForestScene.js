import Scene from "../../engine/Scene.js"
import BackgroundGameObject from "../WallGameObject.js"
import TextBoxText from "../WallGameObject.js"
import MagicalForestGameObjects from "./MagicalForestGameObjects.js"
import ButtonGameObject from "./ButtonForMagicalForest.js"
import MagicalForestSceneUpdateComponent from "./MagicalForestSceneUpdateComponent.js"
import TitleText from "./MagicalForestSceneTextGameObject.js"
class MagicalForestScene extends Scene{
constructor(){
    super("Main Pong Scene");
}
start (){
       //Add the walls
       let startX = 100;
       let startY = 100;
       let wallWidth = 10;
       let wallLength = 200;
       let canvas = document.getElementById('canv');
       let ctx = canvas.getContext('2d');
      

       this.gameObjects.push(new ButtonGameObject(100,100,100,100,100,100,"green"));
       this.gameObjects.push(new BackgroundGameObject(60,0,1400,ctx.canvas.height,"#3377FF")); // medium blue
       this.gameObjects.push(new BackgroundGameObject(60,0,1400,800,"#FFE6CC")); // grass
       this.gameObjects.push(new BackgroundGameObject(60,0,1400,550,"#FFE6CC")); // grass
    
        this.gameObjects.push(new BackgroundGameObject(60,0,1400,ctx.canvas.height - 400,"#80EAFF")); // dark blue
       this.gameObjects.push(new BackgroundGameObject(60,0,1400,ctx.canvas.height - 600,"#CCFFF7")); // light blue
     


        for (let gameObject of MagicalForestGameObjects){
            this.gameObjects.push(gameObject);
        }
   
       this.gameObjects.push(new TextBoxText(startX - 40, startY + 600, 1400, -200,"white","black"));
       this.gameObjects.push(new TitleText(60,550))
      //Background 
}
} export default MagicalForestScene

// #CCFFF7
// #3377F
// #80EAFF