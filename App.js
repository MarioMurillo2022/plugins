import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';
import 'react-native-gesture-handler';
import MyDrawer from './src/components/MyDrawer';

export default function App() {
  return (
    <MyDrawer></MyDrawer>
  );
}
