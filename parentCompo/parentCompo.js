import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {

    //  @api is not required 
    handleDisplay(event){

        // event.detail give the data that was passed from child to parent
        // console.log(event.detail);
        for(let i of event.detail){
            console.log('id : '+  i.id + " name " + i.name);
        }
    }
}
