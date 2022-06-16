import { LightningElement } from 'lwc';

export default class AccessingTemplateElement extends LightningElement {

    handleChnage(event){

        // this.template.querySelector('.className').value to get value 
        // .querySelector only give output for first occurance of particular element
        const  v = this.template.querySelector('.fname').value;

        // this.template.querySelector('.className').value = xx , we can set the value of input field
        this.template.querySelector('.fname').value = "test 1";


        // .innerHtml should be used only with p tag ,h tag etc , use .value with input field
        const p = this.template.querySelector('p').innerHTML;
        console.log(p);



        // this.template.querySelectorAll('p')
        // return type is node list , we can loop through the list
        let x = this.template.querySelectorAll('p');

        // converting nodelist to array
        
        let y =  Array.from(x)

        for(let i of y){

            // using innerHtml to get innerHtml of p tag
            console.log(i.innerHTML);
        }

        // adding innerHtml in the Html component using js
        const dynamic = this.template.querySelector('.dynamic');

        dynamic.innerHTML = "<p style='color: blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam pariatur nobis quod dicta distinctio id voluptates cumque, similique placeat necessitatibus? Dignissimos sint harum aliquid repudiandae magni assumenda, voluptate soluta.</p>"


    }

    handleDataClick(event){
        // syntax for the data-id attribute
        const p = this.template.querySelector("lightning-input[data-id='id1']").value;
        console.log(p);

        // .dataset will contain the all the data of the event
        console.log(event.target.dataset);
        
        console.log(event.target.dataset.btn);
    }
}