import { LightningElement } from 'lwc';

export default class ToUpperCaseComponentExercise extends LightningElement {

    output;
    handleChange(event){
        this.output = event.target.value.toUpperCase();
    }
}