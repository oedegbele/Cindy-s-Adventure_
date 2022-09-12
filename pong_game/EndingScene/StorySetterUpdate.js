import Component from "../../engine/Component.js";
import Text from "../../engine/Text.js";
class StorySetterUpdate extends Component{
    constructor(parent) {
        super(parent);
   
        this.strings = [
          "Thus, Cindy and Lancelot set out for town.",
          "Cindy is excited for her first place to visit.",
          "At the same time, Lancelot is weary of Cindy.",
          "After all, there was a reason he was patroling the forest",
          "And that reason....was to monitor any suspicuous activity.",
          "There have been many eye witness reports of monsters..",
          "coming from the forest",
          "Of all things, Lancelot was not expecting a girl come out",
          "Monsters who have attacked the town...",
          "often carry dark energies from within their soul.",
          "Lancelot plans to visit the Church with Cindy.",
          "So that the High Priestess can examine her...",
          "and see if she holds any potential darkness.",
          "End of Chapter 1."]
          this.stringIndex = 0;
      }
      update() {
      
        let text = this.parent.getComponent("Text");
        text.text = this.strings[this.stringIndex];

      }
} export default StorySetterUpdate