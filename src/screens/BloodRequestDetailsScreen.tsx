import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS, SHADOWS } from '../constants/theme';

export const BloodRequestDetailsScreen = ({ navigation, route }: any) => {
    // Mock data - in real app this would come from API/route params
    const requestDetails = route?.params || {
        hospital: 'St Nicholas Hospital, Ajah.',
        location: 'No 26, Thompson Street, Ajah',
        reason: 'Surgery',
        quantity: '2 pints',
        bloodType: 'O+, AB, A+',
        urgency: 'Immediate',
        urgencyLevel: 'urgent' // urgent, moderate, low
    };

    const getUrgencyColor = () => {
        switch (requestDetails.urgencyLevel) {
            case 'urgent':
                return COLORS.urgentHigh;
            case 'moderate':
                return COLORS.urgentMedium;
            default:
                return COLORS.urgentLow;
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Blood Request Details</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Name of Hospital */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Name of Hospital</Text>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}>{requestDetails.hospital}</Text>
                    </View>
                </View>

                {/* Location */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Location</Text>
                    <View style={[styles.inputBox, styles.locationBox]}>
                        <Text style={[styles.inputText, styles.locationText]}>
                            {requestDetails.location}
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.viewMapText}>View Map</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Reason */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Reason</Text>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}>{requestDetails.reason}</Text>
                    </View>
                </View>

                {/* Quantity Needed */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Quantity Needed</Text>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}>{requestDetails.quantity}</Text>
                    </View>
                </View>

                {/* Blood Type Needed */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Blood Type Needed</Text>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputText}>{requestDetails.bloodType}</Text>
                    </View>
                </View>

                {/* Urgency Level */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Urgency Level</Text>
                    <View style={[styles.urgencyBox, { backgroundColor: getUrgencyColor() }]}>
                        <Text style={styles.urgencyText}>{requestDetails.urgency}</Text>
                    </View>
                </View>

                {/* Continue Button */}
                <TouchableOpacity style={styles.continueButton}>
                    <LinearGradient
                        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.continueButtonGradient}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
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
        paddingHorizontal: SPACING.l,
        paddingTop: 50,
        paddingBottom: SPACING.m,
        backgroundColor: COLORS.background,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: SPACING.l,
        paddingTop: SPACING.l,
    },
    fieldContainer: {
        marginBottom: SPACING.l,
    },
    label: {
        fontSize: FONT_SIZE.m,
        fontWeight: '500',
        color: COLORS.text,
        marginBottom: SPACING.s,
    },
    inputBox: {
        backgroundColor: '#E8E5F3',
        borderRadius: BORDER_RADIUS.m,
        borderWidth: 1,
        borderColor: '#D1CCEB',
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m,
    },
    inputText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    locationBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationText: {
        flex: 1,
        marginRight: SPACING.m,
    },
    viewMapText: {
        fontSize: FONT_SIZE.m,
        color: '#4CAF50',
        fontWeight: '600',
    },
    urgencyBox: {
        borderRadius: BORDER_RADIUS.m,
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.m,
        alignItems: 'center',
    },
    urgencyText: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.secondary,
    },
    continueButton: {
        marginTop: SPACING.xl,
        borderRadius: BORDER_RADIUS.m,
        overflow: 'hidden',
        ...SHADOWS.medium,
    },
    continueButtonGradient: {
        paddingVertical: SPACING.m,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: FONT_SIZE.l,
        fontWeight: '700',
        color: COLORS.secondary,
    },
});
