import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../constants/theme";

export const DonorProfileScreen = () => {
  const [availableToDonate, setAvailableToDonate] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <View style={styles.editBadge}>
            <Text style={styles.editIcon}>📷</Text>
          </View>
        </View>
        <Text style={styles.name}>Mary Olayemi</Text>
        <Text style={styles.email}>maryolayemi@gmail.com</Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🩸</Text>
          <Text style={styles.statValue}>O+</Text>
          <Text style={styles.statLabel}>Group</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>❤️</Text>
          <Text style={styles.statValue}>4+</Text>
          <Text style={styles.statLabel}>Lives Saved</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📅</Text>
          <Text style={styles.statValue}>20th</Text>
          <Text style={styles.statLabel}>April</Text>
        </View>
      </View>

      {/* Settings Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.menuIconContainer}>
              <Text style={styles.menuIcon}>✓</Text>
            </View>
            <Text style={styles.menuText}>Available to donate</Text>
          </View>
          <Switch
            value={availableToDonate}
            onValueChange={setAvailableToDonate}
            trackColor={{ false: "#D1D1D6", true: COLORS.primary }}
            thumbColor={COLORS.secondary}
          />
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.menuIconContainer}>
              <Text style={styles.menuIcon}>📝</Text>
            </View>
            <Text style={styles.menuText}>Manage Personal Details</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.menuIconContainer}>
              <Text style={styles.menuIcon}>📊</Text>
            </View>
            <Text style={styles.menuText}>Check Donation history</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.menuIconContainer}>
              <Text style={styles.menuIcon}>🔄</Text>
            </View>
            <Text style={styles.menuText}>Switch to patients account</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileHeader: {
    alignItems: "center",
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.l,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: SPACING.m,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: COLORS.secondary,
    fontSize: 40,
    fontWeight: "600",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  editIcon: {
    fontSize: 16,
  },
  name: {
    fontSize: FONT_SIZE.xl,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 4,
  },
  email: {
    fontSize: FONT_SIZE.s,
    color: COLORS.textLight,
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: SPACING.m,
    marginBottom: SPACING.l,
    gap: SPACING.m,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    padding: SPACING.m,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
  statIcon: {
    fontSize: 24,
    marginBottom: SPACING.xs,
  },
  statValue: {
    fontSize: FONT_SIZE.xl,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.textLight,
  },
  menuContainer: {
    marginHorizontal: SPACING.m,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.m,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#FFE5E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.m,
  },
  menuIcon: {
    fontSize: 16,
  },
  menuText: {
    fontSize: FONT_SIZE.m,
    color: COLORS.text,
    fontWeight: "500",
  },
  arrow: {
    fontSize: 20,
    color: COLORS.textLight,
  },
});
