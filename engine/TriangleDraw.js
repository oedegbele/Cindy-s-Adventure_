import Component from "./Component";

class TriangleDraw extends Component{
    constructor(parent, fillStyle, color){
        super(parent);
        this.fillStyle = fillStyle;
        this.color = color;
    }
    draw(ctx){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(ctx.x,ctx.x);
        ctx.lineTo(ctx.y,ctx.y);
        ctx.lineTo(ctx.x,ctx.y);
        ctx.lineTo(ctx.x,ctx.x);
        ctx.fill();
    }

} export default TriangleDraw