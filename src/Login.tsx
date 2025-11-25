 import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, TouchableOpacity } from 'react-native'

type Props = {
    onLogin: (email: string) => void
}

const Login = ({ onLogin }: Props) => {

    const [email, setEmail] = useState('')
    const [mpin, setMpin] = useState('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const logingIn = () => {

        if(!email.trim()){
            Alert.alert("Please enter your email")
            return
        } 

        if(!mpin.trim()){
            Alert.alert("Enter your password")
            return
        }

        if(mpin.length !== 4){
            Alert.alert('Mpin needs to be only 4 digits')
            return 
        }

        Alert.alert("Login Success")

        onLogin(email)
    }



    return (
        <View>

            <Text>Login</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />

            <TextInput
                placeholder="Password"
                value={mpin}
                onChangeText={(t) => setMpin(t.replace(/[^0-9]/g, '').slice(0, 4))}
                keyboardType="number-pad"
                maxLength={4}
                secureTextEntry

            />

            <TouchableOpacity onPress={logingIn}>
                <Text>Login</Text>
            </TouchableOpacity>




        </View>
    )
}
export default Login