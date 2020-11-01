import React from 'react'
import { View } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const scannerPage = () => {
    const onSuccess = e => {
        alert(e.data);
    };
    return (
        <View style={{flex:1, backgroundColor:'transparent'}}>
            <QRCodeScanner
                showMarker={true}
                onRead={(e) => onSuccess(e)}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            />
        </View>
    )
}
export default scannerPage