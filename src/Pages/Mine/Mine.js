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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Cell from '../../Common/Cell'

export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{height:64,backgroundColor:'rgba(255,96,0,1.0)'}}>
                        <TouchableOpacity style={{position:'absolute',right:60,top:27}}>
                            <Image source={{uri:'icon_mine_setting'}} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{position:'absolute',right:15,top:27}}>
                            <Image source={{uri:'icon_homepage_message'}} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:64,backgroundColor:'rgba(255,96,0,1.0)'}}>
                        <Text>请点击登录</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Cell title="我要合作" imageUri="collect" rightText="查看全部订单"/>
                    </View>
                    <View style={{backgroundColor:'#fff',paddingTop:15,paddingBottom:15}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{uri:'order1'}}
                                           style={{alignSelf:'center',width:45,height:30}}/>
                                    <Text
                                        style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>待付款</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{uri:'order2'}}
                                           style={{alignSelf:'center',width:45,height:30}}/>
                                    <Text
                                        style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>待使用</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{uri:'order3'}}
                                           style={{alignSelf:'center',width:45,height:30}}/>
                                    <Text
                                        style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>待评价</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{uri:'order4'}}
                                           style={{alignSelf:'center',width:45,height:30}}/>
                                    <Text
                                        style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>退款/售后</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="我的钱包" imageUri="draft"/>
                        <Cell title="抵用券" imageUri="like"/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="好友去哪" imageUri="card"/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="积分商城" imageUri="card"/>
                        <Cell title="免费福利" imageUri="card"/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="今日推荐" imageUri="new_friend"/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="联系客服" imageUri="card"/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Cell title="我要合作" imageUri="pay" rightText="轻松开店,招财进宝"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    }
});

