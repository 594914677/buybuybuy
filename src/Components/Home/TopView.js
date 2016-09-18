/**
 * 首页头部View
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
    ScrollView,
    Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

import TopListView from './ListView'
import TopMenuJSON from '../../LocalData/Home-Top-Menu.json'
export default class TopView extends Component {
    constructor(props) {
        super(props)
        this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this)
        this.state = {
            activePage:0
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollEnd={this.onScrollAnimationEnd}>
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(e){
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage:currentPage
        })
    }


    renderScrollItem() {
        let itemArr = [];
        let dataArr = TopMenuJSON.data;
        for (var i = 0; i < dataArr.length; i++) {
            itemArr.push(
                <TopListView key={i} dataArr={dataArr[i]}/>
            )
        }
        return itemArr;
    }

    renderIndicator() {
        let indicatorArr = [],style;
        for(var i=0;i<2;i++){

            style = (i == this.state.activePage) ? {color:'orange'} : {color:'gray'};

            indicatorArr.push(
                <Text key={i} style={[{fontSize:20},style]}>&bull;</Text>
            )
        }
        return indicatorArr
    }
}


const styles = StyleSheet.create({

    container: {

        backgroundColor: '#fff'
    }
});

