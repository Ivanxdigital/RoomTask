import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Home, Plus, Trash } from 'lucide-react';

export const RoomSidebar: React.FC = () => {
  const { rooms, currentRoomId, setCurrentRoom, deleteRoom, addRoom } = useAppContext();
  const [newRoomName, setNewRoomName] = useState('');
  const [isAddingRoom, setIsAddingRoom] = useState(false);

  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRoomName.trim()) {
      addRoom(newRoomName.trim());
      setNewRoomName('');
      setIsAddingRoom(false);
    }
  };

  return (
    <aside className="w-full md:w-64 h-full bg-white border-r border-gray-200 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Rooms</h2>
      
      <ul className="space-y-1 flex-grow">
        {rooms.map(room => (
          <li key={room.id} className="group">
            <div 
              className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-200 ${
                currentRoomId === room.id 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentRoom(room.id)}
            >
              <div className="flex items-center">
                {room.id === 'general' ? <Home size={18} className="mr-2" /> : <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm mr-2">{room.name.charAt(0)}</span>}
                <span>{room.name}</span>
              </div>
              
              {room.id !== 'general' && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteRoom(room.id);
                  }}
                  className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                    currentRoomId === room.id ? 'text-white' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Trash size={16} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      {isAddingRoom ? (
        <form onSubmit={handleAddRoom} className="mt-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="Room name"
              className="flex-grow p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              autoFocus
            />
            <button
              type="submit"
              className="p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAddingRoom(true)}
          className="mt-4 flex items-center justify-center p-2 w-full text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} className="mr-1" /> Add Room
        </button>
      )}
    </aside>
  );
};