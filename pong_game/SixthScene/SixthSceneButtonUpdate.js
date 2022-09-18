import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class SixthSceneButtonUpdate extends Component {
    constructor(parent){
        super(parent);

    }

    update() {
        let gameObject = Game.findByType("TextGameObject6")[0];
        let thirdSceneUpdateComponent = gameObject.getComponent("SixthSceneUpdate");
        if (Input.getMouseButtonDown(0)) {
            thirdSceneUpdateComponent.stringIndex++;
        } 
        if (thirdSceneUpdateComponent.stringIndex > 4){
         
            Game.changeScene(12);
         } 
    } 
}
export default SixthSceneButtonUpdate;