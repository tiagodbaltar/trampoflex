import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, DollarSign, User, MessageCircle, Filter, Map, Star } from 'lucide-react';
import { mockTasks } from '../data/mockTasks';
import { Task } from '../types';
import { useAuth } from '../context/AuthContext';

interface BrowseTasksProps {
  onClose?: () => void;
}

export default function BrowseTasks({ onClose }: BrowseTasksProps) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

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

  const TaskCard = ({ task, isGrid }: { task: Task; isGrid: boolean }) => (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
      isGrid ? '' : 'flex gap-6'
    }`} onClick={() => setSelectedTask(task)}>
      {task.images.length > 0 && (
        <div className={`${isGrid ? 'mb-4' : 'flex-shrink-0'}`}>
          <img
            src={task.images[0]}
            alt={task.title}
            className={`object-cover rounded-lg ${
              isGrid ? 'w-full h-48' : 'w-32 h-32'
            }`}
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`font-semibold text-gray-900 ${isGrid ? 'text-lg' : 'text-xl'}`}>
            {task.title}
          </h3>
          <div className="text-right ml-4">
            <div className="text-xl font-bold text-green-600">
              R$ {task.budget.toLocaleString()}
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {task.category}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {task.location.neighborhood}, {task.location.city}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {task.isFlexible ? 'Flexível' : new Date(task.date).toLocaleDateString('pt-BR')}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {task.postedBy.name}
          </div>
        </div>

        <p className={`text-gray-700 mb-4 ${isGrid ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {task.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Publicado em {new Date(task.createdAt).toLocaleDateString('pt-BR')}
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span>Ver Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Procurar Tarefas</h1>
          <p className="text-gray-600">Encontre oportunidades de trabalho em todo o Brasil</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
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
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400'}`}
                >
                  <div className="w-5 h-5 grid grid-cols-2 gap-1">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400'}`}
                >
                  <div className="w-5 h-5 flex flex-col gap-1">
                    <div className="bg-current h-1 rounded-sm"></div>
                    <div className="bg-current h-1 rounded-sm"></div>
                    <div className="bg-current h-1 rounded-sm"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Task Cards */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
              {filteredAndSortedTasks.map(task => (
                <TaskCard key={task.id} task={task} isGrid={viewMode === 'grid'} />
              ))}
            </div>

            {filteredAndSortedTasks.length === 0 && (
              <div className="text-center py-12">
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
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalhes da Tarefa
                </h2>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {selectedTask.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedTask.location.neighborhood}, {selectedTask.location.city}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedTask.isFlexible ? 'Flexível' : new Date(selectedTask.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {selectedTask.description}
                  </p>

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
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        R$ {selectedTask.budget.toLocaleString()}
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {selectedTask.category}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{selectedTask.postedBy.name}</div>
                          <div className="text-sm text-gray-600 flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {selectedTask.postedBy.rating || 'Novo usuário'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {user ? (
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Enviar Proposta
                      </button>
                    ) : (
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-3">
                          Faça login para enviar propostas
                        </p>
                        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          Fazer Login
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
    </div>
  );
}