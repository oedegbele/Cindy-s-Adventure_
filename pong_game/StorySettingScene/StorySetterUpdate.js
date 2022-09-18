import Component from "../../engine/Component.js";
import Text from "../../engine/Text.js";
class StorySetterUpdate extends Component{
    constructor(parent) {
        super(parent);
   
        this.strings = [
          "There once was a girl named Cindy",
          "Cindy lived in a magical forest with lots of animals",
          "These animals treated her like family, however...." ,
          "Cindy always desired to meet humans, just like herself.",
          "One day, Cindy decides to leave the forest", 
          "In hopes to find new people to interact with."];
          this.stringIndex = 0;
      }
      update() {
      
        let text = this.parent.getComponent("Text");
        text.text = this.strings[this.stringIndex];

      }
} export default StorySetterUpdate