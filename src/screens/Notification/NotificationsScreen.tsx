import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface NotificationsScreenProps {
  navigation?: any;
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  navigation,
}) => {
  const handleCallNow = () => {
    console.log("Calling donor...");
    // Add call functionality
  };

  const handleSendMessage = () => {
    console.log("Sending message...");
    // Add messaging functionality
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

      {/* Curved Header */}
      <View style={styles.headerCurve}>
        <Text style={styles.time}>9:41</Text>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Notification Item */}
        <View style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="water" size={18} color="#DC143C" />
          </View>
          <Text style={styles.notificationText}>
            Josephine Cole Just accepted{"\n"}Your Request
          </Text>
          <Text style={styles.notificationTime}>12:06 PM</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.callButton}
            onPress={handleCallNow}
            activeOpacity={0.8}
          >
            <Text style={styles.callButtonText}>Call Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.messageButton}
            onPress={handleSendMessage}
            activeOpacity={0.8}
          >
            <Text style={styles.messageButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Ongoing Request Section */}
        <View style={styles.ongoingSection}>
          <Text style={styles.sectionTitle}>Ongoing Request</Text>

          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          {/* Progress Steps */}
          <View style={styles.stepsContainer}>
            {/* Step 1 - Active */}
            <View style={styles.stepItem}>
              <View style={styles.stepIndicator}>
                <View style={[styles.stepDot, styles.stepDotActive]} />
                <View style={styles.stepLine} />
              </View>
              <Text style={styles.stepText}>Donor has accepted Request</Text>
            </View>

            {/* Step 2 - Inactive */}
            <View style={styles.stepItem}>
              <View style={styles.stepIndicator}>
                <View style={styles.stepDot} />
                <View style={styles.stepLine} />
              </View>
              <Text style={[styles.stepText, styles.stepTextInactive]}>
                On my way
              </Text>
            </View>

            {/* Step 3 - Inactive */}
            <View style={styles.stepItem}>
              <View style={styles.stepIndicator}>
                <View style={styles.stepDot} />
                <View style={styles.stepLine} />
              </View>
              <Text style={[styles.stepText, styles.stepTextInactive]}>
                At St Nicholas Hospital, Ajah
              </Text>
            </View>

            {/* Step 4 - Inactive */}
            <View style={styles.stepItem}>
              <View style={styles.stepIndicator}>
                <View style={styles.stepDot} />
              </View>
              <Text style={[styles.stepText, styles.stepTextInactive]}>
                Donation Complete
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
    backgroundColor: "#DC143C",
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
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFE5E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notificationText: {
    flex: 1,
    fontSize: 13,
    color: "#000",
    lineHeight: 18,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  callButton: {
    flex: 1,
    backgroundColor: "#DC143C",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
  },
  callButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  messageButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0D0D0",
  },
  messageButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginVertical: 20,
  },
  ongoingSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 18,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#FFD1D1",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 30,
  },
  progressFill: {
    height: "100%",
    width: "30%",
    backgroundColor: "#DC143C",
  },
  stepsContainer: {
    marginTop: 10,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  stepIndicator: {
    alignItems: "center",
    marginRight: 12,
  },
  stepDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFD1D1",
  },
  stepDotActive: {
    backgroundColor: "#DC143C",
  },
  stepLine: {
    width: 2,
    height: 30,
    backgroundColor: "#FFD1D1",
    marginTop: 4,
  },
  stepText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
    paddingTop: 4,
  },
  stepTextInactive: {
    color: "#B0B0B0",
  },
});

export default NotificationsScreen;
