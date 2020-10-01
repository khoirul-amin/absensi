import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import { ImgToggle } from '../../assets'
import { removeSession } from '../../actions/session'

const TopBar = ({navigation,title}) => {
    const drawerOption = () =>{
        navigation.navigation.openDrawer()
        // console.log(title)
    }
    return (
        <View style={styles.view}>
            <View style={styles.button}>
                <TouchableOpacity onPress={ () => drawerOption()}>
                    <Image style={styles.image} source={ImgToggle} />
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                    {title  ? title : 'TopBar'}
                </Text>
            </View>
            <View style={{width:40, marginRight:5}}>
                <TouchableOpacity onPress={()=>removeSession(navigation)}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = {
    view: {
        backgroundColor: '#40bf80',
        flex: 0,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    image:{
        resizeMode: "contain",
        width:35,
        height:20,
        marginTop:2
    },
    button: {
        width: 40,
        alignItems: 'center'
    },
    text: {
        flex: 6,
        flexDirection: 'column',
        alignItems: 'center'
    }
}
export default TopBar 