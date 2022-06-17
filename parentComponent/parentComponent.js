import { LightningElement ,api } from 'lwc';

export default class ParentComponent extends LightningElement {

    @api employeeInfo = [
        {
            id:101,
            name:"Sunil"
        },
        {
            id:102,
            name:"Mohit"
        },
        {
            id:103,
            name:"Shivam"
        },
        
    ]
}