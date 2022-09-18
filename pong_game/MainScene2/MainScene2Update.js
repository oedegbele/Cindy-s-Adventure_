import Component from "../../engine/Component.js";
class MainScene2Update extends Component {
  constructor(parent) {
    super(parent);
    this.strings = [
    "Wow, the view from the edge of the forest outskirts is really nice!",
    "Hm....It looks like someone is there.....",
    "........",
    "Maybe this is my chance to introduce myself!",
    "Um.. hello there!",
    ".....? (A person?!)",
    "My Name's Cindy! Nice to meet you! What brings you her-",
    "Halt!",
    "Huh?", 
    "(How strange, the scholars never mentioned any human lifeforms in the forest....)",
    "Don't come any closer!",
    "...?!",
    "I-I don't understand....why are you being so hostile?",
    "Everyone knows that only monsters lurk  within that forest.",
    "And surely nothing good ever comes to anyone who wanders around aimlessly around it.",
    "To witness someone like yourself roaming around a place like this....",
    "You should return home at once!",
    "W-wait! But I came from the forest, this is my home!",
    "......What?"
     ];
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



export default MainScene2Update