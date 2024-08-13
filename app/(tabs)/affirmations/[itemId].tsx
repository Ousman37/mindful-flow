import { View, Text, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"; 
import { GalleryPreviewData } from "@/components/models/AffirmationCategory";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData | undefined>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    // Fetch affirmation by id
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationsData.find(
        (a) => a.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");
        // Remove the last element if it's an empty string
        if (affirmationsArray[affirmationsArray.length - 1] === '') {
          affirmationsArray.pop();
        }
        setSentences(affirmationsArray);
        break;
      }
    }
  }, [itemId]);

  if (!affirmation) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
            style={{ padding: 10, top: 40 }}
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <ScrollView className="mt-32" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, index) => (
                  <Text
                    key={index}
                    className="text-3xl mb-12 font-bold text-white text-center"
                  >
                    {sentence.trim()}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
