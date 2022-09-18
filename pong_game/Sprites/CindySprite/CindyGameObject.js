import GameObject from "../../../engine/GameObject.js";
import PrefabCircle from "../../../engine/PrefabCircle.js";
import PrefabRectangle from "../../../engine/PrefabRectangle.js";

// Defining Cindy

// Arms
let cindyArm = new PrefabRectangle("cindyArm", 60, 360, 40, 150);
cindyArm.getComponent("RectangleDraw").fillStyle = "#ffe1c9";
cindyArm.layer = -2;

let cindyArmShader = new PrefabRectangle("cindyArmShader", 85, 360, 40, 150);
cindyArmShader.getComponent("RectangleDraw").fillStyle = "#ffbbad";
cindyArmShader.getComponent("RectangleDraw").strokeStyle = "#ffbbad";
cindyArmShader.layer = -2;

let cindyArmShaderB = new PrefabCircle("cindyArmShaderB", 85, 355, 25);
cindyArmShaderB.getComponent("CircleDraw").fillStyle = "#ffbbad";
cindyArmShaderB.getComponent("CircleDraw").strokeStyle = "#ffbbad";
cindyArmShaderB.layer = -2;


let cindyArm2 = new PrefabRectangle("cindyArm2", 300, 360, 40, 200);
cindyArm2.getComponent("RectangleDraw").fillStyle = "#ffe1c9";
cindyArm2.getComponent("RectangleDraw").strokeStyle = "#00264D";
cindyArm2.layer = -2;

let cindyArm2Shader = new PrefabRectangle("cindyArm2Shader", 270, 360, 40, 200);
cindyArm2Shader.getComponent("RectangleDraw").fillStyle = "#ffbbad";
cindyArm2Shader.getComponent("RectangleDraw").strokeStyle = "#ffbbad";
cindyArm2Shader.layer = -2;

//  Pink Shoulder puff (clothes)
let cindyShoulderPink = new PrefabCircle("cindyShoulderPink", 90, 330, 40);
cindyShoulderPink.getComponent("CircleDraw").fillStyle = "pink";
cindyShoulderPink.getComponent("CircleDraw").strokeStyle = "#00264D";
cindyShoulderPink.layer = -2;

let cindyShoulderPinkShader = new PrefabRectangle("cindyShoulderPinkShader", 90,290, 20, 78);
cindyShoulderPinkShader.getComponent("RectangleDraw").fillStyle = "#de90af";
cindyShoulderPinkShader.getComponent("RectangleDraw").strokeStyle = "#de90af";
cindyShoulderPinkShader.layer = -2;

let cindyShoulderPink2 = new PrefabCircle("cindyShoulderPink2", 310, 330, 40);
cindyShoulderPink2.getComponent("CircleDraw").fillStyle = "pink";
cindyShoulderPink2.layer = -2;

let cindyShoulderPink2Shader = new PrefabRectangle("cindyShoulderPink2Shader", 290,310, 20, 60);
cindyShoulderPink2Shader.getComponent("RectangleDraw").fillStyle = "#de90af";
cindyShoulderPink2Shader.getComponent("RectangleDraw").strokeStyle = "#de90af";
cindyShoulderPink2Shader.layer = -2;


// // Shirt 
let cindyShirt = new PrefabRectangle("cindyShirt", 100, 300, 200, 200);
cindyShirt.getComponent("RectangleDraw").fillStyle = "pink";
cindyShirt.layer = -2;

// Necklace + ear + earring 
let cindyFace = new PrefabCircle("cindyFace", 200, 180, 120);
cindyFace.getComponent("CircleDraw").fillStyle = "#ffe1c9";
cindyFace.layer = -2;

let cindyFaceShader = new PrefabRectangle("cindyFaceShader", 115,140, 15, 125);
cindyFaceShader.getComponent("RectangleDraw").fillStyle = "#ffbbad";
cindyFaceShader.getComponent("RectangleDraw").strokeStyle = "#ffbbad";
cindyFaceShader.layer = -2;

let cindyFaceShader2 = new PrefabCircle("cindyFaceShader2", 115,110, 50);
cindyFaceShader2.getComponent("CircleDraw").fillStyle = "#ffbbad";
cindyFaceShader2.getComponent("CircleDraw").strokeStyle = "#ffbbad";
cindyFaceShader2.layer = -2;

let cindyFaceShader2a = new PrefabCircle("cindyFaceShader2a", 250,105, 50);
cindyFaceShader2a.getComponent("CircleDraw").fillStyle = "#ffbbad";
cindyFaceShader2a.getComponent("CircleDraw").strokeStyle = "#ffbbad";
cindyFaceShader2a.layer = -2;

let cindyFaceShader3 = new PrefabCircle("cindyFaceShader3", 200,113, 50);
cindyFaceShader3.getComponent("CircleDraw").fillStyle = "#ffbbad";
cindyFaceShader3.getComponent("CircleDraw").strokeStyle = "#ffbbad";
cindyFaceShader3.layer = -2;


let cindyNeckPiece = new PrefabCircle("cindyNeckPiece", 120, 300, 20);
cindyNeckPiece.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece.layer = -2;

let cindyNeckPiecePinkShader = new PrefabCircle("cindyNeckPiecePinkShader", 117, 307, 20);
cindyNeckPiecePinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiecePinkShader.layer = -2;

let cindyNeckPieceShader = new PrefabCircle("cindyNeckPieceShader", 123, 303, 13);
cindyNeckPieceShader.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader.layer = -2;

let cindyNeckPieceShaderB = new PrefabCircle("cindyNeckPieceShaderB", 115, 297, 5);
cindyNeckPieceShaderB.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShaderB.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShaderB.layer = -2;


let cindyNeckPiece2 = new PrefabCircle("cindyNeckPiece2", 300, 300, 20);
cindyNeckPiece2.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece2.layer = -2;

let cindyNeckPiece2PinkShader = new PrefabCircle("cindyNeckPiece2PinkShader", 147, 307, 20);
cindyNeckPiece2PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece2PinkShader.layer = -2;

let cindyNeckPieceShader2 = new PrefabCircle("cindyNeckPieceShader2", 154, 303, 13);
cindyNeckPieceShader2.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader2.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader2.layer = -2;

let cindyNeckPieceShader2B = new PrefabCircle("cindyNeckPieceShader2B", 146, 297, 5);
cindyNeckPieceShader2B.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShader2B.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShader2B.layer = -2;

let cindyNeckPiece3 = new PrefabCircle("cindyNeckPiece3", 270, 300, 20);
cindyNeckPiece3.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece3.layer = -2; 

let cindyNeckPieceShader3 = new PrefabCircle("cindyNeckPieceShader3", 185, 303, 13);
cindyNeckPieceShader3.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader3.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader3.layer = -2;

let cindyNeckPiece3PinkShader = new PrefabCircle("cindyNeckPiece3PinkShader", 177, 307, 20);
cindyNeckPiece3PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece3PinkShader.layer = -2;

let cindyNeckPieceShader3B = new PrefabCircle("cindyNeckPieceShader3B", 177, 297, 5);
cindyNeckPieceShader3B.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShader2B.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShader3B.layer = -2;

let cindyNeckPiece4 = new PrefabCircle("cindyNeckPiece4",240, 300, 20);
cindyNeckPiece4.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece4.layer = -2; 

let cindyNeckPiece4PinkShader = new PrefabCircle("cindyNeckPiece4PinkShader", 207, 307, 20);
cindyNeckPiece4PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece4PinkShader.layer = -2;

let cindyNeckPieceShader4 = new PrefabCircle("cindyNeckPieceShader4", 245, 303, 13);
cindyNeckPieceShader4.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader4.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader4.layer = -2;

let cindyNeckPieceShader4B = new PrefabCircle("cindyNeckPieceShader4B", 237, 297, 5);
cindyNeckPieceShader4B.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShader2B.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShader4B.layer = -2;

let cindyNeckPieceRed = new PrefabCircle("cindyNeckPieceRed",210, 300, 20);
cindyNeckPieceRed.name = "CindyNeckPieceRed"
cindyNeckPieceRed.getComponent("CircleDraw").fillStyle = "red";
cindyNeckPieceRed.getComponent("CircleDraw").strokeStyle = "#850101";

let cindyNeckPieceRedShade = new PrefabCircle("cindyNeckPieceRedShade",213, 300, 15);
cindyNeckPieceRedShade.name = "cindyNeckPieceRedShade"
cindyNeckPieceRedShade.getComponent("CircleDraw").fillStyle = "#850101";
cindyNeckPieceRedShade.layer = -2;

let cindyNeckPieceRedShadeShine = new PrefabCircle("cindyNeckPieceRedShadeShine",207, 290, 5);
cindyNeckPieceRedShadeShine.name = "cindyNeckPieceRedShadeShine"
cindyNeckPieceRedShadeShine.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPieceRedShadeShine.getComponent("CircleDraw").strokeStyle = "#850101";
cindyNeckPieceRedShadeShine.layer = -2;

let cindyNeckPiece5 = new PrefabCircle("cindyNeckPiece5",180, 300, 20,);
cindyNeckPiece5.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece5.layer = -2;

let cindyNeckPiece5PinkShader = new PrefabCircle("cindyNeckPiece5PinkShader", 237, 307, 20);
cindyNeckPiece5PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece5PinkShader.layer = -2;

let cindyNeckPieceShader5 = new PrefabCircle("cindyNeckPieceShader5", 275, 303, 13);
cindyNeckPieceShader5.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader5.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader5.layer = -2;

let cindyNeckPieceShader5B = new PrefabCircle("cindyNeckPieceShader5B", 267, 297, 5);
cindyNeckPieceShader5B.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShader2B.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShader5B.layer = -2;

let cindyNeckPiece6 = new PrefabCircle("cindyNeckPiece6",150, 300, 20);
cindyNeckPiece6.getComponent("CircleDraw").fillStyle = "white";
cindyNeckPiece6.layer = -2;

let cindyNeckPiece6PinkShader = new PrefabCircle("cindyNeckPiece6PinkShader", 267, 307, 20);
cindyNeckPiece6PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece6PinkShader.layer = -2;


let cindyNeckPieceShader6 = new PrefabCircle("cindyNeckPieceShader6", 305, 303, 13);
cindyNeckPieceShader6.getComponent("CircleDraw").fillStyle = "#c9d2f7";
cindyNeckPieceShader6.getComponent("CircleDraw").strokeStyle = "#c9d2f7";
cindyNeckPieceShader6.layer = -2;

let cindyNeckPieceShader6B = new PrefabCircle("cindyNeckPieceShader6B", 297, 297, 5);
cindyNeckPieceShader6B.getComponent("CircleDraw").fillStyle = "white";
// cindyNeckPieceShader2B.getComponent("CircleDraw").strokeStyle = "#9091ab";
cindyNeckPieceShader6B.layer = -2;


let cindyNeckPiece7PinkShader = new PrefabCircle("cindyNeckPiece7PinkShader", 297, 307, 20);
cindyNeckPiece7PinkShader.getComponent("CircleDraw").fillStyle = "#de90af";
cindyNeckPiece7PinkShader.layer = -2;

// // Hair 
let cindyEar = new PrefabCircle("cindyEar",80, 210, 30);
cindyEar.getComponent("CircleDraw").fillStyle = "#ffe1c9";
cindyEar.layer = -2;

let cindyEarShade = new PrefabRectangle("cindyEarShade",70,180, 10, 50);
cindyEarShade.getComponent("RectangleDraw").fillStyle = "#ffbbad";
cindyEarShade.layer = -2;

let cindyEarringRed = new PrefabCircle("cindyEarringRed",70, 230, 15);
cindyEarringRed.getComponent("CircleDraw").fillStyle = "red";
cindyEarringRed.layer = -2;

let cindyEarringShade = new PrefabCircle("cindyEarringShade",75, 230, 10);
cindyEarringShade.getComponent("CircleDraw").fillStyle = "#850101";
cindyEarringShade.getComponent("CircleDraw").strokeStyle = "#850101";
cindyEarringShade.layer = -2;


let cindyEarringShine = new PrefabCircle("cindyEarringShine",70, 225, 5);
cindyEarringShine.getComponent("CircleDraw").fillStyle = "white";
cindyEarringShine.layer = -2;

let cindyHair = new PrefabCircle("cindyHair",360, 140, 40);
cindyHair.getComponent("CircleDraw").fillStyle = "#7CB9E8"; // Blue Hair
cindyHair.getComponent("CircleDraw").strokeStyle = "#7CB9E8"; // Blue Hair
cindyHair.layer = -2;


let cindyHairShade = new PrefabCircle("cindyHairShade",350, 140, 35);
cindyHairShade.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHairShade.layer = -2;

let cindyHair2 = new PrefabCircle("cindyHair2",60, 140, 40);
cindyHair2.getComponent("CircleDraw").fillStyle = "#7CB9E8";
cindyHair2.layer = -2;


let cindyHair2Shade = new PrefabCircle("cindyHair2Shade",65, 140, 35);
cindyHair2Shade.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHair2Shade.layer = -2;


let cindyHair3 = new PrefabRectangle("cindyHair3",300, 70, 40, 200);
cindyHair3.getComponent("RectangleDraw").fillStyle = "#7CB9E8";
cindyHair3.layer = -2;

let cindyHair3Shade = new PrefabRectangle("cindyHair3Shade",300, 70, 30, 190);
cindyHair3Shade.getComponent("RectangleDraw").fillStyle = "#527a99";
cindyHair3Shade.layer = -2;

let cindyHair3ShadeExtra = new PrefabRectangle("cindyHair3ShadeExtra",315, 165, 5, 100);
cindyHair3ShadeExtra.getComponent("RectangleDraw").fillStyle = "#7CB9E8";
cindyHair3ShadeExtra.layer = -2;


let cindyHair3ShadeExtraB = new PrefabRectangle("cindyHair3ShadeExtraB",95, 165, 5, 100);
cindyHair3ShadeExtraB.getComponent("RectangleDraw").fillStyle = "#7CB9E8";
cindyHair3ShadeExtraB.getComponent("RectangleDraw").strokeStyle = "#7CB9E8";
cindyHair3ShadeExtraB.layer = -2;

let cindyHair3ShadeB = new PrefabCircle("cindyHair3ShadeB",310, 115, 30);
cindyHair3ShadeB.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHair3ShadeB.layer = -2;

let cindyHair4 = new PrefabRectangle("cindyHair4",80, 70, 40, 200);
cindyHair4.getComponent("RectangleDraw").fillStyle = "#7CB9E8";
cindyHair4.layer = -2;

let cindyHair4Shader = new PrefabRectangle("cindyHair4Shader",85, 70, 30, 190);
cindyHair4Shader.getComponent("RectangleDraw").fillStyle = "#527a99";
cindyHair4Shader.layer = -2;

let cindyHair5 = new PrefabCircle("cindyHair5",300, 100, 40);
cindyHair5.getComponent("CircleDraw").fillStyle = "#7CB9E8";
cindyHair5.getComponent("CircleDraw").strokeStyle = "#527a99";
cindyHair5.layer = -2;

let cindyHair5Shader = new PrefabCircle("cindyHair5Shader",283, 98, 35);
cindyHair5Shader.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHair5Shader.layer = -2;


let cindyHair6 = new PrefabCircle("cindyHair6",130, 100, 40);
cindyHair6.getComponent("CircleDraw").fillStyle = "#7CB9E8";
cindyHair6.layer = -2;

let cindyHair6Shader = new PrefabCircle("cindyHairShader",130, 90, 40);
cindyHair6Shader.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHair6Shader.layer = -2;

let cindyHair7 = new PrefabCircle("cindyHair7",220, 90, 70);
cindyHair7.getComponent("CircleDraw").fillStyle = "#7CB9E8";
cindyHair7.layer = -2;

let cindyHair7Shader = new PrefabCircle("cindyHair7Shader",220, 90, 50);
cindyHair7Shader.getComponent("CircleDraw").fillStyle = "#527a99";
cindyHair7Shader.layer = -2;

// // Hat
let cindyHat = new PrefabRectangle("cindyHat",90, 20, 200, 80);
cindyHat.getComponent("RectangleDraw").fillStyle = "white";
cindyHat.getComponent("RectangleDraw").strokeStyle = "#6b616b";
cindyHat.layer = -2;

let cindyHatShader = new PrefabRectangle("cindyHatShader",100, 30, 190, 70);
cindyHatShader.getComponent("RectangleDraw").fillStyle = "#E7E4EB";
cindyHatShader.getComponent("RectangleDraw").strokeStyle = "#E7E4EB";
cindyHatShader.layer = -2;

let cindyHat2 = new  PrefabRectangle("cindyHat2",50, 70, 300, 50);
cindyHat2.getComponent("RectangleDraw").fillStyle = "white";
cindyHat2.getComponent("RectangleDraw").strokeStyle = "#6b616b";
cindyHat2.layer = -2;

let cindyHat2Shader = new  PrefabRectangle("cindyHat2Shader",60, 100, 280, 20);
cindyHat2Shader.getComponent("RectangleDraw").fillStyle = "#E7E4EB";
cindyHat2Shader.getComponent("RectangleDraw").strokeStyle = "#E7E4EB";
cindyHat2Shader.layer = -2;

// // Pink pattern on the hat

let cindyHatPetal = new PrefabRectangle("cindyHatPetal", 90, 40, 200, 10);
cindyHatPetal.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal.layer = -2;

let cindyHatPetalShader = new PrefabRectangle("cindyHatPetalShader", 90, 50, 200, 5);
cindyHatPetalShader.getComponent("RectangleDraw").fillStyle = "#E75480";
cindyHatPetalShader.layer = -2;

let cindyHatPetal2 = new PrefabRectangle("cindyHatPetal2", 260, 40, 20, 20);
cindyHatPetal2.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal2.getComponent("RectangleDraw").strokeStyle = "#E75480";
cindyHatPetal2.layer = -2;

let cindyHatPetal3 = new PrefabRectangle("cindyHatPetal3", 260, 50, 20, 20);
cindyHatPetal3.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal3.layer = -2;

let cindyHatPetal4 = new PrefabRectangle("cindyHatPetal4", 260, 40, 20, 20);
cindyHatPetal4.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal4.layer = -2;

let cindyHatPetal5 = new PrefabRectangle("cindyHatPetal5", 260, 50, 20, 20);
cindyHatPetal5.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal5.layer = -2;

let cindyHatPetal6 = new PrefabRectangle("cindyHatPetal6", 270, 60, 20, 20);
cindyHatPetal6.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal6.layer = -2;

let cindyHatPetal7 = new PrefabRectangle("cindyHatPetal7", 290, 60, 20, 20);
cindyHatPetal7.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal7.layer = -2;

let cindyHatPetal8 = new PrefabRectangle("cindyHatPetal8", 300, 50, 20, 20);
cindyHatPetal8.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal8.layer = -2;

let cindyHatPetal9 = new PrefabRectangle("cindyHatPetal9", 300, 40, 20, 20);
cindyHatPetal9.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal9.layer = -2;

let cindyHatPetal10 = new PrefabRectangle("cindyHatPetal10", 290, 30, 20, 20);
cindyHatPetal10.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal10.layer = -2;

let cindyHatPetal11 = new PrefabRectangle("cindyHatPetal11", 270, 30, 20, 20);
cindyHatPetal11.getComponent("RectangleDraw").fillStyle = "pink";
cindyHatPetal11.layer = -2;

// //Red center piece on the rose hat accessory 

let cindyHatRedCenter = new PrefabCircle("cindyHatRedCenter",290, 55, 10);
cindyHatRedCenter.getComponent("CircleDraw").fillStyle = "red";
cindyHatRedCenter.layer = -2;

// Eyes
let cindyEye = new PrefabCircle("cindyEye",278, 168, 27);
cindyEye.name = "cindyEye"
cindyEye.getComponent("CircleDraw").fillStyle = "black";
cindyEye.getComponent("CircleDraw").strokeStyle = "#00264D";
cindyEye.layer = -2;

let cindyEye2 = new PrefabCircle("cindyEye2",158, 168, 27);
cindyEye2.name = "cindyEye2"
cindyEye2.getComponent("CircleDraw").fillStyle = "black";
cindyEye2.layer = -2;

let cindyEye3 = new PrefabCircle("cindyEye3",160, 170, 25);
cindyEye3.name = "cindyEye3"
cindyEye3.getComponent("CircleDraw").fillStyle = "white";
cindyEye3.layer = -2;

let cindyEye3Shader = new PrefabCircle("cindyEye3Shader",160, 170, 19);
cindyEye3Shader.name = "cindyEye3Shader"
cindyEye3Shader.getComponent("CircleDraw").fillStyle = "#cfe0ff";
cindyEye3Shader.layer = -2;


let cindyEye4 = new PrefabCircle("cindyEye4",280, 170, 25);
cindyEye4.name = "cindyEye4";
cindyEye4.getComponent("CircleDraw").fillStyle = "white";
cindyEye4.layer = -2;

let cindyEye4Shader = new PrefabCircle("cindyEye4Shader",280, 170, 19);
cindyEye4Shader.name = "cindyEye4Shader";
cindyEye4Shader.getComponent("CircleDraw").fillStyle = "#cfe0ff";
cindyEye4Shader.layer = -2;


// //Eyelash
let cindyEye5 = new PrefabRectangle("cindyEye5",300, 152, 10, 2);
cindyEye5.name = "cindyEye5";
cindyEye5.getComponent("RectangleDraw").fillStyle = "black";
cindyEye5.getComponent("RectangleDraw").strokeStyle= "black";
cindyEye5.layer = -2;

let cindyEye6 = new PrefabRectangle("cindyEye6",303, 160, 15, 2);
cindyEye6.name="cindyEye6";
cindyEye6.getComponent("RectangleDraw").fillStyle = "black";
cindyEye6.layer = -2;

let cindyEye7 = new PrefabRectangle("cindyEye7",125, 152, 10, 2);
cindyEye7.name="cindyEye7";
cindyEye7.getComponent("RectangleDraw").fillStyle = "black";
cindyEye7.layer = -2;

let cindyEye8 = new PrefabRectangle("cindyEye8",120, 160, 15, 2);
cindyEye8.name="cindyEye8";
cindyEye8.getComponent("RectangleDraw").fillStyle = "black";
cindyEye8.layer = -2;

let cindyEye9 = new PrefabRectangle("cindyEye9",135, 130, 40, 3);
cindyEye9.name = "cindyEye9"
cindyEye9.getComponent("RectangleDraw").fillStyle = "black";
cindyEye9.layer = -2;

// Expression for suprized
let cindyEye9b = new PrefabRectangle("cindyEye9b",135,127,40,3);
cindyEye9b.name = "cindyEye9b";
cindyEye9b.visible = false;
cindyEye9b.getComponent("RectangleDraw").fillStyle="black";
cindyEye9b.layer = -2;

let cindyEye10 = new PrefabRectangle("cindyEye10",265, 130, 40, 3);
cindyEye10.name = "cindyEye10"
cindyEye10.getComponent("RectangleDraw").fillStyle = "black";
cindyEye10.layer = -2;

// expression for suprized
let cindyEye10b = new PrefabRectangle("cindyEye10b",265,127,40,3);
cindyEye10b.name = "cindyEye10b";
cindyEye10b.visible = false;
cindyEye10b.getComponent("RectangleDraw").fillStyle="black";
cindyEye10b.layer = -2;

// //Eyeball

let cindyEyeBall = new PrefabCircle("cindyEyeBall",160, 170, 13);
cindyEyeBall.name = "cindyEyeBall"
cindyEyeBall.getComponent("CircleDraw").fillStyle = "black";
cindyEyeBall.layer = -2;

let cindyEyeBall2 = new PrefabCircle("cindyEyeBall2",160, 170, 10);
cindyEyeBall2.name = "cindyEyeBall2"
cindyEyeBall2.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall2.getComponent("CircleDraw").strokeStyle= "black";
cindyEyeBall2.layer = -2;

let cindyEyeBall4 = new PrefabCircle("cindyEyeBall4",280, 170, 10);
cindyEyeBall4.name = "cindyEyeBall4"
cindyEyeBall4.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall4.layer = -2;

let cindyEyeBall5 = new PrefabCircle("cindyEyeBall5",280, 170, 13);
cindyEyeBall5.name = "cindyEyeBall5"
cindyEyeBall5.getComponent("CircleDraw").fillStyle = "black";
cindyEyeBall5.layer = -2;

let cindyEyeBall6 = new PrefabCircle("cindyEyeBall6",280, 170, 10);
cindyEyeBall6.name = "cindyEyeBall6"
cindyEyeBall6.getComponent("CircleDraw").fillStyle = "blue";
cindyEyeBall6.layer = -2;

let cindyEyeBall7 = new PrefabCircle("cindyEyeBall7",155, 165, 5);
cindyEyeBall7.name = "cindyEyeBall7"
cindyEyeBall7.getComponent("CircleDraw").fillStyle = "white";
cindyEyeBall7.layer = -2;

let cindyEyeBall8 = new PrefabCircle("cindyEyeBall8",275, 165, 5);
cindyEyeBall8.name = "cindyEyeBall8"
cindyEyeBall8.getComponent("CircleDraw").fillStyle = "white";
cindyEyeBall8.layer = -2;

let cindyMouth = new PrefabRectangle("cindyMouth",195, 245, 60, 5);
cindyMouth.name = "cindyMouth"
cindyMouth.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth.layer = -2;

let cindyMouth2 = new PrefabRectangle("cindyMouth2",190, 235, 10, 10);
cindyMouth2.name = "cindyMouth2"
cindyMouth2.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth2.layer = -2;

// Object for toggling sad expression 
let cindyMouth2b = new PrefabRectangle("cindyMouth2b",190, 250, 10, 10);
cindyMouth2.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth2b.name = "cindyMouth2b";
cindyMouth2b.visible = false;
cindyMouth2.layer = -2;

let cindyMouth3 = new PrefabRectangle("cindyMouth3",250, 235, 10, 10);
cindyMouth3.name = "cindyMouth3"
cindyMouth3.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth3.layer = -2;

// Object for toggling sad expression. Initially toggled false 
let cindyMouth3b = new PrefabRectangle("cindyMouth3b",250, 250, 10, 10);
cindyMouth3b.name = "cindyMouth3b"
cindyMouth3b.visible = false;
cindyMouth3.getComponent("RectangleDraw").fillStyle = "black";
cindyMouth3.layer = -2;

// Object for toggling suprise expression. Initially toggled false
let cindyMouth4 = new PrefabCircle("cindyMouth4",230,233,18);
cindyMouth4.name = "cindyMouth4"
cindyMouth4.visible = false;
cindyMouth4.getComponent("CircleDraw").fillStyle = "black";
cindyMouth4.layer = -2;

// Expression for Closed happy Expression 

// Left Eye
let cindyHappyEyeLeft = new PrefabRectangle("cindyHappyEyeLeft",135,165,40,6)
cindyHappyEyeLeft.name= "cindyHappyEyeLeft";
cindyHappyEyeLeft.visible = false;
cindyHappyEyeLeft.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeLeft.getComponent("RectangleDraw").strokeStyle= "black";
cindyHappyEyeLeft.layer = -2

let cindyHappyEyeLeftBottomSquareLeft = new PrefabRectangle("cindyHappyEyeLeftBottomSquareLeft",128,170,10,4)
cindyHappyEyeLeftBottomSquareLeft.name="cindyHappyEyeLeftBottomSquareLeft";
cindyHappyEyeLeftBottomSquareLeft.visible=false;
cindyHappyEyeLeftBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeLeftBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeLeftBottomSquareLeft.layer = -2;

let cindyHappyEyeLeftBottomSquareRight = new PrefabRectangle("cindyHappyEyeLeftBottomSquareRight",175,170,10,4)
cindyHappyEyeLeftBottomSquareRight.name="cindyHappyEyeLeftBottomSquareRight";
cindyHappyEyeLeftBottomSquareRight.visible=false;
cindyHappyEyeLeftBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeLeftBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeLeftBottomSquareRight.layer = -2;

// Right Eye
let cindyHappyEyeRight = new PrefabRectangle("cindyHappyEyeRight",265,165,40,6)
cindyHappyEyeRight.name = "cindyHappyEyeRight";
cindyHappyEyeRight.visible= false;
cindyHappyEyeRight.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeRight.getComponent("RectangleDraw").strokeStyle= "black";
cindyHappyEyeRight.layer = -2;

let cindyHappyEyeRightBottomSquareLeft = new PrefabRectangle("cindyHappyEyeRightBottomSquareLeft",257,170,10,4)
cindyHappyEyeRightBottomSquareLeft.name="cindyHappyEyeRightBottomSquareLeft";
cindyHappyEyeRightBottomSquareLeft.visible=false;
cindyHappyEyeRightBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeRightBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeRightBottomSquareLeft.layer = -2;

let cindyHappyEyeRightBottomSquareRight = new PrefabRectangle("cindyHappyEyeRightBottomSquareRight",304,170,10,4)
cindyHappyEyeRightBottomSquareRight.name="cindyHappyEyeRightBottomSquareRight";
cindyHappyEyeRightBottomSquareRight.visible=false;
cindyHappyEyeRightBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeRightBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
cindyHappyEyeRightBottomSquareRight.layer = -2;

export default [
 
   cindyArm,
   cindyArmShader,
   cindyArmShaderB,
   cindyArm2,
   cindyArm2Shader,
   cindyShoulderPink,
   cindyShoulderPinkShader,
   cindyShoulderPink2,
   cindyShoulderPink2Shader,
   cindyShirt,
   cindyFace,
   cindyFaceShader,
   cindyFaceShader2,
   cindyFaceShader2a,
   cindyFaceShader3,
   cindyNeckPiecePinkShader,
   cindyNeckPiece2PinkShader,
   cindyNeckPiece3PinkShader,
   cindyNeckPiece4PinkShader,
   cindyNeckPiece5PinkShader,
   cindyNeckPiece6PinkShader,
   cindyNeckPiece7PinkShader,
   cindyNeckPiece,
  
   cindyNeckPieceShader,
   cindyNeckPieceShaderB,
   cindyNeckPiece2,
   cindyNeckPiece3,

   cindyNeckPiece4,
   cindyNeckPiece5,
   cindyNeckPiece6,
   cindyNeckPieceShader2,
   cindyNeckPieceShader2B,
   cindyNeckPieceShader3,
   cindyNeckPieceShader3B,
   cindyNeckPieceShader4,
   cindyNeckPieceShader4B,

   cindyNeckPieceShader5,
   cindyNeckPieceShader5B,
   cindyNeckPieceShader6,
   cindyNeckPieceShader6B,
   cindyNeckPieceRed,
   cindyNeckPieceRedShade,
   cindyNeckPieceRedShadeShine,
   cindyEar,
   cindyEarShade,
   cindyEarringRed,
   cindyEarringShade,
   cindyEarringShine,
   cindyHair,

   cindyHairShade,
   cindyHair2,
   cindyHair2Shade,
   cindyHair3,
   cindyHair3Shade,
   cindyHair3ShadeB,
   cindyHair3ShadeExtra,
  
   cindyHair4,
  
   cindyHair4Shader,
  
   cindyHair5,
   // cindyHair5Shader,
   cindyHair6,
   cindyHair3ShadeExtraB,
   // cindyHair6Shader,
   cindyHair7,
   // cindyHair7Shader,

   cindyHat,
   cindyHatShader,
   cindyHat2,
   cindyHat2Shader,
   cindyHatPetal,
   cindyHatPetalShader,
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
   cindyEye3Shader,
   cindyEye4,
   cindyEye4Shader,
   cindyEye5,
   cindyEye6,
   cindyEye7,
   cindyEye8,
   cindyEye9,
   cindyEye9b,
   cindyEye10,
   cindyEye10b,
   cindyEyeBall,
   cindyEyeBall2,
   cindyEyeBall4,
   cindyEyeBall5,
   cindyEyeBall6,
   cindyEyeBall7,
   cindyEyeBall8,
   cindyMouth,
   cindyMouth2,
   cindyMouth2b,
   cindyMouth3,
   cindyMouth3b,
   cindyMouth4,

   // Closed Happy Face

   cindyHappyEyeLeft,
   cindyHappyEyeRight,
   cindyHappyEyeLeftBottomSquareLeft,
   cindyHappyEyeLeftBottomSquareRight,
   cindyHappyEyeRightBottomSquareLeft,
   cindyHappyEyeRightBottomSquareRight,
];