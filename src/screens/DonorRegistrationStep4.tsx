import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface DonorRegistrationStep4Props {
    onFinish: () => void;
    onBack: () => void;
}

export const DonorRegistrationStep4: React.FC<DonorRegistrationStep4Props> = ({ onFinish, onBack }) => {
    const [highBloodPressure, setHighBloodPressure] = useState<'yes' | 'no' | null>(null);
    const [piercing, setPiercing] = useState<string>('fever');
    const [animalBite, setAnimalBite] = useState<'yes' | 'no' | null>(null);
    const [animalBiteDetails, setAnimalBiteDetails] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Register As A Donor</Text>
                <Text style={styles.subtitle}>Fill in the correct details below</Text>

                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>4/4</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '100%' }]} />
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>Do you have high blood pressure?</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity style={styles.radioOption} onPress={() => setHighBloodPressure('yes')}>
                                <View style={styles.radio}>
                                    {highBloodPressure === 'yes' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.radioOption} onPress={() => setHighBloodPressure('no')}>
                                <View style={styles.radio}>
                                    {highBloodPressure === 'no' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>
                            Have you had any body piercing in the past two years?
                        </Text>
                        <View style={styles.radioGroup}>
                            {['Fever', 'Cold/Flu', 'Chronic Illness', 'None of the above'].map((opt) => (
                                <TouchableOpacity key={opt} style={styles.radioOption} onPress={() => setPiercing(opt.toLowerCase())}>
                                    <View style={styles.radio}>
                                        {piercing === opt.toLowerCase() && <View style={styles.radioSelected} />}
                                    </View>
                                    <Text style={styles.radioLabel}>{opt}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.questionGroup}>
                        <Text style={styles.questionText}>
                            Have you ever been bitten by an animal in less than two years?
                        </Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity style={styles.radioOption} onPress={() => setAnimalBite('yes')}>
                                <View style={styles.radio}>
                                    {animalBite === 'yes' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.radioOption} onPress={() => setAnimalBite('no')}>
                                <View style={styles.radio}>
                                    {animalBite === 'no' && <View style={styles.radioSelected} />}
                                </View>
                                <Text style={styles.radioLabel}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {animalBite === 'yes' && (
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>If Yes, please specify</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Answer"
                                placeholderTextColor={COLORS.textLight}
                                value={animalBiteDetails}
                                onChangeText={setAnimalBiteDetails}
                            />
                        </View>
                    )}
                </View>

                <TouchableOpacity style={styles.finishBtn} onPress={onFinish}>
                    <Text style={styles.finishBtnText}>Finish</Text>
                </TouchableOpacity>
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
    finishBtn: { marginTop: SPACING.xl, backgroundColor: COLORS.primary, borderRadius: 8, paddingVertical: SPACING.m, alignItems: 'center' },
    finishBtnText: { fontSize: FONT_SIZE.m, color: COLORS.secondary, fontWeight: '600' },
});
