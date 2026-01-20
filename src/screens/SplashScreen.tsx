import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface SplashScreenProps {
    onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const fadeAnim = new Animated.Value(0);
    const scaleAnim = new Animated.Value(0.8);

    useEffect(() => {
        // Fade in and scale animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();

        // Auto navigate after 2.5 seconds
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {/* Logo Container with Animation */}
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }]
                    }
                ]}
            >
                {/* Heart with Pulse Icon */}
                <View style={styles.heartPulseContainer}>
                    <Text style={styles.heartIcon}>❤️</Text>
                    <View style={styles.pulseLineContainer}>
                        <View style={styles.pulseLine} />
                        <View style={styles.pulseZigZag}>
                            <View style={styles.zigzagUp} />
                            <View style={styles.zigzagDown} />
                        </View>
                    </View>
                </View>

                {/* LifeFlow Text */}
                <Text style={styles.logoText}>LifeFlow</Text>
            </Animated.View>

            {/* Bottom Wave Decoration */}
            <View style={styles.bottomWaveContainer}>
                <View style={styles.bottomWave} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    heartPulseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    heartIcon: {
        fontSize: 36,
    },
    pulseLineContainer: {
        width: 40,
        height: 24,
        marginLeft: -8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pulseLine: {
        position: 'absolute',
        width: '100%',
        height: 2,
        backgroundColor: COLORS.primary,
    },
    pulseZigZag: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    zigzagUp: {
        width: 2,
        height: 12,
        backgroundColor: COLORS.primary,
        transform: [{ rotate: '45deg' }],
    },
    zigzagDown: {
        width: 2,
        height: 12,
        backgroundColor: COLORS.primary,
        transform: [{ rotate: '-45deg' }],
        marginLeft: -2,
    },
    logoText: {
        fontSize: FONT_SIZE.xxl + 4,
        fontWeight: 'bold',
        color: COLORS.primary,
        letterSpacing: 0.5,
    },
    bottomWaveContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        overflow: 'hidden',
    },
    bottomWave: {
        width: '100%',
        height: 300,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        transform: [{ scaleX: 1.5 }],
    },
});
