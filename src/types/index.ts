export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: 'client' | 'tasker';
  avatar?: string;
  rating?: number;
  completedTasks?: number;
  isVerified?: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  budget: number;
  date: string;
  isFlexible: boolean;
  location: {
    state: string;
    city: string;
    neighborhood: string;
    lat?: number;
    lng?: number;
  };
  images: string[];
  status: 'open' | 'assigned' | 'completed' | 'cancelled';
  postedBy: User;
  assignedTo?: User;
  offers: Offer[];
  createdAt: string;
  category: string;
}

export interface Offer {
  id: string;
  taskId: string;
  taskerId: string;
  tasker: User;
  message: string;
  price: number;
  estimatedDuration: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Review {
  id: string;
  taskId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  taskId?: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface AdminStats {
  totalUsers: number;
  totalTasks: number;
  totalRevenue: number;
  activeUsers: number;
  completedTasks: number;
  pendingTasks: number;
  newUsersThisMonth: number;
  revenueThisMonth: number;
}