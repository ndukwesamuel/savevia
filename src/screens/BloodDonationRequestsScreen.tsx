import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const BloodDonationRequestsScreen = () => {
    const requests = [
        { id: 1, name: 'St Nicholas Hospital', location: 'No 26, Toyin Street, Ikeja.', urgency: 'Very Urgent' },
        { id: 2, name: 'St Nicholas Hospital', location: 'No 26, Toyin Street, Ikeja.', urgency: 'Moderate' },
        { id: 3, name: 'St Nicholas Hospital', location: 'No 26, Toyin Street, Ikeja.', urgency: 'Moderate' },
        { id: 4, name: 'St Nicholas Hospital', location: 'No 26, Toyin Street, Ikeja.', urgency: 'Moderate' },
    ];

    const getUrgencyStyle = (urgency: string) => {
        switch (urgency) {
            case 'Very Urgent':
                return styles.urgencyVeryUrgent;
            case 'Moderate':
                return styles.urgencyModerate;
            case 'Not Urgent':
                return styles.urgencyNotUrgent;
            default:
                return styles.urgencyModerate;
        }
    };

    const getUrgencyTextStyle = (urgency: string) => {
        return urgency === 'Not Urgent' ? styles.urgencyTextBlack : styles.urgencyText;
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Blood Donation Requests</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Requests List */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {requests.map((request) => (
                    <View key={request.id} style={styles.requestCard}>
                        <View style={getUrgencyStyle(request.urgency)}>
                            <Text style={getUrgencyTextStyle(request.urgency)}>{request.urgency}</Text>
                        </View>
                        <Text style={styles.requestName}>Name: {request.name}</Text>
                        <Text style={styles.requestLocation}>Location: {request.location}</Text>
                        <TouchableOpacity style={styles.donateButton}>
                            <Text style={styles.donateButtonText}>Donate Now</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
    },
    placeholder: {
        width: 40,
    },
    scrollView: {
        flex: 1,
    },
    requestCard: {
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.m,
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        position: 'relative',
    },
    urgencyVeryUrgent: {
        position: 'absolute',
        top: -8,
        right: 16,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.m,
        paddingVertical: 4,
        borderRadius: 12,
    },
    urgencyModerate: {
        position: 'absolute',
        top: -8,
        right: 16,
        backgroundColor: '#FFA500',
        paddingHorizontal: SPACING.m,
        paddingVertical: 4,
        borderRadius: 12,
    },
    urgencyNotUrgent: {
        position: 'absolute',
        top: -8,
        right: 16,
        backgroundColor: '#000000',
        paddingHorizontal: SPACING.m,
        paddingVertical: 4,
        borderRadius: 12,
    },
    urgencyText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: '600',
    },
    urgencyTextBlack: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: '600',
    },
    requestName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginTop: SPACING.s,
        marginBottom: SPACING.xs,
    },
    requestLocation: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: SPACING.m,
    },
    donateButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.s,
        borderRadius: 8,
        alignItems: 'center',
    },
    donateButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
