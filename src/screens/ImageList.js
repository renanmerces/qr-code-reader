import React, { Component } from 'react';
 
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
 
export default class ImageList extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            stands: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = async () => {
        try {
            let stands = await AsyncStorage.getItem('stands')
            if(stands !== null) {
                this.setState({stands: JSON.parse(stands)})
            }
            else {
                stands = [    
                    {
                        id: 1,
                        empresa: 'A',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },                
                    {
                        id: 2,
                        empresa: 'B',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },
                    {
                        id: 3,
                        empresa: 'C',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                    {
                        id: 4,
                        empresa: 'D',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                    {
                        id: 5,
                        empresa: 'E',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                    {
                        id: 6,
                        empresa: 'F',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                    {
                        id: 7,
                        empresa: 'G',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                    {
                        id: 8,
                        empresa: 'H',
                        img_url: 'https://static.wixstatic.com/media/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.png/v1/fill/w_410,h_130,al_c,q_80,usm_0.66_1.00_0.01/f1eca7_fb19a49c9e7e4f85ad0f49e8a94cff0d~mv2.webp',
                        visited: false
                    },  
                ]
                
                this.setState({stands})
            }
        } catch(e) {
            Alert.alert("Ops", "Erro ao carregar dados")
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.stands}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => 
                        <View style={{flex: 1, margin: 10, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Image 
                                style={[{ width: 400, height: 50, resizeMode: 'center'}, item.visited ? false : {opacity: 0.2}]}
                                source={{uri: item.img_url}}>
                            </Image>
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
