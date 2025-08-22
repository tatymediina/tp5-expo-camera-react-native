import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Nuestros productos",
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#E5E0F7',
          },
          headerTintColor: '#4A4270',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} 
      />
      <Stack.Screen 
        name="[idProduct]/index" 
        options={{ 
          title: "Detalle del producto"
        }} 
      />
      <Stack.Screen 
        name="[idProduct]/comment/[idComment]" 
        options={{ 
          title: "Comentario"
        }} 
      />
    </Stack>
  );
}
