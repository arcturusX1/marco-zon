import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* The (tabs) group is a single screen to this Stack.
            Its own _layout.tsx owns the headers and the tab bar. */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* Rendered after the navigator so toasts overlay every screen. */}
      <Toast />
    </>
  );
}
