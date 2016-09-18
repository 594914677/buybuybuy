/**
 * Home Page
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');
import RenderNavBar from './renderNavBar'
import TopView from './TopView'

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/* 首页导航条 */}
                <RenderNavBar />
                {/* 首页内容 */}
                <ScrollView>
                    <TopView />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rightNavViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        marginTop: 15
    },
    navBarStyle: {
        height: 64,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    topInputStyle: {
        width: width * 0.7,
        height: 35,
        backgroundColor: '#fff',
        marginTop: 23,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 15
    },
    navRightImgStyle: {
        width: 28,
        height: 28
    }
});

