import React, { useEffect } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import viewAbsenPegawai from '../viewAbsenPegawai'
import viewAbsenSiswa from '../viewAbsenSiswa'
import { cekSession } from '../../actions/session'
import DrawerContent from '../drawerContent/drawerContent'
// import { Icon } from 'react-native-vector-icons/Icon'


const Drawer = createDrawerNavigator()

const HomeView = ({ navigation }) => {

    useEffect(() => {
        cekSession(navigation)
    })


    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
        // overlayColor="transparent"
        // drawerContentOptions={{
        //     inactiveTintColor: '#40bf80',
        //     activeTintColor: 'black',
        //     labelStyle: {
        //         fontSize: 16,
        //         fontWeight: 'bold'
        //     },
        //     itemStyle: {
        //         marginTop: 0,
        //         marginVertical: 0,
        //         marginLeft: 0,
        //         borderRadius: 0,
        //         marginRight: 0,
        //         marginStart: 0,
        //         color: '#40bf80',
        //         backgroundColor: 'transparent'
        //     },
        // }}
        >
            <Drawer.Screen
                name="Absen Pegawai"
                component={viewAbsenPegawai}
            />
            <Drawer.Screen
                name="Absen Siswa"
                component={viewAbsenSiswa}
            />
        </Drawer.Navigator>
    )
}

export default HomeView