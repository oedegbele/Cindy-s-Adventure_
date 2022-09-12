import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class FourthSceneButtonUpdate extends Component {
    constructor(parent){
        super(parent);

    }

    update() {
        let gameObject = Game.findByType("TextGameObject4")[0];
        let fourthSceneUpdateComponent = gameObject.getComponent("FourthSceneUpdate");
        if (Input.getMouseButtonDown(0)) {
            fourthSceneUpdateComponent.stringIndex++;
        } 
        if (fourthSceneUpdateComponent.stringIndex > 4){
         
            Game.changeScene(8);
         } 
    } 
}
export default FourthSceneButtonUpdate;