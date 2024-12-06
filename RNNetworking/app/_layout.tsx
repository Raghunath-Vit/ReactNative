import { Stack } from "expo-router";

export default function RootLayout() {
  // The extra index text coming can be removed by using screenOptions headerShown:false,
  return <Stack screenOptions={{
    headerShown:false,
  }} />;
}
