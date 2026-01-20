import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const OngoingDonationScreen = () => {
    const steps = [
        { id: 1, label: 'Request Accepted', completed: true },
        { id: 2, label: 'On my way', completed: true },
        { id: 3, label: 'At St Nicholas Hospital, Ajah', completed: false },
        { id: 4, label: 'Donation Complete', completed: false },
    ];

    const healthTips = [
        {
            id: 1,
            icon: '🩺',
            title: 'Relax & Breathe',
            description: 'Stay calm, breathe normally, and don\'t look away if you feel faint.',
        },
        {
            id: 2,
            icon: '🩸',
            title: 'Communicate with Staff',
            description: 'Tell them if you feel dizzy, cold, or uncomfortable.',
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hello Mary,</Text>
                <Text style={styles.question}>How are you today?</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
                <Text style={styles.searchText}>Find Donation Centers</Text>
            </View>

            {/* Progress Section */}
            <View style={styles.progressSection}>
                <Text style={styles.sectionTitle}>Ongoing blood donation</Text>

                {/* Progress Bar */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                </View>

                {/* Steps */}
                {steps.map((step, index) => (
                    <View key={step.id} style={styles.stepItem}>
                        <View style={[
                            styles.stepDot,
                            step.completed && styles.stepDotCompleted
                        ]} />
                        {index < steps.length - 1 && (
                            <View style={[
                                styles.stepConnector,
                                step.completed && steps[index + 1].completed && styles.stepConnectorCompleted
                            ]} />
                        )}
                        <Text style={[
                            styles.stepLabel,
                            step.completed && styles.stepLabelCompleted
                        ]}>
                            {step.label}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Health Tips */}
            <View style={styles.tipsSection}>
                <Text style={styles.sectionTitle}>Health Tips</Text>
                {healthTips.map((tip) => (
                    <View key={tip.id} style={styles.tipCard}>
                        <View style={styles.tipIcon}>
                            <Text style={styles.tipIconText}>{tip.icon}</Text>
                        </View>
                        <View style={styles.tipContent}>
                            <Text style={styles.tipTitle}>{tip.title}</Text>
                            <Text style={styles.tipDescription}>{tip.description}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
    },
    greeting: {
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        color: COLORS.text,
    },
    question: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.l,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        backgroundColor: COLORS.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5EA',
    },
    searchIcon: {
        fontSize: 20,
        marginRight: SPACING.s,
    },
    searchText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
    },
    progressSection: {
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.l,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.m,
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: '#FFE5E5',
        borderRadius: 4,
        marginBottom: SPACING.l,
    },
    progressBar: {
        width: '50%',
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 4,
    },
    stepItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.m,
        position: 'relative',
    },
    stepDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FFE5E5',
        marginRight: SPACING.s,
        zIndex: 2,
    },
    stepDotCompleted: {
        backgroundColor: COLORS.primary,
    },
    stepConnector: {
        position: 'absolute',
        left: 9,
        top: 20,
        width: 2,
        height: SPACING.m + 20,
        backgroundColor: '#FFE5E5',
        zIndex: 1,
    },
    stepConnectorCompleted: {
        backgroundColor: COLORS.primary,
    },
    stepLabel: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    stepLabelCompleted: {
        color: COLORS.text,
        fontWeight: '500',
    },
    tipsSection: {
        marginHorizontal: SPACING.m,
    },
    tipCard: {
        flexDirection: 'row',
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        marginBottom: SPACING.m,
    },
    tipIcon: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#F5F5F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    tipIconText: {
        fontSize: 32,
    },
    tipContent: {
        flex: 1,
    },
    tipTitle: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    tipDescription: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        lineHeight: 18,
    },
});
