import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, DollarSign, User, MessageCircle, X, Filter, Map } from 'lucide-react';
import { mockTasks } from '../data/mockTasks';
import { Task } from '../types';
import { useAuth } from '../context/AuthContext';

interface FindWorkProps {
  onClose: () => void;
}

export default function FindWork({ onClose }: FindWorkProps) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showMap, setShowMap] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [offerMessage, setOfferMessage] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const categories = [
    'Casa & Jardim',
    'Manutenção',
    'Design & Arte',
    'Tecnologia',
    'Educação',
    'Transporte'
  ];

  const locations = [
    'São Paulo - SP',
    'Rio de Janeiro - RJ',
    'Belo Horizonte - MG',
    'Salvador - BA',
    'Brasília - DF'
  ];

  const filteredTasks = useMemo(() => {
    return mockTasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || task.category === selectedCategory;
      const matchesLocation = !selectedLocation || 
                             `${task.location.city} - ${task.location.state}` === selectedLocation;
      const matchesPrice = (!priceRange.min || task.budget >= parseInt(priceRange.min)) &&
                          (!priceRange.max || task.budget <= parseInt(priceRange.max));
      
      return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedLocation, priceRange]);

  const handleSendOffer = () => {
    if (!selectedTask || !offerMessage || !offerPrice) return;
    
    // Here you would typically send the offer to your backend
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

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Encontrar Trabalho</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
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
                  Localização
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Todas as localizações</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
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

              {/* Map Toggle */}
              <button
                onClick={() => setShowMap(!showMap)}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg transition-colors ${
                  showMap 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Map className="h-5 w-5" />
                <span>{showMap ? 'Ocultar Mapa' : 'Ver no Mapa'}</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {showMap && (
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Map className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa interativo das tarefas</p>
                  <p className="text-sm">(Integração com Google Maps)</p>
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredTasks.length} tarefas encontradas
              </h2>
            </div>

            {/* Task Cards */}
            <div className="space-y-6">
              {filteredTasks.map(task => (
                <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {task.title}
                      </h3>
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
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {task.description}
                      </p>
                      {task.images.length > 0 && (
                        <div className="flex space-x-2 mb-4">
                          {task.images.slice(0, 3).map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Task image ${index + 1}`}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          ))}
                          {task.images.length > 3 && (
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
                              +{task.images.length - 3}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        R$ {task.budget}
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Publicado em {new Date(task.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                    <button
                      onClick={() => setSelectedTask(task)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enviar Proposta</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTasks.length === 0 && (
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

      {/* Offer Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Enviar Proposta
                </h2>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {selectedTask.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedTask.description.substring(0, 200)}...
                </p>
                <div className="mt-2 text-lg font-bold text-green-600">
                  Orçamento sugerido: R$ {selectedTask.budget}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sua proposta de preço (R$) *
                  </label>
                  <input
                    type="number"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(e.target.value)}
                    placeholder="Digite seu preço"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem para o cliente *
                  </label>
                  <textarea
                    value={offerMessage}
                    onChange={(e) => setOfferMessage(e.target.value)}
                    rows={6}
                    placeholder="Explique por que você é a pessoa certa para esta tarefa. Inclua sua experiência, disponibilidade e qualquer informação relevante."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Dicas para uma boa proposta:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Seja específico sobre sua experiência</li>
                    <li>• Mencione quando pode começar</li>
                    <li>• Faça perguntas relevantes se necessário</li>
                    <li>• Seja profissional e cordial</li>
                  </ul>
                </div>

                <button
                  onClick={handleSendOffer}
                  disabled={!offerMessage || !offerPrice}
                  className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Enviar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}