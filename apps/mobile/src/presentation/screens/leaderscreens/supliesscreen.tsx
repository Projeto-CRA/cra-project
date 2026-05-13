import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Header from "../../components/organisms/Header";
import Button from "../../components/atoms/Button";
import InfoCard from "../../components/molecules/RectangularCard";

export default function SuppliesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <Header
      title="Insumos e Equipamentos" />

      {/* Conteúdo */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <InfoCard
          icon="construct-outline"
          title="Roçadeira"
          value="(3)"
          rightIcon="chevron-forward-outline"
        />

        <InfoCard
          icon="hand-left-outline"
          title="Luvas"
          value="(15 pares)"
          rightIcon="chevron-forward-outline"
        />

        <InfoCard
          icon="eye-outline"
          title="Óculos de Proteção"
          value="(10)"
          rightIcon="chevron-forward-outline"
        />

        <InfoCard
          icon="water-outline"
          title="Combustível"
          value="(20L)"
          rightIcon="chevron-forward-outline"
        />

        {/* Botão */}
        <Button
          title="Solicitar Insumo"
          onPress={() => console.log("Solicitar")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },
});