import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ClinicaPropria: React.FC<any> = ({ navigation }) => {
  const [endereco, setEndereco] = useState('');
  const [especialista, setEspecialista] = useState('');

  const handleConfirm = () => {
    if (endereco && especialista) {
      navigation.navigate('CalendarioHorario', { endereco, especialista });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Clínica Própria</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Especialista"
        value={especialista}
        onChangeText={setEspecialista}
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default ClinicaPropria;
