import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* The (tabs) group is a single screen to this Stack.
          Its own _layout.tsx owns the headers and the tab bar. */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
