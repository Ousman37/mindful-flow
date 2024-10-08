module.exports = {
  name: "Mindful Flow",
  slug: "mindful-flow",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  splash: {
    image: "./assets/images/splash.png",
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
    package: "com.yourname.mindfulflow", // <-- Add this line
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    eas: {
      projectId: "d879e6c8-0de5-48a5-bac5-7284804d03e2",
    },
  },
};
