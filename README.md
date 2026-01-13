# Task Manager - React Native Application

A full-featured task management application built with React Native, TypeScript, and modern React patterns. Implements complete CRUD operations with an intuitive UI and proper state management.

## 🎥 Demo

<img width="580" height="913" alt="image" src="https://github.com/user-attachments/assets/8653fc82-b909-4b0b-833b-28dd9bacbcd8" />
<img width="564" height="916" alt="image" src="https://github.com/user-attachments/assets/6d022eac-e0a1-40e9-8f25-1247f54d6d9e" />
<img width="568" height="919" alt="image" src="https://github.com/user-attachments/assets/58599c95-5fb5-4619-ba6d-6c117e8c2e1f" />
<img width="572" height="926" alt="image" src="https://github.com/user-attachments/assets/fa5fd464-1423-400d-8459-57f43858e680" />




## ✨ Features

- ✅ **Add Tasks** - Create tasks with title and description
- ✅ **Complete/Uncomplete** - Toggle task completion with visual feedback (strikethrough)
- ✅ **Delete Tasks** - Remove tasks with confirmation dialog to prevent accidental deletion
- ✅ **Empty State** - User-friendly message when no tasks exist
- ✅ **Type Safety** - Full TypeScript implementation for code reliability
- ✅ **Responsive UI** - Clean, intuitive interface using React Native components

## 🏗️ Architecture

### State Management
Uses **Context API** with custom hooks for global state management. This provides:
- Centralized task storage accessible across all screens
- Clean separation between UI and business logic
- Easy to test and maintain

### Navigation
Implements **React Navigation** with native stack navigator for smooth screen transitions.

### Component Structure
```
src/
├── components/
│   └── Task.tsx           # Individual task component
├── screens/
│   ├── TaskListScreen.tsx # Main list view
│   └── AddTaskScreen.tsx  # Task creation form
├── models/
│   └── Task.ts           # TypeScript interfaces
└── TaskContext.tsx       # Global state management
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile framework |
| **TypeScript** | Type safety and better developer experience |
| **React Navigation** | Screen navigation and routing |
| **Context API** | Global state management |
| **React Hooks** | Modern React patterns (useState, useContext) |

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Steps
```bash
# Clone the repository
git clone https://github.com/Kilany99/task-manager.git
cd task-manager

# Install dependencies
npm install

# Start the development server
npx expo start

# Run on platform
# Press 'i' for iOS simulator
# Press 'a' for Android emulator
# Scan QR code with Expo Go app for physical device
```

## 🧪 Testing the App

1. **Add a Task**: Navigate to "Add Task" screen and create a task
2. **Complete Task**: Toggle the switch to mark as complete
3. **Delete Task**: Tap delete button and confirm removal
4. **Empty State**: Delete all tasks to see the empty state message

## 🎨 Design Decisions

### Why Context API?
For this scale of application, Context API provides the perfect balance of:
- No external dependencies needed
- Simple to understand and maintain
- Sufficient for local state management
- Easy to test

### Why TypeScript?
- Catches errors at compile time
- Better IDE autocomplete
- Self-documenting code through interfaces
- Industry standard for production applications

### UI/UX Considerations
- Confirmation dialogs prevent accidental deletions
- Visual feedback for all interactions (strikethrough, color changes)
- Empty state guides users to take action
- Clean, minimalist design focuses on functionality

## 📝 Future Enhancements

Potential features for v2:
- [ ] Due dates with calendar picker
- [ ] Task categories/tags
- [ ] Priority levels (high/medium/low)
- [ ] Search and filter functionality
- [ ] Local persistence with AsyncStorage
- [ ] Dark mode support
- [ ] Task editing capability
- [ ] Swipe gestures for quick actions

## 👤 Author

**Abdallah Kilany**
- GitHub: [@Kilany99](https://github.com/Kilany99)

## 📄 License

This project was created as a technical assessment for Chapter One.

---

*Built with ❤️ using React Native and TypeScript*
