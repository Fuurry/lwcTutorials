import { LightningElement , track } from 'lwc';

export default class StockCheckExercise extends LightningElement {

    @track productDetails = {
        name:"xyz",
        price:20,
        stock:200
    }

    boolenVar=true;

    handleChange(event){
        this.productDetails.stock = +event.target.value;
        if(this.productDetails.stock !=0){
            this.boolenVar= true;
        }

        else if(this.productDetails.stock<=0){
            this.boolenVar = false;
            this.productDetails.stock = "No stock Available";
        }
    }




}