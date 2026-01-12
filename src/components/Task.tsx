import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { Task as TaskModel } from '../models/Task';
import { useTasks } from "../TaskContext";
import Toast from 'react-native-toast-message';

/**
 * Individual task item component.
 * Displays task info with toggle and delete controls.
 */
export default function Task({ task }: { task: TaskModel }) {
    const { toggleTask, deleteTask } = useTasks();

    const isCompleted = Boolean(task.completed);

    /**
     * Shows confirmation dialog before deleting a task.
     * Displays success toast after deletion.
     */
    const handleDelete = () => {
        Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    onPress: () => {
                        deleteTask(task.id);
                        Toast.show({
                            type: 'success',
                            text1: 'Task Deleted',
                            text2: `"${task.title}" has been removed`,
                            position: 'bottom',
                            visibilityTime: 3000,
                        });
                    },
                    style: 'destructive'
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Task details */}
            <View style={{ flex: 1 }}>
                <Text style={[
                    styles.title,
                    isCompleted && styles.completedText
                ]}>
                    {task.title}
                    {isCompleted && " (Completed)"}
                </Text>

                <Text style={styles.description}>
                    {task.description || 'No description'}
                </Text>
            </View>

            {/* Task controls */}
            <View style={styles.controls}>
                <Switch
                    value={isCompleted}
                    onValueChange={() => toggleTask(task.id)}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isCompleted ? "#4CAF50" : "#f4f3f4"}
                />
                <TouchableOpacity
                    onPress={handleDelete}
                    style={styles.deleteButton}
                >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    controls: {
        alignItems: 'center',
        gap: 8,
    },
    deleteButton: {
        backgroundColor: '#ff4444',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        marginTop: 4,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }
});