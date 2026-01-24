import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Type definitions
interface UserData {
  name: string;
  email: string;
  profileImage: string;
  bloodGroup: string;
  livesSaved: number;
  nextDonationDate: string;
}

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  showBorder?: boolean;
}

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  number?: string | number;
  subLabel?: string;
}

// Separate MenuItem component for better organization
const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  onPress,
  rightElement,
  showBorder = true,
}) => (
  <TouchableOpacity
    style={[styles.menuItem, !showBorder && { borderBottomWidth: 0 }]}
    onPress={onPress}
  >
    <View style={styles.menuItemLeft}>
      <View style={styles.menuIconContainer}>{icon}</View>
      <Text style={styles.menuItemText}>{text}</Text>
    </View>
    {rightElement}
  </TouchableOpacity>
);

// Separate StatItem component
const StatItem: React.FC<StatItemProps> = ({
  icon,
  label,
  number,
  subLabel,
}) => (
  <View style={styles.statItem}>
    <View style={styles.iconCircle}>{icon}</View>
    <Text style={styles.statLabel}>
      {number && <Text style={styles.statNumber}>{number}</Text>}
      {number && " "}
      {label}
      {subLabel && (
        <>
          {"\n"}
          <Text style={styles.statSubLabel}>{subLabel}</Text>
        </>
      )}
    </Text>
  </View>
);

const ProfileScreen: React.FC = () => {
  const [isAvailableToDonate, setIsAvailableToDonate] = useState<boolean>(true);

  // User data - in a real app, this would come from props or state management
  const userData: UserData = {
    name: "Mary Olayemi",
    email: "maryolayemi@gmail.com",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bloodGroup: "O+",
    livesSaved: 4,
    nextDonationDate: "20 April",
  };

  // Navigation handlers
  const handleEditProfile = () => {
    console.log("Navigate to edit profile");
    // navigation.navigate('EditProfile');
  };

  const handleManageDetails = () => {
    console.log("Navigate to manage details");
    // navigation.navigate('ManageDetails');
  };

  const handleDonationHistory = () => {
    console.log("Navigate to donation history");
    // navigation.navigate('DonationHistory');
  };

  const handleSwitchAccount = () => {
    console.log("Switch to patients account");
    // Implement account switching logic
  };

  const handleNavigateToHome = () => {
    console.log("Navigate to home");
  };

  const handleNavigateToChat = () => {
    console.log("Navigate to chat");
  };

  const handleNavigateToNotifications = () => {
    console.log("Navigate to notifications");
  };

  const handleNavigateToAchievements = () => {
    console.log("Navigate to achievements");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section with Gradient */}
        <LinearGradient
          colors={["#DC143C", "#B31B36", "#8B0000"]}
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Edit Icon */}
          <TouchableOpacity
            style={styles.editIconContainer}
            onPress={handleEditProfile}
            accessibilityLabel="Edit profile"
            accessibilityRole="button"
          >
            <MaterialCommunityIcons name="pencil" size={24} color="#FFF" />
          </TouchableOpacity>

          {/* Profile Picture */}
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={handleEditProfile}
          >
            <Image
              source={{ uri: userData.profileImage }}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          {/* Edit Text */}
          <TouchableOpacity onPress={handleEditProfile}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>

          {/* User Name */}
          <Text style={styles.userName}>{userData.name}</Text>

          {/* Email */}
          <Text style={styles.userEmail}>{userData.email}</Text>
        </LinearGradient>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          {/* Blood Group */}
          <StatItem
            icon={<Ionicons name="water" size={20} color="#DC143C" />}
            label="Group"
            number={userData.bloodGroup}
          />

          {/* Divider */}
          <View style={styles.verticalDivider} />

          {/* Lives Saved */}
          <StatItem
            icon={
              <MaterialCommunityIcons
                name="heart-plus"
                size={20}
                color="#DC143C"
              />
            }
            label="Lives Saved"
            number={userData.livesSaved}
          />

          {/* Divider */}
          <View style={styles.verticalDivider} />

          {/* Next Donation Date */}
          <StatItem
            icon={<Ionicons name="calendar" size={18} color="#DC143C" />}
            label=""
            number={userData.nextDonationDate}
            subLabel="Next Donation date"
          />
        </View>

        {/* Menu Items Section */}
        <View style={styles.menuSection}>
          {/* Available to Donate Toggle */}
          <MenuItem
            icon={
              <Ionicons name="calendar-outline" size={22} color="#DC143C" />
            }
            text="Available to donate"
            rightElement={
              <Switch
                value={isAvailableToDonate}
                onValueChange={setIsAvailableToDonate}
                trackColor={{ false: "#D1D5DB", true: "#FCA5A5" }}
                thumbColor={isAvailableToDonate ? "#DC143C" : "#F3F4F6"}
                ios_backgroundColor="#D1D5DB"
              />
            }
          />

          {/* Manage Personal Details */}
          <MenuItem
            icon={
              <MaterialCommunityIcons
                name="pencil-outline"
                size={22}
                color="#DC143C"
              />
            }
            text="Manage personal details"
            onPress={handleManageDetails}
            rightElement={
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            }
          />

          {/* Check Donation History */}
          <MenuItem
            icon={<Ionicons name="time-outline" size={22} color="#DC143C" />}
            text="Check donation history"
            onPress={handleDonationHistory}
            rightElement={
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            }
          />

          {/* Switch to Patients Account */}
          <MenuItem
            icon={<Ionicons name="swap-horizontal" size={22} color="#DC143C" />}
            text="Switch to patients account"
            onPress={handleSwitchAccount}
            rightElement={
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            }
            showBorder={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToHome}
          accessibilityLabel="Home"
          accessibilityRole="button"
        >
          <Ionicons name="home-outline" size={26} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToChat}
          accessibilityLabel="Chat"
          accessibilityRole="button"
        >
          <Ionicons name="chatbubbles-outline" size={26} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, styles.navItemActive]}
          onPress={handleNavigateToNotifications}
          accessibilityLabel="Notifications"
          accessibilityRole="button"
        >
          <Ionicons name="notifications" size={26} color="#DC143C" />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToAchievements}
          accessibilityLabel="Achievements"
          accessibilityRole="button"
        >
          <Ionicons name="trophy-outline" size={26} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={handleEditProfile}
          accessibilityLabel="Profile"
          accessibilityRole="button"
        >
          <Image
            source={{ uri: userData.profileImage }}
            style={styles.navProfileImage}
          />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  headerGradient: {
    paddingTop: 10,
    paddingBottom: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    position: "relative",
  },
  editIconContainer: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 10,
  },
  profileImageContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#FFF",
  },
  editText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  userName: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    color: "#FFF",
    fontSize: 14,
    opacity: 0.9,
  },
  statsCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: -15,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 16,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  statSubLabel: {
    fontSize: 10,
    color: "#9CA3AF",
  },
  verticalDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#E5E7EB",
  },
  menuSection: {
    marginTop: 20,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  navItemActive: {
    // Active state styling
  },
  activeIndicator: {
    width: 40,
    height: 3,
    backgroundColor: "#DC143C",
    borderRadius: 2,
    position: "absolute",
    bottom: -12,
  },
  navProfileImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});

export default ProfileScreen;
