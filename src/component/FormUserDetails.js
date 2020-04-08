import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class FormUserDetails extends Component {
   continue = e =>{

    e.preventdefault();
    this.props.nextStep();
   }
    render() {
        const {values}=this.props;
        
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter the User Details"/>
                   <TextField
                   hintText="enter your First Name"
                   floatingLabelText="First Name"
                   onChange={this.props.handleChange('firstName')}
                   defaultValue={values.firstName  }
                   />
                   <br/>
                   <AppBar title="Enter the User Details"/>
                   <TextField
                   hintText="enter your Last Name"
                   floatingLabelText="Last Name"
                   onChange={this.props.handleChange('lastName')}
                   defaultValue={values.lastName  }
                   />
                <br/>
                <AppBar title="Enter the User Details"/>
                   <TextField
                   hintText="enter your Email"
                   floatingLabelText="Email"
                   onChange={this.props.handleChange('email')}
                   defaultValue={values.email }
                   />
                   <br/>
                   <RaisedButton
                   label ="continue "
                   primary={true}
                  //  style={styles.button}
                    onClick={this.continue}
                   />

               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
