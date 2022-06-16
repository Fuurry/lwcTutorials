
// this component will be used as common utility for all component in this app . 
// Step 1 - Create a serpate lwc component
// Step 2 - Delete Html file of that component
// Step 3 - Delete the boiler plate code present in the js file
//  start coding


function oddOrEven (x){
    if(x%2==0){
        return 'even';
    }
    else{
        return 'odd';
    }
}


export {oddOrEven}