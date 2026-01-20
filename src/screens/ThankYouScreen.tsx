import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface ThankYouScreenProps {
    onBack: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onBack }) => {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            {/* Content */}
            <View style={styles.content}>
                {/* Illustration */}
                <View style={styles.illustration}>
                    <Text style={styles.illustrationText}>❤️</Text>
                </View>

                <Text style={styles.title}>Thank You</Text>
                <Text style={styles.subtitle}>Thank you for donating</Text>

                {/* Hospital Info */}
                <View style={styles.hospitalCard}>
                    <View style={styles.hospitalIcon}>
                        <Text style={styles.hospitalIconText}>🏥</Text>
                    </View>
                    <View style={styles.hospitalInfo}>
                        <Text style={styles.hospitalName}>St Nicholas Hospital, Ajah</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewMap}>View Map</Text>
                        </TouchableOpacity>
                        <Text style={styles.contactDetails}>Contact Details: 08089468937</Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <Text style={styles.callButtonText}>Call Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={styles.messageButtonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
    },
    illustration: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.l,
    },
    illustrationText: {
        fontSize: 60,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xs,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
        marginBottom: SPACING.xl,
        textAlign: 'center',
    },
    hospitalCard: {
        flexDirection: 'row',
        width: '100%',
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        marginBottom: SPACING.l,
    },
    hospitalIcon: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E8F4FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    hospitalIconText: {
        fontSize: 24,
    },
    hospitalInfo: {
        flex: 1,
    },
    hospitalName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    viewMap: {
        fontSize: FONT_SIZE.s,
        color: COLORS.primary,
        marginBottom: 4,
    },
    contactDetails: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: SPACING.m,
    },
    callButton: {
        flex: 1,
        paddingVertical: SPACING.m,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.primary,
        alignItems: 'center',
    },
    callButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
    messageButton: {
        flex: 1,
        paddingVertical: SPACING.m,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
    messageButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
