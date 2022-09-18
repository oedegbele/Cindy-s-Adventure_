import Component from "../../engine/Component.js";
class MainScene3Update extends Component {
  constructor(parent) {
    super(parent);
    this.strings = [
    "......I see",
    "So to sum things up, you're a child who has lived in the forest for many years...",
    "You claim to have befriended these so-called 'whisps' that live inside the forest...",
    "And now you want to explore the outside world?",
    "Yep! That's correct",
    "Us knights have never been informed of any humans living in this forest....",
    "But I suppose it's not impossible.",
    ".....*ahem* Excuse me for my attitude earlier.",
    "I'm Lancelot, a Knight from the Kingdom to the East.",
    "Oooh, I see. Nice to meet you, Lancelot!",
    "My friends have told me all about Kingdoms on their past adventures...",
    "You see, they've been on all sorts of trips outside the forest.",
    "That's why I decided to go out on my own today!",
    "I've never seen a 'Kingdom' in person though...",
    "I'd like to see what it looks like, can you take me there?",
    ".....(She doesn't seem like a threat...)",
    "(Perhaps if I take her to the High Priestess, she may know what to do with her...)",
    "Very Well, off we go.",
    "Awesome!",

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



export default MainScene3Update