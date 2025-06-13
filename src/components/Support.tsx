import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const faqCategories = [
    'Geral',
    'Para Clientes',
    'Para Profissionais',
    'Pagamentos',
    'Segurança',
    'Conta'
  ];

  const faqs = [
    {
      category: 'Geral',
      question: 'O que é o TrampoFlex?',
      answer: 'O TrampoFlex é uma plataforma brasileira que conecta pessoas que precisam de serviços com profissionais qualificados. Oferecemos uma forma segura e prática de encontrar ou oferecer serviços em diversas categorias.'
    },
    {
      category: 'Geral',
      question: 'Como funciona a plataforma?',
      answer: 'É simples: clientes publicam tarefas descrevendo o que precisam, profissionais enviam propostas, e o cliente escolhe a melhor opção. Após a conclusão do serviço, ambas as partes podem se avaliar.'
    },
    {
      category: 'Para Clientes',
      question: 'É grátis para postar uma tarefa?',
      answer: 'Sim! Postar tarefas no TrampoFlex é completamente gratuito. Você só paga diretamente ao profissional pelo serviço realizado.'
    },
    {
      category: 'Para Clientes',
      question: 'Como escolho o melhor profissional?',
      answer: 'Analise as propostas recebidas, verifique as avaliações de outros clientes, veja o portfólio do profissional e converse com ele antes de tomar a decisão.'
    },
    {
      category: 'Para Clientes',
      question: 'E se eu não ficar satisfeito com o serviço?',
      answer: 'Temos um sistema de resolução de conflitos. Entre em contato conosco e trabalharemos para encontrar uma solução justa para ambas as partes.'
    },
    {
      category: 'Para Profissionais',
      question: 'Como me cadastro como profissional?',
      answer: 'Clique em "Cadastrar" e selecione "Trabalhar como profissional". Complete seu perfil com informações detalhadas, adicione fotos dos seus trabalhos e comece a enviar propostas.'
    },
    {
      category: 'Para Profissionais',
      question: 'Quanto custa para usar a plataforma?',
      answer: 'O cadastro e navegação são gratuitos. Cobramos uma pequena taxa apenas quando você completa um serviço com sucesso.'
    },
    {
      category: 'Para Profissionais',
      question: 'Como recebo o pagamento?',
      answer: 'O pagamento é feito diretamente pelo cliente após a conclusão e aprovação do serviço. Você pode negociar a forma de pagamento (dinheiro, PIX, cartão) diretamente com o cliente.'
    },
    {
      category: 'Pagamentos',
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'O pagamento é feito diretamente entre cliente e profissional. As formas mais comuns são PIX, dinheiro, cartão de débito/crédito e transferência bancária.'
    },
    {
      category: 'Pagamentos',
      question: 'O TrampoFlex guarda meu dinheiro?',
      answer: 'Não. O TrampoFlex não processa pagamentos. Todas as transações financeiras acontecem diretamente entre cliente e profissional.'
    },
    {
      category: 'Segurança',
      question: 'Como vocês verificam os profissionais?',
      answer: 'Todos os profissionais passam por verificação de identidade e documentos. Também temos um sistema de avaliações que ajuda a manter a qualidade dos serviços.'
    },
    {
      category: 'Segurança',
      question: 'É seguro contratar pela plataforma?',
      answer: 'Sim. Verificamos identidades, mantemos histórico de avaliações e oferecemos suporte para resolução de conflitos. Sempre recomendamos conhecer o profissional antes de contratar.'
    },
    {
      category: 'Conta',
      question: 'Como altero meus dados?',
      answer: 'Acesse seu perfil após fazer login e clique em "Editar perfil". Lá você pode alterar informações pessoais, foto e descrição.'
    },
    {
      category: 'Conta',
      question: 'Esqueci minha senha, o que faço?',
      answer: 'Na tela de login, clique em "Esqueci minha senha" e siga as instruções enviadas para seu email.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Chat Online',
      description: 'Fale conosco em tempo real',
      availability: 'Seg-Sex: 8h às 18h',
      action: 'Iniciar Chat'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'contato@trampoflex.com',
      availability: 'Resposta em até 24h',
      action: 'Enviar Email'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: '(11) 4000-0000',
      availability: 'Seg-Sex: 8h às 18h',
      action: 'Ligar Agora'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', contactForm);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Central de Ajuda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Encontre respostas para suas dúvidas ou entre em contato conosco. Estamos aqui para ajudar!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Digite sua dúvida aqui..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">< 2h</div>
                <div className="text-gray-600">Tempo médio de resposta</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Problemas resolvidos</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MessageCircle className="h-8 w-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Suporte disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedCategory 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Todas
            </button>
            {faqCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-3">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-600">
                Tente usar outros termos de busca ou entre em contato conosco
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outras Formas de Contato
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma que preferir para falar conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{method.availability}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria *
                </label>
                <select
                  required
                  value={contactForm.category}
                  onChange={(e) => setContactForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="geral">Dúvida Geral</option>
                  <option value="tecnico">Problema Técnico</option>
                  <option value="pagamento">Questão de Pagamento</option>
                  <option value="seguranca">Problema de Segurança</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Resumo do seu problema ou dúvida"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Descreva detalhadamente sua dúvida ou problema..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <Info className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tempos de Resposta</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>Chat Online:</strong> Imediato durante horário comercial
                  </div>
                  <div>
                    <strong>Email:</strong> Até 24 horas em dias úteis
                  </div>
                  <div>
                    <strong>Telefone:</strong> Atendimento imediato durante horário comercial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}