import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { colors, spacing, radius } from './theme';

type Props = {
    item: { id: number; title: string; image: any };
    onClose: () => void;
};

const Details = ({ item, onClose }: Props) => {
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(anim, { toValue: 1, friction: 8, useNativeDriver: true }).start();
    }, [anim]);

    return (
        <Animated.View style={[styles.container, { opacity: anim, transform: [{ scale: anim }] }]}>
            <View style={styles.header}>
                <Text style={styles.title}>Details</Text>
                <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
    title: { fontSize: 22, fontWeight: '700', color: colors.text },
    closeBtn: { padding: 8, backgroundColor: colors.accentLight, borderRadius: radius.sm },
    closeText: { color: '#fff' },
    card: { alignItems: 'center', backgroundColor: colors.card, padding: spacing.lg, borderRadius: radius.md, shadowColor: colors.shadow, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
    image: { width: 180, height: 180, borderRadius: 12, marginBottom: spacing.md },
    itemTitle: { fontSize: 18, fontWeight: '700', color: colors.text },
});

export default Details;