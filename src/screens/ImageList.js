import React, { Component } from 'react';
 
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
 
export default class ImageList extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            empresas: [
                {
                    id: 0,
                    empresa: 'A'
                },                
                {
                    id: 1,
                    empresa: 'B'
                },                
                {
                    id: 2,
                    empresa: 'C'
                },
                {
                    id: 3,
                    empresa: 'D'
                }
            ]
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.empresas}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => 
                        <View style={{margin: 10, padding: 10}}>
                            <Text style={{fontSize: 16}}>{item.empresa}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
