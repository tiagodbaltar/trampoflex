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
  },
  {
    id: '4',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(85) 99123-4567',
    userType: 'client',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.6,
    completedTasks: 12
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    email: 'fernanda@email.com',
    phone: '(31) 98765-4321',
    userType: 'client',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 4.9,
    completedTasks: 27
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
    category: 'Limpeza'
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
  },
  {
    id: '7',
    title: 'Desenvolvimento de site institucional',
    description: 'Preciso de um site institucional para minha empresa de consultoria. Deve ter design moderno, responsivo e otimizado para SEO. Inclui páginas: home, sobre, serviços, contato.',
    budget: 2500,
    date: '2024-12-25',
    isFlexible: true,
    location: {
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Aldeota',
      lat: -3.7319,
      lng: -38.5267
    },
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[3],
    offers: [],
    createdAt: '2024-12-05T13:45:00Z',
    category: 'Tecnologia'
  },
  {
    id: '8',
    title: 'Organização de festa de aniversário',
    description: 'Festa de 15 anos para minha filha. Preciso de decoração, buffet, som e animação. Evento para 80 pessoas. Local já definido. Tema: jardim encantado.',
    budget: 3500,
    date: '2024-12-30',
    isFlexible: false,
    location: {
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      neighborhood: 'Savassi',
      lat: -19.9167,
      lng: -43.9345
    },
    images: [
      'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[4],
    offers: [],
    createdAt: '2024-12-04T16:20:00Z',
    category: 'Eventos'
  },
  {
    id: '9',
    title: 'Tradução de documentos técnicos',
    description: 'Preciso traduzir manuais técnicos do inglês para português. São 50 páginas de conteúdo sobre equipamentos industriais. Prazo de 10 dias.',
    budget: 800,
    date: '2024-12-22',
    isFlexible: true,
    location: {
      state: 'Rio Grande do Sul',
      city: 'Porto Alegre',
      neighborhood: 'Centro',
      lat: -30.0346,
      lng: -51.2177
    },
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[0],
    offers: [],
    createdAt: '2024-12-03T09:30:00Z',
    category: 'Tradução'
  },
  {
    id: '10',
    title: 'Sessão de fotos para produtos',
    description: 'Preciso de fotos profissionais para catálogo de produtos artesanais. São 30 peças diferentes. Estúdio com iluminação adequada necessário.',
    budget: 600,
    date: '2024-12-17',
    isFlexible: true,
    location: {
      state: 'Bahia',
      city: 'Salvador',
      neighborhood: 'Pelourinho',
      lat: -12.9714,
      lng: -38.5014
    },
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[1],
    offers: [],
    createdAt: '2024-12-02T14:15:00Z',
    category: 'Fotografia'
  },
  {
    id: '11',
    title: 'Personal trainer para exercícios em casa',
    description: 'Busco personal trainer para treinos 3x por semana em casa. Foco em condicionamento físico e perda de peso. Tenho alguns equipamentos básicos.',
    budget: 400,
    date: '2024-12-14',
    isFlexible: true,
    location: {
      state: 'Distrito Federal',
      city: 'Brasília',
      neighborhood: 'Asa Norte',
      lat: -15.7801,
      lng: -47.9292
    },
    images: [
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[2],
    offers: [],
    createdAt: '2024-12-01T11:00:00Z',
    category: 'Beleza & Bem-estar'
  },
  {
    id: '12',
    title: 'Consultoria em marketing digital',
    description: 'Pequena empresa precisa de consultoria para melhorar presença digital. Inclui análise de redes sociais, estratégia de conteúdo e campanhas pagas.',
    budget: 1200,
    date: '2024-12-21',
    isFlexible: true,
    location: {
      state: 'Paraná',
      city: 'Curitiba',
      neighborhood: 'Batel',
      lat: -25.4284,
      lng: -49.2733
    },
    images: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'open',
    postedBy: mockUsers[3],
    offers: [],
    createdAt: '2024-11-30T15:45:00Z',
    category: 'Marketing Digital'
  }
];