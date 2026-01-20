import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const RewardsScreen = () => {
    const badges = [
        { id: 1, name: 'First Donation', icon: '🩸', completed: true },
        { id: 2, name: '3 donations in 6 months', icon: '🔥', completed: false },
        { id: 3, name: '1000 reward points', icon: '🔒', completed: false },
    ];

    const topDonors = [
        { id: 1, name: 'Deborah Falola', donations: '6 donations in the last 10 months', avatar: 'D' },
        { id: 2, name: 'Louis Ikenna', donations: '5 donations in the last 11 months', avatar: 'L' },
        { id: 3, name: 'Amanda Ogar', donations: '4 donations in the last 8 months', avatar: 'A' },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Earn Rewards for Saving Lives</Text>
            </View>

            {/* Rewards Card */}
            <View style={styles.rewardsCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardLabel}>Reward Points</Text>
                    <Text style={styles.cardPoints}>You Have</Text>
                    <Text style={styles.cardValue}>750 points</Text>
                    <Text style={styles.cardMessage}>Thank you for saving lives, hero.</Text>
                </View>
                <View style={styles.illustration}>
                    <Text style={styles.illustrationIcon}>🩸</Text>
                </View>
            </View>

            {/* Progress */}
            <View style={styles.progressSection}>
                <Text style={styles.progressText}>Save more lives to get next reward</Text>
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                </View>
                <Text style={styles.nextReward}>Next reward at 1000 points</Text>
            </View>

            {/* Badges */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Badges and Milestone</Text>
                {badges.map((badge) => (
                    <View key={badge.id} style={styles.badgeItem}>
                        <View style={styles.badgeIcon}>
                            <Text style={styles.badgeIconText}>{badge.icon}</Text>
                        </View>
                        <Text style={styles.badgeText}>{badge.name}</Text>
                        {badge.completed && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                ))}
            </View>

            {/* Top Donors */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Donors This Month</Text>
                {topDonors.map((donor, index) => (
                    <View key={donor.id} style={styles.donorItem}>
                        <View style={styles.donorAvatar}>
                            <Text style={styles.donorAvatarText}>{donor.avatar}</Text>
                        </View>
                        <View style={styles.donorInfo}>
                            <Text style={styles.donorName}>{donor.name}</Text>
                            <Text style={styles.donorDonations}>{donor.donations}</Text>
                        </View>
                        {index === 0 && <Text style={styles.trophy}>🏆</Text>}
                    </View>
                ))}
            </View>

            <View style={{ height: 20 }} />
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
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
    },
    rewardsCard: {
        flexDirection: 'row',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.l,
        padding: SPACING.l,
        backgroundColor: '#4CAF50',
        borderRadius: 16,
    },
    cardContent: {
        flex: 1,
    },
    cardLabel: {
        fontSize: FONT_SIZE.s,
        color: COLORS.secondary,
        marginBottom: 4,
    },
    cardPoints: {
        fontSize: FONT_SIZE.m,
        color: COLORS.secondary,
        marginBottom: 4,
    },
    cardValue: {
        fontSize: FONT_SIZE.xxxl,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginBottom: 8,
    },
    cardMessage: {
        fontSize: FONT_SIZE.s,
        color: COLORS.secondary,
    },
    illustration: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustrationIcon: {
        fontSize: 40,
    },
    progressSection: {
        paddingHorizontal: SPACING.m,
        marginBottom: SPACING.l,
    },
    progressText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
        marginBottom: SPACING.s,
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: '#E5E5EA',
        borderRadius: 4,
        marginBottom: SPACING.xs,
    },
    progressBar: {
        width: '75%',
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 4,
    },
    nextReward: {
        fontSize: FONT_SIZE.xs,
        color: COLORS.textLight,
    },
    section: {
        paddingHorizontal: SPACING.m,
        marginBottom: SPACING.l,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.m,
    },
    badgeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    badgeIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    badgeIconText: {
        fontSize: 20,
    },
    badgeText: {
        flex: 1,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    checkmark: {
        fontSize: 20,
        color: '#4CAF50',
    },
    donorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    donorAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    donorAvatarText: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: '600',
    },
    donorInfo: {
        flex: 1,
    },
    donorName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    donorDonations: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    trophy: {
        fontSize: 24,
    },
});
