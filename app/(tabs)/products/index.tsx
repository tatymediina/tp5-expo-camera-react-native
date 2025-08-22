import { products } from "@/constants/products";
import { useRouter } from "expo-router";
import { FlatList, View } from "react-native";
import { ProductCard } from "~/components/ProductCard";

export default function Products() {
  const router = useRouter();

  return (
    <View className="bg-tertiary p-3 flex-1">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ gap: 10 }}
        className="pb-[#15]"
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            uri={item.image}
            onPress={() => router.push(`/products/${item.id}`)}
          />
        )}
      />
    </View>
  );
}
