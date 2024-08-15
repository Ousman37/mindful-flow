module.exports = {
  name: "Mindful Flow",
  slug: "mindful-flow",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./images/icon.png", // Updated path
  splash: {
    image: "./images/splash.png", // Updated path
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
      foregroundImage: "./images/adaptive-icon.png", // Updated path
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./images/favicon.png", // Updated path
  },
  extra: {
    eas: {
      projectId: "d879e6c8-0de5-48a5-bac5-7284804d03e2", // Project ID added
    },
  },
};
