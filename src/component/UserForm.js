import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'; 
export class  UserForm extends Component
{
    constructor(props){
        super(props)
        this.state={
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',  
        bio:''
        }
    }
//proceed to next step
nextStep = () =>{
    const { step }=this.state;
    this.setState({
        step: step+1
    });
}
    // Go back to previous  
prevStep = () =>{
        const { step }=this.state;
        this.setState({
            step: step-1
        });
    }       // Handles field Change
    handleChange = input =>  e => {
        console.log(input);
    //this.setState({ [input]: e.target.value });
    
                            };
 render()
{ const { step } =this.state;
const{firstName, lastName, email, occupation, city, bio}=this.state;
const values = {firstName, lastName, email, occupation, city, bio}

switch(step){
    case 1:
        return(
            <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
        case 2:
            return<h1>FormPerDetails</h1>
            case 3:
            return <h1>confirm</h1>
            case 4:
            return<h1>Success</h1>


        }
        }

}
export default UserForm 