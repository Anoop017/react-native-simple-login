import React from 'react'
import {Text, View, } from 'react-native'

type GreetingProps = {
    name : string,
    age? : number,
    isSpecial? : boolean,
    children? : React.ReactNode
    
}

const Greeting:React.FC<GreetingProps> = ({name, age, isSpecial,children}) => {
   let icon;
   if(isSpecial){
    icon = "STAR"
   }else if(age && age >31){
    icon = "FIRE"
   }else{
    icon ="NOPE"
   }
    return (
        <View>
            <Text>You name is : {name}</Text>
            {age !== undefined && <Text>Your age is {age}! {icon} 
                </Text>}
                {children}
        </View>
    )
}


export default Greeting;