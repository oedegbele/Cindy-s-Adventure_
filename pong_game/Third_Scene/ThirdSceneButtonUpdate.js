import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class ThirdSceneButtonUpdate extends Component {
    constructor(parent){
        super(parent);

    }

    update() {
        let gameObject = Game.findByType("TextGameObject3")[0];
        let thirdSceneUpdateComponent = gameObject.getComponent("ThirdSceneUpdate");
        if (Input.getMouseButtonDown(0)) {
            thirdSceneUpdateComponent.stringIndex++;
        } 
        if (thirdSceneUpdateComponent.stringIndex > 4){
         
            Game.changeScene(6);
         } 
    } 
}
export default ThirdSceneButtonUpdate;