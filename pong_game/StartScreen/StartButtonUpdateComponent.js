import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class StartButtonUpdateComponent extends Component {
    constructor(parent) {
        super(parent);
    }
    update() {
      
        let rectangle = this.parent.getComponent("Rectangle");

        if (Input.getMouseButtonDown(0)) {
            let mx = Input.getMousePosition().x;
            let my = Input.getMousePosition().y;

            if (mx > rectangle.x || mx < rectangle.x + rectangle.w && my > rectangle.y || my < rectangle.y + rectangle.h) {
                    Game.changeScene(1);
                }
            }
        }
    }

export default StartButtonUpdateComponent;
