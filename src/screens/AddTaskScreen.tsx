import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../models/Task';
import { useTasks } from '../TaskContext';
import Toast from 'react-native-toast-message';

/**
 * Screen for creating new tasks.
 * Includes form validation and user feedback.
 */
const AddTaskScreen = () => {
    const { addTask } = useTasks();
    const navigation = useNavigation<any>();

    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    /**
     * Validates input and creates a new task.
     * Shows error toast if title is empty.
     */
    const handleSave = () => {
        // Validate required field
        if (!title.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Missing Title!',
                text2: 'Please enter a task title',
                position: 'bottom',
                visibilityTime: 3000,
            });
            return;
        }

        // Create new task object
        const newTask: Task = {
            id: Math.random().toString(),
            title: title.trim(),
            description: description.trim(),
            completed: false,
        };

        addTask(newTask);
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Title input - required */}
            <Text style={styles.label}>Task Title *</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task title"
                value={title}
                onChangeText={setTitle}
                maxLength={100}
            />

            {/* Description input - optional */}
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter task description (optional)"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
            />

            {/* Action buttons */}
            <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
            >
                <Text style={styles.saveButtonText}>Add Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginTop: 16,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        paddingTop: 12,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 24,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: 'transparent',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    cancelButtonText: {
        color: '#666',
        fontSize: 16,
    }
});

export default AddTaskScreen;