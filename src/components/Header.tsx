import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <ClipboardCheck className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">RoomTask</span>
        </Link>
        
        {isLandingPage ? (
          <Link
            to="/app"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Go to App
          </Link>
        ) : (
          <Link
            to="/"
            className="px-4 py-2 text-gray-700 hover:text-black transition-colors flex items-center"
          >
            <Home size={18} className="mr-1" />
            Home
          </Link>
        )}
      </div>
    </header>
  );
};