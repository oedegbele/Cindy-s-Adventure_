import Component from "../../engine/Component.js";


class FifthSceneUpdate extends Component {
    constructor(parent){
    super(parent);
    this.strings = ["Hi this is Fifth Scene",
                    "Fifth Scene Text 1,",
                    "Fifth Scene Text 2",
                    "Fifth Scene Text 3",
                    "Fifth Scene Text 4"];
    this.stringIndex = 0;
}
update() {
    let text = this.parent.getComponent("Text");
    text.text = this.strings[this.stringIndex];
}

}
export default FifthSceneUpdate;