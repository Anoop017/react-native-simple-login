import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, radius } from './theme';

type Props = {
    onLogin: (item: { id: number; title: string; image: string }) => void;
    onLogout: () => void;
};

const HomePage = ({ onLogin, onLogout }: Props) => {
    const sampleCards = [
        { id: 1, title: 'Item 1', image: require('../photos/photo1.png') },
        { id: 2, title: 'Item 2', image: require('../photos/photo2.png') },
        { id: 3, title: 'Item 3', image: require('../photos/photo3.png') },
        { id: 4, title: 'Item 4', image: require('../photos/photo4.png') },
    ];

    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(anim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
    }, [anim]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.heading}>Explore</Text>
                <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.grid}>
                {sampleCards.map((item, i) => (
                    <Animated.View key={item.id} style={[styles.card, { opacity: anim, transform: [{ translateY: Animated.multiply(anim, 10 * (i + 1)).interpolate({ inputRange: [0, 60], outputRange: [10, 0] }) } ] }]}>
                        <TouchableOpacity onPress={() => onLogin(item)} style={styles.touchableCard}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { paddingBottom: spacing.xl },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
    heading: { fontSize: 24, fontWeight: '700', color: colors.text },
    logoutBtn: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: radius.sm, backgroundColor: colors.accentLight },
    logoutText: { color: '#fff', fontWeight: '600' },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    card: { width: '48%', marginBottom: spacing.md },
    touchableCard: {
        alignItems: 'center',
        backgroundColor: colors.card,
        padding: spacing.sm,
        borderRadius: radius.md,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
    },
    image: { width: 100, height: 100, borderRadius: 8, marginBottom: spacing.sm },
    cardTitle: { color: colors.text, fontWeight: '600' },
});

export default HomePage;




