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

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar?: string;
  unreadCount?: number;
  hasCheck?: boolean;
}

interface InboxScreenProps {
  navigation?: any;
}

const InboxScreen: React.FC<InboxScreenProps> = ({ navigation }) => {
  const messages: Message[] = [
    {
      id: "1",
      name: "St Nicholas Hospital, Ajah",
      message: "Thank you very much",
      time: "12:06 PM",
    },
    {
      id: "2",
      name: "Dr Kehinde Olatunji",
      message: "Thank you for saving lives.....",
      time: "12:06 PM",
    },
    {
      id: "3",
      name: "Dr Ramota Olaleye",
      message: "Thank you for saving lives.....",
      time: "12:06 PM",
    },
    {
      id: "4",
      name: "Susan Akintunde",
      message: "Where are you now?",
      time: "12:06 PM",
      unreadCount: 1,
    },
    {
      id: "5",
      name: "Josephine Cole",
      message: "I am on my way",
      time: "12:06 PM",
      hasCheck: true,
    },
  ];

  const handleMessagePress = (messageId: string) => {
    console.log("Open message:", messageId);
    // navigation?.navigate('Chat', { messageId });
  };

  const handleBackPress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

      {/* Curved Red Header */}
      <View style={styles.headerCurve}>
        {/* <Text style={styles.time}>9:41</Text> */}
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) => (
          <TouchableOpacity
            key={message.id}
            style={[
              styles.messageItem,
              index < messages.length - 1 && styles.messageItemBorder,
            ]}
            onPress={() => handleMessagePress(message.id)}
            activeOpacity={0.7}
          >
            {/* Avatar */}
            <View style={styles.avatarContainer}>
              <View style={styles.avatar} />
            </View>

            {/* Message Content */}
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{message.name}</Text>
              <View style={styles.messageTextRow}>
                {message.hasCheck && (
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color="#10B981"
                    style={styles.checkIcon}
                  />
                )}
                <Text
                  style={[
                    styles.messageText,
                    message.unreadCount && styles.messageTextUnread,
                  ]}
                  numberOfLines={1}
                >
                  {message.message}
                </Text>
              </View>
            </View>

            {/* Time and Badge */}
            <View style={styles.messageRight}>
              <Text
                style={[
                  styles.messageTime,
                  message.unreadCount && styles.messageTimeUnread,
                ]}
              >
                {message.time}
              </Text>
              {message.unreadCount && message.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadBadgeText}>
                    {message.unreadCount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 10,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginRight: 28,
  },
  placeholder: {
    width: 28,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
  },
  messageItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#D1D5DB",
  },
  messageContent: {
    flex: 1,
    justifyContent: "center",
  },
  messageName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  messageTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkIcon: {
    marginRight: 4,
  },
  messageText: {
    fontSize: 13,
    color: "#6B7280",
    flex: 1,
  },
  messageTextUnread: {
    color: "#DC143C",
  },
  messageRight: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  messageTime: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 4,
  },
  messageTimeUnread: {
    color: "#DC143C",
  },
  unreadBadge: {
    backgroundColor: "#DC143C",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
});

export default InboxScreen;
