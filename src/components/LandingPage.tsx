import React from 'react';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  onPostTaskClick: () => void;
}

export default function LandingPage({ onLoginClick, onSignupClick, onPostTaskClick }: LandingPageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Perfis Verificados'
    },
    {
      icon: Star,
      title: 'Avaliações Reais'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa'
    }
  ];

  const categories = [
    'Limpeza doméstica',
    'Montagem de móveis',
    'Encanamento',
    'Jardinagem',
    'Pintura',
    'Eletricista',
    'Aulas particulares',
    'Design gráfico'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Pessoas carregando caixas - Serviços de mudança"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  TUDO O QUE VOCÊ
                  <br />
                  <span className="text-green-600">PRECISA</span>
                  <br />
                  EM UM SÓ LUGAR
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Simples assim: você publica, os profissionais se candidatam e você contrata o melhor!
                </p>

                {/* Main CTAs */}
                <div className="space-y-4 mb-12">
                  <button
                    onClick={onPostTaskClick}
                    className="w-full bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                  >
                    Publique sua tarefa gratuitamente
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onSignupClick}
                    className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                  >
                    Ganhe dinheiro como Profissional
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como funciona o TrampoFlex
            </h2>
            <p className="text-xl text-gray-600">
              Simples, rápido e seguro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Publique sua tarefa</h3>
              <p className="text-gray-600">
                Descreva o que você precisa de forma clara e detalhada
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Receba propostas</h3>
              <p className="text-gray-600">
                Profissionais qualificados enviarão propostas personalizadas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Contrate e avalie</h3>
              <p className="text-gray-600">
                Escolha o melhor profissional e avalie o trabalho realizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias Populares */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Categorias Populares
            </h2>
            <p className="text-xl text-gray-600">
              Encontre profissionais para qualquer tipo de tarefa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={onPostTaskClick}
                className="bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md group"
              >
                <span className="text-gray-700 group-hover:text-green-600 font-medium">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o TrampoFlex?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Junte-se a milhares de brasileiros que já encontraram profissionais de confiança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPostTaskClick}
              className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Criar Conta Grátis
            </button>
            <button
              onClick={onLoginClick}
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Já tenho conta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}