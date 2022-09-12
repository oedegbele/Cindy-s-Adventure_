import GameObject from "../../../engine/GameObject.js";
import PrefabCircle from "../../../engine/PrefabCircle.js";
import PrefabRectangle from "../../../engine/PrefabRectangle.js";

// Defining Cindy

// Arms
let cindyArm = new PrefabRectangle("cindyArm", 30, 360, 40, 150);
cindyArm.getComponent("RectangleDraw").fillStyle = "gray";
cindyArm.layer = -2;

let cindyArm2 = new PrefabRectangle("cindyArm2", 270, 360, 40, 200);
cindyArm2.getComponent("RectangleDraw").fillStyle = "gray";
cindyArm2.layer = -2;

//  Pink Shoulder puff (clothes)
let cindyShoulderPink = new PrefabCircle("cindyShoulderPink", 60, 330, 40);
cindyShoulderPink.getComponent("CircleDraw").fillStyle = "pink";
cindyShoulderPink.layer = -2;

let cindyShoulderPink2 = new PrefabCircle("cindyShoulderPink2", 280, 330, 40);
cindyShoulderPink2.getComponent("CircleDraw").fillStyle = "pink";
cindyShoulderPink2.layer = -2;
// // Shirt 
let cindyShirt = new PrefabRectangle("cindyShirt", 70, 300, 200, 200);
cindyShirt.getComponent("RectangleDraw").fillStyle = "pink";
cindyShirt.layer = -2;

// Necklace + ear + earring 
let cindyFace = new PrefabCircle("cindyFace", 170, 180, 120);
cindyFace.getComponent("CircleDraw").fillStyle = "grey";
cindyFace.layer = -2;

let cindyNeckPiece = new PrefabCircle("cindyNeckPiece", 90, 300, 20);
cindyNeckPiece.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece.layer = -2;

let cindyNeckPiece2 = new PrefabCircle("cindyNeckPiece2", 270, 300, 20);
cindyNeckPiece2.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece2.layer = -2;

let cindyNeckPiece3 = new PrefabCircle("cindyNeckPiece3", 240, 300, 20);
cindyNeckPiece3.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece3.layer = -2; 


let cindyNeckPiece4 = new PrefabCircle("cindyNeckPiece4",210, 300, 20);
cindyNeckPiece4.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece4.layer = -2; 

let cindyNeckPieceRed = new PrefabCircle("CindyNeckPieceRed",180, 300, 20);
cindyNeckPieceRed.getComponent("CircleDraw").fillStyle = "red";
cindyNeckPieceRed.name = "CindyNeckPieceRed;"
cindyNeckPieceRed.layer = -2;

// // For my controller I want to call this game object and make it visible. 
let cindyNeckPieceRed2 = new PrefabCircle("cindyNeckPieceRed2",180, 300, 20); 
cindyNeckPieceRed2.getComponent("CircleDraw").fillStyle = "blue";
cindyNeckPieceRed2.name="cindyNeckPieceRed2";
cindyNeckPieceRed2.layer = -1;
cindyNeckPieceRed2.visible = false;

let cindyNeckPiece5 = new PrefabCircle("cindyNeckPiece5",150, 300, 20,);
cindyNeckPiece5.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece5.layer = -2;

let cindyNeckPiece6 = new PrefabCircle("cindyNeckPiece6",120, 300, 20);
cindyNeckPiece6.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece6.layer = -2;

// // Hair 
let cindyEar = new PrefabCircle("cindyEar",50, 210, 30);
cindyEar.getComponent("CircleDraw").fillStyle = "gray";
cindyEar.layer = -2;

let cindyEarringRed = new PrefabCircle("cindyEarringRed",40, 230, 15);
cindyEarringRed.getComponent("CircleDraw").fillStyle = "red";
cindyEarringRed.layer = -2;

let cindyEarringShine = new PrefabCircle("cindyEarringShine",30, 225, 5);
cindyEarringShine.getComponent("CircleDraw").fillStyle = "white";
cindyEarringShine.layer = -2;

let cindyHair = new PrefabCircle("cindyHair",330, 140, 40);
cindyHair.getComponent("CircleDraw").fillStyle = "yellow";
cindyHair.layer = -2;

let cindyHair2 = new PrefabCircle("cindyHair2",30, 140, 40);
cindyHair2.getComponent("CircleDraw").fillStyle = "yellow";
cindyHair2.layer = -2;

let cindyHair3 = new PrefabRectangle("cindyHair3",270, 70, 40, 200);
cindyHair3.getComponent("RectangleDraw").fillStyle = "yellow";
cindyHair3.layer = -2;

let cindyHair4 = new PrefabRectangle("cindyHair4",50, 70, 40, 200);
cindyHair4.getComponent("RectangleDraw").fillStyle = "yellow";
cindyHair4.layer = -2;

let cindyHair5 = new PrefabCircle("cindyHair5",270, 100, 40);
cindyHair5.getComponent("CircleDraw").fillStyle = "yellow";
cindyHair5.layer = -2;


let cindyHair6 = new PrefabCircle("cindyHair6",100, 100, 40);
cindyHair6.getComponent("CircleDraw").fillStyle = "yellow";
cindyHair6.layer = -2;

let cindyHair7 = new PrefabCircle("cindyHair7",190, 90, 70);
cindyHair7.getComponent("CircleDraw").fillStyle = "yellow";
cindyHair7.layer = -2;

// // Hat
let cindyHat = new PrefabRectangle("cindyHat",60, 20, 200, 80);
cindyHat.getComponent("RectangleDraw").fillStyle = "white";
cindyHat.layer = -2;

let cindyHat2 = new  PrefabRectangle("cindyHat2",20, 70, 300, 50);
cindyHat2.getComponent("RectangleDraw").fillStyle = "white";
cindyHat2.layer = -2;

// // Pink pattern on the hat

let cindyHatPetal = new PrefabRectangle("cindyHatPetal", 60, 40, 200, 10);
cindyHatPetal.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal.layer = -2;

let cindyHatPetal2 = new PrefabRectangle("cindyHatPetal2", 230, 40, 20, 20);
cindyHatPetal2.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal2.layer = -2;

let cindyHatPetal3 = new PrefabRectangle("cindyHatPetal3", 230, 50, 20, 20);
cindyHatPetal3.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal3.layer = -2;

let cindyHatPetal4 = new PrefabRectangle("cindyHatPetal4", 230, 40, 20, 20);
cindyHatPetal4.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal4.layer = -2;

let cindyHatPetal5 = new PrefabRectangle("cindyHatPetal5", 230, 50, 20, 20);
cindyHatPetal5.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal5.layer = -2;

let cindyHatPetal6 = new PrefabRectangle("cindyHatPetal6", 240, 60, 20, 20);
cindyHatPetal6.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal6.layer = -2;

let cindyHatPetal7 = new PrefabRectangle("cindyHatPetal7", 260, 60, 20, 20);
cindyHatPetal7.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal7.layer = -2;

let cindyHatPetal8 = new PrefabRectangle("cindyHatPetal8", 270, 50, 20, 20);
cindyHatPetal8.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal8.layer = -2;

let cindyHatPetal9 = new PrefabRectangle("cindyHatPetal9", 270, 40, 20, 20);
cindyHatPetal9.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal9.layer = -2;

let cindyHatPetal10 = new PrefabRectangle("cindyHatPetal10", 260, 30, 20, 20);
cindyHatPetal10.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal10.layer = -2;

let cindyHatPetal11 = new PrefabRectangle("cindyHatPetal11", 240, 30, 20, 20);
cindyHatPetal11.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal11.layer = -2;

// //Red center piece on the rose hat accessory 

let cindyHatRedCenter = new PrefabCircle("cindyHatRedCenter",260, 55, 10);
cindyHatRedCenter.getComponent("CircleDraw").fillStyle = "red";
cindyHatRedCenter.layer = -2;

// // Eyes
let cindyEye = new PrefabCircle("cindyEye",248, 168, 27);
cindyEye.getComponent("CircleDraw").fillStyle = "black";
cindyEye.layer = -2;

let cindyEye2 = new PrefabCircle("cindyEye2",128, 168, 27);
cindyEye2.getComponent("CircleDraw").fillStyle = "black";
cindyEye2.layer = -2;

let cindyEye3 = new PrefabCircle("cindyEye3",130, 170, 25);
cindyEye3.getComponent("CircleDraw").fillStyle = "white";
cindyEye3.layer = -2;

let cindyEye4 = new PrefabCircle("cindyEye4",250, 170, 25);
cindyEye4.getComponent("CircleDraw").fillStyle = "white";
cindyEye4.layer = -2;

// //Eyelash
let cindyEye5 = new PrefabRectangle("cindyEye5",270, 152, 10, 2);
cindyEye5.getComponent("RectangleDraw").fillStyle = "black";
cindyEye5.layer = -2;

let cindyEye6 = new PrefabRectangle("cindyEye6",273, 160, 15, 2);
cindyEye6.getComponent("RectangleDraw").fillStyle = "black";
cindyEye6.layer = -2;

let cindyEye7 = new PrefabRectangle("cindyEye7",95, 152, 10, 2);
cindyEye7.getComponent("RectangleDraw").fillStyle = "black";
cindyEye7.layer = -2;

let cindyEye8 = new PrefabRectangle("cindyEye8",90, 160, 15, 2);
cindyEye8.getComponent("RectangleDraw").fillStyle = "black";
cindyEye8.layer = -2;

let cindyEye9 = new PrefabRectangle("cindyEye9",105, 130, 40, 3);
cindyEye9.getComponent("RectangleDraw").fillStyle = "black";
cindyEye9.layer = -2;

let cindyEye10 = new PrefabRectangle("cindyEye10",235, 130, 40, 3);
cindyEye10.getComponent("RectangleDraw").fillStyle = "black";
cindyEye10.layer = -2;

// //Eyeball

let cindyEyeBall = new PrefabCircle("cindyEyeBall",130, 170, 13);
cindyEyeBall.getComponent("CircleDraw").fillStyle = "black";
cindyEyeBall.layer = -2;

let cindyEyeBall2 = new PrefabCircle("cindyEyeBall2",130, 170, 10);
cindyEyeBall2.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall2.layer = -2;

let cindyEyeBall3 = new PrefabCircle("cindyEyeBall3",250, 170, 13);
cindyEyeBall3.getComponent("CircleDraw").fillStyle = "black";
cindyEyeBall3.layer = -2;

let cindyEyeBall4 = new PrefabCircle("cindyEyeBall4",250, 170, 10);
cindyEyeBall4.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall4.layer = -2;

let cindyEyeBall5 = new PrefabCircle("cindyEyeBall5",250, 170, 13);
cindyEyeBall5.getComponent("CircleDraw").fillStyle = "black";
cindyEyeBall5.layer = -2;

let cindyEyeBall6 = new PrefabCircle("cindyEyeBall6",250, 170, 10);
cindyEyeBall6.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall6.layer = -2;

let cindyEyeBall7 = new PrefabCircle("cindyEyeBall7",125, 165, 5);
cindyEyeBall7.getComponent("CircleDraw").fillStyle = "white";
cindyEyeBall7.layer = -2;

let cindyEyeBall8 = new PrefabCircle("cindyEyeBall8",245, 165, 5);
cindyEyeBall8.getComponent("CircleDraw").fillStyle = "white";
cindyEyeBall8.layer = -2;

let cindyMouth = new PrefabRectangle("cindyMouth",165, 245, 60, 10);
cindyMouth.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth.layer = -2;

let cindyMouth2 = new PrefabRectangle("cindyMouth2",160, 235, 10, 10);
cindyMouth2.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth2.layer = -2;

let cindyMouth3 = new PrefabRectangle("cindyMouth3",220, 235, 10, 10);
cindyMouth3.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth3.layer = -2;





export default [
   cindyArm,
   cindyArm2,
   cindyShoulderPink,
   cindyShoulderPink2,
   cindyShirt,
   cindyFace,
   cindyNeckPiece,
   cindyNeckPiece2,
   cindyNeckPiece3,
   cindyNeckPieceRed,
   cindyNeckPieceRed2,
   cindyNeckPiece4,
   cindyNeckPiece5,
   cindyNeckPiece6,
   cindyEar,
   cindyEarringRed,
   cindyEarringShine,
   cindyHair,
   cindyHair2,
   cindyHair3,
   cindyHair4,
   cindyHair5,
   cindyHair6,
   cindyHair7,
   cindyHat,
   cindyHat2,
   cindyHatPetal,
   cindyHatPetal2,
   cindyHatPetal3,
   cindyHatPetal4,
   cindyHatPetal5,
   cindyHatPetal6,
   cindyHatPetal7,
   cindyHatPetal8,
   cindyHatPetal9,
   cindyHatPetal10,
   cindyHatPetal11,
   cindyHatRedCenter,
   cindyEye,
   cindyEye2,
   cindyEye3,
   cindyEye4,
   cindyEye5,
   cindyEye6,
   cindyEye7,
   cindyEye8,
   cindyEye9,
   cindyEye10,
   cindyEyeBall,
   cindyEyeBall2,
   cindyEyeBall3,
   cindyEyeBall4,
   cindyEyeBall5,
   cindyEyeBall6,
   cindyEyeBall7,
   cindyEyeBall8,
   cindyMouth,
   cindyMouth2,
   cindyMouth3,
];