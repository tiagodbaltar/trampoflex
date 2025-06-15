import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, DollarSign, User, MessageCircle, Filter, Map, Star, ChevronRight, Home } from 'lucide-react';
import { mockTasks } from '../data/mockTasks';
import { Task } from '../types';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';

interface BrowseTasksProps {
  onClose?: () => void;
  initialCategory?: string;
}

export default function BrowseTasks({ onClose, initialCategory }: BrowseTasksProps) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || '');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [offerPrice, setOfferPrice] = useState('');
  const [offerMessage, setOfferMessage] = useState('');

  const categories = [
    'Casa & Jardim',
    'Manutenção',
    'Design & Arte',
    'Tecnologia',
    'Educação',
    'Transporte',
    'Limpeza',
    'Culinária',
    'Eventos',
    'Beleza & Bem-estar',
    'Consultoria',
    'Tradução',
    'Fotografia',
    'Marketing Digital'
  ];

  const brazilianStates = [
    'Acre - AC',
    'Alagoas - AL',
    'Amapá - AP',
    'Amazonas - AM',
    'Bahia - BA',
    'Ceará - CE',
    'Distrito Federal - DF',
    'Espírito Santo - ES',
    'Goiás - GO',
    'Maranhão - MA',
    'Mato Grosso - MT',
    'Mato Grosso do Sul - MS',
    'Minas Gerais - MG',
    'Pará - PA',
    'Paraíba - PB',
    'Paraná - PR',
    'Pernambuco - PE',
    'Piauí - PI',
    'Rio de Janeiro - RJ',
    'Rio Grande do Norte - RN',
    'Rio Grande do Sul - RS',
    'Rondônia - RO',
    'Roraima - RR',
    'Santa Catarina - SC',
    'São Paulo - SP',
    'Sergipe - SE',
    'Tocantins - TO'
  ];

  const sortOptions = [
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'oldest', label: 'Mais Antigas' },
    { value: 'price_high', label: 'Maior Orçamento' },
    { value: 'price_low', label: 'Menor Orçamento' }
  ];

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = mockTasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || task.category === selectedCategory;
      const matchesLocation = !selectedLocation || 
                             `${task.location.state} - ${task.location.state.substring(0, 2).toUpperCase()}` === selectedLocation;
      const matchesPrice = (!priceRange.min || task.budget >= parseInt(priceRange.min)) &&
                          (!priceRange.max || task.budget <= parseInt(priceRange.max));
      
      return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
    });

    // Sort tasks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price_high':
          return b.budget - a.budget;
        case 'price_low':
          return a.budget - b.budget;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedLocation, priceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Casa & Jardim': '🏡',
      'Manutenção': '🔧',
      'Design & Arte': '🎨',
      'Tecnologia': '💻',
      'Educação': '📚',
      'Transporte': '🚗',
      'Limpeza': '🧹',
      'Culinária': '👨‍🍳',
      'Eventos': '🎉',
      'Beleza & Bem-estar': '💆‍♀️',
      'Consultoria': '💼',
      'Tradução': '🌐',
      'Fotografia': '📸',
      'Marketing Digital': '📱'
    };
    return icons[category] || '📋';
  };

  const handleSendOffer = () => {
    if (!selectedTask || !offerMessage || !offerPrice) return;
    
    console.log('Sending offer:', {
      taskId: selectedTask.id,
      message: offerMessage,
      price: parseFloat(offerPrice),
      taskerId: user?.id
    });
    
    alert('Proposta enviada com sucesso!');
    setSelectedTask(null);
    setOfferMessage('');
    setOfferPrice('');
  };

  const handleLoginRedirect = () => {
    // This would typically trigger the login modal or redirect
    console.log('Redirect to login');
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:border-green-300"
      onClick={() => setSelectedTask(task)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getCategoryIcon(task.category)}</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
            {task.category}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">
            R$ {task.budget.toLocaleString()}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {task.title}
      </h3>

      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
          {task.location.neighborhood}, {task.location.city}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
          {task.isFlexible ? 'Flexível' : new Date(task.date).toLocaleDateString('pt-BR')}
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">
        {task.description}
      </p>

      {task.images.length > 0 && (
        <div className="mb-4">
          <img
            src={task.images[0]}
            alt={task.title}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{task.postedBy.name}</div>
            <div className="text-xs text-gray-500 flex items-center">
              <Star className="h-3 w-3 text-yellow-400 mr-1" />
              {task.postedBy.rating || 'Novo'}
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          {new Date(task.createdAt).toLocaleDateString('pt-BR')}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Home className="h-4 w-4 text-gray-400" />
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Procurar Tarefas</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Procurar Tarefas</h1>
          <p className="text-xl text-gray-600">Encontre oportunidades de trabalho em todo o Brasil</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-lg font-semibold mb-6 flex items-center text-gray-900">
                <Filter className="h-5 w-5 mr-2 text-green-600" />
                Filtros
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar tarefas
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Digite palavras-chave"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Todos os estados</option>
                  {brazilianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faixa de preço (R$)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Mín"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Máx"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedLocation('');
                  setPriceRange({ min: '', max: '' });
                }}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredAndSortedTasks.length} tarefas encontradas
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Task Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {filteredAndSortedTasks.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhuma tarefa encontrada
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros para encontrar mais oportunidades
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span>Tarefas</span>
                    <ChevronRight className="h-4 w-4" />
                    <span>{selectedTask.category}</span>
                  </nav>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedTask.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedTask.location.neighborhood}, {selectedTask.location.city}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedTask.isFlexible ? 'Flexível' : new Date(selectedTask.date).toLocaleDateString('pt-BR')}
                    </div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {selectedTask.category}
                    </span>
                  </div>

                  <div className="prose max-w-none mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Descrição da Tarefa</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTask.description}
                    </p>
                  </div>

                  {selectedTask.images.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Fotos da Tarefa</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedTask.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Task image ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        R$ {selectedTask.budget.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600">Meu Orçamento</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{selectedTask.postedBy.name}</div>
                          <div className="text-sm text-gray-600 flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {selectedTask.postedBy.rating || 'Novo usuário'}
                            <span className="ml-2">• {selectedTask.postedBy.completedTasks || 0} tarefas</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {user ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sua proposta (R$)
                          </label>
                          <input
                            type="number"
                            value={offerPrice}
                            onChange={(e) => setOfferPrice(e.target.value)}
                            placeholder="Digite seu preço"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mensagem
                          </label>
                          <textarea
                            value={offerMessage}
                            onChange={(e) => setOfferMessage(e.target.value)}
                            rows={3}
                            placeholder="Explique por que você é ideal para esta tarefa"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                          />
                        </div>
                        <button 
                          onClick={handleSendOffer}
                          disabled={!offerMessage || !offerPrice}
                          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Enviar Proposta
                        </button>
                      </div>
                    ) : (
                      <div className="text-center space-y-3">
                        <p className="text-gray-600 text-sm mb-3">
                          Faça login para enviar propostas
                        </p>
                        <button 
                          onClick={handleLoginRedirect}
                          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          Fazer Login
                        </button>
                        <button 
                          onClick={handleLoginRedirect}
                          className="w-full text-green-600 py-2 text-sm hover:text-green-700 transition-colors"
                        >
                          Criar conta
                        </button>
                      </div>
                    )}

                    <div className="mt-4 text-xs text-gray-500 text-center">
                      Publicado em {new Date(selectedTask.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}