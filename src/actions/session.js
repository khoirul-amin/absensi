// import React from 'react'
import AsyncStorage from '@callstack/async-storage'

const cekSession = async (navigation) => {
    await AsyncStorage.getItem('isLogin', (error, result) => {
        if(result){
            const dataLogin = JSON.parse(result)
        }else{
            removeSession(navigation)
        }
    })
    // try{
    //     // console.log(data);
    // } catch(e) {
    //     removeSession(navigation)
    // }
}

const setSession = async (navigation, data) => {
    await AsyncStorage.setItem('isLogin', JSON.stringify(data))
        .then(() => {
            navigation.replace('Home')
        })
        .catch(() => {
            console.error('gagal login')
        })
}

const removeSession = async ({ navigation }) => {
    // console.log(navigation)
    try {
        await AsyncStorage.removeItem('isLogin')
        navigation.replace('Login');
    } catch (e) {
        console.error('logout gagal')
    }
}
export { cekSession, setSession, removeSession }
