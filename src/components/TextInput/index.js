import React from 'react'
import { TextInput } from 'react-native'
// import { Text } from 'react-native'

const Input = (props) => {
    return (
        <TextInput
            style={styles.textInput} 
            {...props}  
        />
    )
}

const styles = {
    textInput: { 
        height: 40, 
        borderColor: '#40bf80', 
        borderWidth: 1,
        width:300,
        borderRadius:25,
        marginTop:20,
        fontSize:14,
        paddingHorizontal:15
    }
}

export default Input