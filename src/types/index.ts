export type Priority = 'low' | 'medium' | 'high';

export interface Room {
  id: string;
  name: string;
  createdAt: Date;
}

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  priority: Priority;
  roomId: string;
  createdAt: Date;
}