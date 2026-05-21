import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrarSinistro from "../mobile/src/presentation/screens/leaderscreens/Tela06-Sinistro"

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrarSinistro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
