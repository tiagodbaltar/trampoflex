import React from 'react';
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
  UserCheck
} from 'lucide-react';

export default function HowItWorks() {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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

  const tips = [
    {
      category: 'Para Clientes',
      items: [
        'Seja específico na descrição da tarefa',
        'Inclua fotos sempre que possível',
        'Defina um orçamento realista baseado no mercado',
        'Responda rapidamente às propostas',
        'Verifique avaliações antes de contratar',
        'Mantenha comunicação clara durante o trabalho'
      ]
    },
    {
      category: 'Para Profissionais',
      items: [
        'Complete seu perfil com informações detalhadas',
        'Adicione fotos dos seus trabalhos anteriores',
        'Responda rapidamente às oportunidades',
        'Seja realista com prazos e preços',
        'Mantenha comunicação profissional',
        'Entregue sempre com qualidade para receber boas avaliações'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Funciona o TrampoFlex
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos clientes que precisam de serviços com profissionais qualificados de forma simples, rápida e segura.
          </p>
        </div>
      </section>

      {/* Para Clientes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Para Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre profissionais qualificados em 4 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para Profissionais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
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

      {/* Dicas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dicas para o Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Maximize seus resultados na plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {tips.map((tipCategory, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {tipCategory.category}
                </h3>
                <ul className="space-y-4">
                  {tipCategory.items.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Junte-se a milhares de brasileiros que já usam o TrampoFlex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Postar uma Tarefa
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Trabalhar como Profissional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}