import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

// Definimos aqui o tipo para a propriedade navigation
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Funções para navegação
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo ao Sistema de Agendamento</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Agendamentos')}>
            <Text style={styles.buttonText}>Agendamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Token')}>
            <Text style={styles.buttonText}>Token</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Carteira Digital ')}>
            <Text style={styles.buttonText}>Carteira Digital </Text>
          </TouchableOpacity>
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
