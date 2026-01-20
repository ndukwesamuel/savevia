import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface DonorRegistrationStep3Props {
    onNext: (data: any) => void;
    onBack: () => void;
}

export const DonorRegistrationStep3: React.FC<DonorRegistrationStep3Props> = ({ onNext, onBack }) => {
    const [donated, setDonated] = useState<'yes' | 'no' | null>(null);
    const [condition, setCondition] = useState<string>('fever');
    const [medication, setMedication] = useState<'yes' | 'no' | null>(null);
    const [medicationDetails, setMedicationDetails] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Register As A Donor</Text>
                <Text style={styles.subtitle}>Fill in the correct details below</Text>

                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>3/4</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '75%' }]} />
                    </View>
                </View>

                <View style={styles.form}>
                    {/* Question 1 */}
                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>
                            Have you donated blood in the last three months?
                        </Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setDonated('yes')}
                            >
                                <View style={styles.radio}>
                                    {donated === 'yes' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setDonated('no')}
                            >
                                <View style={styles.radio}>
                                    {donated === 'no' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Question 2 */}
                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>
                            Have you experienced any of the following conditions recently?
                        </Text>
                        <View style={styles.radioGroup}>
                            {['Fever', 'Cold/Flu', 'Chronic Illness', 'None of the above'].map((opt) => (
                                <TouchableOpacity
                                    key={opt}
                                    style={styles.radioOption}
                                    onPress={() => setCondition(opt.toLowerCase())}
                                >
                                    <View style={styles.radio}>
                                        {condition === opt.toLowerCase() && <View style={styles.radioSelected} />}
                                    </View>
                                    <Text style={styles.radioLabel}>{opt}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Question 3 */}
                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>
                            Are you currently on any medication?
                        </Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setMedication('yes')}
                            >
                                <View style={styles.radio}>
                                    {medication === 'yes' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setMedication('no')}
                            >
                                <View style={styles.radio}>
                                    {medication === 'no' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Conditional Input */}
                    {medication === 'yes' && (
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>If Yes, please specify</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Answer"
                                placeholderTextColor={COLORS.textLight}
                                value={medicationDetails}
                                onChangeText={setMedicationDetails}
                            />
                        </View>
                    )}
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Text style={styles.backBtnIcon}>‹</Text>
                        <Text style={styles.backBtnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveBtn} onPress={() => onNext({ donated, condition, medication, medicationDetails })}>
                        <Text style={styles.saveBtnText}>Save</Text>
                        <Text style={styles.saveBtnIcon}>›</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    scrollContent: { paddingHorizontal: SPACING.m, paddingBottom: SPACING.xl },
    backButton: { marginTop: SPACING.m, marginBottom: SPACING.m },
    backIcon: { fontSize: 24, color: COLORS.text },
    title: { fontSize: FONT_SIZE.xl, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
    subtitle: { fontSize: FONT_SIZE.s, color: COLORS.textLight, marginBottom: SPACING.m },
    progressContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.l, gap: SPACING.s },
    progressText: { fontSize: FONT_SIZE.s, color: COLORS.text, fontWeight: '600' },
    progressBar: { flex: 1, height: 4, backgroundColor: '#E5E5EA', borderRadius: 2 },
    progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 2 },
    form: { gap: SPACING.l },
    questionGroup: { gap: SPACING.m },
    questionText: { fontSize: FONT_SIZE.m, color: COLORS.text, fontWeight: '500' },
    radioGroup: { gap: SPACING.s },
    radioOption: { flexDirection: 'row', alignItems: 'center', gap: SPACING.s },
    radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
    radioSelected: { width: 12, height: 12, borderRadius: 6, backgroundColor: COLORS.primary },
    radioLabel: { fontSize: FONT_SIZE.m, color: COLORS.text },
    inputGroup: { gap: SPACING.xs },
    label: { fontSize: FONT_SIZE.m, fontWeight: '500', color: COLORS.text },
    input: { borderWidth: 1, borderColor: '#E5E5EA', borderRadius: 8, paddingHorizontal: SPACING.m, paddingVertical: SPACING.m - 2, fontSize: FONT_SIZE.m, backgroundColor: '#F5F5F7' },
    actionButtons: { flexDirection: 'row', gap: SPACING.m, marginTop: SPACING.xl },
    backBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: SPACING.l, paddingVertical: SPACING.m, borderRadius: 8, borderWidth: 1, borderColor: '#E5E5EA', backgroundColor: COLORS.background, gap: SPACING.xs },
    backBtnIcon: { fontSize: 20, color: COLORS.text },
    backBtnText: { fontSize: FONT_SIZE.m, color: COLORS.text, fontWeight: '500' },
    saveBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: SPACING.m, borderRadius: 8, backgroundColor: COLORS.primary, gap: SPACING.xs },
    saveBtnText: { fontSize: FONT_SIZE.m, color: COLORS.secondary, fontWeight: '600' },
    saveBtnIcon: { fontSize: 20, color: COLORS.secondary },
});
