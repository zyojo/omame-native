import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center bg-stone-50 p-5">
        <Text className="text-2xl font-semibold text-stone-900 mb-4">
          This screen does not exist.
        </Text>
        <Link href="/" className="mt-4 py-4 px-6 bg-stone-800 rounded-md">
          <Text className="text-white font-medium">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
