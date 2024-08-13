import { Stack } from "expo-router";

export default function AffirmationsLayout() {
  return (
    <Stack>
      <Stack.Screen name="affirmations" options={{ title: "Affirmations" }} />
    </Stack>
  );
}
