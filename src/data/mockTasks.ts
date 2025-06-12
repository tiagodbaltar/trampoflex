import { Task, User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Maria Santos',
    email: 'maria@email.com',
    phone: '(11) 98765-4321',
    userType: 'client',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.9,
    completedTasks: 23
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    email: 'carlos@email.com',
    phone: '(11) 97654-3210',
    userType: 'client',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.7,
    completedTasks: 18
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana@email.com',
    phone: '(21) 99876-5432',
    userType: 'client',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.8,
    completedTasks: 31
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Limpeza completa de apartamento',
    description: 'Preciso de uma limpeza completa do meu apartamento de 2 quartos. Inclui banheiros, cozinha, sala e quartos. Apartamento tem aproximadamente 80m². Prefiro produtos de limpeza ecológicos se possível.',
    budget: 150,
    date: '2024-12-15',
    isFlexible: false,
    location: {
      state: 'São Paulo',
      city: 'São Paulo',
      neighborhood: 'Vila Madalena',
      lat: -23.5505,
      lng: -46.6333
    },
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[0],
    offers: [],
    createdAt: '2024-12-10T10:00:00Z',
    category: 'Casa & Jardim'
  },
  {
    id: '2',
    title: 'Montagem de móveis IKEA',
    description: 'Comprei uma estante, uma mesa de escritório e duas cadeiras da IKEA. Preciso de alguém experiente para montar tudo. Todas as peças e ferramentas estão disponíveis. Estimativa de 3-4 horas de trabalho.',
    budget: 200,
    date: '2024-12-18',
    isFlexible: true,
    location: {
      state: 'São Paulo',
      city: 'São Paulo',
      neighborhood: 'Pinheiros',
      lat: -23.5629,
      lng: -46.7006
    },
    images: [
      'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[1],
    offers: [],
    createdAt: '2024-12-09T14:30:00Z',
    category: 'Manutenção'
  },
  {
    id: '3',
    title: 'Pintura de quarto infantil',
    description: 'Quero pintar o quarto do meu filho com tema de super-heróis. O quarto tem 12m² e já está preparado (móveis removidos). Preciso de alguém criativo que possa fazer desenhos simples nas paredes. Tinta já comprada.',
    budget: 300,
    date: '2024-12-20',
    isFlexible: false,
    location: {
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
      neighborhood: 'Copacabana',
      lat: -22.9068,
      lng: -43.1729
    },
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[2],
    offers: [],
    createdAt: '2024-12-08T09:15:00Z',
    category: 'Design & Arte'
  },
  {
    id: '4',
    title: 'Conserto de vazamento na cozinha',
    description: 'Tenho um vazamento embaixo da pia da cozinha. Parece ser no sifão ou nas conexões. Preciso de um encanador experiente para resolver o problema rapidamente. Urgente!',
    budget: 120,
    date: '2024-12-12',
    isFlexible: false,
    location: {
      state: 'São Paulo',
      city: 'São Paulo',
      neighborhood: 'Moema',
      lat: -23.6014,
      lng: -46.6658
    },
    images: [
      'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[0],
    offers: [],
    createdAt: '2024-12-11T16:45:00Z',
    category: 'Manutenção'
  },
  {
    id: '5',
    title: 'Aulas de violão para iniciante',
    description: 'Quero aprender a tocar violão do zero. Procuro um professor paciente para aulas semanais em casa. Tenho violão próprio. Prefiro aulas aos sábados de manhã.',
    budget: 80,
    date: '2024-12-16',
    isFlexible: true,
    location: {
      state: 'São Paulo',
      city: 'São Paulo',
      neighborhood: 'Jardins',
      lat: -23.5613,
      lng: -46.6565
    },
    images: [
      'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[1],
    offers: [],
    createdAt: '2024-12-07T11:20:00Z',
    category: 'Educação'
  },
  {
    id: '6',
    title: 'Jardinagem e poda de plantas',
    description: 'Tenho um jardim pequeno que precisa de cuidados. Algumas plantas precisam de poda, outras de replantio. Também gostaria de plantar algumas flores novas. Área de aproximadamente 20m².',
    budget: 180,
    date: '2024-12-19',
    isFlexible: true,
    location: {
      state: 'São Paulo',
      city: 'São Paulo',
      neighborhood: 'Vila Olímpia',
      lat: -23.5955,
      lng: -46.6890
    },
    images: [
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[2],
    offers: [],
    createdAt: '2024-12-06T08:30:00Z',
    category: 'Casa & Jardim'
  }
];