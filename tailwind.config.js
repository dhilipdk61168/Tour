module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Ocean Horizon Palette
        primary: "#4ECDC4", // teal-400 - Adventure trust, signature brand recognition
        secondary: "#1A365D", // blue-900 - Authority depth, booking confidence moments
        accent: "#26D0CE", // teal-300 - Interactive highlights, discovery encouragement
        
        // Background Colors
        background: "#FAFAFA", // gray-50 - Clean content canvas, reading comfort
        surface: "#FFFFFF", // white - Card elevation, content organization
        
        // Text Colors
        text: {
          primary: "#2D3748", // gray-700 - Extended reading, clear hierarchy
          secondary: "#718096", // gray-500 - Supporting information, subtle guidance
        },
        
        // Status Colors
        success: "#38A169", // green-500 - Booking confirmations, positive reinforcement
        warning: "#D69E2E", // yellow-500 - Availability alerts, helpful urgency
        error: "#E53E3E", // red-500 - Form validation, constructive correction
        
        // Border Colors
        border: "#E2E8F0", // gray-200 - Minimal borders for forms and tables
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        editorial: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '300ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}