import React from 'react'
import {View,Button, Pressable,Text,StyleSheet} from 'react-native'

type CustomButtonProps = {
    title:string,
    onPress: ()=>void
}

const CustomButton:React.FC<CustomButtonProps> = ({title,onPress}) =>{
    return (
        <Pressable 
        onPress={onPress}
        style={({pressed})=>[
            styles.container,
           {backgroundColor:pressed? '#6ea8ff': '#007bff'} 
            
        ]}
        >
            <Text style={styles.textStyle}>{title}</Text>

        </Pressable>
    )
}

const styles = StyleSheet.create ({
    container:{
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:8

    },
    textStyle:{
        color:'white',
        fontSize:16
    }
})

export default CustomButton