import React, { createContext, useContext, useState, useEffect } from 'react';
import { Room, Task, Priority } from '../types';

interface AppContextType {
  tasks: Task[];
  rooms: Room[];
  currentRoomId: string;
  addTask: (text: string, priority: Priority, roomId: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  addRoom: (name: string) => void;
  deleteRoom: (id: string) => void;
  setCurrentRoom: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
    }
    return [];
  });

  const [rooms, setRooms] = useState<Room[]>(() => {
    const savedRooms = localStorage.getItem('rooms');
    if (savedRooms) {
      return JSON.parse(savedRooms).map((room: any) => ({
        ...room,
        createdAt: new Date(room.createdAt)
      }));
    }
    return [{ id: 'general', name: 'General', createdAt: new Date() }];
  });

  const [currentRoomId, setCurrentRoomId] = useState<string>('general');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  }, [rooms]);

  const addTask = (text: string, priority: Priority, roomId: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      isCompleted: false,
      priority,
      roomId,
      createdAt: new Date()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addRoom = (name: string) => {
    const newRoom: Room = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      createdAt: new Date()
    };
    setRooms([...rooms, newRoom]);
  };

  const deleteRoom = (id: string) => {
    if (id === 'general') return; // Prevent deleting General room
    
    // Delete all tasks in that room
    setTasks(tasks.filter(task => task.roomId !== id));
    
    // Delete the room
    setRooms(rooms.filter(room => room.id !== id));
    
    // If current room is deleted, switch to General
    if (currentRoomId === id) {
      setCurrentRoomId('general');
    }
  };

  const setCurrentRoom = (id: string) => {
    setCurrentRoomId(id);
  };

  const value = {
    tasks,
    rooms,
    currentRoomId,
    addTask,
    toggleTask,
    deleteTask,
    addRoom,
    deleteRoom,
    setCurrentRoom
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};