import React, { Component } from 'react';
import {
Icon,
Input,
List,
ListItem,
Label,
InputGroup,
TextInput,
CheckBox,
Picker,
Textarea,
Container
} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

const renderText = ({ input, label, type, meta: { touched, error, warning } }) => (
    <ListItem>
        <InputGroup iconRight>
            <Icon />
            <Input {...input} placeholder={label} type={type} floatingLabel/>
            {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
        </InputGroup>
    </ListItem>
);

const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <ListItem>
        <InputGroup iconRight>
            <Icon />
            <Textarea {...input} placeholder={label} type={type} style={{height: 100}}/>
            {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
        </InputGroup>
    </ListItem>
);




const renderCheckbox = ({ input, label, custom }) => (

    <ListItem>
        <CheckBox {...input} checked={input.value ? true : false} onPress={() => { input.onChange(!input.value)}} />
        <Text> {label} </Text>
    </ListItem>

);

const renderSelect = ({ input, label, children, ...custom }) => (

    <Picker {...input} selectedValue={input.value} onValueChange={(value, index) => input.onChange(value)} children={children} {...custom} />
);


const renderNumber = ({ input, placeholder, meta: { asyncValidating, touched, error } }) => (
    <ListItem>
        <InputGroup iconRight>
            <Input placeholder={placeholder} {...input} />
        </InputGroup>
    </ListItem>
);

const renderPassword = ({ input, placeholder, meta: {touched, error }, ...custom }) => (
    <ListItem>
        <InputGroup iconRight>
            <Icon name="ios-code-working" />
            <Input placeholder="Password" {...input} {...custom} />
        </InputGroup>
    </ListItem>
);


export { renderText, renderTextArea, renderNumber, renderPassword, renderCheckbox, renderSelect};
