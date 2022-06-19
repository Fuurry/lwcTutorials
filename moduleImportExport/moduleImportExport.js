import { LightningElement } from 'lwc';


// importing the module from the util.js . No need to use .js extension while importing
import {sum , firstName} from './util';

// importing the module from the common js file.  Use c/name of the js file with out .js extention
import {oddOrEven} from 'c/commonJsCodeAreaForAllComponent'


export default class ModuleImportExport extends LightningElement {

    
handleClick(event){
    // the function from util.js can only be used inside a function not inside a class directly
    // module imported from common code area
    console.log(sum(10,20));


// the function from util.js can only be used inside a function not inside a class directly
    console.log(oddOrEven(99));
    alert(firstName);
}

}
