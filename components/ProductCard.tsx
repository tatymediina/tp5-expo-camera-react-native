import { Image, Text, TouchableOpacity, View } from "react-native";

type ProductCardProps = {
  price: number;
  onPress: () => void;
  uri: string;
  name: string;
};
export const ProductCard = ({
  price,
  uri,
  onPress,
  name,
}: ProductCardProps) => {
  return (
    <TouchableOpacity
      className="w-[45%] mb-4 bg-fifth rounded-xl overflow-hidden shadow-md"
      onPress={onPress}
    >
      <Image source={{ uri: uri }} className="w-full h-48" resizeMode="cover" />
      <View className="p-3 bg-fifth">
        <Text className="text-base font-bold text-secondary mb-1">{name}</Text>
        <Text className="text-lg  text-sixth">${price}</Text>
      </View>
    </TouchableOpacity>
  );
};
