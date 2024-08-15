module.exports = {
  name: "Mindful Flow",
  slug: "mindful-flow",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png", // Correct path to icon.png
  splash: {
    image: "./assets/images/splash.png", // Correct path to splash.png
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.yourname.mindfulflow",
  },
  android: {
    package: "com.yourname.mindfulflow",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png", // Correct path to adaptive-icon.png
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png", // Correct path to favicon.png
  },
  extra: {
    eas: {
      projectId: "d879e6c8-0de5-48a5-bac5-7284804d03e2", // Your project ID
    },
  },
  plugins: [
    "expo-router", // Ensure expo-router plugin is included
  ],
};
