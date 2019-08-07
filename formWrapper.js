import React, {Component} from 'react';
import Form from './form';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {sendForm} from './actions/sendActions';
import { LinearTextGradient } from "react-native-text-gradient";

class FormWrapper extends Component{
  handleSubmit = values => {
    let theValues = Object.values(values);
    let str = '';
    for(let item of theValues){
      str+= item + ' ';
    }
    alert('here are the form values ' + str);
    console.log('values', values);
    this.props.sendForm(values);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}/>
    );
  }
}
// const mapStateToProps = state => ({
//   returnMessage: state.send.returnMessage
// })

export default connect(null, {sendForm})(FormWrapper);
