import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
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
