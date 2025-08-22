import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-tertiary justify-center px-8">
      <Text className="text-3xl font-bold text-quarter mb-8 text-center">
        Inicio de sesión
      </Text>
      <TextInput
        className="h-12 border-primary border-[1.5px] bg-white mb-5 px-4 rounded-xl text-base"
        placeholder="Usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="h-12 border-primary border-2 bg-white mb-5 px-4 rounded-xl text-base"
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        className="bg-quarter py-3 rounded-xl items-center shadow-lg shadow-black"
        onPress={()=>router.push(`/(auth)/faceId`)}
      >
        <Text className="text-white text-base font-bold">Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
