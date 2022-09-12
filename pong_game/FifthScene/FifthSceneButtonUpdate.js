import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class FifthSceneButtonUpdate extends Component {
    constructor(parent){
        super(parent);

    }

    update() {
        let gameObject = Game.findByType("TextGameObject5")[0];
        let thirdSceneUpdateComponent = gameObject.getComponent("FifthSceneUpdate");
        if (Input.getMouseButtonDown(0)) {
            thirdSceneUpdateComponent.stringIndex++;
        } 
        if (thirdSceneUpdateComponent.stringIndex > 4){
         
            Game.changeScene(10);
         } 
    } 
}
export default FifthSceneButtonUpdate;