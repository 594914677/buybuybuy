/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
// import {width,height} from Dimensions.get('window');
var {width, height} = Dimensions.get('window');

class SecondPageComponent extends Component {

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.id}</Text>
                <Text style={styles.welcome} onPress={this._pressButton.bind(this)}>
                    点我跳回去
                </Text>
            </View>
        );
    }
}


export default class Home extends Component {
    _pressButton() {
        const {navigator} = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props

        if (navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params: {id: 'abc'}
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderNavBar()}
                <Text style={styles.welcome} onPress={this._pressButton.bind(this)}>
                    Home页面
                </Text>
            </View>
        );
    }

    _renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>alert('123')}>
                    <Text style={{color:'#fff',marginTop:15}}>广州</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.topInputStyle}
                />
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>alert('123')}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('123')}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightNavViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        marginTop:15
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
        fontSize:15
    },
    navRightImgStyle: {
        width: 28,
        height: 28
    }
});

