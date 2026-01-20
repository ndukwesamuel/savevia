import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface DonorRegistrationStep2Props {
    onNext: (data: any) => void;
    onBack: () => void;
}

export const DonorRegistrationStep2: React.FC<DonorRegistrationStep2Props> = ({ onNext, onBack }) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFile, setUploadedFile] = useState('');

    const handleUpload = () => {
        // Simulate file upload
        setUploadProgress(65); // Show progress
        setTimeout(() => {
            setUploadedFile('NIN_20250720_174356.PDF');
            setUploadProgress(100);
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>

                {/* Header */}
                <Text style={styles.title}>Register As A Donor</Text>
                <Text style={styles.subtitle}>Fill in the correct details below</Text>

                {/* Progress Indicator */}
                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>2/4</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '50%' }]} />
                    </View>
                </View>

                {/* Upload Section */}
                <View style={styles.uploadSection}>
                    <Text style={styles.sectionTitle}>Upload Documents</Text>

                    <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                        <Text style={styles.uploadButtonText}>Upload File</Text>
                        <Text style={styles.uploadIcon}>📎</Text>
                    </TouchableOpacity>

                    {uploadProgress > 0 && uploadProgress < 100 && (
                        <View style={styles.progressIndicator}>
                            <View style={styles.fileProgressBar}>
                                <View style={[styles.fileProgressFill, { width: `${uploadProgress}%` }]} />
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.cancelIcon}>⊗</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {uploadedFile && (
                        <View style={styles.uploadedFile}>
                            <Text style={styles.fileName}>{uploadedFile}</Text>
                            <TouchableOpacity onPress={() => setUploadedFile('')}>
                                <Text style={styles.removeIcon}>⊗</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Accepted Documents */}
                    <View style={styles.acceptedDocs}>
                        <Text style={styles.acceptedDocsTitle}>Accepted Documents</Text>
                        <View style={styles.docsList}>
                            <View style={styles.docItem}>
                                <View style={styles.checkCircle}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                                <Text style={styles.docText}>NIN Documents</Text>
                            </View>
                            <View style={styles.docItem}>
                                <View style={styles.checkCircle}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                                <Text style={styles.docText}>Drivers License</Text>
                            </View>
                            <View style={styles.docItem}>
                                <View style={styles.checkCircle}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                                <Text style={styles.docText}>International Passport</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Text style={styles.backBtnIcon}>‹</Text>
                        <Text style={styles.backBtnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveBtn} onPress={() => onNext({ uploadedFile })}>
                        <Text style={styles.saveBtnText}>Save</Text>
                        <Text style={styles.saveBtnIcon}>›</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    uploadSection: {
        gap: SPACING.m,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
    },
    uploadButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m,
        backgroundColor: '#F5F5F7',
    },
    uploadButtonText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
    },
    uploadIcon: {
        fontSize: 20,
    },
    progressIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.s,
    },
    fileProgressBar: {
        flex: 1,
        height: 8,
        backgroundColor: '#E5E5EA',
        borderRadius: 4,
    },
    fileProgressFill: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 4,
    },
    cancelIcon: {
        fontSize: 20,
        color: COLORS.textLight,
    },
    uploadedFile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SPACING.m,
        backgroundColor: '#F5F5F7',
        borderRadius: 8,
    },
    fileName: {
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
    },
    removeIcon: {
        fontSize: 20,
        color: COLORS.textLight,
    },
    acceptedDocs: {
        marginTop: SPACING.m,
    },
    acceptedDocsTitle: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: SPACING.s,
    },
    docsList: {
        gap: SPACING.s,
    },
    docItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.s,
    },
    checkCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.textLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    docText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    actionButtons: {
        flexDirection: 'row',
        gap: SPACING.m,
        marginTop: SPACING.xl,
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
