import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD6XckCmy2HXz9Shq_Jfv84gV60DBfKg44',
            authDomain: 'auth-84b2a.firebaseapp.com',
            databaseURL: 'https://auth-84b2a.firebaseio.com',
            projectId: 'auth-84b2a',
            storageBucket: 'auth-84b2a.appspot.com',
            messagingSenderId: '380619567178'
          });
    }
    render() {
    return (
        
        <View>
            <Header headerText="Authentication" />
            <Text> AN APp </Text>
            </View>
    );
}
}

export default App;
