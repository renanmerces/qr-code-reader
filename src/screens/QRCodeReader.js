import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeReader extends Component {
    onSuccess = (e) => {
        Alert.alert('Teste', String(e.data))
        // Linking
        //   .openURL(e.data)
        //   .catch(err => console.error('An error occured', err));
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
