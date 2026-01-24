// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TextInput,
// //   TouchableOpacity,
// //   Animated,
// //   Dimensions,
// //   StatusBar,
// //   Image,
// //   Modal,
// //   Switch,
// // } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { Ionicons } from "@expo/vector-icons";
// // import {
// //   COLORS,
// //   SPACING,
// //   FONT_SIZE,
// //   BORDER_RADIUS,
// //   SHADOWS,
// // } from "../constants/theme";

// // const { width } = Dimensions.get("window");

// // export const DonorHomeScreen = ({ navigation }: any) => {
// //   const [searchFocused, setSearchFocused] = useState(false);
// //   const [sidebarVisible, setSidebarVisible] = useState(false);
// //   const [isAvailable, setIsAvailable] = useState(true);

// //   const bloodRequests = [
// //     {
// //       id: 1,
// //       hospital: "St Nicholas Hospital",
// //       location: "No 28, Toyin Street, Ikeja",
// //       urgency: "urgent",
// //       urgencyLabel: "Very Urgent",
// //       bloodType: "O+, AB, A+",
// //     },
// //     {
// //       id: 2,
// //       hospital: "Funsho Hospital",
// //       location: "No 26, Badmus Street, Surulere",
// //       urgency: "moderate",
// //       urgencyLabel: "Moderate",
// //       bloodType: "B+, O-",
// //     },
// //   ];

// //   const bloodBanks = [
// //     {
// //       id: 1,
// //       name: "St Nicholas Hospital, Ajah",
// //       distance: "30 km away",
// //       rating: 4,
// //     },
// //     {
// //       id: 2,
// //       name: "General Hospital Odan, Lagos",
// //       distance: "30 km away",
// //       rating: 4,
// //     },
// //     {
// //       id: 3,
// //       name: "The Eko Hospital, Ajah",
// //       distance: "30 km away",
// //       rating: 5,
// //     },
// //   ];

// //   const renderStars = (rating) => {
// //     return (
// //       <View style={styles.rating}>
// //         {[...Array(5)].map((_, index) => (
// //           <Ionicons
// //             key={index}
// //             name={index < rating ? "star" : "star-outline"}
// //             size={16}
// //             color={index < rating ? "#FFD700" : COLORS.textMuted}
// //           />
// //         ))}
// //       </View>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" />

// //       {/* Header with Gradient */}
// //       <LinearGradient
// //         colors={[COLORS.gradientStart, COLORS.gradientEnd]}
// //         start={{ x: 0, y: 0 }}
// //         end={{ x: 1, y: 1 }}
// //         style={styles.headerGradient}
// //       >
// //         <View style={styles.header}>
// //           <View style={styles.headerLeft}>
// //             <View style={styles.avatar}>
// //               <Text style={styles.avatarText}>M</Text>
// //               <View style={styles.statusIndicator} />
// //             </View>
// //             <View>
// //               <Text style={styles.greeting}>Hello Mary!</Text>
// //               <Text style={styles.subGreeting}>Ready to save lives today?</Text>
// //             </View>
// //           </View>
// //           <TouchableOpacity
// //             style={styles.menuButton}
// //             onPress={() => setSidebarVisible(true)}
// //           >
// //             <Ionicons name="menu" size={28} color={COLORS.secondary} />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search Bar with Glassmorphism */}
// //         <View
// //           style={[
// //             styles.searchContainer,
// //             searchFocused && styles.searchContainerFocused,
// //           ]}
// //         >
// //           <Ionicons
// //             name="search"
// //             size={20}
// //             color={COLORS.textLight}
// //             style={styles.searchIcon}
// //           />
// //           <TextInput
// //             style={styles.searchInput}
// //             placeholder="Find donation centers..."
// //             placeholderTextColor={COLORS.textLight}
// //             onFocus={() => setSearchFocused(true)}
// //             onBlur={() => setSearchFocused(false)}
// //           />
// //         </View>
// //       </LinearGradient>

// //       <ScrollView
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={styles.scrollContent}
// //       >
// //         {/* Hero Card */}
// //         <LinearGradient
// //           colors={["#FFB3D9", "#FFE5E5"]}
// //           start={{ x: 0, y: 0 }}
// //           end={{ x: 1, y: 1 }}
// //           style={styles.heroCard}
// //         >
// //           <View style={styles.heroContent}>
// //             <Text style={styles.heroTitle}>Save A Life</Text>
// //             <Text style={styles.heroSubtitle}>Today</Text>
// //           </View>
// //           <Image
// //             source={require("../../assets/hero-icon.png")}
// //             style={styles.heroImage}
// //             resizeMode="contain"
// //           />
// //         </LinearGradient>

// //         {/* Blood Donation Requests */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Blood Donation Requests</Text>
// //             <TouchableOpacity>
// //               <Text style={styles.seeMore}>See More →</Text>
// //             </TouchableOpacity>
// //           </View>

// //           {bloodRequests.map((request) => (
// //             <View key={request.id} style={styles.requestCard}>
// //               <View style={styles.requestHeader}>
// //                 <View
// //                   style={[
// //                     styles.urgencyBadge,
// //                     {
// //                       backgroundColor:
// //                         request.urgency === "urgent"
// //                           ? COLORS.urgentHigh
// //                           : COLORS.urgentMedium,
// //                     },
// //                   ]}
// //                 >
// //                   <View style={styles.urgencyDot} />
// //                   <Text style={styles.urgencyText}>{request.urgencyLabel}</Text>
// //                 </View>
// //               </View>

// //               <Text style={styles.requestName}>{request.hospital}</Text>
// //               <View style={styles.locationRow}>
// //                 <Ionicons name="location" size={16} color={COLORS.textLight} />
// //                 <Text style={styles.requestLocation}>{request.location}</Text>
// //               </View>

// //               <TouchableOpacity
// //                 style={styles.donateButton}
// //                 onPress={() =>
// //                   navigation.navigate("BloodRequestDetails", {
// //                     hospital: request.hospital,
// //                     location: request.location,
// //                     urgency: request.urgencyLabel,
// //                     urgencyLevel: request.urgency,
// //                     reason: "Surgery",
// //                     quantity: "2 pints",
// //                     bloodType: request.bloodType,
// //                   })
// //                 }
// //               >
// //                 <LinearGradient
// //                   colors={[COLORS.gradientStart, COLORS.gradientEnd]}
// //                   start={{ x: 0, y: 0 }}
// //                   end={{ x: 1, y: 0 }}
// //                   style={styles.donateButtonGradient}
// //                 >
// //                   <Text style={styles.donateButtonText}>Donate Now</Text>
// //                   <Ionicons
// //                     name="arrow-forward-circle"
// //                     size={20}
// //                     color={COLORS.secondary}
// //                   />
// //                 </LinearGradient>
// //               </TouchableOpacity>
// //             </View>
// //           ))}
// //         </View>

// //         {/* Verified Blood Banks */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>
// //               Verified Blood Banks Near You
// //             </Text>
// //             <TouchableOpacity>
// //               <Text style={styles.seeMore}>See More →</Text>
// //             </TouchableOpacity>
// //           </View>

// //           {bloodBanks.map((bank) => (
// //             <TouchableOpacity key={bank.id} style={styles.bankCard}>
// //               <View style={styles.bankIcon}>
// //                 <Ionicons name="business" size={24} color={COLORS.info} />
// //               </View>
// //               <View style={styles.bankInfo}>
// //                 <Text style={styles.bankName}>{bank.name}</Text>
// //                 <View style={styles.bankDistance}>
// //                   <Ionicons
// //                     name="navigate"
// //                     size={14}
// //                     color={COLORS.textLight}
// //                   />
// //                   <Text style={styles.bankDistanceText}>{bank.distance}</Text>
// //                 </View>
// //                 {renderStars(bank.rating)}
// //               </View>
// //               <Ionicons
// //                 name="chevron-forward"
// //                 size={20}
// //                 color={COLORS.textLight}
// //               />
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         {/* Testimonials */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Testimonials</Text>
// //           <LinearGradient
// //             colors={[COLORS.gradientStart, COLORS.gradientEnd]}
// //             start={{ x: 0, y: 0 }}
// //             end={{ x: 1, y: 1 }}
// //             style={styles.testimonialCard}
// //           >
// //             <Ionicons
// //               name="chatbox-ellipses"
// //               size={32}
// //               color="rgba(255,255,255,0.3)"
// //               style={styles.quoteIcon}
// //             />
// //             <View style={styles.testimonialHeader}>
// //               <View style={styles.testimonialAvatar}>
// //                 <Text style={styles.testimonialAvatarText}>R</Text>
// //               </View>
// //               <View style={styles.testimonialInfo}>
// //                 <Text style={styles.testimonialName}>Raphael O.</Text>
// //                 <Text style={styles.testimonialRole}>Blood Donor</Text>
// //               </View>
// //             </View>
// //             <Text style={styles.testimonialText}>
// //               "This platform has made blood donation so effortless and
// //               rewarding. I love the gamification and the impact I can see!"
// //             </Text>
// //           </LinearGradient>
// //         </View>
// //         {/*
// //                 <View style={{ height: 100 }} /> */}
// //       </ScrollView>

// //       {/* Sidebar Drawer */}
// //       <Modal
// //         visible={sidebarVisible}
// //         transparent
// //         animationType="slide"
// //         onRequestClose={() => setSidebarVisible(false)}
// //       >
// //         <TouchableOpacity
// //           style={styles.sidebarOverlay}
// //           activeOpacity={1}
// //           onPress={() => setSidebarVisible(false)}
// //         >
// //           <TouchableOpacity
// //             activeOpacity={1}
// //             onPress={(e) => e.stopPropagation()}
// //           >
// //             <View style={styles.sidebarContainer}>
// //               {/* Sidebar Header with Gradient */}
// //               <LinearGradient
// //                 colors={[COLORS.gradientStart, COLORS.gradientEnd]}
// //                 start={{ x: 0, y: 0 }}
// //                 end={{ x: 1, y: 1 }}
// //                 style={styles.sidebarHeader}
// //               >
// //                 <TouchableOpacity
// //                   //   style={styles.closeButton}
// //                   onPress={
// //                     () => console.log("kdkdkdk")

// //                     //  setSidebarVisible(false)
// //                   }
// //                 >
// //                   <Ionicons name="close" size={24} color={COLORS.primary} />

// //                   {/* <View style={styles.closeButtonCircle}>
// //                   </View> */}
// //                 </TouchableOpacity>

// //                 <View style={styles.profileSection}>
// //                   <View style={styles.sidebarAvatar}>
// //                     <Text style={styles.sidebarAvatarText}>M</Text>
// //                     <View style={styles.sidebarStatusIndicator} />
// //                   </View>
// //                   <Text style={styles.profileName}>Mary Oluwafemi</Text>
// //                   <Text style={styles.profileEmail}>
// //                     maryoluwafemi@gmail.com
// //                   </Text>
// //                 </View>
// //               </LinearGradient>

// //               {/* Menu Items */}
// //               <ScrollView
// //                 style={styles.menuContainer}
// //                 showsVerticalScrollIndicator={false}
// //               >
// //                 {/* Availability Toggle */}
// //                 <View style={styles.menuItemRow}>
// //                   <Text style={styles.menuItemText}>Set Availability</Text>
// //                   <Switch
// //                     value={isAvailable}
// //                     onValueChange={setIsAvailable}
// //                     trackColor={{
// //                       false: COLORS.textMuted,
// //                       true: COLORS.primary,
// //                     }}
// //                     thumbColor={COLORS.secondary}
// //                   />
// //                 </View>

// //                 {/* Menu Items */}
// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>
// //                     Switch to Patients Account
// //                   </Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>Customer Support</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>Settings</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>Refer A Friend</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>
// //                     Legal and Privacy Settings
// //                   </Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>Blog and Education</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.menuItem}>
// //                   <Text style={styles.menuItemText}>
// //                     Check donation history
// //                   </Text>
// //                 </TouchableOpacity>

// //                 {/* Logout Button */}
// //                 <TouchableOpacity style={styles.logoutButton}>
// //                   <Text style={styles.logoutButtonText}>Logout</Text>
// //                 </TouchableOpacity>

// //                 <View style={{ height: 40 }} />
// //               </ScrollView>
// //             </View>
// //           </TouchableOpacity>
// //         </TouchableOpacity>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: COLORS.backgroundGray,
// //   },
// //   headerGradient: {
// //     paddingTop: 50,
// //     paddingBottom: SPACING.xl,
// //     borderBottomLeftRadius: BORDER_RADIUS.xl,
// //     borderBottomRightRadius: BORDER_RADIUS.xl,
// //   },
// //   header: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingHorizontal: SPACING.l,
// //     marginBottom: SPACING.l,
// //   },
// //   headerLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: SPACING.m,
// //   },
// //   avatar: {
// //     width: 52,
// //     height: 52,
// //     borderRadius: BORDER_RADIUS.full,
// //     backgroundColor: "rgba(255, 255, 255, 0.3)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderWidth: 3,
// //     borderColor: COLORS.secondary,
// //     position: "relative",
// //   },
// //   avatarText: {
// //     color: COLORS.secondary,
// //     fontSize: 24,
// //     fontWeight: "700",
// //   },
// //   statusIndicator: {
// //     position: "absolute",
// //     bottom: 2,
// //     right: 2,
// //     width: 14,
// //     height: 14,
// //     borderRadius: 7,
// //     backgroundColor: COLORS.success,
// //     borderWidth: 2,
// //     borderColor: COLORS.secondary,
// //     top: 35,
// //   },
// //   greeting: {
// //     fontSize: FONT_SIZE.xl,
// //     fontWeight: "700",
// //     color: COLORS.secondary,
// //   },
// //   subGreeting: {
// //     fontSize: FONT_SIZE.m,
// //     color: "rgba(255, 255, 255, 0.9)",
// //     marginTop: 2,
// //   },
// //   menuButton: {
// //     padding: SPACING.s,
// //   },
// //   searchContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginHorizontal: SPACING.l,
// //     paddingHorizontal: SPACING.m,
// //     paddingVertical: SPACING.s,
// //     backgroundColor: "rgba(255, 255, 255, 0.25)",
// //     borderRadius: BORDER_RADIUS.m,
// //     borderWidth: 1,
// //     borderColor: "rgba(255, 255, 255, 0.3)",
// //   },
// //   searchContainerFocused: {
// //     backgroundColor: "rgba(255, 255, 255, 0.35)",
// //     borderColor: "rgba(255, 255, 255, 0.5)",
// //   },
// //   searchIcon: {
// //     marginRight: SPACING.s,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: FONT_SIZE.m,
// //     color: COLORS.secondary,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   scrollContent: {
// //     paddingTop: SPACING.l,
// //   },
// //   heroCard: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginHorizontal: SPACING.l,
// //     marginBottom: SPACING.l,
// //     padding: SPACING.xl,
// //     borderRadius: BORDER_RADIUS.xl,
// //     ...SHADOWS.large,
// //   },
// //   heroContent: {
// //     zIndex: 1,
// //   },
// //   heroTitle: {
// //     fontSize: FONT_SIZE.huge,
// //     fontWeight: "800",
// //     color: COLORS.secondary,
// //   },
// //   heroSubtitle: {
// //     fontSize: FONT_SIZE.huge,
// //     fontWeight: "800",
// //     color: COLORS.secondary,
// //     marginBottom: SPACING.s,
// //   },
// //   heroDescription: {
// //     fontSize: FONT_SIZE.m,
// //     color: "rgba(255, 255, 255, 0.9)",
// //     marginBottom: SPACING.l,
// //   },
// //   heroButton: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: COLORS.secondary,
// //     paddingVertical: SPACING.m,
// //     paddingHorizontal: SPACING.l,
// //     borderRadius: BORDER_RADIUS.l,
// //     alignSelf: "flex-start",
// //     gap: SPACING.s,
// //   },
// //   heroButtonText: {
// //     fontSize: FONT_SIZE.m,
// //     fontWeight: "600",
// //     color: COLORS.primary,
// //   },
// //   heroImage: {
// //     width: 80,
// //     height: 80,
// //   },
// //   section: {
// //     marginBottom: SPACING.xl,
// //   },
// //   sectionHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingHorizontal: SPACING.l,
// //     marginBottom: SPACING.m,
// //   },
// //   sectionTitle: {
// //     fontSize: FONT_SIZE.xl,
// //     fontWeight: "700",
// //     color: COLORS.text,
// //     marginLeft: 20,
// //     marginBottom: 10,
// //   },
// //   seeMore: {
// //     fontSize: FONT_SIZE.m,
// //     color: COLORS.primary,
// //     fontWeight: "600",
// //   },
// //   requestCard: {
// //     marginHorizontal: SPACING.l,
// //     marginBottom: SPACING.m,
// //     padding: SPACING.l,
// //     backgroundColor: COLORS.cardBackground,
// //     borderRadius: BORDER_RADIUS.l,
// //     ...SHADOWS.medium,
// //   },
// //   requestHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: SPACING.m,
// //   },
// //   bloodTypeBadge: {
// //     paddingHorizontal: SPACING.m,
// //     paddingVertical: SPACING.s,
// //     borderRadius: BORDER_RADIUS.s,
// //   },
// //   bloodTypeText: {
// //     fontSize: FONT_SIZE.l,
// //     fontWeight: "700",
// //   },
// //   urgencyBadge: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: SPACING.m,
// //     paddingVertical: SPACING.s,
// //     borderRadius: BORDER_RADIUS.l,
// //     gap: SPACING.xs,
// //   },
// //   urgencyDot: {
// //     width: 6,
// //     height: 6,
// //     borderRadius: 3,
// //     backgroundColor: COLORS.secondary,
// //   },
// //   urgencyText: {
// //     color: COLORS.secondary,
// //     fontSize: FONT_SIZE.xs,
// //     fontWeight: "600",
// //   },
// //   requestName: {
// //     fontSize: FONT_SIZE.l,
// //     fontWeight: "700",
// //     color: COLORS.text,
// //     marginBottom: SPACING.s,
// //   },
// //   locationRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: SPACING.xs,
// //     marginBottom: SPACING.l,
// //   },
// //   requestLocation: {
// //     fontSize: FONT_SIZE.m,
// //     color: COLORS.textLight,
// //     flex: 1,
// //   },
// //   donateButton: {
// //     borderRadius: BORDER_RADIUS.m,
// //     overflow: "hidden",
// //     ...SHADOWS.colored,
// //   },
// //   donateButtonGradient: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     paddingVertical: SPACING.m,
// //     gap: SPACING.s,
// //   },
// //   donateButtonText: {
// //     color: COLORS.secondary,
// //     fontSize: FONT_SIZE.m,
// //     fontWeight: "700",
// //   },
// //   bankCard: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginHorizontal: SPACING.l,
// //     marginBottom: SPACING.m,
// //     padding: SPACING.m,
// //     backgroundColor: COLORS.cardBackground,
// //     borderRadius: BORDER_RADIUS.m,
// //     ...SHADOWS.small,
// //   },
// //   bankIcon: {
// //     width: 48,
// //     height: 48,
// //     borderRadius: BORDER_RADIUS.m,
// //     backgroundColor: "#E8F4FD",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: SPACING.m,
// //   },
// //   bankInfo: {
// //     flex: 1,
// //   },
// //   bankName: {
// //     fontSize: FONT_SIZE.m,
// //     fontWeight: "600",
// //     color: COLORS.text,
// //     marginBottom: 4,
// //   },
// //   bankDistance: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 4,
// //     marginBottom: 4,
// //   },
// //   bankDistanceText: {
// //     fontSize: FONT_SIZE.s,
// //     color: COLORS.textLight,
// //   },
// //   rating: {
// //     flexDirection: "row",
// //     gap: 2,
// //   },
// //   testimonialCard: {
// //     marginHorizontal: SPACING.l,
// //     padding: SPACING.xl,
// //     borderRadius: BORDER_RADIUS.l,
// //     ...SHADOWS.large,
// //     position: "relative",
// //     overflow: "hidden",
// //   },
// //   quoteIcon: {
// //     position: "absolute",
// //     top: SPACING.l,
// //     right: SPACING.l,
// //   },
// //   testimonialHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: SPACING.m,
// //   },
// //   testimonialAvatar: {
// //     width: 48,
// //     height: 48,
// //     borderRadius: BORDER_RADIUS.full,
// //     backgroundColor: "rgba(255, 255, 255, 0.25)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: SPACING.m,
// //     borderWidth: 2,
// //     borderColor: COLORS.secondary,
// //   },
// //   testimonialAvatarText: {
// //     fontSize: FONT_SIZE.xl,
// //     fontWeight: "700",
// //     color: COLORS.secondary,
// //   },
// //   testimonialInfo: {},
// //   testimonialName: {
// //     fontSize: FONT_SIZE.l,
// //     fontWeight: "700",
// //     color: COLORS.secondary,
// //   },
// //   testimonialRole: {
// //     fontSize: FONT_SIZE.s,
// //     color: "rgba(255, 255, 255, 0.85)",
// //   },
// //   testimonialText: {
// //     fontSize: FONT_SIZE.m,
// //     color: COLORS.secondary,
// //     lineHeight: 22,
// //     fontStyle: "italic",
// //   },
// //   // Sidebar Styles
// //   sidebarOverlay: {
// //     flex: 1,
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     justifyContent: "flex-end",
// //   },
// //   sidebarContainer: {
// //     width: width * 0.75,
// //     height: "100%",
// //     backgroundColor: COLORS.background,
// //     ...SHADOWS.large,
// //   },
// //   sidebarHeader: {
// //     paddingTop: 0,
// //     paddingBottom: SPACING.xl,
// //     paddingHorizontal: SPACING.l,
// //   },
// //   closeButton: {
// //     // alignSelf: 'flex-end',
// //     // marginBottom: SPACING.m,
// //   },
// //   closeButtonCircle: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     backgroundColor: COLORS.secondary,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   profileSection: {
// //     alignItems: "center",
// //   },
// //   sidebarAvatar: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: "rgba(255, 255, 255, 0.3)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderWidth: 3,
// //     borderColor: COLORS.secondary,
// //     marginBottom: SPACING.m,
// //     position: "relative",
// //   },
// //   sidebarAvatarText: {
// //     color: COLORS.secondary,
// //     fontSize: FONT_SIZE.huge,
// //     fontWeight: "700",
// //   },
// //   sidebarStatusIndicator: {
// //     position: "absolute",
// //     bottom: 5,
// //     right: 5,
// //     width: 18,
// //     height: 18,
// //     borderRadius: 9,
// //     backgroundColor: COLORS.success,
// //     borderWidth: 3,
// //     borderColor: COLORS.secondary,
// //   },
// //   profileName: {
// //     fontSize: FONT_SIZE.xl,
// //     fontWeight: "700",
// //     color: COLORS.secondary,
// //     marginBottom: 4,
// //   },
// //   profileEmail: {
// //     fontSize: FONT_SIZE.s,
// //     color: "rgba(255, 255, 255, 0.9)",
// //   },
// //   menuContainer: {
// //     flex: 1,
// //     paddingHorizontal: SPACING.l,
// //     paddingTop: SPACING.l,
// //   },
// //   menuItemRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingVertical: SPACING.m,
// //     borderBottomWidth: 1,
// //     borderBottomColor: COLORS.cardBorder,
// //   },
// //   menuItem: {
// //     paddingVertical: SPACING.m,
// //     borderBottomWidth: 1,
// //     borderBottomColor: COLORS.cardBorder,
// //   },
// //   menuItemText: {
// //     fontSize: FONT_SIZE.m,
// //     color: COLORS.text,
// //     fontWeight: "500",
// //   },
// //   logoutButton: {
// //     backgroundColor: COLORS.primary,
// //     paddingVertical: SPACING.m,
// //     borderRadius: BORDER_RADIUS.m,
// //     alignItems: "center",
// //     marginTop: SPACING.xl,
// //     ...SHADOWS.medium,
// //   },
// //   logoutButtonText: {
// //     color: COLORS.secondary,
// //     fontSize: FONT_SIZE.m,
// //     fontWeight: "700",
// //   },
// // });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   StatusBar,
//   Image,
//   Modal,
//   Switch,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";

// const { width } = Dimensions.get("window");

// export const DonorHomeScreen = ({ navigation }: any) => {
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [isAvailable, setIsAvailable] = useState(true);

//   const bloodRequests = [
//     {
//       id: 1,
//       hospital: "St Nicholas Hospital",
//       location: "No 26, Toyin Street, Ikeja.",
//       urgency: "urgent",
//       urgencyLabel: "Very Urgent",
//       bloodType: "O+, AB, A+",
//     },
//     {
//       id: 2,
//       hospital: "Funsho Hospital",
//       location: "No 26, Badmus Street, Surulere.",
//       urgency: "urgent",
//       urgencyLabel: "Very Urgent",
//       bloodType: "B+, O-",
//     },
//   ];

//   const bloodBanks = [
//     {
//       id: 1,
//       name: "St Nicholas Hospital, Ajah",
//       distance: "30 km away",
//       rating: 4,
//     },
//     {
//       id: 2,
//       name: "General Hospital Odan, Lagos",
//       distance: "30 km away",
//       rating: 4,
//     },
//     {
//       id: 3,
//       name: "The Eko  Hospital, Ajah",
//       distance: "30 km away",
//       rating: 4,
//     },
//   ];

//   const renderStars = (rating: number) => {
//     return (
//       <View style={styles.rating}>
//         {[...Array(5)].map((_, index) => (
//           <Ionicons
//             key={index}
//             name={index < rating ? "star" : "star-outline"}
//             size={14}
//             color={index < rating ? "#10B981" : "#D1D5DB"}
//           />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

//       {/* Header with Curved Design */}
//       <View style={styles.headerCurve}>
//         <View style={styles.headerTop}>
//           <Text style={styles.time}>9:41</Text>
//         </View>

//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <View style={styles.avatar}>
//               <Image
//                 source={{
//                   uri: "https://randomuser.me/api/portraits/women/44.jpg",
//                 }}
//                 style={styles.avatarImage}
//               />
//               <View style={styles.statusIndicator} />
//             </View>
//             <View>
//               <Text style={styles.greeting}>Hello Mary,</Text>
//               <Text style={styles.subGreeting}>How are you today?</Text>
//             </View>
//           </View>
//           <TouchableOpacity
//             style={styles.menuButton}
//             onPress={() => setSidebarVisible(true)}
//           >
//             <Ionicons name="menu" size={28} color="#000" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchSection}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={20} color="#9CA3AF" />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Find donation centers"
//             placeholderTextColor="#9CA3AF"
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//           />
//         </View>
//       </View>

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Hero Card */}
//         <LinearGradient
//           colors={["#DC143C", "#B31B36"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.heroCard}
//         >
//           <View style={styles.heroContent}>
//             <Text style={styles.heroTitle}>Save A Life</Text>
//             <Text style={styles.heroSubtitle}>Today</Text>
//           </View>
//           <View style={styles.heroImageContainer}>
//             <View style={styles.heroCircle1} />
//             <View style={styles.heroCircle2} />
//             <View style={styles.heroIconWrapper}>
//               <Text style={styles.heroEmoji}>❤️</Text>
//               <Text style={styles.heroHands}>🙌</Text>
//             </View>
//           </View>
//         </LinearGradient>

//         {/* Blood Donation Requests */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Blood Donation Requests</Text>
//             <TouchableOpacity>
//               <Text style={styles.seeMore}>See More</Text>
//             </TouchableOpacity>
//           </View>

//           {bloodRequests.map((request) => (
//             <View key={request.id} style={styles.requestCard}>
//               <View style={styles.requestContent}>
//                 <Text style={styles.requestLabel}>
//                   Name:{" "}
//                   <Text style={styles.requestValue}>{request.hospital}</Text>
//                 </Text>
//                 <Text style={styles.requestLabel}>
//                   Location:{" "}
//                   <Text style={styles.requestValue}>{request.location}</Text>
//                 </Text>
//                 <View style={styles.priorityRow}>
//                   <Text style={styles.requestLabel}>
//                     Priority Level:{" "}
//                     <Text style={styles.requestValue}>
//                       {request.urgencyLabel}
//                     </Text>
//                   </Text>
//                   <View style={styles.urgencyDot} />
//                 </View>
//               </View>

//               <TouchableOpacity
//                 style={styles.donateButton}
//                 onPress={() =>
//                   navigation?.navigate("BloodRequestDetails", {
//                     hospital: request.hospital,
//                     location: request.location,
//                   })
//                 }
//               >
//                 <Text style={styles.donateButtonText}>Donate Now</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>

//         {/* Verified Blood Banks */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>
//               Verified Blood Banks Near You
//             </Text>
//             <TouchableOpacity>
//               <Text style={styles.seeMore}>See More</Text>
//             </TouchableOpacity>
//           </View>

//           {bloodBanks.map((bank) => (
//             <TouchableOpacity key={bank.id} style={styles.bankCard}>
//               <View style={styles.bankIcon}>
//                 <Ionicons name="business" size={24} color="#3B82F6" />
//               </View>
//               <View style={styles.bankInfo}>
//                 <Text style={styles.bankName}>{bank.name}</Text>
//                 <Text style={styles.bankDistance}>{bank.distance}</Text>
//                 {renderStars(bank.rating)}
//               </View>
//               <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Testimonials */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Testimonials</Text>
//           <LinearGradient
//             colors={["#10B981", "#059669"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={styles.testimonialCard}
//           >
//             <View style={styles.testimonialHeader}>
//               <View style={styles.testimonialAvatar}>
//                 <Image
//                   source={{
//                     uri: "https://randomuser.me/api/portraits/men/32.jpg",
//                   }}
//                   style={styles.testimonialAvatarImage}
//                 />
//               </View>
//               <View style={styles.testimonialInfo}>
//                 <Text style={styles.testimonialName}>Raphael .O.</Text>
//               </View>
//               <TouchableOpacity style={styles.playButton}>
//                 <Ionicons name="play" size={20} color="#FFF" />
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.testimonialText}>
//               laoreet tincidunt tincidunt faucibus ipsum elit Cras Quisque Nunc
//               vitae consectetur.
//             </Text>
//           </LinearGradient>
//         </View>

//         <View style={{ height: 100 }} />
//       </ScrollView>

//       {/* Sidebar Drawer */}
//       <Modal
//         visible={sidebarVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setSidebarVisible(false)}
//       >
//         <View style={styles.sidebarOverlay}>
//           <TouchableOpacity
//             style={styles.sidebarBackdrop}
//             activeOpacity={1}
//             onPress={() => setSidebarVisible(false)}
//           />

//           <View style={styles.sidebarContainer}>
//             {/* Sidebar Header with Gradient */}
//             <LinearGradient
//               colors={["#DC143C", "#B31B36"]}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.sidebarHeader}
//             >
//               <TouchableOpacity
//                 style={styles.closeButton}
//                 onPress={() => setSidebarVisible(false)}
//               >
//                 <View style={styles.closeButtonCircle}>
//                   <Ionicons name="close" size={24} color="#DC143C" />
//                 </View>
//               </TouchableOpacity>

//               <View style={styles.profileSection}>
//                 <View style={styles.sidebarAvatar}>
//                   <Image
//                     source={{
//                       uri: "https://randomuser.me/api/portraits/women/44.jpg",
//                     }}
//                     style={styles.sidebarAvatarImage}
//                   />
//                   <View style={styles.sidebarStatusIndicator} />
//                 </View>
//                 <Text style={styles.profileName}>Mary Oluwafemi</Text>
//                 <Text style={styles.profileEmail}>maryoluwafemi@gmail.com</Text>
//               </View>
//             </LinearGradient>

//             {/* Menu Items */}
//             <ScrollView
//               style={styles.menuContainer}
//               showsVerticalScrollIndicator={false}
//             >
//               {/* Availability Toggle */}
//               <View style={styles.menuItemRow}>
//                 <Text style={styles.menuItemText}>Set Availability</Text>
//                 <Switch
//                   value={isAvailable}
//                   onValueChange={setIsAvailable}
//                   trackColor={{ false: "#D1D5DB", true: "#FCA5A5" }}
//                   thumbColor={isAvailable ? "#DC143C" : "#F3F4F6"}
//                   ios_backgroundColor="#D1D5DB"
//                 />
//               </View>

//               {/* Menu Items */}
//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>
//                   Switch to Patients Account
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>Customer Support</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>Settings</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>Refer A Friend</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>
//                   Legal and Privacy Settings
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>Blog and Education</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuItemText}>Check donation history</Text>
//               </TouchableOpacity>

//               {/* Logout Button */}
//               <TouchableOpacity
//                 style={styles.logoutButton}
//                 onPress={() => {
//                   setSidebarVisible(false);
//                   // Add logout logic
//                 }}
//               >
//                 <Text style={styles.logoutButtonText}>Logout</Text>
//               </TouchableOpacity>

//               <View style={{ height: 40 }} />
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9FAFB",
//   },
//   headerCurve: {
//     backgroundColor: "#DC143C",
//     paddingBottom: 30,
//     borderBottomLeftRadius: 150,
//     borderBottomRightRadius: 150,
//   },
//   headerTop: {
//     paddingTop: 15,
//     paddingHorizontal: 20,
//   },
//   time: {
//     color: "#FFF",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   headerLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   avatar: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     position: "relative",
//   },
//   avatarImage: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//   },
//   statusIndicator: {
//     position: "absolute",
//     bottom: 2,
//     right: 2,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: "#10B981",
//     borderWidth: 2,
//     borderColor: "#FFF",
//   },
//   greeting: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#000",
//   },
//   subGreeting: {
//     fontSize: 14,
//     color: "#4B5563",
//     marginTop: 2,
//   },
//   menuButton: {
//     padding: 8,
//   },
//   searchSection: {
//     paddingHorizontal: 20,
//     marginTop: -20,
//     marginBottom: 20,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFF",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 12,
//     fontSize: 14,
//     color: "#000",
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   heroCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 20,
//     marginBottom: 24,
//     padding: 24,
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   heroContent: {
//     zIndex: 1,
//   },
//   heroTitle: {
//     fontSize: 28,
//     fontWeight: "800",
//     color: "#FFF",
//   },
//   heroSubtitle: {
//     fontSize: 28,
//     fontWeight: "800",
//     color: "#FFF",
//   },
//   heroImageContainer: {
//     position: "relative",
//     width: 100,
//     height: 100,
//   },
//   heroCircle1: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.2)",
//   },
//   heroCircle2: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     top: 10,
//     left: 10,
//   },
//   heroIconWrapper: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#FFF",
//     top: 20,
//     left: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heroEmoji: {
//     fontSize: 28,
//   },
//   heroHands: {
//     fontSize: 16,
//     marginTop: -8,
//   },
//   section: {
//     marginBottom: 24,
//   },
//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 17,
//     fontWeight: "700",
//     color: "#000",
//   },
//   seeMore: {
//     fontSize: 14,
//     color: "#DC143C",
//     fontWeight: "600",
//   },
//   requestCard: {
//     marginHorizontal: 20,
//     marginBottom: 12,
//     padding: 16,
//     backgroundColor: "#E8F4FF",
//     borderRadius: 12,
//   },
//   requestContent: {
//     marginBottom: 12,
//   },
//   requestLabel: {
//     fontSize: 13,
//     color: "#000",
//     marginBottom: 6,
//     fontWeight: "600",
//   },
//   requestValue: {
//     fontWeight: "400",
//   },
//   priorityRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   urgencyDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#DC143C",
//   },
//   donateButton: {
//     backgroundColor: "#DC143C",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   donateButtonText: {
//     color: "#FFF",
//     fontSize: 14,
//     fontWeight: "700",
//   },
//   bankCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginBottom: 12,
//     padding: 12,
//     backgroundColor: "#FFF",
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   bankIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: 12,
//     backgroundColor: "#E0F2FE",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   bankInfo: {
//     flex: 1,
//   },
//   bankName: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#000",
//     marginBottom: 4,
//   },
//   bankDistance: {
//     fontSize: 12,
//     color: "#6B7280",
//     marginBottom: 4,
//   },
//   rating: {
//     flexDirection: "row",
//     gap: 2,
//   },
//   testimonialCard: {
//     marginHorizontal: 20,
//     padding: 20,
//     borderRadius: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   testimonialHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   testimonialAvatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 12,
//   },
//   testimonialAvatarImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   testimonialInfo: {
//     flex: 1,
//   },
//   testimonialName: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#FFF",
//   },
//   playButton: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   testimonialText: {
//     fontSize: 13,
//     color: "#FFF",
//     lineHeight: 20,
//   },
//   // Sidebar Styles
//   sidebarOverlay: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   sidebarBackdrop: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   sidebarContainer: {
//     width: width * 0.75,
//     height: "100%",
//     backgroundColor: "#FFF",
//     shadowColor: "#000",
//     shadowOffset: { width: -2, height: 0 },
//     shadowOpacity: 0.25,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   sidebarHeader: {
//     paddingTop: 50,
//     paddingBottom: 30,
//     paddingHorizontal: 20,
//     position: "relative",
//   },
//   closeButton: {
//     position: "absolute",
//     top: 15,
//     right: 15,
//     zIndex: 10,
//   },
//   closeButtonCircle: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#FFF",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profileSection: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   sidebarAvatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 12,
//     position: "relative",
//   },
//   sidebarAvatarImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   sidebarStatusIndicator: {
//     position: "absolute",
//     bottom: 2,
//     right: 2,
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     backgroundColor: "#10B981",
//     borderWidth: 3,
//     borderColor: "#FFF",
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#FFF",
//     marginBottom: 4,
//   },
//   profileEmail: {
//     fontSize: 13,
//     color: "rgba(255, 255, 255, 0.9)",
//   },
//   menuContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   menuItemRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F0F0F0",
//   },
//   menuItem: {
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F0F0F0",
//   },
//   menuItemText: {
//     fontSize: 15,
//     color: "#000",
//     fontWeight: "400",
//   },
//   logoutButton: {
//     backgroundColor: "#DC143C",
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 24,
//     shadowColor: "#DC143C",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   logoutButtonText: {
//     color: "#FFF",
//     fontSize: 15,
//     fontWeight: "700",
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
  Modal,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export const DonorHomeScreen = ({ navigation }: any) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const bloodRequests = [
    {
      id: 1,
      hospital: "St Nicholas Hospital",
      location: "No 26, Toyin Street, Ikeja.",
      urgency: "urgent",
      urgencyLabel: "Very Urgent",
      bloodType: "O+, AB, A+",
    },
    {
      id: 2,
      hospital: "Funsho Hospital",
      location: "No 26, Badmus Street, Surulere.",
      urgency: "urgent",
      urgencyLabel: "Very Urgent",
      bloodType: "B+, O-",
    },
  ];

  const bloodBanks = [
    {
      id: 1,
      name: "St Nicholas Hospital, Ajah",
      distance: "30 km away",
      rating: 4,
    },
    {
      id: 2,
      name: "General Hospital Odan, Lagos",
      distance: "30 km away",
      rating: 4,
    },
    {
      id: 3,
      name: "The Eko  Hospital, Ajah",
      distance: "30 km away",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <View style={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={index}
            name={index < rating ? "star" : "star-outline"}
            size={14}
            color={index < rating ? "#10B981" : "#D1D5DB"}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

      {/* Header with Curved Design */}
      <View style={styles.headerCurve}>
        <View style={styles.headerTop}>
          <Text style={styles.time}>9:41</Text>
        </View>

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/44.jpg",
                }}
                style={styles.avatarImage}
              />
              <View style={styles.statusIndicator} />
            </View>
            <View>
              <Text style={styles.greeting}>Hello Mary,</Text>
              <Text style={styles.subGreeting}>How are you today?</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setSidebarVisible(true)}
          >
            <Ionicons name="menu" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Find donation centers"
            placeholderTextColor="#9CA3AF"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Card */}
        <LinearGradient
          colors={["#DC143C", "#B31B36"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Save A Life</Text>
            <Text style={styles.heroSubtitle}>Today</Text>
          </View>
          <View style={styles.heroImageContainer}>
            <View style={styles.heroCircle1} />
            <View style={styles.heroCircle2} />
            <View style={styles.heroIconWrapper}>
              <Text style={styles.heroEmoji}>❤️</Text>
              <Text style={styles.heroHands}>🙌</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Blood Donation Requests */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Blood Donation Requests</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>

          {bloodRequests.map((request) => (
            <View key={request.id} style={styles.requestCard}>
              <View style={styles.requestContent}>
                <Text style={styles.requestLabel}>
                  Name:{" "}
                  <Text style={styles.requestValue}>{request.hospital}</Text>
                </Text>
                <Text style={styles.requestLabel}>
                  Location:{" "}
                  <Text style={styles.requestValue}>{request.location}</Text>
                </Text>
                <View style={styles.priorityRow}>
                  <Text style={styles.requestLabel}>
                    Priority Level:{" "}
                    <Text style={styles.requestValue}>
                      {request.urgencyLabel}
                    </Text>
                  </Text>
                  <View style={styles.urgencyDot} />
                </View>
              </View>

              <TouchableOpacity
                style={styles.donateButton}
                onPress={() =>
                  navigation?.navigate("BloodRequestDetails", {
                    hospital: request.hospital,
                    location: request.location,
                  })
                }
              >
                <Text style={styles.donateButtonText}>Donate Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Verified Blood Banks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Verified Blood Banks Near You
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>

          {bloodBanks.map((bank) => (
            <TouchableOpacity key={bank.id} style={styles.bankCard}>
              <View style={styles.bankIcon}>
                <Ionicons name="business" size={24} color="#3B82F6" />
              </View>
              <View style={styles.bankInfo}>
                <Text style={styles.bankName}>{bank.name}</Text>
                <Text style={styles.bankDistance}>{bank.distance}</Text>
                {renderStars(bank.rating)}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Testimonials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Testimonials</Text>
          <LinearGradient
            colors={["#10B981", "#059669"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.testimonialCard}
          >
            <View style={styles.testimonialHeader}>
              <View style={styles.testimonialAvatar}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/32.jpg",
                  }}
                  style={styles.testimonialAvatarImage}
                />
              </View>
              <View style={styles.testimonialInfo}>
                <Text style={styles.testimonialName}>Raphael .O.</Text>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name="play" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.testimonialText}>
              laoreet tincidunt tincidunt faucibus ipsum elit Cras Quisque Nunc
              vitae consectetur.
            </Text>
          </LinearGradient>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Sidebar Drawer */}
      <Modal
        visible={sidebarVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setSidebarVisible(false)}
      >
        <View style={styles.sidebarOverlay}>
          <View style={styles.sidebarContainer}>
            {/* Sidebar Header with Gradient */}
            <LinearGradient
              colors={["#DC143C", "#B31B36"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.sidebarHeader}
            >
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSidebarVisible(false)}
              >
                <View style={styles.closeButtonCircle}>
                  <Ionicons name="close" size={24} color="#DC143C" />
                </View>
              </TouchableOpacity>

              <View style={styles.profileSection}>
                <View style={styles.sidebarAvatar}>
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/44.jpg",
                    }}
                    style={styles.sidebarAvatarImage}
                  />
                  <View style={styles.sidebarStatusIndicator} />
                </View>
                <Text style={styles.profileName}>Mary Oluwafemi</Text>
                <Text style={styles.profileEmail}>maryoluwafemi@gmail.com</Text>
              </View>
            </LinearGradient>

            {/* Menu Items */}
            <ScrollView
              style={styles.menuContainer}
              showsVerticalScrollIndicator={false}
            >
              {/* Availability Toggle */}
              <View style={styles.menuItemRow}>
                <Text style={styles.menuItemText}>Set Availability</Text>
                <Switch
                  value={isAvailable}
                  onValueChange={setIsAvailable}
                  trackColor={{ false: "#D1D5DB", true: "#FCA5A5" }}
                  thumbColor={isAvailable ? "#DC143C" : "#F3F4F6"}
                  ios_backgroundColor="#D1D5DB"
                />
              </View>

              {/* Menu Items */}
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>
                  Switch to Patients Account
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Customer Support</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Refer A Friend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>
                  Legal and Privacy Settings
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Blog and Education</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Check donation history</Text>
              </TouchableOpacity>

              {/* Logout Button */}
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => {
                  setSidebarVisible(false);
                  // Add logout logic
                }}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>

              <View style={{ height: 40 }} />
            </ScrollView>
          </View>

          <TouchableOpacity
            style={styles.sidebarBackdrop}
            activeOpacity={1}
            onPress={() => setSidebarVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  headerCurve: {
    backgroundColor: "#DC143C",
    paddingBottom: 30,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  headerTop: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  time: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    position: "relative",
  },
  avatarImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  statusIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#10B981",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  subGreeting: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 2,
  },
  menuButton: {
    padding: 8,
  },
  searchSection: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: "#000",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  heroCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  heroContent: {
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFF",
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFF",
  },
  heroImageContainer: {
    position: "relative",
    width: 100,
    height: 100,
  },
  heroCircle1: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  heroCircle2: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    top: 10,
    left: 10,
  },
  heroIconWrapper: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF",
    top: 20,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heroEmoji: {
    fontSize: 28,
  },
  heroHands: {
    fontSize: 16,
    marginTop: -8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  seeMore: {
    fontSize: 14,
    color: "#DC143C",
    fontWeight: "600",
  },
  requestCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    backgroundColor: "#E8F4FF",
    borderRadius: 12,
  },
  requestContent: {
    marginBottom: 12,
  },
  requestLabel: {
    fontSize: 13,
    color: "#000",
    marginBottom: 6,
    fontWeight: "600",
  },
  requestValue: {
    fontWeight: "400",
  },
  priorityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  urgencyDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DC143C",
  },
  donateButton: {
    backgroundColor: "#DC143C",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "700",
  },
  bankCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bankIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  bankDistance: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
    gap: 2,
  },
  testimonialCard: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  testimonialHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  testimonialAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  testimonialAvatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  testimonialInfo: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  testimonialText: {
    fontSize: 13,
    color: "#FFF",
    lineHeight: 20,
  },
  // Sidebar Styles
  sidebarOverlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebarBackdrop: {
    flex: 1,
  },
  sidebarContainer: {
    width: width * 0.75,
    height: "100%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  sidebarHeader: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
  },
  closeButtonCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 20,
  },
  sidebarAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    position: "relative",
  },
  sidebarAvatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  sidebarStatusIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#10B981",
    borderWidth: 3,
    borderColor: "#FFF",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.9)",
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItemText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
  },
  logoutButton: {
    backgroundColor: "#DC143C",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#DC143C",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
