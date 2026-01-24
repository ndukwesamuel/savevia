export const COLORS = {
    // Primary Brand Colors
    primary: '#E63946',
    primaryDark: '#D62828',
    primaryLight: '#FF6B77',
    
    // Gradient Colors
    gradientStart: '#FF416C',
    gradientEnd: '#FF4B2B',
    gradientPurple: '#B721FF',
    gradientPink: '#FF1744',
    
    // Secondary Colors
    secondary: '#FFFFFF',
    secondaryDark: '#F5F5F7',
    
    // Text Colors
    text: '#1D1D1F',
    textLight: '#8E8E93',
    textMuted: '#C7C7CC',
    
    // Background Colors
    background: '#FFFFFF',
    backgroundGray: '#F8F8F8',
    backgroundDark: '#1C1C1E',
    
    // Card & Surface Colors
    cardBackground: '#FFFFFF',
    cardBorder: '#E5E5EA',
    
    // Glassmorphism Colors
    glassBackground: 'rgba(255, 255, 255, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
    glassShadow: 'rgba(0, 0, 0, 0.1)',
    
    // Status Colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF',
    
    // Urgency Colors
    urgentHigh: '#FF3B30',
    urgentMedium: '#FF9500',
    urgentLow: '#1D1D1F',
    
    // Accent Colors
    accent: '#5856D6',
    accentLight: '#AF52DE',
};

export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
};

export const FONT_SIZE = {
    xs: 11,
    s: 13,
    m: 15,
    l: 17,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    huge: 32,
};

export const BORDER_RADIUS = {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 20,
    xxl: 24,
    full: 9999,
};

export const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
    },
    colored: {
        shadowColor: '#E63946',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
};
