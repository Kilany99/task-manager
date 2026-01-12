/**
 * Task model representing a single task item.
 */
export interface Task {
    id: string;          // Unique identifier
    title: string;       // Task title (required)
    completed: boolean;  // Completion status
    description: string; // Task description (optional)
}