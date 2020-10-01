import React from 'react'
import { View, Text } from 'react-native'
import TopBar from '../../components/TopBar'

const viewAbsenPegawai = (navigation) => {

    return (
        <View style={{ flex: 2, flexDirection: 'column' }}> 
            <TopBar
                navigation={navigation}
                title="Absen Pegawai"
            />

            <View style={{ flex: 6, flexDirection: 'row' }}>
                <Text>Halaman View Absen Pegawai</Text>
            </View>
        </View>
    )
}

export default viewAbsenPegawai
