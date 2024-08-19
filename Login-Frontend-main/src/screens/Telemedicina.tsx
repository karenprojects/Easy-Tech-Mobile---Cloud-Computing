import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

const Telemedicina: React.FC<any> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState<DateData | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (day: DateData) => {
    setSelectedDate(day);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      // Lógica para confirmar agendamento
      alert(`Agendado para ${selectedDate.dateString} às ${selectedTime}`);
    } else {
      alert('Por favor, selecione a data e a hora.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Telemedicina</Text>
      
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
      />

      <Text style={styles.subtitle}>Selecione uma Hora:</Text>
      <View style={styles.timeContainer}>
        {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected
            ]}
            onPress={() => handleTimeSelect(time)}
          >
            <Text style={[
              styles.timeButtonText,
              selectedTime === time && styles.timeButtonTextSelected
            ]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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
    width: '100%',
  },
  timeButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    width: '25%',
    alignItems: 'center',
  },
  timeButtonSelected: {
    backgroundColor: '#0056b3',
  },
  timeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timeButtonTextSelected: {
    color: '#e0e0e0',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Telemedicina;
