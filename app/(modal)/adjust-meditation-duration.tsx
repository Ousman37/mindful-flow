import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext"; // Corrected import

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient
        colors={[Colors.calmGreen, Colors.primary, Colors.accentLight]}
      >
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center flex-1 px-4">
          <Text className="text-white text-3xl text-center font-bold mb-6">
            Adjust your Meditation Duration
          </Text>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View className="w-full max-w-xs">
              <CustomButton
                title="10 seconds"
                onPress={() => handlePress(10)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="5 minutes"
                onPress={() => handlePress(5 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="10 minutes"
                onPress={() => handlePress(10 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="15 minutes"
                onPress={() => handlePress(15 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="20 minutes"
                onPress={() => handlePress(20 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="30 minutes"
                onPress={() => handlePress(30 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="45 minutes"
                onPress={() => handlePress(45 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="60 minutes"
                onPress={() => handlePress(60 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
              <CustomButton
                title="90 minutes"
                onPress={() => handlePress(90 * 60)}
                containerStyle="mb-4 bg-primary py-3"
                textStyle="text-white text-lg"
              />
            </View>
          </ScrollView>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
