import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/organisms/Header";
import Button from "../../components/atoms/Button";

export default function ChecagemTrechosScreen() {
  return (
    <View style={styles.container}>
      <Header title="Checagem de CP_TRECHOS" />

      <View style={styles.content}>

        {/* CARD 1 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.checkboxActive}>
              <Text style={styles.check}>✓</Text>
            </View>

            <View>
              <Text style={styles.title}>Av. Caxangá</Text>
              <Text style={styles.text}>CP 00 - CP 120</Text>
              <Text style={styles.text}>Metragem: 1.20 KM</Text>
            </View>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.checkboxActive}>
              <Text style={styles.check}>✓</Text>
            </View>

            <View>
              <Text style={styles.title}>Rua Imperial</Text>
              <Text style={styles.text}>CP 120 - CP 250</Text>
              <Text style={styles.text}>Metragem: 1.30 KM</Text>
            </View>
          </View>
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.checkbox} />

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Rua Real da Torre</Text>
              <Text style={styles.text}>CP 250 - CP 400</Text>
              <Text style={styles.text}>Metragem: 1.50 KM</Text>

              <TouchableOpacity style={styles.select}>
                <Text style={styles.selectText}>
                  Motivo: Não Executado
                </Text>

                <Text style={styles.arrow}>⌄</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* CARD 4 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.checkboxActive}>
              <Text style={styles.check}>✓</Text>
            </View>

            <View>
              <Text style={styles.title}>
                Av. Norte Miguel Arraes
              </Text>

              <Text style={styles.text}>
                CP 400 - CP 620
              </Text>

              <Text style={styles.text}>
                Metragem: 2.20 KM
              </Text>
            </View>
          </View>
        </View>

        {/* CARD 5 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.checkbox} />

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Rua da Aurora</Text>

              <Text style={styles.text}>
                CP 620 - CP 780
              </Text>

              <Text style={styles.text}>
                Metragem: 1.60 KM
              </Text>

              <TouchableOpacity style={styles.select}>
                <Text style={styles.selectText}>
                  Motivo: Não Executado
                </Text>

                <Text style={styles.arrow}>⌄</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* PROGRESSO */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            3 de 5 trechos verificados
          </Text>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

      </View>

      {/* BOTÃO */}
      <View style={styles.footer}>
        <Button
          title="Confirmar Checagem"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  content: {
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: "#999",
    borderRadius: 5,
    marginRight: 12,
    marginTop: 3,
  },

  checkboxActive: {
    width: 24,
    height: 24,
    backgroundColor: "#5b7f4f",
    borderRadius: 5,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
    marginTop: 3,
  },

  check: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },

  text: {
    fontSize: 12,
    color: "#777",
    marginBottom: 2,
  },

  select: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectText: {
    fontSize: 12,
    color: "#666",
  },

  arrow: {
    fontSize: 14,
    color: "#666",
  },

  progressContainer: {
    marginTop: 10,
    marginBottom: 20,
  },

  progressText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },

  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 999,
    overflow: "hidden",
  },

  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "#5b7f4f",
  },

  footer: {
    paddingBottom: 20,
  },
});