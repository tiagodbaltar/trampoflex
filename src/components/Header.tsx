import React, { useState } from 'react';
import { Menu, X, User, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  onPostTaskClick: () => void;
  onFindWorkClick?: () => void;
  onBrowseTasksClick?: () => void;
  onHowItWorksClick?: () => void;
  onSupportClick?: () => void;
  onHomeClick?: () => void;
}

// Toucan Logo Component
const ToucanLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Toucan Body */}
    <ellipse cx="45" cy="65" rx="18" ry="25" fill="#2D3748" />
    
    {/* Toucan Head */}
    <circle cx="45" cy="35" r="20" fill="#2D3748" />
    
    {/* Beak */}
    <path d="M25 35 Q15 30 10 35 Q15 40 25 35" fill="#F59E0B" />
    <path d="M25 35 Q20 32 18 35 Q20 38 25 35" fill="#EF4444" />
    
    {/* Eye */}
    <circle cx="50" cy="30" r="4" fill="white" />
    <circle cx="51" cy="29" r="2" fill="#1F2937" />
    
    {/* Wing */}
    <ellipse cx="55" cy="50" rx="8" ry="15" fill="#059669" transform="rotate(20 55 50)" />
    
    {/* Chest accent */}
    <ellipse cx="45" cy="55" rx="8" ry="12" fill="#F59E0B" />
    
    {/* Tail */}
    <ellipse cx="35" cy="80" rx="6" ry="12" fill="#059669" transform="rotate(-30 35 80)" />
  </svg>
);

export default function Header({ 
  onLoginClick, 
  onSignupClick, 
  onPostTaskClick, 
  onFindWorkClick, 
  onBrowseTasksClick,
  onHowItWorksClick,
  onSupportClick,
  onHomeClick
}: HeaderProps) {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={onHomeClick}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <ToucanLogo className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                TrampoFlex
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onPostTaskClick}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Postar Tarefa
            </button>
            <button 
              onClick={onBrowseTasksClick}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Procurar Tarefas
            </button>
            {user && onFindWorkClick && (
              <button 
                onClick={onFindWorkClick}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Encontrar Trabalho
              </button>
            )}
            <button 
              onClick={onHowItWorksClick}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={onSupportClick}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Suporte
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                  <span className="text-gray-700">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={onLoginClick}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Entrar
                </button>
                <button 
                  onClick={onSignupClick}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Cadastrar
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={onPostTaskClick}
                className="text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Postar Tarefa
              </button>
              <button 
                onClick={onBrowseTasksClick}
                className="text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Procurar Tarefas
              </button>
              {user && onFindWorkClick && (
                <button 
                  onClick={onFindWorkClick}
                  className="text-left text-gray-600 hover:text-green-600 transition-colors"
                >
                  Encontrar Trabalho
                </button>
              )}
              <button 
                onClick={onHowItWorksClick}
                className="text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={onSupportClick}
                className="text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Suporte
              </button>
              <div className="pt-4 border-t">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <User className="w-8 h-8 text-gray-400" />
                      )}
                      <span className="text-gray-700">{user.name}</span>
                    </div>
                    <button 
                      onClick={logout}
                      className="block w-full text-left text-red-600 hover:text-red-700 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <>
                    <button 
                      onClick={onLoginClick}
                      className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors mb-2"
                    >
                      Entrar
                    </button>
                    <button 
                      onClick={onSignupClick}
                      className="block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Cadastrar
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}