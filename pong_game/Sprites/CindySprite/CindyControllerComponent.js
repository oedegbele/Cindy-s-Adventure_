import Component from "../../../engine/Component.js";
import Game from "../../../engine/Game.js";
import PrefabCircle from "../../../engine/PrefabCircle.js";
import MainSceneUpdate from "../../MainSceneUpdate.js";
import CindyGameObject from "./CindyGameObject.js";

class CindyControllerComponent extends Component { // class to update sprites(?)
    constructor(parent) {
        super(parent);

    }
    
    update() {

        //Questions: 
        // - I want to make the new game object visible when I have reached a certain index within my dialogue
        // array... I am not sure how to get/check the value of the string index array, while also 
        // searching through my array of game objects to make them visible/hidden
        // let mainSceneUpdate = Game.findByType("TextGameObject")[0];
        // let mainSceneUpdateComponent = mainSceneUpdate.getComponent("MainSceneUpdate");
        // if (mainSceneUpdateComponent.stringIndex == 2)
        // {
        // var gameObject = Game.findByName("CindyNeckPieceRed")[0]
       
        // gameObject.getComponent("CircleDraw").fillStyle="blue";
        // }
    }
    

    
    }
 export default CindyControllerComponent