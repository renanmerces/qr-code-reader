import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '@react-native-community/async-storage';

export default class QRCodeReader extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            stands: []
        }
    }
    
    onSuccess = (e) => {
        let stands = this.state.stands

        for(stand of stands){
            if(stand.id === 1){
                stand.visited = true
            }
        }

        this.setState({stands}, () => this.storeData(stands))
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

    storeData = async stands => {
        try {
            await AsyncStorage.setItem('stands', JSON.stringify(stands), () => {
                Alert.alert('Opa', 'Registro salvo')
                this.props.navigation.navigate('ImageList')
            })
        } catch (e) {
            console.log(e)
        }
    }
     
    render() {
        return (
            <QRCodeScanner
            onRead={this.onSuccess}
            // topContent={
            //     <Text style={styles.centerText}>
            //         Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            //     </Text>
            // }
            bottomContent={
                <Text style={styles.buttonText}>Aponte para o QR Code</Text>
            }
            />
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
