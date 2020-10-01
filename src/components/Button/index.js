import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

const Button = ({caption, onPress}) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{caption}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        backgroundColor: '#40bf80',
        borderRadius: 25,
        paddingVertical:13,
        width:170,
        marginTop:20
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        textTransform:'uppercase',
        fontSize:14,
        fontWeight: 'bold'
    }
}

export default Button