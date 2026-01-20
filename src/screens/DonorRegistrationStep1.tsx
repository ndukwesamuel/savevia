import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface DonorRegistrationStep1Props {
  onNext: (data: any) => void;
  onBack?: () => void;
}

export const DonorRegistrationStep1: React.FC<DonorRegistrationStep1Props> = ({ onNext, onBack }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [genotype, setGenotype] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleNext = () => {
    onNext({ age, gender, address, genotype, bloodGroup });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        )}

        {/* Header */}
        <Text style={styles.title}>Register As A Donor</Text>
        <Text style={styles.subtitle}>Fill in the correct details below</Text>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>1/4</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '25%' }]} />
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Age"
              placeholderTextColor={COLORS.textLight}
              value={age}
              onChangeText={setAge}
              keyboardType="number-pad"
            />
          </View >

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={gender ? styles.dropdownTextSelected : styles.dropdownTextPlaceholder}>
                {gender || 'Choose Gender'}
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Residential Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Residential Address"
              placeholderTextColor={COLORS.textLight}
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Genotype</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={genotype ? styles.dropdownTextSelected : styles.dropdownTextPlaceholder}>
                {genotype || 'Choose Genotype'}
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Blood Group</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={bloodGroup ? styles.dropdownTextSelected : styles.dropdownTextPlaceholder}>
                {bloodGroup || 'Select your blood group'}
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          {/* Help Text */}
          <Text style={styles.helpText}>
            Don't know your genotype?{' '}
            <Text style={styles.linkText}>Click here</Text> to find available medical centers
          </Text>
        </View >

        {/* Action Buttons */}
        < View style={styles.actionButtons} >
          <TouchableOpacity style={styles.backBtn} onPress={onBack}>
            <Text style={styles.backBtnIcon}>‹</Text>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn} onPress={handleNext}>
            <Text style={styles.saveBtnText}>Save</Text>
            <Text style={styles.saveBtnIcon}>›</Text>
          </TouchableOpacity>
        </View >
      </ScrollView >
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: SPACING.m,
    paddingBottom: SPACING.xl,
  },
  backButton: {
    marginTop: SPACING.m,
    marginBottom: SPACING.m,
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.text,
  },
  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZE.s,
    color: COLORS.textLight,
    marginBottom: SPACING.m,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.l,
    gap: SPACING.s,
  },
  progressText: {
    fontSize: FONT_SIZE.s,
    color: COLORS.text,
    fontWeight: '600',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  form: {
    gap: SPACING.m,
  },
  inputGroup: {
    gap: SPACING.xs,
  },
  label: {
    fontSize: FONT_SIZE.m,
    fontWeight: '500',
    color: COLORS.text,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.m - 2,
    fontSize: FONT_SIZE.m,
    backgroundColor: '#F5F5F7',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.m - 2,
    backgroundColor: '#F5F5F7',
  },
  dropdownTextPlaceholder: {
    fontSize: FONT_SIZE.m,
    color: COLORS.textLight,
  },
  dropdownTextSelected: {
    fontSize: FONT_SIZE.m,
    color: COLORS.text,
  },
  dropdownIcon: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  helpText: {
    fontSize: FONT_SIZE.s,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: SPACING.m,
    marginTop: SPACING.l,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.m,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    backgroundColor: COLORS.background,
    gap: SPACING.xs,
  },
  backBtnIcon: {
    fontSize: 20,
    color: COLORS.text,
  },
  backBtnText: {
    fontSize: FONT_SIZE.m,
    color: COLORS.text,
    fontWeight: '500',
  },
  saveBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.m,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    gap: SPACING.xs,
  },
  saveBtnText: {
    fontSize: FONT_SIZE.m,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  saveBtnIcon: {
    fontSize: 20,
    color: COLORS.secondary,
  },
});
