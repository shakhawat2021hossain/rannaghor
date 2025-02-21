/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        coral: {
          DEFAULT: '#FF6F61', // Primary color
          hover: '#E65A50',   // Darker shade for hover states
        },
        green: {
          DEFAULT: '#4CAF50', // Secondary color
          hover: '#43A047',   // Darker shade for hover states
        },
        orange: {
          DEFAULT: '#FFA726', // Accent color
          hover: '#FB8C00',   // Darker shade for hover states
        },
        gray: {
          light: '#F5F5F5',   // Light gray for backgrounds
          dark: '#333333',    // Dark gray for text
        },
        white: '#FFFFFF',     // White for card backgrounds
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
