import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";
import Input from "../../engine/Input.js";
class ButtonGameObjectForStoryUpdate extends Component {
    constructor(parent) {
        super(parent);

    }

    update() {
        let storySetterUpdater = Game.findByType("StorySetterTextGameObject")[0];
        let storySetterUpdateComponent = storySetterUpdater.getComponent("StorySetterUpdate");
        let rectangle = this.parent.getComponent("Rectangle");

        if (Input.getMouseButtonDown(0)) {
            let mx = Input.getMousePosition().x;
            let my = Input.getMousePosition().y;

            if (mx > rectangle.x || mx < rectangle.x + rectangle.w && my > rectangle.y || my < rectangle.y + rectangle.h) {
                storySetterUpdateComponent.stringIndex++;

                
                if (storySetterUpdateComponent.stringIndex >= 4) {
                    Game.changeScene(2);
                }
            }
        }
    }
}
export default ButtonGameObjectForStoryUpdate;