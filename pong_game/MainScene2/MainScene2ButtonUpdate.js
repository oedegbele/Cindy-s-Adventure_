import Input from "../../engine/Input.js";
import Component from "../../engine/Component.js";
import Game from "../../engine/Game.js";

class MainScene2ButtonUpdate extends Component {
    constructor(parent) {
        super(parent);

    }

    update() {
        let mainScene2Update = Game.findByType("MainScene2TextGameObject")[0];
        let mainScene2UpdateComponent = mainScene2Update.getComponent("MainScene2Update");
        let rectangle = this.parent.getComponent("Rectangle");

        if (Input.getMouseButtonDown(0)) {
            let mx = Input.getMousePosition().x;
            let my = Input.getMousePosition().y;

            if (mx > rectangle.x || mx < rectangle.x + rectangle.w && my > rectangle.y || my < rectangle.y + rectangle.h) {
                mainScene2UpdateComponent.stringIndex++;
                if (mainScene2UpdateComponent.stringIndex == 1){
        
                var cindyShowText = Game.findByName("cindyName")[0];
                cindyShowText.visible=true;
             

                }
                if (mainScene2UpdateComponent.stringIndex == 5) {
                    // Character name text change 
            
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=false;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=true;
                    // Back of Hair 
                    var gameObject = Game.findByName("knightHairBack")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBack2")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBack3")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBackRectangleRight")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBackRectangleRight2")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBackRectangleLeft")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("knightHairBackRectangleLeft2")[0];
                    gameObject.visible = true;

                    // Face 

                    var gameObject = Game.findByName("armoredKnightEarRight")[0];
                    gameObject.visible = true;

                    var gameObject = Game.findByName("armoredKnightEarLeft")[0];
                    gameObject.visible = true;

                    var gameObject3 = Game.findByNameOne("armoredKnightFace");
                    gameObject3.visible = true;
                    //Eyes 
                    var gameObject2 = Game.findByName("knightEye")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye2")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye3")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye3Shader")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye4")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye4Shader")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall2")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall4")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall5")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall6")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall7")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall8")[0];
                    gameObject2.visible = true;

                    
                    var gameObject2 = Game.findByName("knightEye9b")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye10b")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHair2")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHair2a")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHair2ab")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHair")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHaira")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairaa")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairb")[0];
                    gameObject2.visible=true;
  
                    var gameObject2 = Game.findByName("knightHairbb")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairbbb")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairbbbb")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairbbbbb")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairccc")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHaircccc")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHaircccc")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightHairccccc")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightMouth")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtUnder")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirt")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightBottom")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightBelt")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtTop")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightArmLeft")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightArmRight")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmor")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmor2")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmor")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmor2")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmorBottom")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmorBottomHandGlove")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmorBottomHand")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmorBottomHandGlove")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmorBottomHand")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmorBottom")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmorBottomGoldOutlineLeft")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtRightShoulderAmorBottomGoldOutlineLeft2")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmorBottomGoldOutlineRight")[0];
                    gameObject2.visible=true;

                    
                    var gameObject2 = Game.findByName("knightShirtLeftShoulderAmorBottomGoldOutlineRight2")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightLeftMiddleArmorBottom")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightLeftMiddleArmorBottom2")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightLeftMiddleArmorBottom3")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightRightMiddleArmorBottom")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightRightMiddleArmorBottom2")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightRightMiddleArmorBottom3")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightGoldCenter")[0];
                    gameObject2.visible=true;

                    var gameObject2 = Game.findByName("knightBlueGemCenter")[0];
                    gameObject2.visible=true;
                }
                if (mainScene2UpdateComponent.stringIndex == 6){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=true;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=false;

            
                }
                if (mainScene2UpdateComponent.stringIndex == 7){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=false;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=true;

                    var gameObject2 = Game.findByName("knightEye9b")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye10b")[0];
                    gameObject2.visible = false;

                    
                    var gameObject2 = Game.findByName("knightEye9")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye10")[0];
                    gameObject2.visible = true;
                }
                if (mainScene2UpdateComponent.stringIndex == 8){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=true;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=false;
                }
                if (mainScene2UpdateComponent.stringIndex == 9){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=false;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=true;
                    
                    var gameObject2 = Game.findByName("knightEye9b")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye10b")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye9")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye10")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHappyEyeLeft")[0];
                    gameObject2.visible = true;
          
                    var gameObject2 = Game.findByName("knightHappyEyeRight")[0];
                    gameObject2.visible = true;
           
                    var gameObject2 = Game.findByName("knightHappyEyeLeftBottomSquareLeft")[0];
                    gameObject2.visible = true;
           
                    var gameObject2 = Game.findByName("knightHappyEyeLeftBottomSquareRight")[0];
                    gameObject2.visible = true;
          
                    var gameObject2 = Game.findByName("knightHappyEyeRightBottomSquareLeft")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightHappyEyeRightBottomSquareRight")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye2")[0];
                    gameObject2.visible =false;

                    var gameObject2 = Game.findByName("knightEye3")[0];
                    gameObject2.visible =false;

                    var gameObject2 = Game.findByName("knightEye3Shader")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye4")[0];
                    gameObject2.visible =false;

                    var gameObject2 = Game.findByName("knightEye4Shader")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall2")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall4")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall5")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall6")[0];
                    gameObject2.visible =false;

                    var gameObject2 = Game.findByName("knightEyeBall7")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEyeBall8")[0];
                    gameObject2.visible = false;

                }
                if (mainScene2UpdateComponent.stringIndex == 10){
                    var gameObject2 = Game.findByName("knightHappyEyeLeft")[0];
                    gameObject2.visible = false;
          
                    var gameObject2 = Game.findByName("knightHappyEyeRight")[0];
                    gameObject2.visible = false;
           
                    var gameObject2 = Game.findByName("knightHappyEyeLeftBottomSquareLeft")[0];
                    gameObject2.visible = false;
           
                    var gameObject2 = Game.findByName("knightHappyEyeLeftBottomSquareRight")[0];
                    gameObject2.visible = false;
          
                    var gameObject2 = Game.findByName("knightHappyEyeRightBottomSquareLeft")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightHappyEyeRightBottomSquareRight")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye2")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye3")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye3Shader")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEye4")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye4Shader")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall2")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall4")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall5")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall6")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEyeBall7")[0];
                    gameObject2.visible =  true;

                    var gameObject2 = Game.findByName("knightEyeBall8")[0];
                    gameObject2.visible =  true;

                }
                if (mainScene2UpdateComponent.stringIndex == 11){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=true;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=false;
                }
                if (mainScene2UpdateComponent.stringIndex == 13){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=false;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=true;
                }
                if (mainScene2UpdateComponent.stringIndex == 17){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=true;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=false;
                }
                if (mainScene2UpdateComponent.stringIndex == 18){
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=false;

                    var gameObject = Game.findByName("armoredKnight")[0]
                    gameObject.visible=true;

                    var gameObject2 = Game.findByName("knightEye9")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye10")[0];
                    gameObject2.visible = false;

                    var gameObject2 = Game.findByName("knightEye9b")[0];
                    gameObject2.visible = true;

                    var gameObject2 = Game.findByName("knightEye10b")[0];
                    gameObject2.visible = true;
                }
                if (mainScene2UpdateComponent.stringIndex >= 19) {
                    Game.changeScene(6);
                }
            }
        }
    }
}
export default MainScene2ButtonUpdate;
