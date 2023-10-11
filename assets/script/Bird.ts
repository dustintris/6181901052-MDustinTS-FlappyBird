import { _decorator, Collider2D, Component,Contact2DType,EventTouch,Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    private speedTurun:number = 100;
    start() {
        input.on(Input.EventType.TOUCH_START,this.onInputReceived,this);
        this.node.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT,this.onCollide,this);


    }
    onCollide(){
        alert("nabrak!");
    }
    onInputReceived(event:EventTouch){
        this.speedTurun = 100;
    }
    update(deltaTime: number) {
        let position = this.node.getPosition();
        this.speedTurun -= 150*deltaTime;
        position.y += this.speedTurun*deltaTime;
        this.node.setPosition(position);
        let angle = this.speedTurun;
        if(angle>=30){
            angle = 30;
        }else if(angle<=-30){
            angle = -30;
        }
        this.node.setWorldRotationFromEuler(0,0,angle);
    }
}


