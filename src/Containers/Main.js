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
    Image,
    Platform,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Components/Home';
import Shop from '../Components/Shop/Shop';
import Mine from '../Components/Mine/Mine';
import More from '../Components/More/More';

import Navigator from '../Common/Navigator'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0  //默认选中主页
        };
        this._renderScene = this._renderScene.bind(this)
    }

    _renderScene() {
        switch (this.state.selectedTab) {
            case 0:
                return <Navigator component={Home} />;
                break;
            case 1:
                return <Navigator component={Shop} />;
                break;
            case 2:
                return <Navigator component={Mine} />;
                break;
            case 3:
                return <Navigator component={More} />;
                break;
        }
    }

    render() {

        const TabBarArr = [
            {
                key: 0,
                title: '首页',
                icon: 'icon_tabbar_homepage',
                selectedIcon: 'icon_tabbar_homepage_selected'
            },
            {
                key: 1,
                title: '商家',
                icon: 'icon_tabbar_merchant_normal',
                selectedIcon: 'icon_tabbar_merchant_selected'
            },
            {
                key: 2,
                title: '我的',
                icon: 'icon_tabbar_mine',
                selectedIcon: 'icon_tabbar_mine_selected'
            },
            {
                key: 3,
                title: '更多',
                icon: 'icon_tabbar_misc',
                selectedIcon: 'icon_tabbar_misc_selected'
            }
        ];

        return (
            <TabNavigator>
                {
                    TabBarArr.map((val)=> {
                        return (
                            <TabNavigator.Item
                                key={val.key}
                                title={val.title}
                                renderIcon={() => <Image source={{ uri: val.icon }} style={styles.iconStyle} />}
                                renderSelectedIcon={() => <Image source={{ uri: val.selectedIcon }} style={styles.iconStyle} />}
                                selected={this.state.selectedTab === val.key}
                                onPress={() => this.setState({ selectedTab: val.key }) }
                                selectedTitleStyle={styles.selectedTitleStyle}
                            >
                                {this._renderScene()}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    selectedTitleStyle:{
        color:'orange'
    }
});


