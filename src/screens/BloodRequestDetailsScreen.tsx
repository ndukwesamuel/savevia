import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface BloodRequestDetailsProps {
    onContinue: () => void;
    onBack: () => void;
}

export const BloodRequestDetailsScreen: React.FC<BloodRequestDetailsProps> = ({ onContinue, onBack }) => {
    const [hospitalName, setHospitalName] = useState('St Nicholas Hospital, Ajah');
    const [location, setLocation] = useState('No 26, Thompson Street, Ajah');
    const [reason, setReason] = useState('Surgery');
    const [quantity, setQuantity] = useState('2 Pints');
    const [bloodType, setBloodType] = useState('O+, AB, A+');
    const [genotype, setGenotype] = useState('AA');
    const [urgency, setUrgency] = useState('Immediate');

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Blood Request Details</Text>

                {/* Form Fields */}
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name of Hospital</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={hospitalName}
                            onChangeText={setHospitalName}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Location</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={location}
                            onChangeText={setLocation}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Reason</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={reason}
                            onChangeText={setReason}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Quantity Needed</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={quantity}
                            onChangeText={setQuantity}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Blood Type Needed</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={bloodType}
                            onChangeText={setBloodType}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Genotype</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={genotype}
                            onChangeText={setGenotype}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Urgency Level</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={urgency}
                            onChangeText={setUrgency}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    backButton: {
        position: 'absolute',
        top: SPACING.l,
        left: SPACING.m,
        width: 40,
        height: 40,
        justifyContent: 'center',
        zIndex: 10,
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    scrollView: {
        flex: 1,
        paddingTop: SPACING.xxl,
        paddingHorizontal: SPACING.m,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xl,
    },
    formGroup: {
        marginBottom: SPACING.l,
    },
    label: {
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    inputContainer: {
        backgroundColor: '#F5F5F7',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
    },
    input: {
        paddingVertical: SPACING.m,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    footer: {
        padding: SPACING.m,
        borderTopWidth: 1,
        borderTopColor: '#E5E5EA',
        backgroundColor: COLORS.background,
    },
    continueButton: {
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
});
