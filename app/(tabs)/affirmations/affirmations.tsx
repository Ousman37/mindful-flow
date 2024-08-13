import React from "react";
import { View, Text, ScrollView } from "react-native";
import AppGradient from "@/components/AppGradient";
import Colors from "@/constants/Colors";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={[Colors.primaryLight, Colors.primaryDark]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20 }}
        >
          <Text className="text-zinc-50 text-3xl font-bold mb-4 text-center">
            Transform Your Mindset with Daily Affirmations
          </Text>
          <View className="space-y-6">
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
