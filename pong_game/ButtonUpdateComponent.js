import Input from "../engine/Input.js";
import ButtonGameObject from "./ButtonGameObject.js";
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Time from "../engine/Time.js";
import CindyGameObject from "./Sprites/CindySprite/CindyGameObject.js";
import Whisp_Sprite_Game_Objects from "./Sprites/Whisp_Sprite.js/Whisp_Sprite_Game_Objects.js";
class ButtonUpdateComponent extends Component {
    constructor(parent) {
        super(parent);

    }

    update() {
        let mainSceneUpdate = Game.findByType("TextGameObject")[0];
        let mainSceneUpdateComponent = mainSceneUpdate.getComponent("MainSceneUpdate");
        let rectangle = this.parent.getComponent("Rectangle");
        let lengthOfDialogueText = mainSceneUpdateComponent.stringIndex.length;
        if (Input.getMouseButtonDown(0)) {
            let mx = Input.getMousePosition().x;
            let my = Input.getMousePosition().y;

            if (mx > rectangle.x || mx < rectangle.x + rectangle.w && my > rectangle.y || my < rectangle.y + rectangle.h) {
                mainSceneUpdateComponent.stringIndex++;
             
                if (mainSceneUpdateComponent.stringIndex == 1)
                {
                    // Code for toggling suprised face 
                    var gameObject = Game.findByName("cindyName")[0]
                    gameObject.visible = true;

                    var gameObject = Game.findByName("cindyMouth")[0]
                    gameObject.visible = false;

                    var gameObject1 = Game.findByName("cindyMouth2")[0]
                    gameObject1.visible = false;

                    var gameObject2 = Game.findByName("cindyMouth3")[0]
                    gameObject2.visible = false;

                    var gameObject4 = Game.findByName("cindyMouth4")[0]
                    gameObject4.visible = true;

                    var gameObject5 = Game.findByName("cindyEye9")[0]
                    gameObject5.visible = false;

                    var gameObject6 = Game.findByName("cindyEye10")[0]
                    gameObject6.visible = false;
                    
                    var gameObject7 = Game.findByName("cindyEye9b")[0]
                    gameObject7.visible = true;

                    var gameObject8 = Game.findByName("cindyEye10b")[0]
                    gameObject8.visible = true;

                }

            
                if (mainSceneUpdateComponent.stringIndex == 2) {

                    // Resetting expressions from previous index
                    var gameObject = Game.findByName("cindyMouth")[0]
                    gameObject.visible = true;

                    var gameObject1 = Game.findByName("cindyMouth2")[0]
                    gameObject1.visible = true;

                    var gameObject2 = Game.findByName("cindyMouth3")[0]
                    gameObject2.visible = true;

                    var gameObject4 = Game.findByName("cindyMouth4")[0]
                    gameObject4.visible = false;

                    var gameObject5 = Game.findByName("cindyEye9")[0]
                    gameObject5.visible = true;

                    var gameObject6 = Game.findByName("cindyEye10")[0]
                    gameObject6.visible = true;
                    
                    var gameObject7 = Game.findByName("cindyEye9b")[0]
                    gameObject7.visible = false;

                    var gameObject8 = Game.findByName("cindyEye10b")[0]
                    gameObject8.visible = false;
        
                }
                if (mainSceneUpdateComponent.stringIndex == 2){
            
                var cindyShowText = Game.findByName("cindyName")[0]
                cindyShowText.visible=false;

                var whispShowText = Game.findByName("firstWhisp")[0]
                whispShowText.visible=true;

                    var gameObjectW = Game.findByName("WhispOneBlue")[0]
                    gameObjectW.visible=true;

                    var gameObjectW31 = Game.findByName("WhispOneBlueMouthNormal")[0]
                    gameObjectW31.visible= true;

                    var gameObjectW33 = Game.findByName("WhispOneBlueMouthNormalLeftEndCurve")[0]
                    gameObjectW33.visible=true;
                   
                    var gameObjectW32 = Game.findByName("WhispOneBlueMouthNormalRightEndCurve")[0]
                    gameObjectW32.visible=true;

                    var gameObjectW1 = Game.findByName("WhispOneBlueDeepShade")[0]
                    gameObjectW1.visible=true;

                    var gameObjectW2 = Game.findByName("WhispOneBlueHair3")[0]
                    gameObjectW2.visible=true;

                    var gameObjectW3 = Game.findByName("WhispOneBlueHair3DeepShade")[0]
                    gameObjectW3.visible=true;

                    var gameObjectW4 = Game.findByName("WhispOneBlueHair2")[0]
                    gameObjectW4.visible=true;

                    var gameObjectW5 = Game.findByName("WhispOneBlueHair2DeepShade")[0]
                    gameObjectW5.visible=true;

                    var gameObjectW6 = Game.findByName("WhispOneBlueHair")[0]
                    gameObjectW6.visible=true;

                    var gameObjectW7 = Game.findByName("WhispOneBlueHairDeepShade")[0]
                    gameObjectW7.visible=true;

                    var gameObjectW8 = Game.findByName("WhispOneBlue2")[0]
                    gameObjectW8.visible=true;

                    var gameObjectW9 = Game.findByName("WhispOneBlue3")[0]
                    gameObjectW9.visible=true;

                    var gameObjectW14 = Game.findByName("WhispOneBlueEye2")[0]
                    gameObjectW14.visible=true;

                    var gameObjectW10 = Game.findByName("WhispOneBlueEye")[0]
                    gameObjectW10.visible=true;

                    var gameObjectW11 = Game.findByName("WhispOneBlueEyeDeepShadeLeft")[0]
                    gameObjectW11.visible=true;

                    var gameObjectW12 = Game.findByName("WhispOneBlueEyeDeepShadeLeftOverlay")[0]
                    gameObjectW12.visible=true;
                    
                    var gameObjectW13 = Game.findByName("WhispOneBlueEyeDeepShadeRight")[0]
                    gameObjectW13.visible=true;

                    var gameObjectW16 = Game.findByName("WhispOneBlueEyePupilLeft")[0]
                    gameObjectW16.visible=true;
                    
                    var gameObjectW17 = Game.findByName("WhispOneBlueEyePupilRight")[0]
                    gameObjectW17.visible=true;

                    var gameObjectW18 = Game.findByName("WhispOneBlueEyePupilRightShine")[0]
                    gameObjectW18.visible=true;

                    var gameObjectW19 = Game.findByName("WhispOneBlueEyePupilLeftShine")[0]
                    gameObjectW19.visible=true;

                    var gameObjectW20 = Game.findByName("whispOneBlueThumb")[0]
                    gameObjectW20.visible=true;
                    
                    var gameObjectW21 = Game.findByName("whispOneBlueThumb2")[0]
                    gameObjectW21.visible=true;
                    
                    var gameObjectW23 = Game.findByName("WhispOneBlueMouthInner")[0]
                    gameObjectW23.visible=true;

                    var gameObjectW24 = Game.findByName("WhispOneBlueMouthInnerBlack")[0]
                    gameObjectW24.visible=true;

                    var gameObjectW26 = Game.findByName("WhispOneBlueHeadPetalWhiteLeftShade")[0]
                    gameObjectW26.visible=true;

                    var gameObjectW27 = Game.findByName("whispOneBlueHeadPetalWhiteRight")[0]
                    gameObjectW27.visible=true;

                    var gameObjectW28 = Game.findByName("whispOneBlueHeadPetalWhiteRightShade")[0]
                    gameObjectW28.visible=true;

                    var gameObjectW29 = Game.findByName("whispOneBlueHeadPetalRed")[0]
                    gameObjectW29.visible=true;

                    var gameObjectW30 = Game.findByName("whispOneBlueHeadPetalRedCenterShade")[0]
                    gameObjectW30.visible=true;

                  
                    var textGameObject = Game.findByName("firstWhisp")[0]
                    textGameObject.visible=true;
                 
                }
                if (mainSceneUpdateComponent.stringIndex == 5){
  
                    //Switch Character Names
                    var cindyShowText = Game.findByName("cindyName")[0]
                    cindyShowText.visible=true;
    
                    var whispShowText = Game.findByName("firstWhisp")[0]
                    whispShowText.visible=false;
                    // Change sprite expression

                    var gameObject = Game.findByName("cindyEye")[0]
                    gameObject.visible=false;

                       var gameObject2 = Game.findByName("cindyEye2")[0]
                    gameObject2.visible=false;

                    var gameObject3 = Game.findByName("cindyEye3")[0]
                    gameObject3.visible=false;

                    var gameObject4 = Game.findByName("cindyEye3Shader")[0]
                    gameObject4.visible=false;

                    var gameObject5= Game.findByName("cindyEye4")[0]
                    gameObject5.visible=false;

                    var gameObject6 = Game.findByName("cindyEye4Shader")[0]
                    gameObject6.visible=false;

                    var gameObject7 = Game.findByName("cindyEye4Shader")[0]
                    gameObject7.visible=false;

                    var gameObject8 = Game.findByName("cindyEye4Shader")[0]
                    gameObject8.visible=false;

                    
                    var gameObject9 = Game.findByName("cindyEye5")[0]
                    gameObject9.visible=false;

                    
                    var gameObject5= Game.findByName("cindyEye6")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEye7")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEye8")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEye9")[0]
                    gameObject5.visible=false;
                    
                    var gameObject5= Game.findByName("cindyEye10")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall")[0]
                    gameObject5.visible=false;

                    var gameObject100= Game.findByName("cindyEyeBall2")[0]
                    gameObject100.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall5")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall6")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall7")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall8")[0]
                    gameObject5.visible=false;

                    var gameObject5= Game.findByName("cindyEyeBall4")[0]
                    gameObject5.visible=false;

                    // Toggle on Closed Happy Face

                    var gameObject5= Game.findByName("cindyEye10b")[0]
                    gameObject5.visible= true;

                    var gameObject5= Game.findByName("cindyEye9b")[0]
                    gameObject5.visible= true;

                    var gameObject5= Game.findByName("cindyHappyEyeLeft")[0]
                    gameObject5.visible= true;

                    var gameObject5= Game.findByName("cindyHappyEyeRight")[0]
                    gameObject5.visible= true;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareLeft")[0]
                    gameObject5.visible= true;

                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareRight")[0]
                    gameObject5.visible= true;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareLeft")[0]
                    gameObject5.visible= true;

                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareRight")[0]
                    gameObject5.visible= true;
                
                }
                if (mainSceneUpdateComponent.stringIndex == 6)
                {
                    
                    var gameObject = Game.findByName("cindyEye")[0]
                    gameObject.visible=true;

                       var gameObject2 = Game.findByName("cindyEye2")[0]
                    gameObject2.visible=true;

                    var gameObject3 = Game.findByName("cindyEye3")[0]
                    gameObject3.visible=true;

                    var gameObject4 = Game.findByName("cindyEye3Shader")[0]
                    gameObject4.visible=true;

                    var gameObject5= Game.findByName("cindyEye4")[0]
                    gameObject5.visible=true;

                    var gameObject6 = Game.findByName("cindyEye4Shader")[0]
                    gameObject6.visible=true;

                    var gameObject7 = Game.findByName("cindyEye4Shader")[0]
                    gameObject7.visible=true;

                    var gameObject8 = Game.findByName("cindyEye4Shader")[0]
                    gameObject8.visible=true;

                    
                    var gameObject9 = Game.findByName("cindyEye5")[0]
                    gameObject9.visible=true;

                    
                    var gameObject5= Game.findByName("cindyEye6")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye7")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye8")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye9")[0]
                    gameObject5.visible=true;
                    
                    var gameObject5= Game.findByName("cindyEye10")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall")[0]
                    gameObject5.visible=true;

                    var gameObject100= Game.findByName("cindyEyeBall2")[0]
                    gameObject100.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall5")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall6")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall7")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall8")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall4")[0]
                    gameObject5.visible=true;

                    // Toggle on Closed Happy Face

                    var gameObject5= Game.findByName("cindyEye10b")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyEye9b")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeRight")[0]
                    gameObject5.visible= false;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareRight")[0]
                    gameObject5.visible= false;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareRight")[0]
                    gameObject5.visible= false;
                }
                if (mainSceneUpdateComponent.stringIndex == 9)
                {
                          //Switch Character Names
                          var cindyShowText = Game.findByName("cindyName")[0]
                          cindyShowText.visible=true;
          
                          var whispShowText = Game.findByName("firstWhisp")[0]
                          whispShowText.visible=false;
                          // Change sprite expression
      
                          var gameObject = Game.findByName("cindyEye")[0]
                          gameObject.visible=false;
      
                             var gameObject2 = Game.findByName("cindyEye2")[0]
                          gameObject2.visible=false;
      
                          var gameObject3 = Game.findByName("cindyEye3")[0]
                          gameObject3.visible=false;
      
                          var gameObject4 = Game.findByName("cindyEye3Shader")[0]
                          gameObject4.visible=false;
      
                          var gameObject5= Game.findByName("cindyEye4")[0]
                          gameObject5.visible=false;
      
                          var gameObject6 = Game.findByName("cindyEye4Shader")[0]
                          gameObject6.visible=false;
      
                          var gameObject7 = Game.findByName("cindyEye4Shader")[0]
                          gameObject7.visible=false;
      
                          var gameObject8 = Game.findByName("cindyEye4Shader")[0]
                          gameObject8.visible=false;
      
                          
                          var gameObject9 = Game.findByName("cindyEye5")[0]
                          gameObject9.visible=false;
      
                          
                          var gameObject5= Game.findByName("cindyEye6")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEye7")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEye8")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEye9")[0]
                          gameObject5.visible=false;
                          
                          var gameObject5= Game.findByName("cindyEye10")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall")[0]
                          gameObject5.visible=false;
      
                          var gameObject100= Game.findByName("cindyEyeBall2")[0]
                          gameObject100.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall5")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall6")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall7")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall8")[0]
                          gameObject5.visible=false;
      
                          var gameObject5= Game.findByName("cindyEyeBall4")[0]
                          gameObject5.visible=false;
      
                          // Toggle on Closed Happy Face
      
                          var gameObject5= Game.findByName("cindyEye10b")[0]
                          gameObject5.visible= true;
      
                          var gameObject5= Game.findByName("cindyEye9b")[0]
                          gameObject5.visible= true;
      
                          var gameObject5= Game.findByName("cindyHappyEyeLeft")[0]
                          gameObject5.visible= true;
      
                          var gameObject5= Game.findByName("cindyHappyEyeRight")[0]
                          gameObject5.visible= true;
      
                          
                          var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareLeft")[0]
                          gameObject5.visible= true;
      
                          var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareRight")[0]
                          gameObject5.visible= true;
      
                          
                          var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareLeft")[0]
                          gameObject5.visible= true;
      
                          var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareRight")[0]
                          gameObject5.visible= true;
                }
                if (mainSceneUpdateComponent.stringIndex == 10){
                               
                    var gameObject = Game.findByName("cindyEye")[0]
                    gameObject.visible=true;

                       var gameObject2 = Game.findByName("cindyEye2")[0]
                    gameObject2.visible=true;

                    var gameObject3 = Game.findByName("cindyEye3")[0]
                    gameObject3.visible=true;

                    var gameObject4 = Game.findByName("cindyEye3Shader")[0]
                    gameObject4.visible=true;

                    var gameObject5= Game.findByName("cindyEye4")[0]
                    gameObject5.visible=true;

                    var gameObject6 = Game.findByName("cindyEye4Shader")[0]
                    gameObject6.visible=true;

                    var gameObject7 = Game.findByName("cindyEye4Shader")[0]
                    gameObject7.visible=true;

                    var gameObject8 = Game.findByName("cindyEye4Shader")[0]
                    gameObject8.visible=true;

                    
                    var gameObject9 = Game.findByName("cindyEye5")[0]
                    gameObject9.visible=true;

                    
                    var gameObject5= Game.findByName("cindyEye6")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye7")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye8")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEye9")[0]
                    gameObject5.visible=true;
                    
                    var gameObject5= Game.findByName("cindyEye10")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall")[0]
                    gameObject5.visible=true;

                    var gameObject100= Game.findByName("cindyEyeBall2")[0]
                    gameObject100.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall5")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall6")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall7")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall8")[0]
                    gameObject5.visible=true;

                    var gameObject5= Game.findByName("cindyEyeBall4")[0]
                    gameObject5.visible=true;

                    // Toggle on Closed Happy Face

                    var gameObject5= Game.findByName("cindyEye10b")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyEye9b")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeRight")[0]
                    gameObject5.visible= false;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeLeftBottomSquareRight")[0]
                    gameObject5.visible= false;

                    
                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareLeft")[0]
                    gameObject5.visible= false;

                    var gameObject5= Game.findByName("cindyHappyEyeRightBottomSquareRight")[0]
                    gameObject5.visible= false;
                }
                if (mainSceneUpdateComponent.stringIndex == 11) {
                    Game.changeScene(4);
                }
            }
        }
    }
}
export default ButtonUpdateComponent;
