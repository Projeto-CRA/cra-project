import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SuppliesScreen from './src/presentation/screens/leaderscreens/SuppliesScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SuppliesScreen/>
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
