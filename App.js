import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/contexts/auth';
import { ThemeProvider } from './src/contexts/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

