import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

export default class navigator extends Component {

    static defaultProps = {
        name: ''
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: this.props.name, component:this.props.component, index: 0}}
                configureScene={(route) => {return {
                    ...Navigator.SceneConfigs.PushFromRight,
                    gestures:null
                }}}
                renderScene={(route, navigator) => {
                    const Component = route.component;
                    return (
                        <View style={{flex:1}}>
                            <Component {...route.params} navigator={navigator} route={route} />
                        </View>
                    )

                }}
            />
        )
    }
}