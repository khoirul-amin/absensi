import React, {useState} from 'react'
import {
    View, Image, Text, Alert
} from 'react-native'
import { Button, Input } from '../../components'
import { useSelector } from 'react-redux'
import { LogoManggala } from '../../assets'
import { setSession } from '../../actions/session'

const Login = ({navigation}) => {
    const globalState = useSelector((state) => state);
    const [form, setForm] = useState({
        username:'',
        password:''
    });

    const handleChange = (inputKey,data) => {
        setForm({
            ...form,
            [inputKey] : data
        })
    }

    const handleLogin = () =>{
        if(form.username && form.password){
            // navigation.replace('Home')
            const data = {
                username : form.username,
                password : form.password
            }
            setSession(navigation,data)
        }else{
            Alert.alert(
                "Login gagal !",
                "Username & Password tidak boleh kosong"
              );
            // alert('Username & Password tidak boleh kosong')
        }
    }


    return (
        <View style={styles.content}>
            <Text>{globalState.name}</Text>
            <Image
                style={styles.image}
                source={ LogoManggala }
            />
            <Input
                onChangeText={(value)=>handleChange('username',value)}
                placeholder="Username"
            />
            <Input
                onChangeText={(value)=>handleChange('password',value)}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button caption="Login" onPress={() => handleLogin()} />
        </View>
    )
}

const styles = {
    content: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
    }
    // loginText:{
    //     fontSize:30,
    //     fontWeight:'bold',
    //     color:'#40bf80'
    // }
}

export default Login