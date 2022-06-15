import { LightningElement } from 'lwc';

export default class WelcomeMessage extends LightningElement {
    customClass;

    handleClick(event){
        if(event.target.name == 'red'){
            this.customClass='red';
        }

        else if (event.target.name == 'blue'){
            this.customClass='blue';
        }
    }
}