import PrefabCircle from "../../engine/PrefabCircle.js";
import PrefabRectangle from "../../engine/PrefabRectangle.js";

// Defining Magical Forest Scene

let tree = new PrefabRectangle("tree",90,220,250,50);
tree.name = "tree";
tree.getComponent("RectangleDraw").fillStyle = "#008040";
tree.getComponent("RectangleDraw").strokeStyle = "#008040";
tree.layer = -2;

let tree2 = new PrefabRectangle("tree2",103,180,220,50);
tree2.name = "tree2";
tree2.getComponent("RectangleDraw").fillStyle = "#008040";
tree2.getComponent("RectangleDraw").strokeStyle = "#008040";
tree2.layer = -2;

let tree2Shader = new PrefabRectangle("tree2Shader",110,220,210,40);
tree2Shader.name = "tree2Shader";
tree2Shader.getComponent("RectangleDraw").fillStyle = "#00572b";
tree2Shader.getComponent("RectangleDraw").strokeStyle = "#00572b";
tree2Shader.layer = -2;

let tree3 = new PrefabRectangle("tree3",125,140,180,50);
tree3.name = "tree3";
tree3.getComponent("RectangleDraw").fillStyle = "#008040";
tree3.getComponent("RectangleDraw").strokeStyle = "#008040";
tree3.layer = -2;

let tree3Shader = new PrefabRectangle("tree3Shader",135,180,190,50);
tree3Shader.name = "tree3Shader";
tree3Shader.getComponent("RectangleDraw").fillStyle = "#00572b";
tree3Shader.getComponent("RectangleDraw").strokeStyle = "#00572b";
tree3Shader.layer = -2;

let tree4 = new PrefabRectangle("tree4",145,100,140,50);
tree4.name = "tree4";
tree4.getComponent("RectangleDraw").fillStyle = "#008040";
tree4.getComponent("RectangleDraw").strokeStyle = "#008040";
tree4.layer = -2;

let treeBark = new PrefabRectangle("treeBark",200,250,30,150)
treeBark.name = "treeBark";
treeBark.getComponent("RectangleDraw").fillStyle="#C46210";
treeBark.getComponent("RectangleDraw").strokeStyle="#C46210";
treeBark.layer = -2;

let treeBarkShade2 = new PrefabRectangle("treeBarkShade2",200,170,30,150)
treeBarkShade2.name = "treeBarkShade2";
treeBarkShade2.getComponent("RectangleDraw").fillStyle="#994d0d";
treeBarkShade2.getComponent("RectangleDraw").strokeStyle="#994d0d";
treeBarkShade2.layer = -2;

let treeBarkShade3 = new PrefabRectangle("treeBarkShade3",200,140,30,150)
treeBarkShade3.name = "treeBarkShade3";
treeBarkShade3.getComponent("RectangleDraw").fillStyle="#703809";
treeBarkShade3.getComponent("RectangleDraw").strokeStyle="#703809";
treeBarkShade3.layer = -2;

// Leaves to be placed in front of the tree 
let grass = new PrefabRectangle("grass",120,400,500,20);
grass.name = "grass";
grass.getComponent("RectangleDraw").fillStyle = "#008040";
grass.getComponent("RectangleDraw").strokeStyle = "#008040";
grass.layer = -2;

// Apple on Tree 
let apple = new PrefabCircle("apple",180,200,15)
apple.name = "apple";
apple.getComponent("CircleDraw").fillStyle="#FF4040";
apple.getComponent("CircleDraw").strokeStyle="#FF4040";
apple.layer = -2;

let appleShader = new PrefabCircle("appleShader",177,200,18)
appleShader.name = "appleShader";
appleShader.getComponent("CircleDraw").fillStyle="#611818";
appleShader.getComponent("CircleDraw").strokeStyle="#611818";
appleShader.layer = -2;

// Apple Stem
let appleStem = new PrefabRectangle("appleStem",170,170,15,20)
appleStem.name = "appleStem";
appleStem.getComponent("RectangleDraw").fillStyle= "#3a4f09"
appleStem.getComponent("RectangleDraw").stokeStyle= "#3a4f09"
appleStem.layer = -2;
//Second Tree on the right 

let grass2 = new PrefabRectangle("grass2",900,400,500,20);
grass2.name = "grass2";
grass2.getComponent("RectangleDraw").fillStyle = "#008040";
grass2.getComponent("RectangleDraw").strokeStyle = "#008040";
grass2.layer = -2;

let treeBark2 = new PrefabRectangle("treeBark2",980,250,30,150)
treeBark2.name = "treeBark2";
treeBark2.getComponent("RectangleDraw").fillStyle="#C46210";
treeBark2.getComponent("RectangleDraw").strokeStyle="#C46210";
treeBark2.layer = -2;

let treeBarkShade2a = new PrefabRectangle("treeBarkShade2a",980,170,30,150)
treeBarkShade2a.name = "treeBarkShade2";
treeBarkShade2a.getComponent("RectangleDraw").fillStyle="#994d0d";
treeBarkShade2a.getComponent("RectangleDraw").strokeStyle="#994d0d";
treeBarkShade2a.layer = -2;

let treeBarkShade3a = new PrefabRectangle("treeBarkShade3a",980,140,30,150)
treeBarkShade3a.name = "treeBarkShade3a";
treeBarkShade3a.getComponent("RectangleDraw").fillStyle="#703809";
treeBarkShade3a.getComponent("RectangleDraw").strokeStyle="#703809";
treeBarkShade3a.layer = -2;

let treeA = new PrefabRectangle("treeA",870,220,250,50);
treeA.name = "treeA";
treeA.getComponent("RectangleDraw").fillStyle = "#008040";
treeA.getComponent("RectangleDraw").strokeStyle = "#008040";
treeA.layer = -2;

let tree2A = new PrefabRectangle("tree2A",883,180,220,50);
tree2A.name = "tree2";
tree2A.getComponent("RectangleDraw").fillStyle = "#008040";
tree2A.getComponent("RectangleDraw").strokeStyle = "#008040";
tree2A.layer = -2;

let tree3A = new PrefabRectangle("tree3A",905,140,180,50);
tree3A.name = "tree3";
tree3A.getComponent("RectangleDraw").fillStyle = "#008040";
tree3A.getComponent("RectangleDraw").strokeStyle = "#008040";
tree3A.layer = -2;


let tree4A = new PrefabRectangle("tree4A",925,100,140,50);
tree4A.name = "tree4A";
tree4A.getComponent("RectangleDraw").fillStyle = "#008040";
tree4A.getComponent("RectangleDraw").strokeStyle = "#008040";
tree4A.layer = -2;



export default  [


    treeBark,
    treeBarkShade2,
    treeBarkShade3,
    tree,
    tree2,
    tree3,
    tree4,
    grass,

    appleStem,
    appleShader,
    apple,


    grass2,
    treeBark2,
    treeBarkShade2a,
    treeBarkShade3a,
    treeA,
    tree2A,
    tree3A,
    tree4A,
    
  
]