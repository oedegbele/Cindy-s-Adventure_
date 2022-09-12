
import Component from "../engine/Component.js"
import StartUpdateComponent from "./StartScreen/StartUpdateComponent.js";
import MainScene from "./MainScene.js";
import GameObject from "../engine/GameObject.js";
import Game from "../engine/Game.js";
class MainSceneControllerComponent extends GameObject{
constructor(parent){
    super(parent);

}

update(ctx){


   
    // var nothing = nothingGameObject.getComponent("Text");
    
    // let letterCount = Math.floor(this.typewritterTimer * 2);
    // nothing.text = "Hello, my name is Cindy".substring(0, letterCount);
}

} export default MainSceneControllerComponent