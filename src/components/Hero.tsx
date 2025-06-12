import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

interface HeroProps {
  onPostTaskClick: () => void;
}

export default function Hero({ onPostTaskClick }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const popularTasks = [
    'Limpeza doméstica',
    'Montagem de móveis',
    'Encanamento',
    'Jardinagem',
    'Pintura',
    'Eletricista'
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Brazilian professionals working"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-yellow-50/90 to-blue-50/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conectamos você com
            <span className="text-green-600"> profissionais</span>
            <br />
            de confiança
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A postagem desse serviço é totalmente gratuito para você! O pagamento será feito diretamente ao profissional após a conclusão do serviço.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Que tipo de tarefa você precisa?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Localização"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="w-full md:w-auto mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Buscar Profissionais
            </button>
          </div>

          {/* Popular Tasks */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Tarefas populares:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularTasks.map((task, index) => (
                <button
                  key={index}
                  className="bg-white/80 backdrop-blur-sm text-green-600 px-4 py-2 rounded-full text-sm hover:bg-green-50 transition-all duration-300 border border-green-200 hover:border-green-300 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {task}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 mb-6">
              Publique sua tarefa gratuitamente e receba propostas de profissionais qualificados
            </p>
            <button 
              onClick={onPostTaskClick}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Postar Tarefa Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}