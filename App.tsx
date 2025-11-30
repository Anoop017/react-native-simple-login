import React, { useState } from 'react'
import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

const App = () => {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => {
    setIsOn(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <Text>
        {isOn ? "ON" : "OFF"}
      </Text>

      <CustomButton
      title={isOn? "Turn Off":"Turn ON"}
      onPress={toggle}
      />

      <CustomButton
      title={'Reset'}
      onPress={()=>setIsOn(false)}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App