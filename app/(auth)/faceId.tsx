import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [granted, setGranted] = useState(false);

  const router = useRouter();

  const handleHome = () => {
    setGranted(true); // activa mensaje
    setTimeout(() => {
      router.replace("../(tabs)/home");
    }, 1500); // espera 1.5s para que el mensaje se vea
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Necesitamos tu permiso para acceder a la cámara
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />

      <View style={styles.content}>
        <Text style={styles.text}>
          Ubicá tu cara en el óvalo y apretá el botón para ingresar
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleHome}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>

      {granted && (
        <View style={styles.overlay}>
          <Text style={styles.successText}>¡Acceso Concedido!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0FF",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    width: 280,
    height: 400,
    borderRadius: 500,
    overflow: "hidden",
    alignSelf: "center",
    marginVertical: 20,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F0FF",
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BAACEB",
    backgroundColor: "#F2F0FF",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
    color: "#5F5AA5",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5F5AA5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
