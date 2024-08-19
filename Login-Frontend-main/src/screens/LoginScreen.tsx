import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Definimos aqui o tipo para a propriedade navigation
type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      const token = data.token;

      // Armazene o token JWT localmente
      await AsyncStorage.setItem('token', token);

      // Navega para a tela Home após o login bem-sucedido
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Beneficiário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
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
    fontWeight: '600',
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
