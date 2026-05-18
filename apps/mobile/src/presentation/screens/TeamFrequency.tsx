//Tela 4 - Frequencia da equipe
import React, { useState } from 'react';
import { View, Text, Switch, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/organisms/Header'; 

export type MembroEquipe = {
  id: string;
  nome: string;
  matricula: string;
  presente: boolean;
};

interface FrequenciaEquipeProps {
  equipeInicial: MembroEquipe[];
  onSalvar: (equipe: MembroEquipe[]) => void;
}

export const FrequenciaEquipe: React.FC<FrequenciaEquipeProps> = ({ equipeInicial, onSalvar }) => {
  const [equipe, setEquipe] = useState<MembroEquipe[]>(equipeInicial);

  const togglePresenca = (id: string) => {
    setEquipe(prev =>
      prev.map(membro =>
        membro.id === id ? { ...membro, presente: !membro.presente } : membro
      )
    );
  };

  return (
    <View style={styles.container}>

      <Header />

      <Text style={styles.titulo}>Frequência da Equipe</Text>
      <Text style={styles.subtitulo}>Marque a presença dos membros para hoje</Text>

      <FlatList
        data={equipe}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.matricula}>Matrícula: {item.matricula}</Text>
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.status}>{item.presente ? 'Presente' : 'Ausente'}</Text>
              <Switch
                value={item.presente}
                onValueChange={() => togglePresenca(item.id)}
                thumbColor={item.presente ? '#fff' : '#ccc'}
                trackColor={{ true: '#2E7D32', false: '#BDBDBD' }}
              />
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={() => onSalvar(equipe)}>
        <Text style={styles.textoBotao}>Salvar Frequência</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  matricula: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    marginRight: 8,
    color: '#5A8251', // Primary verde
    fontWeight: '500',
  },
  botaoSalvar: {
    backgroundColor: '#5A8251', // Primary
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

/* Código para teste da tela de frequência da equipe - App.tsx
    
    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, View } from 'react-native';
    import { FrequenciaEquipe, MembroEquipe } from '../mobile/src/presentation/screens/TeamFrequency';

    export default function App() {
    // Dados mockados de funcionários
    const equipeMock: MembroEquipe[] = [
        { id: '1', nome: 'José Carlos da Silva', matricula: '12345', presente: true },
        { id: '2', nome: 'Maria das Graças', matricula: '12346', presente: false },
        { id: '3', nome: 'Antônio Ferreira', matricula: '12347', presente: true },
        { id: '4', nome: 'Edivaldo Santos', matricula: '12348', presente: true },
        { id: '5', nome: 'Josilene Almeida', matricula: '12349', presente: false },
        { id: '6', nome: 'Paulo Roberto Souza', matricula: '12350', presente: true },
    ];

    const handleSalvar = (equipe: MembroEquipe[]) => {
        console.log('Equipe salva:', equipe);
    };

    return (
        <View style={styles.container}>
        <FrequenciaEquipe equipeInicial={equipeMock} onSalvar={handleSalvar} />
        <StatusBar style="auto" />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    });
*/