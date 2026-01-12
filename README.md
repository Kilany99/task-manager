# Task Manager App

A simple task management app built with React Native and Expo.

## Features

- **Add Tasks**: Create tasks with a title and optional description
- **Complete Tasks**: Toggle tasks between complete/incomplete states
- **Delete Tasks**: Remove tasks with confirmation prompt
- **Visual Feedback**: Toast notifications for user actions



### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repo:
```bash
git clone [https://github.com/Kilany99/task-manager.git]
cd task-manager
Install dependencies:
bash
npm install
Start the development server:
bash
npx expo start
Run on your device:
Scan the QR code with Expo Go (Android) or Camera app (iOS)
Press a for Android emulator
Press i for iOS simulator
Project Structure
text
src/
├── components/
│   └── Task.tsx          # Individual task item component
├── screens/
│   ├── TaskListScreen.tsx    # Main task list view
│   └── AddTaskScreen.tsx     # Task creation form
├── models/
│   └── Task.ts           # Task type definition
└── TaskContext.tsx       # State management
Third-Party Libraries
Library	Purpose
@react-navigation/native	Screen navigation
@react-navigation/native-stack	Stack-based navigation
react-native-toast-message	User feedback notifications
Usage Notes
Title field is required when adding tasks
Swipe or tap delete button to remove tasks
Toggle the switch to mark tasks complete/incomplete
Completed tasks show strikethrough styling
Built With
React Native
Expo
TypeScript


