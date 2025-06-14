import React, { useState } from 'react';
import { HelpCircle, Mail, Search, Send, CheckCircle } from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const helpArticles = [
    {
      id: 1,
      title: 'Como criar uma conta no TrampoFlex',
      category: 'Primeiros Passos',
      content: 'Guia completo para se cadastrar na plataforma',
      views: 1250
    },
    {
      id: 2,
      title: 'Como postar minha primeira tarefa',
      category: 'Primeiros Passos',
      content: 'Passo a passo para publicar uma tarefa',
      views: 980
    },
    {
      id: 3,
      title: 'Como escolher o melhor profissional',
      category: 'Contratação',
      content: 'Dicas para avaliar propostas e perfis',
      views: 756
    },
    {
      id: 4,
      title: 'Formas de pagamento aceitas',
      category: 'Pagamento',
      content: 'Métodos de pagamento disponíveis na plataforma',
      views: 642
    },
    {
      id: 5,
      title: 'Como resolver conflitos',
      category: 'Suporte',
      content: 'Procedimentos para resolver problemas',
      views: 523
    },
    {
      id: 6,
      title: 'Política de cancelamento',
      category: 'Políticas',
      content: 'Regras para cancelamento de tarefas',
      views: 445
    },
    {
      id: 7,
      title: 'Como aumentar suas chances como profissional',
      category: 'Profissionais',
      content: 'Dicas para conseguir mais trabalhos',
      views: 834
    },
    {
      id: 8,
      title: 'Verificação de perfil',
      category: 'Segurança',
      content: 'Como verificar sua identidade na plataforma',
      views: 612
    }
  ];

  const categories = ['Todos', 'Primeiros Passos', 'Contratação', 'Pagamento', 'Suporte', 'Políticas', 'Profissionais', 'Segurança'];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Todos' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

        {/* Search Help Articles */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buscar Artigos de Ajuda
            </h2>
            <p className="text-gray-600">
              Pesquise em nossa base de conhecimento para encontrar respostas rápidas
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Digite sua dúvida ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Todos' ? '' : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (selectedCategory === category || (selectedCategory === '' && category === 'Todos'))
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Help Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <div key={article.id} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.views} visualizações</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.content}</p>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-600">
                Tente usar palavras-chave diferentes ou entre em contato conosco
              </p>
            </div>
          )}
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
    </div>
  );
}