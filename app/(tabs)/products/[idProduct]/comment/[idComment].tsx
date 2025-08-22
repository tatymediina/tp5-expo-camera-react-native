// app/(tabs)/products/[idProduct]/comment/[idComment].tsx
import { products } from '@/constants/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ComentarioDetalle() {
  const { idProduct, idComment } = useLocalSearchParams();
  const product = products.find((p) => p.id === idProduct);
  const comment = product?.comments.find((c) => c.id === idComment);

  if (!product || !comment) {
    return (
      <>
        <Stack.Screen options={{ title: 'Comentario no encontrado' }} />
        <View className="flex-1 p-4 bg-white">
          <Text className="text-red-500">Comentario no encontrado</Text>
        </View>
      </>
    );
  }

  return (
    <View className="flex-1 p-4 bg-tertiary">
     <View className='bg-fifth p-2 rounded-lg shadow-sm'>
       <Text className="text-xl font-bold mb-2">Comentario #{idComment}</Text>
      <Text className="text-base text-secondary">{comment.text}</Text>
      <Text className="mt-4 text-gray-600 text-sm">
        Producto: {product.name}
      </Text>
     </View>
    </View>
  );
}
