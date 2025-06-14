import React from 'react';
import { HelpCircle, Mail, Phone, MessageCircle, FileText, Users } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Central de Ajuda e Suporte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você a ter a melhor experiência possível. 
            Encontre respostas rápidas ou entre em contato com nossa equipe especializada.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
              <HelpCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perguntas Frequentes</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Encontre respostas imediatas para as dúvidas mais comuns sobre nossa plataforma.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center group">
              Ver FAQ
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Suporte por Email</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Envie sua dúvida detalhada e receba uma resposta personalizada em até 24 horas.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
              Enviar Email
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chat ao Vivo</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Converse em tempo real com nossa equipe de suporte especializada.
            </p>
            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center group">
              Iniciar Chat
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <Phone className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Suporte Telefônico</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fale diretamente com nossos especialistas de segunda a sexta, das 8h às 18h.
            </p>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center group">
              (11) 9999-9999
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
              <FileText className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Documentação</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Acesse guias detalhados e tutoriais para aproveitar ao máximo nossa plataforma.
            </p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center group">
              Ver Docs
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comunidade</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Participe da nossa comunidade e troque experiências com outros usuários.
            </p>
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center group">
              Participar
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-gray-600 mb-8">
              Envie sua mensagem e nossa equipe entrará em contato em breve.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva sua dúvida ou problema em detalhes..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">< 2h</div>
            <div className="text-gray-600">Tempo médio de resposta</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Taxa de satisfação</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Disponibilidade do chat</div>
          </div>
        </div>
      </div>
    </div>
  );
}