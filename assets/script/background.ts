import { _decorator, Component, instantiate, Node, Prefab, randomRangeInt, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Background')
export class Background extends Component {
    @property({type: Node})
    private parentBackground:Node;

    @property({type:Prefab})
    private prefabPipa:Prefab;

    private pipa:Node[] = [];

    start() {
        //this.parentBackground.setPosition(new Vec3(-100,0,0));
        //this.node.setPosition(new Vec3(-100,0,0));
        let pipaObj = instantiate(this.prefabPipa);
        pipaObj.setParent(this.node.parent);
        pipaObj.setPosition(new Vec3(200,0,0));
        this.pipa.push(pipaObj);

        //pipaObj = instantiate(this.prefabPipa);
        //pipaObj.setParent(this.node.parent);
        //pipaObj.setPosition(new Vec3(144+288,0,0));
        //this.pipa.push(pipaObj);
    }
    

    update(deltaTime: number) {
        let position = this.node.getPosition();
        position.x -= (288)/5*deltaTime;
        if(position.x<=-288){
            position.x += 288;
        }
        this.node.setPosition(position);

        for(let i=0;i<this.pipa.length;i++){
            let positionPipa = this.pipa[i].getPosition();
            positionPipa.x -= (566)/5*deltaTime;
            this.pipa[i].setPosition(positionPipa);
            if(positionPipa.x<=-200){
                positionPipa.x += 288+56+56;
                positionPipa.y = randomRangeInt(-120,120);
            }
            this.pipa[i].setPosition(positionPipa);

        }


    }
}


