import React, {useState} from 'react'
import {View, Text, Button, Pressable,StyleSheet } from 'react-native'

const App = () =>{
const [isOn, setIsOn] = useState(false)

const toggle = () =>{
  setIsOn(prev => !prev)
}

  return(
    <View style={styles.container}>
      <Text>
        {isOn? "ON":"OFF"}
      </Text>

      <Pressable onPress={()=>toggle()} 
        style={({pressed})=>[
          {
            backgroundColor:isOn? "lightgreen":"red",
            paddingVertical:20,
            paddingHorizontal:20,
            borderRadius:8,
            opacity:pressed? 0.6:1
          }
        ]}
        >
          <Text>{isOn? "Click to Turn off":"Click to Turn ON"}</Text>

      </Pressable>
    </View>

  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightblue",
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App