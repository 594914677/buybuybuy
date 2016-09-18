/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

import Cell from '../../Common/Cell'

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavbar()}
                <ScrollView>
                    <View style={{marginTop:15}}>
                        <Cell title="扫一扫" />
                    </View>

                    <View style={{marginTop:15}}>
                        <Cell title="省流量模式" isSwitch={true} />
                        <Cell title="消息提醒" />
                        <Cell title="邀请好友使用美团" />
                        <Cell title="清空缓存" rightText='1.23M'/>
                    </View>

                    <View style={{marginTop:15}}>
                        <Cell title="问卷调查"/>
                        <Cell title="支付帮助" />
                        <Cell title="网络诊断" />
                        <Cell title="关于美团" imageUri="card"/>
                        <Cell title="我要应聘" />
                    </View>

                    <View style={{marginTop:15}}>
                        <Cell title="精品应用" />
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavbar() {
        return (
            <View style={styles.navViewStyle}>
                <Text style={{color:'#fff',fontSize:17,fontWeight:'bold',marginTop:15}}>更多</Text>
                <TouchableOpacity style={{position:'absolute',right:20,top:27}}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navBarImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    navViewStyle:{
        height: 64,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBarImageStyle: {
        width:Platform.OS == 'ios' ? 25 :24,
        height:Platform.OS == 'ios' ? 25 :24
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

