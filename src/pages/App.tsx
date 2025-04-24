import React from 'react';
import { RoomSidebar } from '../components/RoomSidebar';
import { TaskList } from '../components/TaskList';
import { TaskForm } from '../components/TaskForm';
import { Header } from '../components/Header';

export const AppPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <RoomSidebar />
        </div>
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white md:hidden">
            <RoomSidebar />
          </div>
          
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-white">
              <TaskForm />
            </div>
            
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};