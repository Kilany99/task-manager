import { StyleSheet, Text, View } from 'react-native';
import TaskListScreen from './src/screens/TaskListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTaskScreen from './src/screens/AddTaskScreen';
import { TaskProvider } from './src/TaskContext';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

// Create the stack navigator for screen transitions
const Stack = createNativeStackNavigator();

/**
 * Root component of the Task Manager app.
 * Sets up navigation and provides task state to all child components.
 */
export default function App() {
  return (
    <TaskProvider>
      {/* Navigation container wraps all navigators */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* Main screen showing all tasks */}
          <Stack.Screen name="Task List" component={TaskListScreen} />
          {/* Screen for creating new tasks */}
          <Stack.Screen name="Add Task" component={AddTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* Toast component for displaying feedback messages */}
      <Toast />
    </TaskProvider>
  );
}