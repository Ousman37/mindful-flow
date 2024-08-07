import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const App = () => {
  console.log("Rendering App Component");

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1 justify-center items-center"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <SafeAreaView className="flex-1 px-4 justify-between">
            <View>
              <Text className="font-bold text-white text-4xl text-center">
                Mindful Flow
              </Text>
              <Text className="text-white text-2xl leading-relaxed text-center">
                Explore our meditation sessions, find inner peace, and enjoy a
                moment of calm.
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
