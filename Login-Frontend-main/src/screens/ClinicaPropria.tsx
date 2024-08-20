import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

const ClinicaPropria: React.FC<any> = ({ navigation }) => {
  const [endereco, setEndereco] = useState('');
  const [especialista, setEspecialista] = useState('');
  const [selectedDate, setSelectedDate] = useState<DateData | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (day: DateData) => {
    setSelectedDate(day);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (endereco && especialista && selectedDate && selectedTime) {
        alert(`Consulta agendada com ${especialista} para o dia ${selectedDate.dateString} às ${selectedTime}. O endereço da consulta é ${endereco}.`);
    } else {
      alert('Por favor, preencha todos os campos, selecione uma data e um horário.');
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

      <Text style={styles.subtitle}>Selecione uma Data:</Text>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={selectedDate ? { [selectedDate.dateString]: { selected: true, marked: true } } : {}}
        theme={{
          calendarBackground: '#f5f5f5',
          selectedDayBackgroundColor: '#007bff',
          todayTextColor: '#007bff',
          dayTextColor: '#333',
          monthTextColor: '#333',
          textSectionTitleColor: '#333',
        }}
        style={styles.calendar}
      />

      <Text style={styles.subtitle}>Selecione um Horário:</Text>
      <View style={styles.timeContainer}>
        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
          <TouchableOpacity
            key={time}
            style={[styles.timeButton, selectedTime === time && styles.timeButtonSelected]}
            onPress={() => handleTimeSelect(time)}
          >
            <Text style={styles.timeButtonText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  calendar: {
    width: '100%',
    maxWidth: 400,
    marginVertical: 20,
  },
  nextButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  timeButtonSelected: {
    backgroundColor: '#0056b3',
  },
  timeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClinicaPropria;
