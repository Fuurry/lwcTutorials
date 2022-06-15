import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    input1;
    input2;
    output;

    handleOnchange(event){
        // using event.target.name to check the origin of the event 
        if(event.target.name == 'input1'){
            // setting value of input1 variable as passed in input field of lwc
            this.input1=+event.target.value;
            
        }
        else if (event.target.name=='input2'){
            // setting value of input2 variable as passed in input field of lwc
            this.input2 = +event.target.value;
            
        }

        
    }



    handleClick(event){
        // using event.target.name to check the origin of the event 
        
        if(event.target.name=='add'){
            this.output = this.input1+this.input2;
        }

        else if(event.target.name=='sub'){
            this.output = this.input1 - this.input2;
        }

        else if(event.target.name == 'mul'){
            this.output = this.input1*this.input2
        }
        else if(event.target.name == 'div'){
            this.output = this.input1/this.input2;
        }
    }
}