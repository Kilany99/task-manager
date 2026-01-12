import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TaskComponent from "../components/Task";
import { useTasks } from "../TaskContext";

/**
 * Main screen displaying all tasks in a scrollable list.
 * Shows empty state when no tasks exist.
 */
const TaskListScreen = () => {
    const navigation = useNavigation<any>();
    const { tasks } = useTasks();

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskComponent task={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{ flexGrow: 1, padding: 16 }}
                // Display when task list is empty
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No tasks yet!</Text>
                        <Text style={styles.emptySubtext}>
                            Add your first task to get started
                        </Text>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate("Add Task")}
                        >
                            <Text style={styles.addButtonText}>+ Add Task</Text>
                        </TouchableOpacity>
                    </View>
                )}
                // Show add button at bottom when tasks exist
                ListFooterComponent={
                    tasks.length > 0 ? (
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate("Add Task")}
                        >
                            <Text style={styles.addButtonText}>+ Add Another Task</Text>
                        </TouchableOpacity>
                    ) : null
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        margin: 16,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default TaskListScreen;