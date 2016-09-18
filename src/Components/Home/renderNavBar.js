/**
 * Home Page
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

const RenderNavBar = () => {
    return (
        <View style={styles.navBarStyle}>
            <TouchableOpacity onPress={()=>alert('123')}>
                <Text style={styles.cityStyle}>广州</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="输入商家,品类,商圈"
                style={styles.InputStyle}
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
    );
};

const styles = StyleSheet.create({
    navBarStyle: {
        height: 64,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cityStyle: {
        color: '#fff',
        marginTop: 15
    },
    InputStyle: {
        width: width * 0.6,
        height: 35,
        backgroundColor: '#fff',
        marginTop: 23,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 15
    },
    rightNavViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        marginTop: 15
    },
    navRightImgStyle: {
        width: 25,
        height: 25,
        marginLeft:10
    }
});

export default RenderNavBar