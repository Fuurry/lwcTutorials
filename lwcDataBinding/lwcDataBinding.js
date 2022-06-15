import { LightningElement } from 'lwc';

export default class LwcDataBinding extends LightningElement {


    // *************************** one way data binding ***********************************
    // while declaring the variable inside the js class no need to use let , const , var;
    // variable inside the class is called property
    firstName = "Rathee";

    // creating a object and binding it in template
    person = {
        name : "Sunil",
        age : "28",
        position : "Developer",
        address : {
            city : "Delhi",
            District : "New Delhi",
            Zip : '110041'
        }
    };


    // binding  the array data in template is not simple
    // we used getter method to bind array data into template

    fruits = ['apple','mango','banana'];

    get fruitAtIndexZero(){
        
        return this.fruits[0];
    }


    // while declaring variable in lwc js class we can't use function keyword for declaring the variable;
    dummy(params) {
        // while declaring a new variable inside function , we should use var , let, const;
        var dummyVariable = 0;
        // while using variable of the js class use this keyword

        console.log(this.firstName);
    }


    // ********************************* two way databinding ************************************************

    handleChange(event){
        //  event.target.value return what changes occur
        
        this.firstName = event.target.value;

        // to see which input box changed , name is attribute which is defined in template in InputTag.

        console.log(event.target.name);
    }

}