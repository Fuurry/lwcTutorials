// to make Object and array datatype reactive we should import track 

import { LightningElement , track} from 'lwc';

export default class ExtraTopicOne extends LightningElement {

    // using track annotation to make it reactive
    // example of array with track annotation
    @track person = ['John' , 20000];
    

    get userName(){
        return this.person[0]
    }

    handleClick(event){

        this.person[0]='Johny'
        console.log(this.person[0]);
    }


    // example of object with track annotation

   @track employee = {
        name : "Mohit",
        position : "Developer"
    }

    handleClickObject(event){
        this.employee.name = "Sunil";
    }


    // Conditional Rendering

    isTrue = false;

    handleClickConditional(event){
        if(this.isTrue==false){
            this.isTrue=true;
        }
        else if(this.isTrue==true){
            this.isTrue=false;
        }
    }

    // template looping code ,
    // work with array 

    personInfo = [
        {
            name : "Sunil",
            age : 28,
            id :1
        },
        {
            name : "Mohit",
            age : 27,
            id:2
        },
        {
            name : "Shivam",
            age : 29,
            id:3
        }
    ]
}