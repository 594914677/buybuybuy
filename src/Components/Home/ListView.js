/**
 * Created by admin on 16/9/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,Dimensions,TouchableOpacity
} from 'react-native';
var {width, height} = Dimensions.get('window');

export default class TopListView extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
        this.renderRow = this.renderRow.bind(this)
    }

    static defaultProps = {
        dataArr: []
    };

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.cellStyle}>
                <Image source={{uri:rowData.image}} style={{width:45,height:45}}/>
                <Text>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentViewStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: width
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    cellStyle: {
        width: width / 5,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    }
});

