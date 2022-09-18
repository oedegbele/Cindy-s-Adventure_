import PrefabCircle from "../../../engine/PrefabCircle.js"
import PrefabRectangle from "../../../engine/PrefabRectangle.js"

// Face
let armoredKnightFace = new PrefabCircle("armoredKnightFace", 1200, 180, 120);
armoredKnightFace.name = "armoredKnightFace";
armoredKnightFace.getComponent("CircleDraw").fillStyle = "#ffe1c9";
armoredKnightFace.layer = -2;
armoredKnightFace.visible=false;

//Ears 
let armoredKnightEarLeft = new PrefabCircle("armoredKnightEarLeft", 1080, 200, 25);
armoredKnightEarLeft.getComponent("CircleDraw").fillStyle = "#ffe1c9";
armoredKnightEarLeft.layer = -2;
armoredKnightEarLeft.name= "armoredKnightEarLeft"
armoredKnightEarLeft.visible=false;

let armoredKnightEarRight = new PrefabCircle("armoredKnightEarRight", 1325, 200, 25);
armoredKnightEarRight.getComponent("CircleDraw").fillStyle = "#ffe1c9";
armoredKnightEarRight.layer = -2;
armoredKnightEarRight.name = "armoredKnightEarRight"
armoredKnightEarRight.visible=false;
// Eyes
let knightEye = new PrefabCircle("knightEye",1258, 168, 27);
knightEye.name = "knightEye"
knightEye.getComponent("CircleDraw").fillStyle = "black";
knightEye.getComponent("CircleDraw").strokeStyle = "#00264D";
knightEye.layer = -2;
knightEye.name= "knightEye"
knightEye.visible=false;

let knightEye2 = new PrefabCircle("knightEye2",1138, 168, 27);
knightEye2.name = "knightEye2"
knightEye2.getComponent("CircleDraw").fillStyle = "black";
knightEye2.layer = -2;
knightEye2.name = "knightEye2"
knightEye2.visible=false;

let knightEye3 = new PrefabCircle("knightEye3",1140, 170, 25);
knightEye3.name = "knightEye3"
knightEye3.getComponent("CircleDraw").fillStyle = "white";
knightEye3.layer = -2;
knightEye3.name = "knightEye3"
knightEye3.visible=false;

let knightEye3Shader = new PrefabCircle("knightEye3Shader",1140, 170, 19);
knightEye3Shader.name = "knightEye3Shader"
knightEye3Shader.getComponent("CircleDraw").fillStyle = "#61c990";
knightEye3Shader.layer = -2;
knightEye3Shader.name="knightEye3Shader"
knightEye3Shader.visible=false;

let knightEye4 = new PrefabCircle("knightEye4",1260, 170, 25);
knightEye4.name = "knightEye4";
knightEye4.getComponent("CircleDraw").fillStyle = "white";
knightEye4.layer = -2;
knightEye4.name = "knightEye4"
knightEye4.visible=false;

let knightEye4Shader = new PrefabCircle("knightEye4Shader",1260, 170, 19);
knightEye4Shader.name = "knightEye4Shader";
knightEye4Shader.getComponent("CircleDraw").fillStyle = "#61c990";
knightEye4Shader.layer = -2;
knightEye4Shader.visible=false;

let knightEyeBall = new PrefabCircle("knightEyeBall",1140, 170, 13);
knightEyeBall.name = "knightEyeBall"
knightEyeBall.getComponent("CircleDraw").fillStyle = "black";
knightEyeBall.layer = -2;
knightEyeBall.visible=false;

let knightEyeBall2 = new PrefabCircle("knightEyeBall2",1140, 170, 10);
knightEyeBall2.name = "knightEyeBall2"
knightEyeBall2.getComponent("CircleDraw").fillStyle = "#29543c";
knightEyeBall2.getComponent("CircleDraw").strokeStyle= "black";
knightEyeBall2.layer = -2;
knightEyeBall2.visible=false;

let knightEyeBall4 = new PrefabCircle("knightEyeBall4",1260, 170, 10);
knightEyeBall4.name = "knightEyeBall4"
knightEyeBall4.getComponent("CircleDraw").fillStyle = "#29543c";
knightEyeBall4.layer = -2;
knightEyeBall4.visible=false;

let knightEyeBall5 = new PrefabCircle("knightEyeBall5",1260, 170, 13);
knightEyeBall5.name = "knightEyeBall5"
knightEyeBall5.getComponent("CircleDraw").fillStyle = "black";
knightEyeBall5.layer = -2;
knightEyeBall5.visible=false;

let knightEyeBall6 = new PrefabCircle("knightEyeBall6",1260, 170, 10);
knightEyeBall6.name = "knightEyeBall6"
knightEyeBall6.getComponent("CircleDraw").fillStyle = "#29543c";
knightEyeBall6.layer = -2;
knightEyeBall6.visible=false;

let knightEyeBall7 = new PrefabCircle("knightEyeBall7",1135, 165, 5);
knightEyeBall7.name = "knightEyeBall7"
knightEyeBall7.getComponent("CircleDraw").fillStyle = "white";
knightEyeBall7.layer = -2;
knightEyeBall7.visible=false;



let knightEyeBall8 = new PrefabCircle("knightEyeBall8",1255, 165, 5);
knightEyeBall8.name = "knightEyeBall8"
knightEyeBall8.getComponent("CircleDraw").fillStyle = "white";
knightEyeBall8.layer = -2;
knightEyeBall8.visible=false;

let knightMouth = new PrefabRectangle("knightMouth",1175, 245, 60, 5);
knightMouth.name = "knightMouth"
knightMouth.getComponent("RectangleDraw").fillStyle = "black";
knightMouth.layer = -2;
knightMouth.visible=false;

let knightEye9 = new PrefabRectangle("knightEye9",1115, 140, 50, 10);
knightEye9.name = "knightEye9"
knightEye9.getComponent("RectangleDraw").fillStyle = "black";
knightEye9.layer = -2;
knightEye9.name = "knightEye9"
knightEye9.visible=false;



//Raised left eyebrow
let knightEye9b = new PrefabRectangle("knightEye9b",1115, 120, 50, 10);
knightEye9b.name = "knightEye9b"
knightEye9b.getComponent("RectangleDraw").fillStyle = "black";
knightEye9b.layer = -2;
knightEye9b.name = "knightEye9b"
knightEye9b.visible=false;

let knightEye10b = new PrefabRectangle("knightEye10b",1230, 120, 50, 10);
knightEye10b.name = "knightEye10b"
knightEye10b.getComponent("RectangleDraw").fillStyle = "black";
knightEye10b.layer = -2;
knightEye10b.name = "knightEye10b"
knightEye10b.visible=false;

let knightEye10 = new PrefabRectangle("knightEye10",1230, 140, 50, 10);
knightEye10.name = "knightEye10"
knightEye10.getComponent("RectangleDraw").fillStyle = "black";
knightEye10.layer = -2;
knightEye10.name = "knightEye10"
knightEye10.visible=false;

// Raised Right Eyebrow

let knightShirtUnder = new PrefabRectangle("knightShirtUnder", 1125, 300, 160, 200);
knightShirtUnder.getComponent("RectangleDraw").fillStyle = "#472f17";
knightShirtUnder.getComponent("RectangleDraw").strokeStyle = "#597300";
knightShirtUnder.layer = -2;
knightShirtUnder.name = "knightShirtUnder"
knightShirtUnder.visible=false;



let knightGoldCenter = new PrefabRectangle("knightGoldCenter", 1178, 353, 55, 55);
knightGoldCenter.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightGoldCenter.getComponent("RectangleDraw").strokeStyle = "#082d36";
knightGoldCenter.layer = -2;
knightGoldCenter.name = "knightGoldCenter"
knightGoldCenter.visible=false;


let knightBlueGemCenter = new PrefabRectangle("knightBlueGemCenter", 1185, 360, 40, 40);
knightBlueGemCenter.getComponent("RectangleDraw").fillStyle = "#21ABCD";
knightBlueGemCenter.getComponent("RectangleDraw").strokeStyle = "#082d36";
knightBlueGemCenter.layer = -2;
knightBlueGemCenter.name = "knightBlueGemCenter"
knightBlueGemCenter.visible=false;


let knightLeftMiddleArmorBottom = new PrefabRectangle("knightLeftMiddleArmorBottom", 1100, 380, 80, 20);
knightLeftMiddleArmorBottom.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightLeftMiddleArmorBottom.getComponent("RectangleDraw").strokeStyle = "#082d36";
knightLeftMiddleArmorBottom.layer = -2;
knightLeftMiddleArmorBottom.name = "knightLeftMiddleArmorBottom"
knightLeftMiddleArmorBottom.visible=false;

let knightLeftMiddleArmorBottom2 = new PrefabRectangle("knightLeftMiddleArmorBottom2", 1085, 370, 30, 20);
knightLeftMiddleArmorBottom2.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightLeftMiddleArmorBottom2.getComponent("RectangleDraw").strokeStyle = "#FFD700";
knightLeftMiddleArmorBottom2.layer = -2;
knightLeftMiddleArmorBottom2.name = "knightLeftMiddleArmorBottom2"
knightLeftMiddleArmorBottom2.visible=false;

let knightLeftMiddleArmorBottom3 = new PrefabRectangle("knightLeftMiddleArmorBottom3", 1110, 355, 20, 20);
knightLeftMiddleArmorBottom3.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightLeftMiddleArmorBottom3.getComponent("RectangleDraw").strokeStyle = "#FFD700";
knightLeftMiddleArmorBottom3.layer = -2;
knightLeftMiddleArmorBottom3.name = "knightLeftMiddleArmorBottom3"
knightLeftMiddleArmorBottom3.visible=false;

let knightRightMiddleArmorBottom = new PrefabRectangle("knightRightMiddleArmorBottom", 1225, 380, 80, 20);
knightRightMiddleArmorBottom.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightRightMiddleArmorBottom.getComponent("RectangleDraw").strokeStyle = "#082d36";
knightRightMiddleArmorBottom.layer = -2;
knightRightMiddleArmorBottom.name = "knightRightMiddleArmorBottom"
knightRightMiddleArmorBottom.visible=false;

let knightRightMiddleArmorBottom2 = new PrefabRectangle("knightRightMiddleArmorBottom2", 1285, 370, 30, 20);
knightRightMiddleArmorBottom2.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightRightMiddleArmorBottom2.getComponent("RectangleDraw").strokeStyle = "#FFD700";
knightRightMiddleArmorBottom2.layer = -2;
knightRightMiddleArmorBottom2.name = "knightRightMiddleArmorBottom2"
knightRightMiddleArmorBottom2.visible=false;

let knightRightMiddleArmorBottom3 = new PrefabRectangle("knightRightMiddleArmorBottom3", 1270, 355, 20, 20);
knightRightMiddleArmorBottom3.getComponent("RectangleDraw").fillStyle = "#FFD700";
knightRightMiddleArmorBottom3.getComponent("RectangleDraw").strokeStyle = "#FFD700";
knightRightMiddleArmorBottom3.layer = -2;
knightRightMiddleArmorBottom3.name = "knightRightMiddleArmorBottom3"
knightRightMiddleArmorBottom3.visible=false;

let knightShirt = new PrefabRectangle("knightShirt", 1100, 290, 200, 100);
knightShirt.getComponent("RectangleDraw").fillStyle = "#C0C0C0";
knightShirt.getComponent("RectangleDraw").strokeStyle = "#5c5c5c";
knightShirt.layer = -2;
knightShirt.name = "knightShirt"
knightShirt.visible=false;

let knightBelt = new PrefabCircle("knightBelt", 1205, 460, 20);
knightBelt.getComponent("CircleDraw").fillStyle = "#FFD700";
knightBelt.getComponent("CircleDraw").strokeStyle = "#5c5c5c";
knightBelt.layer = -2;
knightBelt.name = "knightBelt"
knightBelt.visible=false;

let knightBottom = new PrefabRectangle("knightBottom", 1100, 450, 200, 30);
knightBottom.getComponent("RectangleDraw").fillStyle = "#8c5d2d";
knightBottom.getComponent("RectangleDraw").strokeStyle = "#5c5c5c";
knightBottom.layer = -2;
knightBottom.name = "knightBottom"
knightBottom.visible=false;

let knightShirtTop = new PrefabRectangle("knightShirtTop", 1150, 280, 110, 20);
knightShirtTop.getComponent("RectangleDraw").fillStyle = "#C0C0C0";
knightShirtTop.getComponent("RectangleDraw").strokeStyle = "#5c5c5c";
knightShirtTop.layer = -2;
knightShirtTop.name = "knightShirtTop"
knightShirtTop.visible=false;


let knightShirtLeftShoulderAmor = new PrefabRectangle("knightShirtLeftShoulderAmor", 1300, 300, 50, 40);
knightShirtLeftShoulderAmor.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtLeftShoulderAmor.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmor.layer = -2;
knightShirtLeftShoulderAmor.name = "knightShirtLeftShoulderAmor"
knightShirtLeftShoulderAmor.visible=false;


let knightShirtLeftShoulderAmorBottom = new PrefabRectangle("knightShirtLeftShoulderAmorBottom", 1320, 365, 32, 65);
knightShirtLeftShoulderAmorBottom.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtLeftShoulderAmorBottom.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmorBottom.layer = -2;
knightShirtLeftShoulderAmorBottom.name = "knightShirtLeftShoulderAmorBottom"
knightShirtLeftShoulderAmorBottom.visible=false;

let knightShirtLeftShoulderAmorBottomHand = new PrefabRectangle("knightShirtLeftShoulderAmorBottomHand", 1295, 430, 52, 35);
knightShirtLeftShoulderAmorBottomHand.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtLeftShoulderAmorBottomHand.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmorBottomHand.layer = -2;
knightShirtLeftShoulderAmorBottomHand.name = "knightShirtLeftShoulderAmorBottomHand"
knightShirtLeftShoulderAmorBottomHand.visible=false;

let knightShirtLeftShoulderAmorBottomHandGlove = new PrefabCircle("knightShirtLeftShoulderAmorBottomHandGlove", 1320, 480, 30);
knightShirtLeftShoulderAmorBottomHandGlove.getComponent("CircleDraw").fillStyle ="#C0C0C0";
knightShirtLeftShoulderAmorBottomHandGlove.getComponent("CircleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmorBottomHandGlove.layer = -2;
knightShirtLeftShoulderAmorBottomHandGlove.name = "knightShirtLeftShoulderAmorBottomHandGlove"
knightShirtLeftShoulderAmorBottomHandGlove.visible=false;
knightShirtLeftShoulderAmorBottomHandGlove.name = "knightShirtLeftShoulderAmorBottomHandGlove"

let knightShirtRightShoulderAmorBottomHandGlove = new PrefabCircle("knightShirtRightShoulderAmorBottomHandGlove", 1090, 480, 30);
knightShirtRightShoulderAmorBottomHandGlove.getComponent("CircleDraw").fillStyle ="#C0C0C0";
knightShirtRightShoulderAmorBottomHandGlove.getComponent("CircleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmorBottomHandGlove.layer = -2;
knightShirtRightShoulderAmorBottomHandGlove.name = "knightShirtRightShoulderAmorBottomHandGlove"
knightShirtRightShoulderAmorBottomHandGlove.visible=false;

let knightShirtRightShoulderAmorBottomHand = new PrefabRectangle("knightShirtRightShoulderAmorBottomHand", 1065, 430, 52, 35);
knightShirtRightShoulderAmorBottomHand.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtRightShoulderAmorBottomHand.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmorBottomHand.layer = -2;
knightShirtRightShoulderAmorBottomHand.name = "knightShirtRightShoulderAmorBottomHand"
knightShirtRightShoulderAmorBottomHand.visible=false;

let knightShirtLeftShoulderAmor2 = new PrefabCircle("knightShirtLeftShoulderAmor2", 1300, 290, 30);
knightShirtLeftShoulderAmor2.getComponent("CircleDraw").fillStyle ="#C0C0C0";
knightShirtLeftShoulderAmor2.getComponent("CircleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmor2.layer = -2;
knightShirtLeftShoulderAmor2.name ="knightShirtLeftShoulderAmor2"
knightShirtLeftShoulderAmor2.visible=false;

let knightShirtRightShoulderAmor = new PrefabRectangle("knightShirtRightShoulderAmor", 1060, 290, 50, 40);
knightShirtRightShoulderAmor.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtRightShoulderAmor.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmor.layer = -2;
knightShirtRightShoulderAmor.name = "knightShirtRightShoulderAmor"
knightShirtRightShoulderAmor.visible=false;

let knightShirtRightShoulderAmor2 = new PrefabCircle("knightShirtRightShoulderAmor2", 1105, 290, 30);
knightShirtRightShoulderAmor2.getComponent("CircleDraw").fillStyle ="#C0C0C0";
knightShirtRightShoulderAmor2.getComponent("CircleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmor2.layer = -2;
knightShirtRightShoulderAmor2.name = "knightShirtRightShoulderAmor2"
knightShirtRightShoulderAmor2.visible=false;

let knightShirtRightShoulderAmorBottom = new PrefabRectangle("knightShirtRightShoulderAmorBottom", 1050, 365, 32, 65);
knightShirtRightShoulderAmorBottom.getComponent("RectangleDraw").fillStyle ="#C0C0C0";
knightShirtRightShoulderAmorBottom.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmorBottom.layer = -2;
knightShirtRightShoulderAmorBottom.name = "knightShirtRightShoulderAmorBottom"
knightShirtRightShoulderAmorBottom.visible=false;

let knightShirtRightShoulderAmorBottomGoldOutlineLeft = new PrefabRectangle("knightShirtRightShoulderAmorBottomGoldOutlineLeft", 1050, 410, 35, 10);
knightShirtRightShoulderAmorBottomGoldOutlineLeft.getComponent("RectangleDraw").fillStyle ="#FFD700";
knightShirtRightShoulderAmorBottomGoldOutlineLeft.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtRightShoulderAmorBottomGoldOutlineLeft.layer = -2;
knightShirtRightShoulderAmorBottomGoldOutlineLeft.name="knightShirtRightShoulderAmorBottomGoldOutlineLeft"
knightShirtRightShoulderAmorBottomGoldOutlineLeft.visible=false;

let knightShirtRightShoulderAmorBottomGoldOutlineLeft2 = new PrefabRectangle("knightShirtRightShoulderAmorBottomGoldOutlineLeft2", 1045, 380, 10, 35);
knightShirtRightShoulderAmorBottomGoldOutlineLeft2.getComponent("RectangleDraw").fillStyle ="#FFD700";
knightShirtRightShoulderAmorBottomGoldOutlineLeft2.getComponent("RectangleDraw").strokeStyle ="#FFD700";
knightShirtRightShoulderAmorBottomGoldOutlineLeft2.layer = -2;
knightShirtRightShoulderAmorBottomGoldOutlineLeft2.visible=false;
knightShirtRightShoulderAmorBottomGoldOutlineLeft2.name ="knightShirtRightShoulderAmorBottomGoldOutlineLeft2"

let knightShirtLeftShoulderAmorBottomGoldOutlineRight = new PrefabRectangle("knightShirtLeftShoulderAmorBottomGoldOutlineRight", 1320, 410, 35, 10);
knightShirtLeftShoulderAmorBottomGoldOutlineRight.getComponent("RectangleDraw").fillStyle ="#FFD700";
knightShirtLeftShoulderAmorBottomGoldOutlineRight.getComponent("RectangleDraw").strokeStyle ="#5c5c5c";
knightShirtLeftShoulderAmorBottomGoldOutlineRight.layer = -2;
knightShirtLeftShoulderAmorBottomGoldOutlineRight.visible=false;
knightShirtLeftShoulderAmorBottomGoldOutlineRight.name = "knightShirtLeftShoulderAmorBottomGoldOutlineRight"

let knightShirtLeftShoulderAmorBottomGoldOutlineRight2 = new PrefabRectangle("knightShirtLeftShoulderAmorBottomGoldOutlineRight2", 1345, 380, 10, 35);
knightShirtLeftShoulderAmorBottomGoldOutlineRight2.getComponent("RectangleDraw").fillStyle ="#FFD700";
knightShirtLeftShoulderAmorBottomGoldOutlineRight2.getComponent("RectangleDraw").strokeStyle ="#FFD700";
knightShirtLeftShoulderAmorBottomGoldOutlineRight2.layer = -2;
knightShirtLeftShoulderAmorBottomGoldOutlineRight2.name = "knightShirtLeftShoulderAmorBottomGoldOutlineRight2"
knightShirtLeftShoulderAmorBottomGoldOutlineRight2.visible=false;

let knightArmLeft = new PrefabRectangle("knightArmLeft", 1075, 300, 30, 150);
knightArmLeft.getComponent("RectangleDraw").fillStyle = "#472f17";
knightArmLeft.getComponent("RectangleDraw").strokeStyle = "#8DB600";
knightArmLeft.layer = -2;
knightArmLeft.name = "knightArmLeft"
knightArmLeft.visible=false;

let knightArmRight = new PrefabRectangle("knightArmRight", 1300, 300, 30, 150);
knightArmRight.getComponent("RectangleDraw").fillStyle = "#472f17";
knightArmRight.getComponent("RectangleDraw").strokeStyle = "#8DB600";
knightArmRight.layer = -2;
knightArmRight.name = "knightArmRight"
knightArmRight.visible=false;

let knightHair = new PrefabRectangle("knightHair",1180,90,10,50)
knightHair.getComponent("RectangleDraw").fillStyle="#555555";
knightHair.getComponent("RectangleDraw").strokeStyle="#555555";
knightHair.layer = -2;
knightHair.name = "knightHair"
knightHair.visible=false;

let knightHairTopOutline = new PrefabRectangle("knightHairTopOutline",1080,50,240,50)
knightHairTopOutline.getComponent("RectangleDraw").fillStyle="#B0BF1A";
knightHairTopOutline.getComponent("RectangleDraw").strokeStyle="#B0BF1A";
knightHairTopOutline.layer = -2;
knightHairTopOutline.name ="knightHairTopOutline"
knightHairTopOutline.visible=false;

let knightHaira = new PrefabRectangle("knightHaira",1190,100,10,50)
knightHaira.getComponent("RectangleDraw").fillStyle="#555555";
knightHaira.getComponent("RectangleDraw").strokeStyle="#555555";
knightHaira.layer = -2;
knightHaira.name = "knightHaira"
knightHaira.visible=false;

let knightHairaa = new PrefabRectangle("knightHairaa",1200,110,10,50)
knightHairaa.getComponent("RectangleDraw").fillStyle="#555555";
knightHairaa.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairaa.layer = -2;
knightHairaa.name ="knightHairaa"
knightHairaa.visible=false;

let knightHairb = new PrefabRectangle("knightHairb",1210,100,10,50)
knightHairb.getComponent("RectangleDraw").fillStyle="#555555";
knightHairb.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairb.layer = -2;
knightHairb.name = "knightHairb"
knightHairb.visible=false;
let knightHairbb = new PrefabRectangle("knightHairbb",1220,90,10,50)
knightHairbb.getComponent("RectangleDraw").fillStyle="#555555";
knightHairbb.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairbb.layer = -2;
knightHairbb.name = "knightHairbb"
knightHairbb.visible=false;

let knightHairbbb = new PrefabRectangle("knightHairbbb",1250,90,40,50)
knightHairbbb.getComponent("RectangleDraw").fillStyle="#555555";
knightHairbbb.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairbbb.layer = -2;
knightHairbbb.name = "knightHairbbb"
knightHairbbb.visible=false;

let knightHairbbbb = new PrefabRectangle("knightHairbbbb",1280,90,20,130)
knightHairbbbb.getComponent("RectangleDraw").fillStyle="#555555";
knightHairbbbb.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairbbbb.layer = -2;
knightHairbbbb.name = "knightHairbbbb"
knightHairbbbb.visible=false;

let knightHairbbbbb = new PrefabRectangle("knightHairbbbbb",1300,90,20,150)
knightHairbbbbb.getComponent("RectangleDraw").fillStyle="#555555";
knightHairbbbbb.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairbbbbb.layer = -2;
knightHairbbbbb.visible=false;
knightHairbbbbb.name = "knightHairbbbbb"

let knightHairccc = new PrefabRectangle("knightHairccc",1120,90,40,50)
knightHairccc.getComponent("RectangleDraw").fillStyle="#555555";
knightHairccc.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairccc.layer = -2;
knightHairccc.name = "knightHairccc"
knightHairccc.visible=false;

let knightHaircccc = new PrefabRectangle("knightHaircccc",1100,90,20,130)
knightHaircccc.getComponent("RectangleDraw").fillStyle="#555555";
knightHaircccc.getComponent("RectangleDraw").strokeStyle="#555555";
knightHaircccc.layer = -2;
knightHaircccc.name = "knightHaircccc"
knightHaircccc.visible=false;

let knightHairccccc = new PrefabRectangle("knightHairccccc",1080,90,20,150)
knightHairccccc.getComponent("RectangleDraw").fillStyle="#555555";
knightHairccccc.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairccccc.layer = -2;
knightHairccccc.name = "knightHairccccc"
knightHairccccc.visible=false;

let knightHairBack = new PrefabCircle("knightHairBack",1250,115,100)
knightHairBack.name = "knightHairBack";
knightHairBack.getComponent("CircleDraw").fillStyle="#555555";
knightHairBack.getComponent("CircleDraw").strokeStyle="#555555";
knightHairBack.layer = -2;
knightHairBack.visible=false;


let knightHairBack2 = new PrefabCircle("knightHairBack2",1190,110,100)
knightHairBack2.getComponent("CircleDraw").fillStyle="#555555";
knightHairBack2.getComponent("CircleDraw").strokeStyle="#555555";
knightHairBack2.layer = -2;
knightHairBack2.name = "knightHairBack2";
knightHairBack2.visible=false;

let knightHairBack3 = new PrefabCircle("knightHairBack3",1150,120,100)
knightHairBack3.getComponent("CircleDraw").fillStyle="#555555";
knightHairBack3.getComponent("CircleDraw").strokeStyle="#555555";
knightHairBack3.layer = -2;
knightHairBack3.name = "knightHairBack3";
knightHairBack3.visible=false;

let knightHairBackRectangleRight = new PrefabRectangle("knightHairBackRectangleRight",1300,120,50,130)
knightHairBackRectangleRight.getComponent("RectangleDraw").fillStyle="#555555";
knightHairBackRectangleRight.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairBackRectangleRight.layer=-2;
knightHairBackRectangleRight.name = "knightHairBackRectangleRight";
knightHairBackRectangleRight.visible=false;

let knightHairBackRectangleRight2 = new PrefabRectangle("knightHairBackRectangleRight2",1280,140,50,130)
knightHairBackRectangleRight2.getComponent("RectangleDraw").fillStyle="#555555";
knightHairBackRectangleRight2.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairBackRectangleRight2.layer=-2;
knightHairBackRectangleRight2.name = "knightHairBackRectangleRight2"
knightHairBackRectangleRight2.visible=false;

let knightHairBackRectangleLeft = new PrefabRectangle("knightHairBackRectangleLeft",1060,120,50,130)
knightHairBackRectangleLeft.getComponent("RectangleDraw").fillStyle="#555555";
knightHairBackRectangleLeft.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairBackRectangleLeft.layer=-2;
knightHairBackRectangleLeft.name = "knightHairBackRectangleLeft";
knightHairBackRectangleLeft.visible=false;

let knightHairBackRectangleLeft2 = new PrefabRectangle("knightHairBackRectangleLeft2",1080,135,50,130)
knightHairBackRectangleLeft2.getComponent("RectangleDraw").fillStyle="#555555";
knightHairBackRectangleLeft2.getComponent("RectangleDraw").strokeStyle="#555555";
knightHairBackRectangleLeft2.layer=-2;
knightHairBackRectangleLeft2.name = "knightHairBackRectangleLeft2";
knightHairBackRectangleLeft2.visible=false;

let knightHair2 = new PrefabRectangle("knightHair2",1130,90,140,30)
knightHair2.getComponent("RectangleDraw").fillStyle="#FFD700";
knightHair2.getComponent("RectangleDraw").strokeStyle="#FFD700";
knightHair2.layer = -2;
knightHair2.name = "knightHair2"
knightHair2.visible=false;

let knightHair2a = new PrefabRectangle("knightHair2a",1110,90,200,20)
knightHair2a.getComponent("RectangleDraw").fillStyle="#555555";
knightHair2a.getComponent("RectangleDraw").strokeStyle="#555555";
knightHair2a.layer = -2;
knightHair2a.name ="knightHair2a"
knightHair2a.visible=false;

let knightHair2ab = new PrefabRectangle("knightHair2ab",1080,60,240,40)
knightHair2ab.getComponent("RectangleDraw").fillStyle="#555555";
knightHair2ab.getComponent("RectangleDraw").strokeStyle="#555555";
knightHair2ab.layer = -2;
knightHair2ab.name = "knightHair2ab"
knightHair2ab.visible=false;

let knightHair2b = new PrefabRectangle("knightHair2b",1080,80,30,150)
knightHair2b.getComponent("RectangleDraw").fillStyle="#B0BF1A";
knightHair2b.getComponent("RectangleDraw").strokeStyle="#B0BF1A";
knightHair2b.layer = -2;
knightHair2b.name = "knightHair2b"
knightHair2b.visible=false;

let knightHair2bb = new PrefabRectangle("knightHair2bb",1085,100,15,150)
knightHair2bb.getComponent("RectangleDraw").fillStyle="#B0BF1A";
knightHair2bb.getComponent("RectangleDraw").strokeStyle="#B0BF1A";
knightHair2bb.layer = -2;
knightHair2bb.name = "knightHair2bb"
knightHair2bb.visible=false;


let knightHair3 = new PrefabRectangle("knightHair3",1160,60,100,50)
knightHair3.getComponent("RectangleDraw").fillStyle="#B0BF1A";
knightHair3.getComponent("RectangleDraw").strokeStyle="#B0BF1A";
knightHair3.layer = -2;
knightHair3.name = "knightHair3"
knightHair3.visible=false;

// Left Eye
let knightHappyEyeLeft = new PrefabRectangle("knightHappyEyeLeft",1115,175,40,6)
knightHappyEyeLeft.name= "knightHappyEyeLeft";
knightHappyEyeLeft.visible = false;
knightHappyEyeLeft.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeLeft.getComponent("RectangleDraw").strokeStyle= "black";
knightHappyEyeLeft.layer = -2

let knightHappyEyeLeftBottomSquareLeft = new PrefabRectangle("knightHappyEyeLeftBottomSquareLeft",1108,173,10,4)
knightHappyEyeLeftBottomSquareLeft.name="knightHappyEyeLeftBottomSquareLeft";
knightHappyEyeLeftBottomSquareLeft.visible=false;
knightHappyEyeLeftBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeLeftBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeLeftBottomSquareLeft.layer = -2;

let knightHappyEyeLeftBottomSquareRight = new PrefabRectangle("knightHappyEyeLeftBottomSquareRight",1155,173,10,4)
knightHappyEyeLeftBottomSquareRight.name="knightHappyEyeLeftBottomSquareRight";
knightHappyEyeLeftBottomSquareRight.visible=false;
knightHappyEyeLeftBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeLeftBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeLeftBottomSquareRight.layer = -2;

// Right Eye
let knightHappyEyeRight = new PrefabRectangle("knightHappyEyeRight",1245,175,40,6)
knightHappyEyeRight.name = "knightHappyEyeRight";
knightHappyEyeRight.visible= false;
knightHappyEyeRight.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeRight.getComponent("RectangleDraw").strokeStyle= "black";
knightHappyEyeRight.layer = -2;

let knightHappyEyeRightBottomSquareLeft = new PrefabRectangle("knightHappyEyeRightBottomSquareLeft",1237,173,10,4)
knightHappyEyeRightBottomSquareLeft.name="knightHappyEyeRightBottomSquareLeft";
knightHappyEyeRightBottomSquareLeft.visible=false;
knightHappyEyeRightBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeRightBottomSquareLeft.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeRightBottomSquareLeft.layer = -2;

let knightHappyEyeRightBottomSquareRight = new PrefabRectangle("knightHappyEyeRightBottomSquareRight",1284,173,10,4)
knightHappyEyeRightBottomSquareRight.name="knightHappyEyeRightBottomSquareRight";
knightHappyEyeRightBottomSquareRight.visible=false;
knightHappyEyeRightBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeRightBottomSquareRight.getComponent("RectangleDraw").fillStyle= "black";
knightHappyEyeRightBottomSquareRight.layer = -2;


export default[
knightHairBack,
knightHairBack2,
knightHairBack3,
knightHairBackRectangleRight,
knightHairBackRectangleRight2,
knightHairBackRectangleLeft,
knightHairBackRectangleLeft2,
armoredKnightEarRight,

armoredKnightEarLeft,

armoredKnightFace,


knightEye,
knightEye2,
knightEye3,
knightEye3Shader,
knightEye4,
knightEye4Shader,
knightEyeBall,
knightEyeBall2,
knightEyeBall4,
knightEyeBall5,
knightEyeBall6,
knightEyeBall7,
knightEyeBall8,

// knightHairTopOutline,

knightHair2,
knightHair2a,
knightHair2ab,
knightHair,
knightHaira,
knightHairaa,
knightHairb,
knightHairbb,
knightHairbbb,
knightHairbbbb,
knightHairbbbbb,
knightHairccc,
knightHaircccc,
knightHairccccc,

// knightHair2b,
// knightHair2bb,
// knightHair3,


knightMouth,

knightEye9, // eyebrow needs change
knightEye9b,
knightEye10, // eyebrow needs change 
knightEye10b,
knightShirtUnder,
knightShirt,

knightBottom,
knightBelt,
knightShirtTop,
// knightShirt2,
knightArmLeft,
knightArmRight,
// knightShirt3,
// knightShirt4,
// knightShirt5,

knightShirtLeftShoulderAmor,
knightShirtLeftShoulderAmor2,
knightShirtRightShoulderAmor,
knightShirtRightShoulderAmor2,
knightShirtLeftShoulderAmorBottom,
knightShirtLeftShoulderAmorBottomHandGlove,
knightShirtLeftShoulderAmorBottomHand,
knightShirtRightShoulderAmorBottomHandGlove,
knightShirtRightShoulderAmorBottomHand,
knightShirtRightShoulderAmorBottom,
knightShirtRightShoulderAmorBottomGoldOutlineLeft,
knightShirtRightShoulderAmorBottomGoldOutlineLeft2,
knightShirtLeftShoulderAmorBottomGoldOutlineRight,
knightShirtLeftShoulderAmorBottomGoldOutlineRight2,

knightLeftMiddleArmorBottom,
knightLeftMiddleArmorBottom2,
knightLeftMiddleArmorBottom3,
knightRightMiddleArmorBottom,
knightRightMiddleArmorBottom2,
knightRightMiddleArmorBottom3,
knightGoldCenter,
knightBlueGemCenter,

knightHappyEyeLeft,
knightHappyEyeRight,
knightHappyEyeLeftBottomSquareLeft,
knightHappyEyeLeftBottomSquareRight,
knightHappyEyeRightBottomSquareLeft,
knightHappyEyeRightBottomSquareRight,
];