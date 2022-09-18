import PrefabRectangle from "../../../engine/PrefabRectangle.js"
import PrefabCircle from "../../../engine/PrefabCircle.js"

let whispOneBlue = new PrefabCircle ("WhispOneBlue",1200,350,150);
whispOneBlue.name = "WhispOneBlue";
whispOneBlue.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlue.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlue.visible = false;
whispOneBlue.layer = -2;

let whispOneBlueDeepShade = new PrefabCircle ("WhispOneBlueDeepShade",1200,350,130);
whispOneBlueDeepShade.name = "WhispOneBlueDeepShade";
whispOneBlueDeepShade.getComponent("CircleDraw").fillStyle = "#2e857c" 
whispOneBlueDeepShade.getComponent("CircleDraw").strokeStyle = "#2e857c" 
whispOneBlueDeepShade.visible = false;
whispOneBlueDeepShade.layer = -2;

let whispOneBlueHair = new PrefabCircle ("WhispOneBlueHair",1200,150,50);
whispOneBlueHair.name = "WhispOneBlueHair";
whispOneBlueHair.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlueHair.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlueHair.visible = false;
whispOneBlueHair.layer = -2;

let whispOneBlueHairDeepShade = new PrefabCircle ("WhispOneBlueHairDeepShade",1200,150,35);
whispOneBlueHairDeepShade.name = "WhispOneBlueHairDeepShade";
whispOneBlueHairDeepShade.getComponent("CircleDraw").fillStyle = "#2e857c" 
whispOneBlueHairDeepShade.getComponent("CircleDraw").strokeStyle = "#2e857c" 
whispOneBlueHairDeepShade.visible = false;
whispOneBlueHairDeepShade.layer = -2;

// Normal Mouth 
// fix
let whispOneBlueMouthNormalLeftEndCurve = new PrefabRectangle("WhispOneBlueMouthNormalLeftEndCurve",1140,390,10,10);
whispOneBlueMouthNormalLeftEndCurve.name="WhispOneBlueMouthNormalLeftEndCurve";
whispOneBlueMouthNormalLeftEndCurve.getComponent("RectangleDraw").fillStyle="black";
whispOneBlueMouthNormalLeftEndCurve.getComponent("RectangleDraw").strokeStyle="black";
whispOneBlueMouthNormalLeftEndCurve.visible=false;

let whispOneBlueMouthNormalRightEndCurve = new PrefabRectangle("WhispOneBlueMouthNormalRightEndCurve",1220,390,10,10);
whispOneBlueMouthNormalRightEndCurve.name="WhispOneBlueMouthNormalRightEndCurve";
whispOneBlueMouthNormalRightEndCurve.getComponent("RectangleDraw").fillStyle="black";
whispOneBlueMouthNormalRightEndCurve.getComponent("RectangleDraw").strokeStyle="black";
whispOneBlueMouthNormalRightEndCurve.visible=false;

let whispOneBlueMouthNormal = new PrefabRectangle("WhispOneBlueMouthNormal",1150,400,70,10);
whispOneBlueMouthNormal.name="WhispOneBlueMouthNormal";
whispOneBlueMouthNormal.getComponent("RectangleDraw").fillStyle="black";
whispOneBlueMouthNormal.getComponent("RectangleDraw").strokeStyle="black";
whispOneBlueMouthNormal.visible=false;

let whispOneBlueHair2 = new PrefabCircle ("WhispOneBlueHair2",1250,110,40);
whispOneBlueHair2.name = "WhispOneBlueHair2";
whispOneBlueHair2.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlueHair2.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlueHair2.visible = false;
whispOneBlueHair2.layer = -2;

let whispOneBlueHair2DeepShade = new PrefabCircle ("WhispOneBlueHair2DeepShade",1240,110,30);
whispOneBlueHair2DeepShade.name = "WhispOneBlueHair2DeepShade";
whispOneBlueHair2DeepShade.getComponent("CircleDraw").fillStyle = "#2e857c" 
whispOneBlueHair2DeepShade.getComponent("CircleDraw").strokeStyle = "#2e857c" 
whispOneBlueHair2DeepShade.visible = false;
whispOneBlueHair2DeepShade.layer = -2;

let whispOneBlueHair3 = new PrefabCircle ("WhispOneBlueHair3",1300,120,30);
whispOneBlueHair3.name = "WhispOneBlueHair3";
whispOneBlueHair3.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlueHair3.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlueHair3.visible = false;
whispOneBlueHair3.layer = -2;

let whispOneBlueHair3DeepShade = new PrefabCircle ("WhispOneBlueHair3DeepShade",1290,115,25);
whispOneBlueHair3DeepShade.name = "WhispOneBlueHair3DeepShade";
whispOneBlueHair3DeepShade.getComponent("CircleDraw").fillStyle = "#2e857c" 
whispOneBlueHair3DeepShade.getComponent("CircleDraw").strokeStyle = "#2e857c" 
whispOneBlueHair3DeepShade.visible = false;
whispOneBlueHair3DeepShade.layer = -2;

let whispOneBlue2 = new PrefabCircle ("WhispOneBlue2",1050,450,50);
whispOneBlue2.name = "WhispOneBlue2";
whispOneBlue2.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlue2.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlue2.visible = false;
whispOneBlue2.layer = -2;

let whispOneBlue3 = new PrefabCircle ("WhispOneBlue3",1350,450,50);
whispOneBlue3.name = "WhispOneBlue3";
whispOneBlue3.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlue3.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlue3.visible = false;
whispOneBlue3.layer = -2;

let whispOneBlueThumb = new PrefabCircle ("WhispOneBlueThumb",1320,450,30);
whispOneBlueThumb.name = "WhispOneBlue2";
whispOneBlueThumb.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlueThumb.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlueThumb.visible = false;
whispOneBlueThumb.layer = -2;

let whispOneBlueThumb2 = new PrefabCircle ("WhispOneBlueThumb2",1100,450,30);
whispOneBlueThumb2.name = "WhispOneBlue2";
whispOneBlueThumb2.getComponent("CircleDraw").fillStyle = "#41baae" 
whispOneBlueThumb2.getComponent("CircleDraw").strokeStyle = "#1f5953" 
whispOneBlueThumb2.visible = false;
whispOneBlueThumb2.layer = -2;

// suprized expression
let whispOneBlueMouth = new PrefabCircle ("WhispOneBlueMouth",1200,430,50);
whispOneBlueMouth.name = "WhispOneMouth";
whispOneBlueMouth.getComponent("CircleDraw").fillStyle = "black" 
whispOneBlueMouth.getComponent("CircleDraw").strokeStyle = "black" 
whispOneBlueMouth.visible = false;
whispOneBlueMouth.layer = -2;

let whispOneBlueMouthInner = new PrefabCircle ("WhispOneBlueMouthInner ",1200,440,25);
whispOneBlueMouthInner.name = "WhispOneMouthInner";
whispOneBlueMouthInner.getComponent("CircleDraw").fillStyle = "white" 
whispOneBlueMouthInner.getComponent("CircleDraw").strokeStyle = "white" 
whispOneBlueMouthInner.visible = false;
whispOneBlueMouthInner.layer = -2;

let whispOneBlueMouthInnerBlack = new PrefabCircle ("WhispOneBlueMouthInnerBlack ",1200,420,20);
whispOneBlueMouthInnerBlack.name = "WhispOneMouthInnerBlack";
whispOneBlueMouthInnerBlack.getComponent("CircleDraw").fillStyle = "black" 
whispOneBlueMouthInnerBlack.getComponent("CircleDraw").strokeStyle = "black" 
whispOneBlueMouthInnerBlack.visible = false;
whispOneBlueMouthInnerBlack.layer = -2;

let whispOneBlueHeadPetalRed = new PrefabCircle ("WhispOneBlueHeadPetalRed ",1200,200,20);
whispOneBlueHeadPetalRed.name = "WhispOneBlueHeadPetalRed";
whispOneBlueHeadPetalRed.getComponent("CircleDraw").fillStyle = "red" 
whispOneBlueHeadPetalRed.getComponent("CircleDraw").strokeStyle = "red" 
whispOneBlueHeadPetalRed.visible = false;
whispOneBlueHeadPetalRed.layer = -2;

let whispOneBlueHeadPetalRedCenterShade = new PrefabCircle ("WhispOneBlueHeadPetalRedCenterShade",1200,200,15);
whispOneBlueHeadPetalRedCenterShade.name = "WhispOneBlueHeadPetalRedCenterShade";
whispOneBlueHeadPetalRedCenterShade.getComponent("CircleDraw").fillStyle = "#850101" 
whispOneBlueHeadPetalRedCenterShade.getComponent("CircleDraw").strokeStyle = "#850101" 
whispOneBlueHeadPetalRedCenterShade.visible = false;
whispOneBlueHeadPetalRedCenterShade.layer = -2;

let whispOneBlueHeadPetalWhiteLeft = new PrefabCircle ("WhispOneBlueHeadPetalWhiteLeft",1160,190,30);
whispOneBlueHeadPetalWhiteLeft.name = "WhispOneBlueHeadPetalWhiteLeft";
whispOneBlueHeadPetalWhiteLeft.getComponent("CircleDraw").fillStyle = "white" 
whispOneBlueHeadPetalWhiteLeft.getComponent("CircleDraw").strokeStyle = "black" 
whispOneBlueHeadPetalWhiteLeft.visible = false;
whispOneBlueHeadPetalWhiteLeft.layer = -2;

let whispOneBlueHeadPetalWhiteLeftShade = new PrefabCircle ("WhispOneBlueHeadPetalWhiteLeftShade",1160,190,25);
whispOneBlueHeadPetalWhiteLeftShade.name = "WhispOneBlueHeadPetalWhiteLeftShade";
whispOneBlueHeadPetalWhiteLeftShade.getComponent("CircleDraw").fillStyle = "#c9d2f7" 
whispOneBlueHeadPetalWhiteLeftShade.getComponent("CircleDraw").strokeStyle = "#c9d2f7" 
whispOneBlueHeadPetalWhiteLeftShade.visible = false;
whispOneBlueHeadPetalWhiteLeftShade.layer = -2;

let whispOneBlueHeadPetalWhiteRight = new PrefabCircle ("WhispOneBlueHeadPetalWhiteRight ",1235,190,30);
whispOneBlueHeadPetalWhiteRight.name = "WhispOneBlueHeadPetalWhiteRight";
whispOneBlueHeadPetalWhiteRight.getComponent("CircleDraw").fillStyle = "white" 
whispOneBlueHeadPetalWhiteRight.getComponent("CircleDraw").strokeStyle = "black" 
whispOneBlueHeadPetalWhiteRight.visible = false;
whispOneBlueHeadPetalWhiteRight.layer = -2;

let whispOneBlueHeadPetalWhiteRightShade = new PrefabCircle ("WhispOneBlueHeadPetalWhiteRightShade ",1235,190,25);
whispOneBlueHeadPetalWhiteRightShade.name = "WhispOneBlueHeadPetalWhiteRightShade";
whispOneBlueHeadPetalWhiteRightShade.getComponent("CircleDraw").fillStyle = "#c9d2f7" 
whispOneBlueHeadPetalWhiteRightShade.getComponent("CircleDraw").strokeStyle = "#c9d2f7" 
whispOneBlueHeadPetalWhiteRightShade.visible = false;
whispOneBlueHeadPetalWhiteRightShade.layer = -2;


let whispOneBlueEye = new PrefabCircle("WhispOneBlueEye",1120,320,45);
whispOneBlueEye.name = "WhispOneBlueEye";
whispOneBlueEye.getComponent("CircleDraw").fillStyle = "white"
whispOneBlueEye.getComponent("CircleDraw").strokeStyle = "black";
whispOneBlueEye.visible = false;
whispOneBlueEye.layer = -2;

let whispOneBlueEyeDeepShadeLeft = new PrefabCircle("WhispOneBlueEyeDeepShadeLeft",1120,320,45);
whispOneBlueEyeDeepShadeLeft.name = "WhispOneBlueEyeDeepShadeLeft";
whispOneBlueEyeDeepShadeLeft.getComponent("CircleDraw").fillStyle = "black"
whispOneBlueEyeDeepShadeLeft.getComponent("CircleDraw").strokeStyle = "black";
whispOneBlueEyeDeepShadeLeft.visible = false;
whispOneBlueEyeDeepShadeLeft.layer = -2;

let whispOneBlueEyeDeepShadeLeftOverlay = new PrefabCircle("WhispOneBlueEyeDeepShadeLeftOverlay",1120,325,38);
whispOneBlueEyeDeepShadeLeftOverlay.name = "WhispOneBlueEyeDeepShadeLeftOverlay";
whispOneBlueEyeDeepShadeLeftOverlay.getComponent("CircleDraw").fillStyle = "white"
whispOneBlueEyeDeepShadeLeftOverlay.getComponent("CircleDraw").strokeStyle = "white";
whispOneBlueEyeDeepShadeLeftOverlay.visible = false;
whispOneBlueEyeDeepShadeLeftOverlay.layer = -2;

let whispOneBlueEyeDeepShadeRight = new PrefabCircle("WhispOneBlueEyeDeepShadeRight",1270,320,45);
whispOneBlueEyeDeepShadeRight.name = "WhispOneBlueEyeDeepShadeRight";
whispOneBlueEyeDeepShadeRight.getComponent("CircleDraw").fillStyle = "black"
whispOneBlueEyeDeepShadeRight.getComponent("CircleDraw").strokeStyle = "black";
whispOneBlueEyeDeepShadeRight.visible = false;
whispOneBlueEyeDeepShadeRight.layer = -2;



let whispOneBlueEye2 = new PrefabCircle("WhispOneBlueEye2",1270,325,40);
whispOneBlueEye2.name="WhispOneBlueEye2";
whispOneBlueEye2.getComponent("CircleDraw").fillStyle = "white"
whispOneBlueEye2.getComponent("CircleDraw").strokeStyle = "black";
whispOneBlueEye2.visible = false;
whispOneBlueEye2.layer = -2;

let whispOneBlueEyePupilLeft = new PrefabCircle("WhispOneBlueEyePupilLeft",1120,320,25);
whispOneBlueEyePupilLeft.name = "WhispOneBlueEyePupilLeft";
whispOneBlueEyePupilLeft.getComponent("CircleDraw").fillStyle = "pink"
whispOneBlueEyePupilLeft.getComponent("CircleDraw").strokeStyle = "pink";
whispOneBlueEyePupilLeft.visible = false;
whispOneBlueEyePupilLeft.layer = -2;


let whispOneBlueEyePupilRight = new PrefabCircle("WhispOneBlueEyePupilRight",1270,320,25);
whispOneBlueEyePupilRight.name = "WhispOneBlueEyePupilRight";
whispOneBlueEyePupilRight.getComponent("CircleDraw").fillStyle = "pink"
whispOneBlueEyePupilRight.getComponent("CircleDraw").strokeStyle = "pink";
whispOneBlueEyePupilRight.visible = false;
whispOneBlueEyePupilRight.layer = -2;

let whispOneBlueEyePupilRightShine = new PrefabCircle("WhispOneBlueEyePupilRightShine",1260,315,15);
whispOneBlueEyePupilRightShine.name = "WhispOneBlueEyePupilRightShine";
whispOneBlueEyePupilRightShine.getComponent("CircleDraw").fillStyle = "white"
whispOneBlueEyePupilRightShine.getComponent("CircleDraw").strokeStyle = "white";
whispOneBlueEyePupilRightShine.visible = false;
whispOneBlueEyePupilRightShine.layer = -2;

let whispOneBlueEyePupilLeftShine = new PrefabCircle("WhispOneBlueEyePupilLeftShine",1110,315,15);
whispOneBlueEyePupilLeftShine.name = "WhispOneBlueEyePupilLeftShine";
whispOneBlueEyePupilLeftShine.getComponent("CircleDraw").fillStyle = "white"
whispOneBlueEyePupilLeftShine.getComponent("CircleDraw").strokeStyle = "white";
whispOneBlueEyePupilLeftShine.visible = false;
whispOneBlueEyePupilLeftShine.layer = -2;



export default[

whispOneBlue,
whispOneBlueDeepShade,
whispOneBlueHair3,
whispOneBlueHair3DeepShade,
whispOneBlueHair2,
whispOneBlueHair2DeepShade,
whispOneBlueHair,
whispOneBlueHairDeepShade,
whispOneBlue2,
whispOneBlue3,
whispOneBlueEye,
whispOneBlueEyeDeepShadeLeft,
whispOneBlueEyeDeepShadeLeftOverlay,
whispOneBlueEyeDeepShadeRight,
whispOneBlueEye2,
whispOneBlue3,
whispOneBlueEyePupilLeft,
whispOneBlueEyePupilRight,
whispOneBlueEyePupilRightShine,
whispOneBlueEyePupilLeftShine,
whispOneBlueThumb,
whispOneBlueThumb2,
whispOneBlueMouth,
whispOneBlueMouthInner,
whispOneBlueMouthInnerBlack,
whispOneBlueHeadPetalWhiteLeft,
whispOneBlueHeadPetalWhiteLeftShade,
whispOneBlueHeadPetalWhiteRight,
whispOneBlueHeadPetalWhiteRightShade,
whispOneBlueHeadPetalRed,
whispOneBlueHeadPetalRedCenterShade,
whispOneBlueMouthNormal,
whispOneBlueMouthNormalRightEndCurve,
whispOneBlueMouthNormalLeftEndCurve,
]