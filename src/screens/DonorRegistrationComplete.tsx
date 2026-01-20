import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface DonorRegistrationCompleteProps {
    onDone: () => void;
}

export const DonorRegistrationComplete: React.FC<DonorRegistrationCompleteProps> = ({ onDone }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Stars Decoration */}
                <Text style={styles.star1}>⭐</Text>
                <Text style={styles.star2}>⭐</Text>

                {/* High Five Illustration */}
                <View style={styles.illustrationContainer}>
                    <Text style={styles.illustration}>🙌</Text>
                </View>

                {/* Text */}
                <Text style={styles.title}>High Five</Text>
                <Text style={styles.subtitle}>Registration Complete</Text>

                {/* Done Button */}
                <TouchableOpacity style={styles.doneButton} onPress={onDone}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Wave Decoration */}
            <View style={styles.bottomWave} />
        </SafeAreaView>
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
    },
    star1: {
        fontSize: 32,
        position: 'absolute',
        top: '20%',
        left: '15%',
    },
    star2: {
        fontSize: 32,
        position: 'absolute',
        top: '25%',
        right: '20%',
    },
    illustrationContainer: {
        marginBottom: SPACING.l,
    },
    illustration: {
        fontSize: 120,
    },
    title: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
        marginBottom: SPACING.xxl,
    },
    doneButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: SPACING.xxl * 2,
        paddingVertical: SPACING.m,
        borderRadius: 8,
        marginBottom: SPACING.xxl,
    },
    doneButtonText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.secondary,
        fontWeight: '600',
    },
    bottomWave: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: '#4CAF50',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
});
