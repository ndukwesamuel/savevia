import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UpdateCredentialsScreenProps {
  navigation?: any;
}

const UpdateCredentialsScreen: React.FC<UpdateCredentialsScreenProps> = ({
  navigation,
}) => {
  const [name, setName] = useState("Comfort Ndukwe");
  const [address, setAddress] = useState("71 brick field");
  const [mobileNo, setMobileNo] = useState("08056148116");
  const [age, setAge] = useState("50");

  // Non-editable fields
  const gender = "F";
  const genotype = "AA";
  const bloodGroup = "O+";

  const handleSave = () => {
    console.log("Saving credentials:", {
      name,
      address,
      mobileNo,
      age,
      gender,
      genotype,
      bloodGroup,
    });
    // Add your save logic here
    // navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update credentials</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#C7C7CD"
          />
        </View>

        {/* Residential Address Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Residential Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter Address"
            placeholderTextColor="#C7C7CD"
          />
        </View>

        {/* Mobile No Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mobile No</Text>
          <TextInput
            style={styles.input}
            value={mobileNo}
            onChangeText={setMobileNo}
            placeholder="Type in phone number"
            placeholderTextColor="#C7C7CD"
            keyboardType="phone-pad"
          />
        </View>

        {/* Age Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="Enter age as of last birthday"
            placeholderTextColor="#C7C7CD"
            keyboardType="numeric"
          />
        </View>

        {/* Gender (Non-editable) */}
        <View style={styles.fieldContainer}>
          <Text style={styles.staticLabel}>Gender: {gender}</Text>
        </View>

        {/* Genotype (Non-editable) */}
        <View style={styles.fieldContainer}>
          <Text style={styles.staticLabel}>Genotype: {genotype}</Text>
        </View>

        {/* Blood Group (Non-editable) */}
        <View style={styles.fieldContainer}>
          <Text style={styles.staticLabel}>Blood Group: {bloodGroup}</Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
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
    marginRight: 28, // To center the title accounting for back button
  },
  placeholder: {
    width: 28,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  fieldContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: "#000",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  staticLabel: {
    fontSize: 16,
    color: "#9E9E9E",
    fontWeight: "400",
  },
  saveButton: {
    backgroundColor: "#DC143C",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default UpdateCredentialsScreen;
