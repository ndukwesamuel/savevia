import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface UserTypeSelectionScreenProps {
    onSelectType: (type: 'donor' | 'hospital' | 'patient') => void;
}

export const UserTypeSelectionScreen: React.FC<UserTypeSelectionScreenProps> = ({ onSelectType }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Register As</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonFilled]}
                        onPress={() => onSelectType('donor')}
                    >
                        <Text style={styles.buttonTextFilled}>A Donor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() => onSelectType('hospital')}
                    >
                        <Text style={styles.buttonTextOutline}>A Hospital</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() => onSelectType('patient')}
                    >
                        <Text style={styles.buttonTextOutline}>A Patient</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        paddingHorizontal: SPACING.m,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        textAlign: 'center',
        color: COLORS.text,
        marginBottom: SPACING.xxl,
    },
    buttonsContainer: {
        gap: SPACING.m,
    },
    button: {
        paddingVertical: SPACING.m + 2,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonFilled: {
        backgroundColor: COLORS.primary,
    },
    buttonOutline: {
        backgroundColor: COLORS.background,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    buttonTextFilled: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
    buttonTextOutline: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
