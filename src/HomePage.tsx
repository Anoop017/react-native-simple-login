import React from 'react'
import { View, Text, Button, TouchableOpacity, Image, Pressable } from 'react-native'

type Props = {
    onLogin: (item: { id: number; title: string; image: string }) => void;
    onLogout: () => void;
};


const HomePage = ({ onLogin, onLogout }: Props) => {

    const sampleCards = [
        { id: 1, title: "Item 1", image: require("../photos/photo1.png") },
        { id: 2, title: "Item 2", image: require("../photos/photo2.png") },
        { id: 3, title: "Item 3", image: require("../photos/photo3.png") },
        { id: 4, title: "Item 4", image: require("../photos/photo4.png") }
    ];


    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

            {sampleCards.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => onLogin(item)}
                    style={{
                        width: '45%',
                        margin: '2.5%',
                        alignItems: 'center',
                        borderWidth: 1,
                        padding: 10,
                    }}
                >
                    <Image
                        source={  item.image }
                        style={{ width: 80, height: 80, marginBottom: 8 }}
                    />
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            ))}

        </View>
    )

}
export default HomePage




