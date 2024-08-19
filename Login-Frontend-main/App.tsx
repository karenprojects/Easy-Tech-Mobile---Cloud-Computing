import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Agendamentos from './src/screens/Agendamentos';
import ClinicaPropria from './src/screens/ClinicaPropria'; // Novo
import ClinicaParceira from './src/screens/ClinicaParceira'; // Novo
import Telemedicina from './src/screens/Telemedicina'; // Novo
import CadastroScreen from './src/screens/CadastroScreen'; // Novo


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agendamentos" component={Agendamentos} />
        <Stack.Screen name="ClinicaPropria" component={ClinicaPropria} />
        <Stack.Screen name="ClinicaParceira" component={ClinicaParceira} />
        <Stack.Screen name="Telemedicina" component={Telemedicina} />
        <Stack.Screen name='Cadastro' component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
