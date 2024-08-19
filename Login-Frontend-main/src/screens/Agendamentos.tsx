import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Agendamentos: React.FC<any> = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {selectedOption === null ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={() => setSelectedOption('Consultas')}>
            <Text style={styles.optionText}>Consultas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => setSelectedOption('Exames')}>
            <Text style={styles.optionText}>Exames</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          {selectedOption === 'Consultas' && (
            <>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Telemedicina')}>
                <Text style={styles.optionText}>Telemedicina</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ClinicaPropria')}>
                <Text style={styles.optionText}>Clínicas Próprias</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ClinicaParceira')}>
                <Text style={styles.optionText}>Clínicas Parceiras</Text>
              </TouchableOpacity>
            </>
          )}
          {selectedOption === 'Exames' && (
            <>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ClinicaPropria')}>
                <Text style={styles.optionText}>Clínicas Próprias</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ClinicaParceira')}>
                <Text style={styles.optionText}>Clínicas Parceiras</Text>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedOption(null)}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  optionButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Agendamentos;
