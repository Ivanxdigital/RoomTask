import React from 'react';
import { Task } from '../types';
import { useAppContext } from '../context/AppContext';
import { ArrowDown, ArrowRight, ArrowUp, Check, Trash } from 'lucide-react';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTask, deleteTask } = useAppContext();

  const getPriorityIcon = () => {
    switch (task.priority) {
      case 'high':
        return <ArrowUp size={16} />;
      case 'medium':
        return <ArrowRight size={16} />;
      case 'low':
        return <ArrowDown size={16} />;
      default:
        return null;
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high':
        return 'bg-black text-white';
      case 'medium':
        return 'bg-gray-800 text-white';
      case 'low':
        return 'bg-gray-200 text-gray-700';
      default:
        return '';
    }
  };

  return (
    <div className="group flex items-center p-3 bg-white border border-gray-200 rounded-md mb-2 transition-all duration-200 hover:shadow-sm">
      <button
        onClick={() => toggleTask(task.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border mr-3 flex items-center justify-center transition-colors ${
          task.isCompleted 
            ? 'bg-black border-black text-white' 
            : 'border-gray-300 hover:border-gray-500'
        }`}
      >
        {task.isCompleted && <Check size={14} />}
      </button>
      
      <div className="flex-grow">
        <p className={`text-gray-800 transition-all ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className={`flex items-center justify-center w-6 h-6 rounded-full ${getPriorityColor()}`}>
          {getPriorityIcon()}
        </span>
        
        <button
          onClick={() => deleteTask(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors ml-2 opacity-0 group-hover:opacity-100"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};