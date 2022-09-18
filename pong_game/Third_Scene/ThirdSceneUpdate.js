import Component from "../../engine/Component.js";


class ThirdSceneUpdate extends Component {
    constructor(parent){
    super(parent);
    this.strings = ["Hi this is Third Scene",
                    "Third Scene Text 1,",
                    "Third Scene Text 2",
                    "Third Scene Text 3",
                    "Third Scene Text 4"];
    this.stringIndex = 0;
}
update() {
    let text = this.parent.getComponent("Text");
    text.text = this.strings[this.stringIndex];
}

}
export default ThirdSceneUpdate;