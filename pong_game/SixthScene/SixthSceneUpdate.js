import Component from "../../engine/Component.js";


class SixthSceneUpdate extends Component {
    constructor(parent){
    super(parent);
    this.strings = ["Hi this is Sixth Scene",
                    "Sixthd Scene Text 1,",
                    "Sixth Scene Text 2",
                    "Sixth Scene Text 3",
                    "Sixth Scene Text 4"];
    this.stringIndex = 0;
}
update() {
    let text = this.parent.getComponent("Text");
    text.text = this.strings[this.stringIndex];
}

}
export default SixthSceneUpdate;