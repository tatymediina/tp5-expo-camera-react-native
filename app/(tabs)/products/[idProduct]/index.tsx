import { products } from "@/constants/products";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "~/components/Button";

export default function ProductDetail() {
  const router = useRouter();
  const { idProduct } = useLocalSearchParams();
  const product = products.find((p) => p.id === idProduct);
  const { width } = Dimensions.get("window");

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center bg-tertiary">
        <Text className="text-red-500 text-lg font-semibold">
          Producto no encontrado
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-tertiary"
      contentContainerStyle={{
        padding: 16,
        paddingTop: 24,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-white rounded-2xl shadow-lg mb-6 border border-gray-200 overflow-hidden">
        <View className="bg-gray-50 p-4">
          <Image
            source={{ uri: product.image }}
            className="w-full rounded-xl"
            style={{
              height: width * 0.7,
              backgroundColor: "#f9fafb",
            }}
            resizeMode="contain"
          />
        </View>
        <View className="p-4">
          <Text className="text-2xl font-extrabold text-primary mb-1">
            {product.name}
          </Text>
          <Text className="text-xl text-gray-700 font-semibold mb-4">
            ${product.price}
          </Text>
          <Button
            text="Comprar"
            onPress={() => console.log("Botón presionado")}
          />
        </View>
      </View>
      <Text className="text-lg font-semibold text-gray-800 mb-3">
        Comentarios
      </Text>
      {product.comments.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          className="bg-fifth p-4 rounded-xl border border-primary/30"
          style={{
            marginBottom: index < product.comments.length - 1 ? 12 : 0,
          }}
          onPress={() =>
            router.push(`/products/${product.id}/comment/${item.id}`)
          }
        >
          <Text className="text-secondary font-medium">{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
