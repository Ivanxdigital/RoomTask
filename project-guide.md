# RoomTask Project Guide

RoomTask is a room-based task management application specifically designed for housekeepers, cleaning staff, and property managers. This guide outlines the core architecture, key features, and important implementation details.

## Project Overview

The application allows users to:
- Organize tasks by room (e.g., Kitchen, Bedroom, Bathroom)
- Set task priorities (Low, Medium, High)
- Track task completion status
- Manage rooms and tasks independently
- Persist data using local storage

## Architecture

### Core Components

1. **Context Layer (`src/context/AppContext.tsx`)**
   - Central state management using React Context
   - Handles all task and room operations
   - Manages local storage persistence
   - Provides typed context hooks for components

2. **Component Structure**
   - `components/`: Reusable UI components
   - `pages/`: Route-level components
   - `types/`: TypeScript type definitions
   - Clear separation between UI and logic

### Data Models

```typescript
// Room Structure
interface Room {
  id: string;
  name: string;
  createdAt: Date;
}

// Task Structure
interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
  roomId: string;
  createdAt: Date;
}
```

## Key Features

### Room Management
- Default "General" room that cannot be deleted
- Dynamic room creation/deletion
- Automatic task cleanup when rooms are deleted
- Room-specific task filtering

### Task Management
- Priority levels with visual indicators
- Task completion toggling
- Automatic sorting (incomplete tasks first, sorted by priority)
- Room-specific task assignment

### UI/UX Principles
- Minimalistic black and white theme
- Micro-animations for interactions
- Responsive design (mobile-first)
- Apple-inspired clean aesthetics

## Technical Implementation

### State Management
- React Context for global state
- Local storage for data persistence
- TypeScript for type safety
- Optimized re-renders using proper context structure

### Styling
- Tailwind CSS for utility-first styling
- Custom animations and transitions
- Consistent spacing and typography
- Lucide icons for visual elements

### Routing
- React Router for navigation
- Landing page and app interface separation
- Protected routes (if needed in future)

## Important Considerations

### Data Persistence
- All data is stored in localStorage
- Data is loaded on initial mount
- Automatic saving on state changes
- Date handling for room/task creation

### Room Operations
- Never delete the "General" room
- Clean up associated tasks when deleting rooms
- Switch to "General" room if current room is deleted
- Unique room names (recommended)

### Task Operations
- Tasks must have a valid room assignment
- Priority must be one of: 'low', 'medium', 'high'
- Task sorting: incomplete before complete
- Priority-based sorting for incomplete tasks

### UI Components
- Consistent use of Tailwind classes
- Responsive design breakpoints
- Animation consistency
- Loading states (if needed)

## Future Considerations

### Potential Enhancements
- User authentication
- Cloud data synchronization
- Team collaboration features
- Task templates
- Recurring tasks
- Due dates and reminders
- Room categories/groups
- Task attachments
- Activity history

### Performance Optimization
- Virtualization for large task lists
- Optimized context updates
- Debounced local storage updates
- Lazy loading of components

## Development Guidelines

### Code Style
- Functional components with hooks
- TypeScript for all new code
- Consistent naming conventions
- Component composition over inheritance

### Component Creation
- Reusable components in `components/`
- Page components in `pages/`
- Context providers in `context/`
- Types in `types/`

### State Management
- Use context for global state
- Local state for UI-only concerns
- Proper TypeScript types
- Optimized re-renders

### Testing Considerations
- Component isolation
- Context testing
- User interaction testing
- Responsive design testing

## Deployment

The application is built using Vite and can be deployed to any static hosting service. The build process creates optimized assets ready for production deployment.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)