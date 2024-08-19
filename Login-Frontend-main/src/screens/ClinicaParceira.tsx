import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ClinicaParceira: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clínica Parceira</Text>
      <TextInput style={styles.input} placeholder="Endereço" />
      <TextInput style={styles.input} placeholder="Especialista" />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default ClinicaParceira;
