import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Switch } from 'react-native-paper';
import { MainNavigation } from './src/routing/MainNavigation';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customGray: '#9DABB4',
  },
};

export default function App() {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}
