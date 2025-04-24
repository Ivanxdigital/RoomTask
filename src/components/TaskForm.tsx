import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Priority } from '../types';
import { ChevronDown, ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';

export const TaskForm: React.FC = () => {
  const { addTask, currentRoomId } = useAppContext();
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim(), priority, currentRoomId);
      setText('');
      setPriority('medium');
    }
  };

  const priorityOptions: { value: Priority; label: string; icon: React.ReactNode; color: string }[] = [
    { 
      value: 'low', 
      label: 'Low', 
      icon: <ArrowDown size={16} />, 
      color: 'bg-gray-200 text-gray-700' 
    },
    { 
      value: 'medium', 
      label: 'Medium', 
      icon: <ArrowRight size={16} />, 
      color: 'bg-gray-800 text-white' 
    },
    { 
      value: 'high', 
      label: 'High', 
      icon: <ArrowUp size={16} />, 
      color: 'bg-black text-white' 
    }
  ];

  const selectedOption = priorityOptions.find(option => option.value === priority);

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <div className="relative flex-shrink-0">
            <button
              type="button"
              className="flex items-center justify-between h-10 px-3 border border-gray-300 rounded-md bg-white focus:outline-none"
              onClick={() => setIsPriorityOpen(!isPriorityOpen)}
            >
              <div className="flex items-center">
                <span className={`flex items-center justify-center w-6 h-6 mr-2 rounded-full ${selectedOption?.color}`}>
                  {selectedOption?.icon}
                </span>
                <span>{selectedOption?.label}</span>
              </div>
              <ChevronDown size={16} className="ml-2" />
            </button>

            {isPriorityOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {priorityOptions.map(option => (
                  <button
                    key={option.value}
                    type="button"
                    className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setPriority(option.value);
                      setIsPriorityOpen(false);
                    }}
                  >
                    <span className={`flex items-center justify-center w-6 h-6 mr-2 rounded-full ${option.color}`}>
                      {option.icon}
                    </span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
          
          <button
            type="submit"
            disabled={!text.trim()}
            className="h-10 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};