import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface HamburgerMenuProps {
    onClose: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose }) => {
    const [availability, setAvailability] = React.useState(true);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>M</Text>
                        <View style={styles.onlineIndicator} />
                    </View>
                    <View>
                        <Text style={styles.name}>Mary Oluwafemi</Text>
                        <Text style={styles.email}>maryoluwafemi@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuText}>Set Availability</Text>
                    <Switch
                        value={availability}
                        onValueChange={setAvailability}
                        trackColor={{ false: '#D1D1D6', true: COLORS.primary }}
                        thumbColor={COLORS.secondary}
                    />
                </View>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Switch to Patients Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Customer Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Refer A Friend</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Legal and Privacy Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Blog and Education</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Check donation history</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: SPACING.l,
        paddingHorizontal: SPACING.m,
        paddingBottom: SPACING.m,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
        position: 'relative',
    },
    avatarText: {
        color: COLORS.secondary,
        fontSize: 28,
        fontWeight: '600',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: COLORS.background,
    },
    name: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    email: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    closeButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        fontSize: 24,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    menuList: {
        flex: 1,
        paddingTop: SPACING.l,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F7',
    },
    menuText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    logoutButton: {
        marginHorizontal: SPACING.m,
        marginTop: SPACING.l,
        paddingVertical: SPACING.m,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
