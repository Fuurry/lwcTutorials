import { LightningElement , api } from 'lwc';

export default class ChildComponent extends LightningElement {

    // making it public so that its value can be passed from parent;
    @api message ;


    // if property name is @api messageInfo then the syntax  that will be passed in the 
    // parent component will be message-info

    @api employee;


}