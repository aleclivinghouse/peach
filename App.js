import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from  './reducers/index.js';
import ReduxThunk from 'redux-thunk';
import FormWrapper from './formWrapper';

class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <FormWrapper />
      </View>
    </Provider>
    );
  }
}

export default App;
