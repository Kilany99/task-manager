import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskListScreen from './src/screens/TaskListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Task Manager!</Text>
      <TaskListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
