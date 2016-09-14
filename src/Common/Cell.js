import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,Switch
} from 'react-native';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }

    static defaultProps = {
        title: '',
        isSwitch: false,
        rightText: ''
    };

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    {this.renderLeftView()}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        const {isSwitch} = this.props;
        return (
            isSwitch == true ?
                <Switch value={this.state.isOn} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}}
                        style={{marginRight:10}}/> :
                <View style={{flexDirection: 'row'}}>
                    {this.renderRightText()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{marginRight:10,width:8,height:16}}/>
                </View>
        );
    }

    renderRightText() {
        const {rightText} = this.props;
        if (rightText) {
            return (
                <Text style={{color:'gray',marginRight:5}}>{rightText}</Text>
            )
        }
    }

    renderLeftView(){
        const {title,imageUri} = this.props;
        if(imageUri){
            return(
                <View style={{flexDirection:'row',marginLeft:10,alignItems: 'center'}}>
                    <Image source={{uri:imageUri}} style={{width:20,height:20}}/>
                    <Text style={{marginLeft:10}}>{title}</Text>
                </View>
            )
        }else{
            return(
                <Text style={{marginLeft:10}}>{this.props.title}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

