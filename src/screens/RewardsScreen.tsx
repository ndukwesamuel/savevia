// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

// export const RewardsScreen = () => {
//     const badges = [
//         { id: 1, name: 'First Donation', icon: '🩸', completed: true },
//         { id: 2, name: '3 donations in 6 months', icon: '🔥', completed: false },
//         { id: 3, name: '1000 reward points', icon: '🔒', completed: false },
//     ];

//     const topDonors = [
//         { id: 1, name: 'Deborah Falola', donations: '6 donations in the last 10 months', avatar: 'D' },
//         { id: 2, name: 'Louis Ikenna', donations: '5 donations in the last 11 months', avatar: 'L' },
//         { id: 3, name: 'Amanda Ogar', donations: '4 donations in the last 8 months', avatar: 'A' },
//     ];

//     return (
//         <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <Text style={styles.title}>Earn Rewards for Saving Lives</Text>
//             </View>

//             {/* Rewards Card */}
//             <View style={styles.rewardsCard}>
//                 <View style={styles.cardContent}>
//                     <Text style={styles.cardLabel}>Reward Points</Text>
//                     <Text style={styles.cardPoints}>You Have</Text>
//                     <Text style={styles.cardValue}>750 points</Text>
//                     <Text style={styles.cardMessage}>Thank you for saving lives, hero.</Text>
//                 </View>
//                 <View style={styles.illustration}>
//                     <Text style={styles.illustrationIcon}>🩸</Text>
//                 </View>
//             </View>

//             {/* Progress */}
//             <View style={styles.progressSection}>
//                 <Text style={styles.progressText}>Save more lives to get next reward</Text>
//                 <View style={styles.progressBarContainer}>
//                     <View style={styles.progressBar} />
//                 </View>
//                 <Text style={styles.nextReward}>Next reward at 1000 points</Text>
//             </View>

//             {/* Badges */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Badges and Milestone</Text>
//                 {badges.map((badge) => (
//                     <View key={badge.id} style={styles.badgeItem}>
//                         <View style={styles.badgeIcon}>
//                             <Text style={styles.badgeIconText}>{badge.icon}</Text>
//                         </View>
//                         <Text style={styles.badgeText}>{badge.name}</Text>
//                         {badge.completed && <Text style={styles.checkmark}>✓</Text>}
//                     </View>
//                 ))}
//             </View>

//             {/* Top Donors */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Top Donors This Month</Text>
//                 {topDonors.map((donor, index) => (
//                     <View key={donor.id} style={styles.donorItem}>
//                         <View style={styles.donorAvatar}>
//                             <Text style={styles.donorAvatarText}>{donor.avatar}</Text>
//                         </View>
//                         <View style={styles.donorInfo}>
//                             <Text style={styles.donorName}>{donor.name}</Text>
//                             <Text style={styles.donorDonations}>{donor.donations}</Text>
//                         </View>
//                         {index === 0 && <Text style={styles.trophy}>🏆</Text>}
//                     </View>
//                 ))}
//             </View>

//             <View style={{ height: 20 }} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.background,
//     },
//     header: {
//         paddingHorizontal: SPACING.m,
//         paddingTop: SPACING.l,
//         paddingBottom: SPACING.m,
//     },
//     title: {
//         fontSize: FONT_SIZE.xl,
//         fontWeight: '600',
//         color: COLORS.text,
//     },
//     rewardsCard: {
//         flexDirection: 'row',
//         marginHorizontal: SPACING.m,
//         marginBottom: SPACING.l,
//         padding: SPACING.l,
//         backgroundColor: '#4CAF50',
//         borderRadius: 16,
//     },
//     cardContent: {
//         flex: 1,
//     },
//     cardLabel: {
//         fontSize: FONT_SIZE.s,
//         color: COLORS.secondary,
//         marginBottom: 4,
//     },
//     cardPoints: {
//         fontSize: FONT_SIZE.m,
//         color: COLORS.secondary,
//         marginBottom: 4,
//     },
//     cardValue: {
//         fontSize: FONT_SIZE.xxxl,
//         fontWeight: 'bold',
//         color: COLORS.secondary,
//         marginBottom: 8,
//     },
//     cardMessage: {
//         fontSize: FONT_SIZE.s,
//         color: COLORS.secondary,
//     },
//     illustration: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     illustrationIcon: {
//         fontSize: 40,
//     },
//     progressSection: {
//         paddingHorizontal: SPACING.m,
//         marginBottom: SPACING.l,
//     },
//     progressText: {
//         fontSize: FONT_SIZE.s,
//         color: COLORS.text,
//         marginBottom: SPACING.s,
//     },
//     progressBarContainer: {
//         height: 8,
//         backgroundColor: '#E5E5EA',
//         borderRadius: 4,
//         marginBottom: SPACING.xs,
//     },
//     progressBar: {
//         width: '75%',
//         height: '100%',
//         backgroundColor: '#4CAF50',
//         borderRadius: 4,
//     },
//     nextReward: {
//         fontSize: FONT_SIZE.xs,
//         color: COLORS.textLight,
//     },
//     section: {
//         paddingHorizontal: SPACING.m,
//         marginBottom: SPACING.l,
//     },
//     sectionTitle: {
//         fontSize: FONT_SIZE.l,
//         fontWeight: '600',
//         color: COLORS.text,
//         marginBottom: SPACING.m,
//     },
//     badgeItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: SPACING.m,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E5EA',
//     },
//     badgeIcon: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: '#F5F5F7',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: SPACING.m,
//     },
//     badgeIconText: {
//         fontSize: 20,
//     },
//     badgeText: {
//         flex: 1,
//         fontSize: FONT_SIZE.m,
//         color: COLORS.text,
//     },
//     checkmark: {
//         fontSize: 20,
//         color: '#4CAF50',
//     },
//     donorItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: SPACING.m,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E5EA',
//     },
//     donorAvatar: {
//         width: 48,
//         height: 48,
//         borderRadius: 24,
//         backgroundColor: COLORS.primary,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: SPACING.m,
//     },
//     donorAvatarText: {
//         color: COLORS.secondary,
//         fontSize: 20,
//         fontWeight: '600',
//     },
//     donorInfo: {
//         flex: 1,
//     },
//     donorName: {
//         fontSize: FONT_SIZE.m,
//         fontWeight: '600',
//         color: COLORS.text,
//         marginBottom: 4,
//     },
//     donorDonations: {
//         fontSize: FONT_SIZE.s,
//         color: COLORS.textLight,
//     },
//     trophy: {
//         fontSize: 24,
//     },
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

interface RewardsScreenProps {
  navigation?: any;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ navigation }) => {
  const userPoints = 750;
  const nextRewardPoints = 1000;
  const progress = (userPoints / nextRewardPoints) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#10B981" />

      {/* Curved Green Header */}
      <View style={styles.headerCurve}>
        <Text style={styles.time}>9:41</Text>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Earn Rewards for Saving Lives</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Reward Points Card */}
        <View style={styles.rewardCard}>
          <Text style={styles.rewardPointsLabel}>Reward Points</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardLeft}>
              <Text style={styles.youHave}>You Have</Text>
              <Text style={styles.pointsText}>{userPoints} points</Text>
              <Text style={styles.thankYouText}>
                Thank you for saving lives, hero.
              </Text>
            </View>
            <View style={styles.cardRight}>
              <View style={styles.illustrationCircle}>
                <View style={styles.innerCircle}>
                  <Text style={styles.heartEmoji}>❤️</Text>
                  <Text style={styles.handsEmoji}>🙌</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <Text style={styles.progressTitle}>
            Save more lives to get next reward
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>
          <Text style={styles.nextRewardText}>
            Next reward at {nextRewardPoints} points
          </Text>
        </View>

        {/* Badges and Milestone Section */}
        <View style={styles.badgesSection}>
          <Text style={styles.sectionTitle}>Badges and Milestone</Text>

          {/* Badge Item 1 */}
          <View style={styles.badgeItem}>
            <View style={styles.badgeIcon}>
              <Text style={styles.badgeEmoji}>🥇</Text>
            </View>
            <Text style={styles.badgeText}>First Donation</Text>
            <Text style={styles.badgeCheck}>✓</Text>
          </View>

          {/* Badge Item 2 */}
          <View style={styles.badgeItem}>
            <View style={styles.badgeIcon}>
              <Text style={styles.badgeEmoji}>🥇</Text>
            </View>
            <Text style={styles.badgeText}>3 donations in 6 months</Text>
            <Text style={styles.badgeFire}>🔥</Text>
          </View>

          {/* Badge Item 3 */}
          <View style={styles.badgeItem}>
            <View style={styles.badgeIcon}>
              <Text style={styles.badgeEmoji}>🥇</Text>
            </View>
            <Text style={styles.badgeText}>1000 reward points</Text>
            <Text style={styles.badgeLock}>🔒</Text>
          </View>
        </View>

        {/* Top Donors Section */}
        <View style={styles.topDonorsSection}>
          <Text style={styles.sectionTitle}>Top Donors this Month</Text>

          {/* Donor 1 */}
          <View style={styles.donorItem}>
            <View style={styles.donorAvatar}>
              <View style={styles.avatarPlaceholder} />
            </View>
            <View style={styles.donorInfo}>
              <Text style={styles.donorName}>Deborah Falola</Text>
              <Text style={styles.donorStats}>
                6 Donations in the last 10 months
              </Text>
            </View>
          </View>

          {/* Donor 2 */}
          <View style={styles.donorItem}>
            <View style={styles.donorAvatar}>
              <View style={styles.avatarPlaceholder} />
            </View>
            <View style={styles.donorInfo}>
              <Text style={styles.donorName}>Louis Ikenna</Text>
              <Text style={styles.donorStats}>
                4 donations in the last 11 months
              </Text>
            </View>
          </View>

          {/* Donor 3 */}
          <View style={styles.donorItem}>
            <View style={styles.donorAvatar}>
              <View style={styles.avatarPlaceholder} />
            </View>
            <View style={styles.donorInfo}>
              <Text style={styles.donorName}>Amanda Ozee</Text>
              <Text style={styles.donorStats}>
                3 donations in the last 8 months
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerCurve: {
    backgroundColor: "#10B981",
    height: 80,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    paddingTop: 15,
    paddingLeft: 20,
  },
  time: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  rewardCard: {
    backgroundColor: "#059669",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  rewardPointsLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLeft: {
    flex: 1,
  },
  youHave: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 4,
  },
  pointsText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  thankYouText: {
    color: "#FFFFFF",
    fontSize: 13,
    lineHeight: 18,
  },
  cardRight: {
    marginLeft: 16,
  },
  illustrationCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#34D399",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  heartEmoji: {
    fontSize: 28,
  },
  handsEmoji: {
    fontSize: 20,
    marginTop: -8,
  },
  progressSection: {
    backgroundColor: "#86EFAC",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 14,
    color: "#000",
    marginBottom: 12,
  },
  progressBarContainer: {
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#34D399",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#059669",
  },
  nextRewardText: {
    fontSize: 12,
    color: "#000",
  },
  badgesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
    marginBottom: 16,
  },
  badgeItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  badgeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  badgeEmoji: {
    fontSize: 20,
  },
  badgeText: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  badgeCheck: {
    fontSize: 18,
    color: "#10B981",
  },
  badgeFire: {
    fontSize: 18,
  },
  badgeLock: {
    fontSize: 18,
  },
  topDonorsSection: {
    marginBottom: 24,
  },
  donorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  donorAvatar: {
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D1D5DB",
  },
  donorInfo: {
    flex: 1,
  },
  donorName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  donorStats: {
    fontSize: 12,
    color: "#6B7280",
  },
});

export default RewardsScreen;
