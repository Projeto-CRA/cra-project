//Tela 4 - Frequencia da equipe
import React, { useState } from 'react';
import { View, Text, Switch, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/organisms/Header'; 

//Define o tipo de dados de cada membro da equipe
export type TeamMember = {
  id: string;
  nome: string;
  matricula: string;
  presente: boolean;
};

interface TeamFrequencyProps {
  equipeInicial: TeamMember[];
  onSalvar: (equipe: TeamMember[]) => void;
}

//Componente principal que controla a frequência da equipe
export const TeamFrequency: React.FC<TeamFrequencyProps> = ({ equipeInicial, onSalvar }) => {
  //Estado local que armazena a lista de membros e suas presenças
  const [equipe, setEquipe] = useState<TeamMember[]>(equipeInicial);

  //Função que alterna o status de presença de um membro específico
  const togglePresenca = (id: string) => {
    setEquipe(prev =>
      prev.map(membro =>
        membro.id === id ? { ...membro, presente: !membro.presente } : membro
      )
    );
  };

  return (
    <View style={styles.container}>

      {/*Cabeçalho da tela*/}
      <Header title={'Frequência da Equipe'} />

      {/*Título e subtítulo da tela*/}
      <Text style={styles.titulo}>Frequência da Equipe</Text>
      <Text style={styles.subtitulo}>Marque a presença dos membros para hoje</Text>

      {/*Lista que renderiza todos os membros da equipe*/}
      <FlatList
        data={equipe}
        keyExtractor={item => item.id} //Identifica cada item da lista
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/*Exibe informações do membro*/}
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.matricula}>Matrícula: {item.matricula}</Text>
            </View>
            {/*Exibe status e botão de alternância de presença*/}
            <View style={styles.switchContainer}>
              <Text style={styles.status}>{item.presente ? 'Presente' : 'Ausente'}</Text>
              <Switch
                value={item.presente} //Mostra se está presente ou não
                onValueChange={() => togglePresenca(item.id)} //Alterna presença ao mudar
                thumbColor={item.presente ? '#fff' : '#ccc'}
                trackColor={{ true: '#2E7D32', false: '#BDBDBD' }}
              />
            </View>
          </View>
        )}
      />

      {/*Botão que salva a frequência atual da equipe*/}
      <TouchableOpacity style={styles.botaoSalvar} onPress={() => onSalvar(equipe)}>
        <Text style={styles.textoBotao}>Salvar Frequência</Text>
      </TouchableOpacity>
    </View>
  );
};

//Estilos visuais da tela
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
    color: '#5A8251',
    fontWeight: '500',
  },
  botaoSalvar: {
    backgroundColor: '#5A8251',
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
