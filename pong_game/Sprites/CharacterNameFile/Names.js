
import PrefabTextSmall from "../../../engine/PrefabTextSmall.js";

let cindyName = new PrefabTextSmall("cindyName",60,480,"Cindy");
cindyName.name="cindyName";
cindyName.visible=false;
cindyName.layer = -2;

let firstWhisp = new PrefabTextSmall("firstWhisp",60,480,"Whisp");
firstWhisp.name="firstWhisp";
firstWhisp.visible=false;
firstWhisp.layer = -2;

let armoredKnight = new PrefabTextSmall("armoredKnight",60,480,"Knight");
armoredKnight.name="armoredKnight";
armoredKnight.visible=false;
armoredKnight.layer = -2;

let lancelot = new PrefabTextSmall("lancelot",60,480,"Sir Lancelot");
lancelot.name = "lancelot";
lancelot.visible=false;
lancelot.layer= -2;

export default [
    cindyName,
    firstWhisp,
    armoredKnight,
    lancelot,
]