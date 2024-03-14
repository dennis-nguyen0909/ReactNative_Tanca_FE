import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/view/LoginScreen';
import { SignUpScreen } from './src/view/SignUpScreen';

export default function App() {
  return (
    <View>
      {/* <LoginScreen /> */}
      <SignUpScreen />
    </View>
  );
}
