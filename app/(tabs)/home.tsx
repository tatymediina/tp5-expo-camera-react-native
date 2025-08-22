import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';

export default function DashboardScreen() {

  const router = useRouter()
  return (
    <View className="flex-1 bg-white items-center justify-center p-24">
      <Text className="text-4xl font-bold text-quarter mb-3">
        STELLA SHOPP
      </Text>
      <Text className="text-base text-primary mb-6">
        Bienvenido a tu aplicación
      </Text>
      <Button text="Ver productos" onPress={()=> router.replace('/(tabs)/products')} />
    </View>
  );
}