import Component from "../engine/Component.js"
import Input from "../engine/Input.js";
import Text from "../engine/Text.js";
import Game from "../engine/Game.js";

class MainSceneUpdate extends Component {
  constructor(parent) {
    super(parent);
    this.strings = [
      "Today, is the day I'm finally leaving, everyone seems to have gathered around.",
      "Is everyone here to send me off?",
      "Of course!",
      "We wish you a safe journey into whatever lies outside.",
      "Dont forget Cindy: If you encounter anything dangerous...",
      "I'll come back right away. I know, I know!",
      "I can't help but feel curious, you know?",
      "There's got to be plenty of things out there.",
      "Simply exploring for myself will put my mind at ease",
      "So don't worry everyone! I won't be long!.",
      "I'll be back to share plenty of stories! Goodbye!",];
    this.stringIndex = 0;

  }


  update() {

    let i = 0;
    let j = 0;
    let text = this.parent.getComponent("Text");
    let letterCount = Math.floor(this.typewritterTimer * 2);
    text.text = this.strings[this.stringIndex];

 
       // add .substring() - pass in time char / time
  }
}



export default MainSceneUpdate