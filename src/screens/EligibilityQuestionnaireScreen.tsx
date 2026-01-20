import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface EligibilityQuestionnaireProps {
    onContinue: () => void;
    onBack: () => void;
}

export const EligibilityQuestionnaireScreen: React.FC<EligibilityQuestionnaireProps> = ({ onContinue, onBack }) => {
    const [recentIllnesses, setRecentIllnesses] = useState<'yes' | 'no' | null>(null);
    const [donatedRecently, setDonatedRecently] = useState<'yes' | 'no' | null>(null);
    const [feelingWell, setFeelingWell] = useState<'yes' | 'no' | null>(null);

    const canContinue = recentIllnesses !== null && donatedRecently !== null && feelingWell !== null;

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Are you eligible to donate?</Text>

                {/* Question 1 */}
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Recent Illnesses?</Text>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setRecentIllnesses('yes')}
                        >
                            <View style={[styles.radio, recentIllnesses === 'yes' && styles.radioSelected]}>
                                {recentIllnesses === 'yes' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setRecentIllnesses('no')}
                        >
                            <View style={[styles.radio, recentIllnesses === 'no' && styles.radioSelected]}>
                                {recentIllnesses === 'no' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Question 2 */}
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Donated in the last 8 weeks?</Text>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setDonatedRecently('yes')}
                        >
                            <View style={[styles.radio, donatedRecently === 'yes' && styles.radioSelected]}>
                                {donatedRecently === 'yes' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setDonatedRecently('no')}
                        >
                            <View style={[styles.radio, donatedRecently === 'no' && styles.radioSelected]}>
                                {donatedRecently === 'no' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Question 3 */}
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Feeling Well?</Text>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setFeelingWell('yes')}
                        >
                            <View style={[styles.radio, feelingWell === 'yes' && styles.radioSelected]}>
                                {feelingWell === 'yes' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionRow}
                            onPress={() => setFeelingWell('no')}
                        >
                            <View style={[styles.radio, feelingWell === 'no' && styles.radioSelected]}>
                                {feelingWell === 'no' && <View style={styles.radioDot} />}
                            </View>
                            <Text style={styles.optionText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.continueButton, !canContinue && styles.continueButtonDisabled]}
                    onPress={onContinue}
                    disabled={!canContinue}
                >
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
    questionContainer: {
        marginBottom: SPACING.xl,
    },
    questionText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
        marginBottom: SPACING.m,
    },
    optionsContainer: {
        gap: SPACING.m,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#D1D1D6',
        marginRight: SPACING.m,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioSelected: {
        borderColor: COLORS.primary,
    },
    radioDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.primary,
    },
    optionText: {
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
    continueButtonDisabled: {
        opacity: 0.5,
    },
    continueButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
