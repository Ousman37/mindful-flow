import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import { TimerContext } from "@/context/TimerContext";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const { duration } = useContext(TimerContext);
  const [secondsRemaining, setSecondsRemaining] = useState(duration); // Initialize with duration from context
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

    if (isMeditating && secondsRemaining > 0) {
      timerId = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      stopMeditation();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync(); // Clean up the sound when component unmounts
    };
  }, [audioSound]);

  const startMeditation = () => {
    setIsMeditating(true);
    setSecondsRemaining(duration); // Use the duration from context
    toggleSound(true);
  };

  const stopMeditation = async () => {
    setIsMeditating(false);
    setSecondsRemaining(duration); // Reset to the context duration when stopping
    await audioSound?.pauseAsync();
    setPlayingAudio(false);
    setSound(null); // Clear the sound state
  };

  const toggleSound = async (play: boolean) => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();
    if (status?.isLoaded) {
      if (play) {
        await sound.playAsync();
        setPlayingAudio(true);
      } else {
        await sound.pauseAsync();
        setPlayingAudio(false);
      }
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setSound(sound);
    return sound;
  };

  const handleAdjustDuration = () => {
    if (isMeditating) {
      stopMeditation(); // Stop the meditation session
    }
    router.push("/(modal)/adjust-meditation-duration");
  };

  // Format the time left to ensure two digits are displayed
  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        className="flex-1"
        resizeMode="cover"
      >
        <AppGradient colors={["transparent", "rgba(0, 0, 0 , 0.8)"]}>
          <Pressable
            onPress={() => {
              if (isMeditating) {
                stopMeditation(); // Ensure meditation stops if the user navigates away
              }
              router.back();
            }}
            className="absolute top-16 left-6 z-10"
            style={{ padding: 10 }}
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center items-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5 px-20">
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
              disabled={isMeditating || isPlayingAudio}
              containerStyle="mb-5 bg-primary max-w-xs"
              textStyle="text-white"
            />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Meditation"}
              onPress={isMeditating ? stopMeditation : startMeditation}
              disabled={isPlayingAudio && !isMeditating} // Stop button is active during meditation, even when audio is playing
              containerStyle="bg-primary mt-5 max-w-xs"
              textStyle="text-white"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
