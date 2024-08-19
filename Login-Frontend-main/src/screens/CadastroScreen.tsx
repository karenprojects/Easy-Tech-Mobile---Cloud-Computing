import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CadastroScreen: React.FC<any> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomePlano, setNomePlano] = useState('');
  const [tipoPlano, setTipoPlano] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não correspondem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, email, senha, cep, endereco, numero, complemento, telefone, nomePlano, tipoPlano }),
      });

      if (!response.ok) {
        throw new Error('Erro ao realizar o cadastro');
      }

      // Navega para a tela de login após o cadastro bem-sucedido
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      
      <Text style={styles.sectionTitle}>Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repita a senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={complemento}
        onChangeText={setComplemento}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <Text style={styles.sectionTitle}>Informações sobre seu plano de saúde</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do plano de saúde"
        value={nomePlano}
        onChangeText={setNomePlano}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo do plano de saúde"
        value={tipoPlano}
        onChangeText={setTipoPlano}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#444',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
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
    textAlign: 'center',
  },
});

export default CadastroScreen;
