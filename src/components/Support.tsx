import React, { useState } from 'react';
import { HelpCircle, Mail, Send, CheckCircle } from 'lucide-react';
import Footer from './Footer';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Mensagem Enviada!
                </h2>
                <p className="text-gray-600 mb-6">
                  Recebemos sua mensagem e nossa equipe entrará em contato em breve.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Tempo de resposta:</strong> Até 24 horas em dias úteis
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Entre em Contato
                  </h2>
                  <p className="text-gray-600">
                    Não encontrou o que procurava? Envie sua mensagem e nossa equipe entrará em contato.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descreva sua dúvida ou problema em detalhes..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">{"< 24h"}</div>
            <div className="text-gray-600">Tempo médio de resposta</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Taxa de satisfação</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Base de conhecimento</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}