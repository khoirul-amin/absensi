import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Button } from '../../components'
import TopBar from '../../components/TopBar'

const viewAbsenPegawai = (navigation) => {

    return (
        <View style={{ flex: 2, flexDirection: 'column' }}>
            <TopBar
                navigation={navigation}
                title="Absen Pegawai"
            />

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Text>Halaman View Absen Pegawai</Text>
                <Button
                    caption="Absen Masuk"
                    onPress={() => navigation.navigate('absenMasukPegawai')}
                />
                <Button
                    caption="Absen Pulang"
                    onPress={() => navigation.navigate('absenMasukPegawai')}
                />

                <View style={{ ...styles.viewAbsen, backgroundColor: '#b3bab6' }}>
                    <Text>Absen masuk</Text>
                </View>

                <View style={{ ...styles.viewAbsen, backgroundColor: '#40bf80' }}>
                    <Text>Absen pulang</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewAbsen: {
        width: '80%',
        borderRadius: 10,
        height: 100,
        marginTop: 20
    }
})


export default viewAbsenPegawai
