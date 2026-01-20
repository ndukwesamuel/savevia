import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const DonorHomeScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>M</Text>
                    </View>
                    <View>
                        <Text style={styles.greeting}>Hello Mary,</Text>
                        <Text style={styles.subGreeting}>How are you today?</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find Donation Centers"
                    placeholderTextColor={COLORS.textLight}
                />
            </View>

            {/* Hero Card */}
            <View style={styles.heroCard}>
                <View style={styles.heroContent}>
                    <Text style={styles.heroText}>Save A</Text>
                    <Text style={styles.heroText}>Life <Text style={styles.heroTextRed}>Today</Text></Text>
                </View>
                <View style={styles.heroIllustration}>
                    <Text style={styles.heroEmoji}>🩸</Text>
                </View>
            </View>

            {/* Blood Donation Requests */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Blood Donation Requests</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>See More</Text>
                    </TouchableOpacity>
                </View>

                {/* Request Cards */}
                <View style={styles.requestCard}>
                    <View style={styles.urgencyBadge}>
                        <Text style={styles.urgencyText}>Very Urgent</Text>
                    </View>
                    <Text style={styles.requestName}>Name: St Nicholas Hospital</Text>
                    <Text style={styles.requestLocation}>Location: No 26, Toyin Street, Ikeja.</Text>
                    <TouchableOpacity style={styles.donateButton}>
                        <Text style={styles.donateButtonText}>Donate Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.requestCard}>
                    <View style={[styles.urgencyBadge, styles.urgencyModerate]}>
                        <Text style={styles.urgencyText}>Moderate</Text>
                    </View>
                    <Text style={styles.requestName}>Name: St Nicholas Hospital</Text>
                    <Text style={styles.requestLocation}>Location: No 26, Toyin Street, Ikeja.</Text>
                    <TouchableOpacity style={styles.donateButton}>
                        <Text style={styles.donateButtonText}>Donate Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.requestCard}>
                    <View style={[styles.urgencyBadge, styles.urgencyNotUrgent]}>
                        <Text style={[styles.urgencyText, styles.urgencyTextBlack]}>Not Urgent</Text>
                    </View>
                    <Text style={styles.requestName}>Name: St Nicholas Hospital</Text>
                    <Text style={styles.requestLocation}>Location: No 26, Toyin Street, Ikeja.</Text>
                    <TouchableOpacity style={styles.donateButton}>
                        <Text style={styles.donateButtonText}>Donate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Verified Blood Banks */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Verified Blood Banks Near You</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>See More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bankCard}>
                    <View style={styles.bankIcon}>
                        <Text style={styles.bankIconText}>🏥</Text>
                    </View>
                    <View style={styles.bankInfo}>
                        <Text style={styles.bankName}>St Nicholas Hospital, Ajah</Text>
                        <Text style={styles.bankDistance}>30 km away</Text>
                        <View style={styles.rating}>
                            {[1, 2, 3, 4].map((star) => (
                                <Text key={star} style={styles.star}>⭐</Text>
                            ))}
                            <Text style={styles.starEmpty}>⭐</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bankCard}>
                    <View style={styles.bankIcon}>
                        <Text style={styles.bankIconText}>🏥</Text>
                    </View>
                    <View style={styles.bankInfo}>
                        <Text style={styles.bankName}>General Hospital Odan, Lagos</Text>
                        <Text style={styles.bankDistance}>30 km away</Text>
                        <View style={styles.rating}>
                            {[1, 2, 3, 4].map((star) => (
                                <Text key={star} style={styles.star}>⭐</Text>
                            ))}
                            <Text style={styles.starEmpty}>⭐</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bankCard}>
                    <View style={styles.bankIcon}>
                        <Text style={styles.bankIconText}>🏥</Text>
                    </View>
                    <View style={styles.bankInfo}>
                        <Text style={styles.bankName}>The Eko  Hospital, Ajah</Text>
                        <Text style={styles.bankDistance}>30 km away</Text>
                        <View style={styles.rating}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Text key={star} style={styles.star}>⭐</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>

            {/* Testimonials */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Testimonials</Text>
                <View style={styles.testimonialCard}>
                    <View style={styles.testimonialHeader}>
                        <View style={styles.testimonialAvatar}>
                            <Text style={styles.avatarText}>S</Text>
                        </View>
                        <View style={styles.testimonialInfo}>
                            <Text style={styles.testimonialName}>Sobhral O.</Text>
                            <Text style={styles.testimonialRole}>Blood Donor</Text>
                        </View>
                    </View>
                    <Text style={styles.testimonialText}>
                        This platform has made blood donation so effortless and rewarding. I love the gamification!
                    </Text>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.m,
        paddingBottom: SPACING.s,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.s,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: COLORS.secondary,
        fontSize: 24,
        fontWeight: '600',
    },
    greeting: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
    },
    subGreeting: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    menuButton: {
        padding: SPACING.s,
    },
    menuIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SPACING.m,
        marginVertical: SPACING.m,
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
    searchInput: {
        flex: 1,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    heroCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.l,
        padding: SPACING.l,
        backgroundColor: '#F5F5F7',
        borderRadius: 16,
    },
    heroContent: {},
    heroText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    heroTextRed: {
        color: COLORS.primary,
    },
    heroIllustration: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroEmoji: {
        fontSize: 40,
    },
    section: {
        marginBottom: SPACING.l,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        marginBottom: SPACING.m,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        color: COLORS.text,
    },
    seeMore: {
        fontSize: FONT_SIZE.s,
        color: COLORS.primary,
        fontWeight: '600',
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
    urgencyBadge: {
        position: 'absolute',
        top: -8,
        right: 16,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.m,
        paddingVertical: 4,
        borderRadius: 12,
    },
    urgencyModerate: {
        backgroundColor: '#FFA500',
    },
    urgencyNotUrgent: {
        backgroundColor: '#000000',
    },
    urgencyText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: '600',
    },
    urgencyTextBlack: {
        color: COLORS.secondary,
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
    bankCard: {
        flexDirection: 'row',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.m,
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5EA',
    },
    bankIcon: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E8F4FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    bankIconText: {
        fontSize: 24,
    },
    bankInfo: {
        flex: 1,
    },
    bankName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    bankDistance: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: 4,
    },
    rating: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 16,
        color: '#FFD700',
    },
    starEmpty: {
        fontSize: 16,
        opacity: 0.3,
    },
    testimonialCard: {
        marginHorizontal: SPACING.m,
        padding: SPACING.m,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
    },
    testimonialHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    testimonialAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.s,
    },
    testimonialInfo: {},
    testimonialName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.secondary,
    },
    testimonialRole: {
        fontSize: FONT_SIZE.s,
        color: COLORS.secondary,
        opacity: 0.8,
    },
    testimonialText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.secondary,
        lineHeight: 20,
    },
});
