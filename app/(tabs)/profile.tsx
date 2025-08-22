import { ProductCard } from "@/components/ProductCard";
import { products } from "@/constants/products";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { Button } from "~/components/Button";

export default function ProfileScreen() {

  const router = useRouter()
  return (
    <View className="flex-1 bg-tertiary pt-4 px-5">
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/2c/7e/19/2c7e197f7b1d2787fe8e709357adbd60.jpg",
        }}
        className="w-36 h-36 rounded-full border-4 border-primary self-center mt-20"
      />
      <Text className="text-2xl font-bold text-quarter text-center my-2">
        Andy Sachs
      </Text>

      <Button
        text="Editar perfil"
        onPress={() => console.log("Botón presionado")}
      />

      <View className="flex-1 w-full">
        <Text className="text-lg font-bold text-quarter mb-2">Tus compras</Text>
        <FlatList
        
     data={products.slice(4, 7)}
          keyExtractor={(item) => item.id}
          numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        
        className="pb-[#15]"
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              price={item.price}
              uri={item.image}
              onPress={() => router.push(`/(tabs)/products/2`)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20}}
        />
      </View>
    </View>
  );
}
