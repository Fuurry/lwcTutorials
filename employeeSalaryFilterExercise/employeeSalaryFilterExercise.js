import { LightningElement , track } from 'lwc';

export default class EmployeeSalaryFilterExercise extends LightningElement {
    employee = [
        {
            name:"sunil",
            position: "Developer",
            Salary : 30000
        },
        {
            name:"Shivam",
            position: "Developer",
            Salary : 31000
        },
        {
            name:"Mohit",
            position: "Developer",
            Salary : 35000
        },
    ]

    // creating a filtered Employee array to store the employee based on salary

        filterEmployee=[];

    handleChange(event){
        let inputSalary = +event.target.value;
        // creating a temperory array to store the employee based on the salary criteria
        let temp = [];
        for(let emp of this.employee){
            
            if(emp.Salary>inputSalary){
                temp.push(emp);
            }
        }

        // deep copying the value of temp employee to filter employee
        this.filterEmployee = [...temp];



    }


}