import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  onPress?: () => void; 
};

export const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-quarter py-3 px-6 rounded-xl self-center my-5"
      onPress={onPress}
    >
      <Text className="text-white text-base font-bold">{text}</Text>
    </TouchableOpacity>
  );
};
