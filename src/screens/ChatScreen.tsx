// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
// import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

// interface ChatScreenProps {
//     onBack: () => void;
// }

// export const ChatScreen: React.FC<ChatScreenProps> = ({ onBack }) => {
//     const [message, setMessage] = useState('');

//     const messages = [
//         { id: 1, sender: 'hospital', text: 'We are in dire need of a blood donor, please where are you currently?', time: '' },
//         { id: 2, sender: 'me', text: 'I will be with you in a bit.', time: '' },
//         { id: 3, sender: 'hospital', text: 'St Nicholas is typing...', isTyping: true },
//     ];

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             keyboardVerticalOffset={0}
//         >
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity style={styles.backButton} onPress={onBack}>
//                     <Text style={styles.backIcon}>←</Text>
//                 </TouchableOpacity>
//                 <View style={styles.hospitalAvatar}>
//                     <Text style={styles.hospitalAvatarText}>🏥</Text>
//                 </View>
//                 <View style={styles.hospitalInfo}>
//                     <Text style={styles.hospitalName}>St Nicholas Hospital</Text>
//                     <Text style={styles.hospitalStatus}>Online</Text>
//                 </View>
//             </View>

//             {/* Messages */}
//             <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
//                 {messages.map((msg) => (
//                     <View
//                         key={msg.id}
//                         style={[
//                             styles.messageWrapper,
//                             msg.sender === 'me' && styles.messageWrapperRight
//                         ]}
//                     >
//                         {msg.sender === 'hospital' && (
//                             <View style={styles.senderAvatar}>
//                                 <Text style={styles.senderAvatarText}>🏥</Text>
//                             </View>
//                         )}
//                         <View style={[
//                             styles.messageBubble,
//                             msg.sender === 'me' ? styles.messageBubbleMe : styles.messageBubbleOther,
//                             msg.isTyping && styles.typingBubble
//                         ]}>
//                             {msg.isTyping ? (
//                                 <Text style={styles.typingText}>{msg.text}</Text>
//                             ) : (
//                                 <Text style={[
//                                     styles.messageText,
//                                     msg.sender === 'me' && styles.messageTextMe
//                                 ]}>
//                                     {msg.text}
//                                 </Text>
//                             )}
//                         </View>
//                         {msg.sender === 'me' && (
//                             <View style={styles.myAvatar}>
//                                 <Text style={styles.myAvatarText}>M</Text>
//                             </View>
//                         )}
//                     </View>
//                 ))}
//                 <View style={{ height: 20 }} />
//             </ScrollView>

//             {/* Input Bar */}
//             <View style={styles.inputContainer}>
//                 <TouchableOpacity style={styles.iconButton}>
//                     <Text style={styles.iconEmoji}>😊</Text>
//                 </TouchableOpacity>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Write a message"
//                     placeholderTextColor={COLORS.textLight}
//                     value={message}
//                     onChangeText={setMessage}
//                 />
//                 <TouchableOpacity style={styles.iconButton}>
//                     <Text style={styles.iconAttachment}>📎</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconButton}>
//                     <Text style={styles.iconMic}>🎤</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.sendButton}>
//                     <Text style={styles.sendIcon}>➤</Text>
//                 </TouchableOpacity>
//             </View>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.background,
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: SPACING.m,
//         paddingTop: SPACING.l,
//         paddingBottom: SPACING.m,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E5EA',
//     },
//     backButton: {
//         width: 40,
//         height: 40,
//         justifyContent: 'center',
//     },
//     backIcon: {
//         fontSize: 24,
//         color: COLORS.text,
//     },
//     hospitalAvatar: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: '#E8F4FD',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: SPACING.s,
//     },
//     hospitalAvatarText: {
//         fontSize: 20,
//     },
//     hospitalInfo: {
//         flex: 1,
//     },
//     hospitalName: {
//         fontSize: FONT_SIZE.m,
//         fontWeight: '600',
//         color: COLORS.text,
//     },
//     hospitalStatus: {
//         fontSize: FONT_SIZE.s,
//         color: '#4CAF50',
//     },
//     messagesContainer: {
//         flex: 1,
//         paddingHorizontal: SPACING.m,
//         paddingTop: SPACING.m,
//     },
//     messageWrapper: {
//         flexDirection: 'row',
//         marginBottom: SPACING.m,
//         alignItems: 'flex-end',
//     },
//     messageWrapperRight: {
//         justifyContent: 'flex-end',
//     },
//     senderAvatar: {
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: '#E8F4FD',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: SPACING.s,
//     },
//     senderAvatarText: {
//         fontSize: 16,
//     },
//     myAvatar: {
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: COLORS.primary,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: SPACING.s,
//     },
//     myAvatarText: {
//         color: COLORS.secondary,
//         fontSize: 16,
//         fontWeight: '600',
//     },
//     messageBubble: {
//         maxWidth: '70%',
//         padding: SPACING.m,
//         borderRadius: 16,
//     },
//     messageBubbleOther: {
//         backgroundColor: '#2C3E50',
//     },
//     messageBubbleMe: {
//         backgroundColor: '#1E3A8A',
//     },
//     typingBubble: {
//         backgroundColor: '#F5F5F7',
//     },
//     messageText: {
//         fontSize: FONT_SIZE.m,
//         color: COLORS.secondary,
//         lineHeight: 20,
//     },
//     messageTextMe: {
//         color: COLORS.secondary,
//     },
//     typingText: {
//         fontSize: FONT_SIZE.s,
//         color: COLORS.textLight,
//         fontStyle: 'italic',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: SPACING.m,
//         paddingVertical: SPACING.s,
//         borderTopWidth: 1,
//         borderTopColor: '#E5E5EA',
//         backgroundColor: COLORS.background,
//     },
//     iconButton: {
//         padding: SPACING.s,
//     },
//     iconEmoji: {
//         fontSize: 20,
//     },
//     iconAttachment: {
//         fontSize: 20,
//     },
//     iconMic: {
//         fontSize: 20,
//     },
//     input: {
//         flex: 1,
//         paddingHorizontal: SPACING.m,
//         paddingVertical: SPACING.s,
//         fontSize: FONT_SIZE.m,
//         color: COLORS.text,
//     },
//     sendButton: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: COLORS.primary,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sendIcon: {
//         fontSize: 18,
//         color: COLORS.secondary,
//     },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Message {
  id: number;
  sender: "hospital" | "me";
  text: string;
  time: string;
  isTyping?: boolean;
}

interface ChatScreenProps {
  navigation?: any;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const messages: Message[] = [
    {
      id: 1,
      sender: "hospital",
      text: "We are in dire need of a blood donor, please where are you currently?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "I will be with you in a bit.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "hospital",
      text: "St Nicholas is typing...",
      time: "",
      isTyping: true,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      // Add your send logic here
      setMessage("");
    }
  };

  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.hospitalAvatar}>
            <Ionicons name="business" size={20} color="#DC143C" />
          </View>

          <View style={styles.hospitalInfo}>
            <Text style={styles.hospitalName}>St Nicholas Hospital</Text>
            <Text style={styles.hospitalStatus}>Online</Text>
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-vertical" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageWrapper,
                msg.sender === "me" && styles.messageWrapperRight,
              ]}
            >
              {msg.sender === "hospital" && (
                <View style={styles.senderAvatar}>
                  <Ionicons name="business" size={16} color="#DC143C" />
                </View>
              )}

              <View style={styles.messageContent}>
                <View
                  style={[
                    styles.messageBubble,
                    msg.sender === "me"
                      ? styles.messageBubbleMe
                      : styles.messageBubbleOther,
                    msg.isTyping && styles.typingBubble,
                  ]}
                >
                  {msg.isTyping ? (
                    <Text style={styles.typingText}>{msg.text}</Text>
                  ) : (
                    <Text
                      style={[
                        styles.messageText,
                        msg.sender === "me" && styles.messageTextMe,
                      ]}
                    >
                      {msg.text}
                    </Text>
                  )}
                </View>
                {msg.time && !msg.isTyping && (
                  <Text
                    style={[
                      styles.messageTime,
                      msg.sender === "me" && styles.messageTimeRight,
                    ]}
                  >
                    {msg.time}
                  </Text>
                )}
              </View>

              {msg.sender === "me" && (
                <View style={styles.myAvatar}>
                  <Text style={styles.myAvatarText}>M</Text>
                </View>
              )}
            </View>
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="happy-outline" size={24} color="#6B7280" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Write a message"
            placeholderTextColor="#9CA3AF"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="attach-outline" size={24} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="mic-outline" size={24} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            activeOpacity={0.8}
          >
            <Ionicons name="send" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 4,
    marginRight: 8,
  },
  hospitalAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  hospitalInfo: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  hospitalStatus: {
    fontSize: 13,
    color: "#10B981",
    fontWeight: "500",
  },
  moreButton: {
    padding: 4,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  messagesContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  messageWrapper: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  messageWrapperRight: {
    justifyContent: "flex-end",
  },
  senderAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  myAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#DC143C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  myAvatarText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  messageContent: {
    maxWidth: "70%",
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
  },
  messageBubbleOther: {
    backgroundColor: "#2C3E50",
    borderBottomLeftRadius: 4,
  },
  messageBubbleMe: {
    backgroundColor: "#DC143C",
    borderBottomRightRadius: 4,
  },
  typingBubble: {
    backgroundColor: "#E5E7EB",
  },
  messageText: {
    fontSize: 15,
    color: "#FFF",
    lineHeight: 20,
  },
  messageTextMe: {
    color: "#FFF",
  },
  typingText: {
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
  },
  messageTime: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 4,
    marginLeft: 8,
  },
  messageTimeRight: {
    textAlign: "right",
    marginRight: 8,
    marginLeft: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  iconButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: "#000",
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    marginHorizontal: 8,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DC143C",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
