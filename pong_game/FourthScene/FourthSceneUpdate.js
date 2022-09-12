import Component from "../../engine/Component.js";


class FourthSceneUpdate extends Component {
    constructor(parent){
    super(parent);
    this.strings = ["Hi this is fourth Scene",
                    "Fourth Scene Text 1,",
                    "Fourth Scene Text 2",
                    "Fourth Scene Text 3",
                    "Fourth Scene Text 4"];
    this.stringIndex = 0;
}
update() {
    let text = this.parent.getComponent("Text");
    text.text = this.strings[this.stringIndex];
}

}
export default FourthSceneUpdate;