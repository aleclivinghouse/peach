import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';
import {connect} from 'react-redux';
import * as renders from './renderedComponents';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {LinearGradient }from 'expo-linear-gradient';
import {
Container,
Header,
Title,
Text,
Content,
Button,
Icon,
List,
ListItem,
Picker,
Left,
Right,
Body,
Form,
Footer,
FooterTab
} from 'native-base';

const validate = values => {
  const errors = {}
  if (!values.first) {
    errors.first = 'Required'
  }
  if (!values.last) {
    errors.last = 'Required'
  }
  const re = /\S+@\S+\.\S+/;
  if(re.test(values.email)===false){
    errors.email = "Email must be valid"
  }
  if(values.message !== undefined && values.message.length > 500){
    errors.message = "Must be under 500 characters"
  }
  return errors
}




class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          disabled: false,
          correctCount: 0
        }
    }

    render() {
        const { showPassword, handleSubmit, pristine, submitting, values, reset, invalid, syncErrors, asyncErrors, hasMessageValue  } = this.props;
        const Item = Picker.Item;
        let count = 0;
        if(hasMessageValue !== undefined){
          count = hasMessageValue.length;
        }
        let button;
        return (
              <Container style={{flex: 1}}>
                <LinearGradient
    colors={['#191919', '#2a2a2a', '#191919']}
    style={{flex: 1}}
    >
              <Header>
                <Left>
                </Left>
                <Body>
                  <Title style={{color: 'grey'}}>Header</Title>
                </Body>
                <Right />
              </Header>

              <Content contentContainerStyle={{ paddingTop: 100, backgroundColor: '#e7e7e7', paddingBottom: 140}}>
                <List>
                  <Row>
                      <Col style={{justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{color: '#bb8ce5', fontSize: 32}}>Feedback</Text>
                      </Col>
                  </Row>
                    <Field name="first" placeholder="John" type="text" label="first name" component={renders.renderText}/>
                    <Field name="last" placeholder="Doe" type="text" label="last name" component={renders.renderText} />
                    <Field name="email"  type="text" label="Email" placeholder="john@gmail.com" component={renders.renderText} />
                    <Field onChange={this.onMessageChange} name="message"  type="text" label="Message" component={renders.renderTextArea} />
                    <Text style={{paddingLeft: 15}}>{count}/500</Text>
                    <ListItem>
                        <Row>
                            <Col>
                              { invalid || submitting || pristine

                                 ? <Button block disabled><Text>Send</Text></Button>
                                 :<Button block onPress={handleSubmit} style={{backgroundColor: '#bb8ce5' }}><Text>Send</Text></Button>
                              }
                            </Col>
                        </Row>
                    </ListItem>
                </List>
              </Content>
              <Footer style={{color: 'black'}}>
                <LinearGradient
    colors={['#191919', '#2a2a2a', '#191919']}
    style={{flex: 1}}
    >
                <FooterTab>
                  <Button full>
                    <Text>Footer</Text>



                  </Button>
                </FooterTab>
                </LinearGradient>
              </Footer>
                </LinearGradient>
            </Container>
        )
    }
}

FeedbackForm = reduxForm({
  form: 'Form',
  destroyOnUnmount: false,
  validate
})(FeedbackForm);

const selector = formValueSelector('Form');
FeedbackForm = connect(state => {
  const hasMessageValue = selector(state, 'message');
  return{
    hasMessageValue
  }
})(FeedbackForm)
export default FeedbackForm
