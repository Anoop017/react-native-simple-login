import React from 'react'
import { View, Text, Button, Pressable, Image, TouchableOpacity } from 'react-native'

type Props = {
    item: { id: number; title: string; image: any }
    onClose: () => void
}

const Details = ({ item, onClose }: Props) => {


    return (
        <View>
            <Text>Details Page</Text>


            <Image
                source={ item.image }
                style={{ width: 150, height: 150 }}

            />

            <Text>{item.title}</Text>


            <TouchableOpacity onPress={onClose}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Details