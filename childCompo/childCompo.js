import { LightningElement } from 'lwc';

export default class ChildCompo extends LightningElement {
    
    // custom event creation 
    // syntax : new customEvent('eventname' , {bubble:false , composed:false ,detail:null})


    handleClick(event){
        // const childEvent = new CustomEvent('display',{bubbles:false , composed:false , detail:'Event Dispatched'});
        const childEvent = new CustomEvent('display',{bubbles:false , composed:false , detail:[
            {
                id:1,
                name:"sunil"
            },
            {
                id:2,
                name:"Shivam"
            },
            {
                id:3,
                name:"Mohit"
            }
        ]});

        // dispatching the event
        this.dispatchEvent(childEvent);
    }
}