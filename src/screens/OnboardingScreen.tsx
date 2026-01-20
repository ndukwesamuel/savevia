import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
    onComplete: () => void;
}

const ONBOARDING_DATA = [
    {
        id: 1,
        illustration: '❤️',
        title: 'Donate Blood',
        description: 'Save lives and become a hero by donating blood to verified and trusted hospitals around you.',
    },
    {
        id: 2,
        illustration: '🤖',
        title: 'Instant AI Matching',
        description: 'Quickly find and connect with available blood donors nearby in real time.',
    },
    {
        id: 3,
        illustration: '🎁',
        title: 'Gain Rewards and Gifts',
        description: 'Earn exciting rewards and gifts every time you donate blood.',
    },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < ONBOARDING_DATA.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onComplete();
        }
    };

    const handleSkip = () => {
        onComplete();
    };

    const currentSlide = ONBOARDING_DATA[currentIndex];
    const isLastSlide = currentIndex === ONBOARDING_DATA.length - 1;

    return (
        <View style={styles.container}>
            {/* Skip Button */}
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            {/* Illustration Area */}
            <View style={styles.illustrationContainer}>
                <View style={styles.illustrationCircle}>
                    <Text style={styles.illustrationEmoji}>{currentSlide.illustration}</Text>
                </View>
            </View>

            {/* Content Card */}
            <View style={styles.contentCard}>
                <Text style={styles.title}>{currentSlide.title}</Text>
                <Text style={styles.description}>{currentSlide.description}</Text>

                {/* Bottom Section */}
                <View style={styles.bottomContainer}>
                    {/* Progress Dots */}
                    <View style={styles.dotsContainer}>
                        {ONBOARDING_DATA.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    index === currentIndex ? styles.dotActive : styles.dotInactive,
                                ]}
                            />
                        ))}
                    </View>

                    {/* Next/Get Started Button */}
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtonText}>
                            {isLastSlide ? 'Get Started' : 'Next'} →
                        </Text>
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
    skipButton: {
        position: 'absolute',
        top: 50,
        right: SPACING.m,
        zIndex: 10,
        padding: SPACING.s,
    },
    skipText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    illustrationContainer: {
        flex: 0.45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustrationCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#E8F4F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustrationEmoji: {
        fontSize: 80,
    },
    contentCard: {
        flex: 0.55,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: SPACING.xl,
        paddingTop: SPACING.xxl,
    },
    title: {
        fontSize: FONT_SIZE.xxl + 2,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginBottom: SPACING.m,
    },
    description: {
        fontSize: FONT_SIZE.m,
        color: COLORS.secondary,
        lineHeight: 24,
        marginBottom: SPACING.xl,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
    },
    dotsContainer: {
        flexDirection: 'row',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: SPACING.s,
    },
    dotActive: {
        backgroundColor: COLORS.secondary,
        width: 24,
    },
    dotInactive: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    nextButton: {
        paddingVertical: SPACING.s,
        paddingHorizontal: SPACING.m,
    },
    nextButtonText: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.secondary,
    },
});
