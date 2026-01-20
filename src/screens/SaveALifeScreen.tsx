import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface SaveALifeScreenProps {
    onContinue: () => void;
}

export const SaveALifeScreen: React.FC<SaveALifeScreenProps> = ({ onContinue }) => {
    return (
        <View style={styles.container}>
            {/* Content */}
            <View style={styles.content}>
                <View style={styles.bloodDropContainer}>
                    <Text style={styles.bloodDrop}>🩸</Text>
                </View>

                <Text style={styles.title}>Save A Life</Text>
                <Text style={styles.subtitle}>One donation saves lives.{'\n'}Be the reason someone survives</Text>

                <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>

            {/* Wave Background */}
            <View style={styles.waveContainer}>
                <View style={styles.wave} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        zIndex: 10,
    },
    bloodDropContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    bloodDrop: {
        fontSize: 60,
    },
    title: {
        fontSize: FONT_SIZE.xxxl,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.m,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
        marginBottom: SPACING.xxl,
        textAlign: 'center',
        lineHeight: 22,
    },
    continueButton: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.m,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
    waveContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        overflow: 'hidden',
    },
    wave: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        transform: [{ scaleX: 2 }],
    },
});
