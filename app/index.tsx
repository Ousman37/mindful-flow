import React from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import beachImage from "@/assets/meditation-images/beach.webp";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  console.log("Rendering App Component");

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className="flex-1 mx-5 px-1 justify-between">
            <View className="items-center">
              <Text className="font-bold text-white text-4xl text-center mb-2">
                Mindful Flow
              </Text>
              <Text className="text-white text-2xl leading-relaxed text-center">
                Explore our meditation sessions, find inner peace, and enjoy a
                moment of calm.
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
                textStyle="text-lg font-semibold"
                containerStyle="bg-primary mt-8"
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
