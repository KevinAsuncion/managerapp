import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Button } from './common/Button';
import reducers from '../reducers';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCObKFdd5Pl6gl_AFbdUVjzau4FWkFSGms',
            authDomain: 'employees-eded6.firebaseapp.com',
            databaseURL: 'https://employees-eded6.firebaseio.com',
            projectId: 'employees-eded6',
            storageBucket: 'employees-eded6.appspot.com',
            messagingSenderId: '176066243721'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello from the app component    
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App; 

