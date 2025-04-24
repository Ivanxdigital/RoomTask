import React from 'react';
import { useAppContext } from '../context/AppContext';
import { TaskItem } from './TaskItem';
import { ClipboardList } from 'lucide-react';

export const TaskList: React.FC = () => {
  const { tasks, currentRoomId, rooms } = useAppContext();
  
  const currentRoom = rooms.find(room => room.id === currentRoomId);
  const filteredTasks = tasks.filter(task => task.roomId === currentRoomId);
  
  // Sort tasks: incomplete first (sorted by priority), then completed
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.isCompleted !== b.isCompleted) {
      return a.isCompleted ? 1 : -1;
    }
    
    if (a.isCompleted) {
      return 0; // If both completed, no sorting by priority
    }
    
    // Priority sorting (high > medium > low)
    const priorityRank = { high: 0, medium: 1, low: 2 };
    return priorityRank[a.priority] - priorityRank[b.priority];
  });

  const completedTasks = sortedTasks.filter(task => task.isCompleted);
  const incompleteTasks = sortedTasks.filter(task => !task.isCompleted);

  return (
    <div className="flex-1 p-4 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">{currentRoom?.name || 'Tasks'}</h1>
      
      {sortedTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <ClipboardList size={48} className="mb-4" />
          <p className="text-lg">No tasks in this room yet.</p>
          <p className="text-sm">Add a task to get started!</p>
        </div>
      ) : (
        <>
          {incompleteTasks.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
                To Do ({incompleteTasks.length})
              </h2>
              {incompleteTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          )}
          
          {completedTasks.length > 0 && (
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase mb-2">
                Completed ({completedTasks.length})
              </h2>
              {completedTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};