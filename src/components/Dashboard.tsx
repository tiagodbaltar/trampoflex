import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from './Header';

interface DashboardProps {
  onPostTaskClick: () => void;
  onFindWorkClick: () => void;
  onBrowseTasksClick: () => void;
}

export default function Dashboard({ onPostTaskClick, onFindWorkClick, onBrowseTasksClick }: DashboardProps) {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onPostTaskClick={onPostTaskClick}
        onFindWorkClick={onFindWorkClick}
        onBrowseTasksClick={onBrowseTasksClick}
      />
      
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo, {user.name}!
          </h1>
          <p className="text-gray-600">
            O que você gostaria de fazer hoje?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Postar uma Tarefa</h3>
            <p className="mb-4 opacity-90">
              Publique sua tarefa e receba propostas de profissionais qualificados
            </p>
            <button
              onClick={onPostTaskClick}
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Postar Tarefa
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Procurar Tarefas</h3>
            <p className="mb-4 opacity-90">
              Explore todas as tarefas disponíveis na plataforma
            </p>
            <button
              onClick={onBrowseTasksClick}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Procurar Tarefas
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Encontrar Trabalho</h3>
            <p className="mb-4 opacity-90">
              Explore oportunidades de trabalho e envie suas propostas
            </p>
            <button
              onClick={onFindWorkClick}
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Buscar Trabalhos
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Tarefas Ativas</h4>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-600">Tarefas em andamento</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Tarefas Concluídas</h4>
            <p className="text-3xl font-bold text-blue-600">{user.completedTasks || 0}</p>
            <p className="text-sm text-gray-600">Total de tarefas finalizadas</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Avaliação</h4>
            <p className="text-3xl font-bold text-yellow-600">{user.rating || 0}</p>
            <p className="text-sm text-gray-600">Sua avaliação média</p>
          </div>
        </div>
      </div>
    </div>
  );
}