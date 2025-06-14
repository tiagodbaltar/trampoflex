import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Users, 
  MessageCircle, 
  CheckCircle, 
  Star,
  Shield,
  CreditCard,
  Clock,
  MapPin,
  Camera,
  UserCheck,
  Play,
  ChevronDown,
  ChevronUp,
  Quote
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const clientSteps = [
    {
      icon: FileText,
      title: '1. Publique sua tarefa',
      description: 'Descreva detalhadamente o que você precisa, inclua fotos, defina o orçamento e a localização.',
      details: [
        'Seja específico sobre o que precisa ser feito',
        'Adicione fotos para melhor compreensão',
        'Defina um orçamento realista',
        'Escolha a data ou marque como flexível'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: '2. Receba propostas',
      description: 'Profissionais qualificados enviarão propostas personalizadas com preços e prazos.',
      details: [
        'Receba múltiplas propostas em pouco tempo',
        'Compare preços, prazos e experiência',
        'Veja avaliações de outros clientes',
        'Converse diretamente com os profissionais'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: UserCheck,
      title: '3. Escolha o profissional',
      description: 'Analise as propostas, perfis e avaliações para escolher o melhor profissional.',
      details: [
        'Verifique o histórico e avaliações',
        'Confirme disponibilidade e detalhes',
        'Negocie termos se necessário',
        'Contrate com segurança'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: '4. Acompanhe e avalie',
      description: 'Acompanhe o progresso do trabalho e avalie o profissional ao final.',
      details: [
        'Receba atualizações do progresso',
        'Comunique-se pelo chat integrado',
        'Confirme a conclusão do trabalho',
        'Avalie e deixe feedback'
      ],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const taskerSteps = [
    {
      icon: Search,
      title: '1. Encontre tarefas',
      description: 'Navegue pelas tarefas disponíveis na sua área de expertise e localização.',
      details: [
        'Use filtros para encontrar tarefas relevantes',
        'Veja detalhes completos antes de se candidatar',
        'Identifique oportunidades na sua região',
        'Analise o orçamento e prazo propostos'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MessageCircle,
      title: '2. Envie propostas',
      description: 'Crie propostas personalizadas explicando como você pode ajudar.',
      details: [
        'Demonstre sua experiência relevante',
        'Proponha um preço justo e competitivo',
        'Explique seu método de trabalho',
        'Seja claro sobre prazos e disponibilidade'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Clock,
      title: '3. Execute o trabalho',
      description: 'Após ser selecionado, execute o trabalho com qualidade e no prazo.',
      details: [
        'Mantenha comunicação constante',
        'Siga as especificações acordadas',
        'Documente o progresso com fotos',
        'Entregue no prazo combinado'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Star,
      title: '4. Receba avaliação',
      description: 'Receba feedback positivo e construa sua reputação na plataforma.',
      details: [
        'Receba avaliações dos clientes',
        'Construa um histórico sólido',
        'Aumente suas chances em futuras tarefas',
        'Desenvolva relacionamentos duradouros'
      ],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Encontrei um eletricista excelente em menos de 2 horas. O serviço foi impecável e o preço justo.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Profissional',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Como pintor, consegui aumentar minha renda em 40% trabalhando através da plataforma.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Cliente',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'A qualidade dos profissionais é excepcional. Já contratei 5 serviços e todos superaram minhas expectativas.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o pagamento?',
      answer: 'O pagamento é feito diretamente ao profissional após a conclusão do serviço. Você pode negociar a forma de pagamento (dinheiro, PIX, cartão) diretamente com o prestador de serviço.'
    },
    {
      question: 'Os profissionais são verificados?',
      answer: 'Sim, todos os profissionais passam por um processo de verificação de identidade e documentos. Além disso, o sistema de avaliações garante a qualidade dos serviços.'
    },
    {
      question: 'Posso cancelar uma tarefa?',
      answer: 'Sim, você pode cancelar uma tarefa antes de aceitar uma proposta. Após aceitar, recomendamos conversar com o profissional para encontrar a melhor solução.'
    },
    {
      question: 'Como escolher o melhor profissional?',
      answer: 'Analise as propostas, verifique as avaliações anteriores, veja o portfólio e converse com os candidatos antes de tomar sua decisão.'
    },
    {
      question: 'Existe alguma taxa para usar a plataforma?',
      answer: 'Para clientes, a plataforma é completamente gratuita. Para profissionais, cobramos uma pequena taxa apenas quando você consegue um trabalho.'
    },
    {
      question: 'E se eu não ficar satisfeito com o serviço?',
      answer: 'Temos uma equipe de suporte dedicada para resolver conflitos. Entre em contato conosco e trabalharemos para encontrar uma solução justa.'
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Perfis Verificados',
      description: 'Todos os profissionais passam por verificação de identidade e documentos.'
    },
    {
      icon: Star,
      title: 'Sistema de Avaliações',
      description: 'Avaliações reais de clientes anteriores para garantir qualidade.'
    },
    {
      icon: MessageCircle,
      title: 'Chat Seguro',
      description: 'Comunicação protegida através da plataforma até a contratação.'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Protegido',
      description: 'Pagamento direto ao profissional após confirmação do serviço.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Como Funciona o TrampoFlex
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conectamos clientes que precisam de serviços com profissionais qualificados de forma simples, rápida e segura.
          </p>
          
          {/* Video Tutorial */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="relative bg-gradient-to-br from-green-500 to-blue-600 rounded-xl h-64 flex items-center justify-center mb-4">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="h-12 w-12 text-white ml-1" />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vídeo Tutorial</h3>
              <p className="text-gray-600">Aprenda em 3 minutos como usar a plataforma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Steps - Para Clientes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Para Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre profissionais qualificados em 4 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {clientSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-xl' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-white/20' : 'bg-white'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step Details */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${clientSteps[activeStep].color} flex items-center justify-center mb-6`}>
                {React.createElement(clientSteps[activeStep].icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {clientSteps[activeStep].title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {clientSteps[activeStep].description}
              </p>
              <ul className="space-y-3">
                {clientSteps[activeStep].details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Para Profissionais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Para Profissionais
            </h2>
            <p className="text-xl text-gray-600">
              Ganhe dinheiro oferecendo seus serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taskerSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de sucesso na nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-green-500 opacity-50 mb-4" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Segurança e Confiança
            </h2>
            <p className="text-xl text-gray-600">
              Sua segurança é nossa prioridade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre a plataforma
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Junte-se a milhares de brasileiros que já usam o TrampoFlex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Postar uma Tarefa
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Trabalhar como Profissional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}