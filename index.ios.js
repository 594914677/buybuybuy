/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import Main from './src/Containers/Main'

class buy extends Component {
    render() {
        return ( <Main /> );
    }
}


AppRegistry.registerComponent('buy', () => buy);