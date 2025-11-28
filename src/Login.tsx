import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Animated,
    Easing,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { colors, spacing, radius } from './theme';

type Props = {
    onLogin: (email: string) => void;
};

const Login = ({ onLogin }: Props) => {
    const [email, setEmail] = useState('');
    const [mpin, setMpin] = useState('');

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const formY = useRef(new Animated.Value(12)).current;
    const buttonScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 450, useNativeDriver: true }),
            Animated.timing(formY, { toValue: 0, duration: 450, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        ]).start();
    }, [fadeAnim, formY]);

    const handlePressIn = () => {
        Animated.spring(buttonScale, { toValue: 0.97, useNativeDriver: true }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonScale, { toValue: 1, friction: 5, useNativeDriver: true }).start();
    };

    const logingIn = () => {
        Keyboard.dismiss();
        if (!email.trim()) {
            Alert.alert('Please enter your email');
            return;
        }

        if (!mpin.trim()) {
            Alert.alert('Enter your password');
            return;
        }

        if (mpin.length !== 4) {
            Alert.alert('Mpin needs to be only 4 digits');
            return;
        }

        Alert.alert('Login Success');
        onLogin(email);
    };

    return (
        <Animated.View style={[styles.wrapper, { opacity: fadeAnim, transform: [{ translateY: formY }] }]}>
            <Text style={styles.title}>Welcome back</Text>

            <View style={styles.card}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colors.muted}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <TextInput
                    placeholder="4-digit PIN"
                    placeholderTextColor={colors.muted}
                    value={mpin}
                    onChangeText={(t) => setMpin(t.replace(/[^0-9]/g, '').slice(0, 4))}
                    keyboardType="number-pad"
                    maxLength={4}
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={logingIn}>
                    <Animated.View style={[styles.button, { transform: [{ scale: buttonScale }] }]}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    wrapper: { width: '100%', alignItems: 'center', marginTop: spacing.xl },
    title: { fontSize: 28, fontWeight: '700', color: colors.text, marginBottom: spacing.md },
    card: {
        width: '100%',
        backgroundColor: colors.card,
        padding: spacing.lg,
        borderRadius: radius.md,
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 6,
    },
    input: {
        height: 48,
        borderRadius: radius.sm,
        backgroundColor: '#f3f6fb',
        paddingHorizontal: 12,
        marginBottom: spacing.sm,
        color: colors.text,
    },
    button: {
        height: 48,
        borderRadius: radius.sm,
        backgroundColor: colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing.md,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 3,
    },
    buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

export default Login;