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
import scannerPage from '../scannerPage'
// import { Icon } from 'react-native-vector-icons/Icon'


const Drawer = createDrawerNavigator()

const HomeView = ({ navigation }) => {

    useEffect(() => {
        cekSession(navigation)
    })


    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Absen Pegawai"
                component={viewAbsenPegawai}
            />
            <Drawer.Screen
                name="absenMasukPegawai"
                component={scannerPage}
            />
            <Drawer.Screen
                name="Siswa"
                component={viewAbsenSiswa}
            />
        </Drawer.Navigator>
    )
}

export default HomeView