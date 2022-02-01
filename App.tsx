import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { LogInPage } from './src/pages/LogInPage';
import { ProfilePage } from './src/pages/ProfilePage/ProfilePage';

const theme = {
  ...DefaultTheme,
  colrs: {
    ...DefaultTheme.colors,
    customGray: '#9DABB4',
  },
};

export default function App() {
  return (
    <PaperProvider>
      <ProfilePage />
    </PaperProvider>
  );
}
