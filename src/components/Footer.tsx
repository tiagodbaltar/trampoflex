import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

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

export default function Footer() {
  const footerLinks = [
    {
      title: 'Sobre',
      links: ['Quem Somos', 'Como Funciona', 'Carreiras', 'Imprensa', 'Blog']
    },
    {
      title: 'Para Clientes',
      links: ['Postar Tarefa', 'Encontrar Profissionais', 'Preços', 'Dicas de Segurança', 'Central de Ajuda']
    },
    {
      title: 'Para Profissionais',
      links: ['Trabalhar Conosco', 'Aplicativo', 'Ganhe Dinheiro', 'Dicas de Sucesso', 'Recursos']
    },
    {
      title: 'Suporte',
      links: ['Central de Ajuda', 'Contato', 'Termos de Uso', 'Política de Privacidade', 'Cookies']
    }
  ];

  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <ToucanLogo className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                TrampoFlex
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A plataforma brasileira que conecta você com profissionais qualificados para qualquer tarefa. 
              Simples, seguro e confiável.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-500" />
              <span className="text-gray-300">contato@trampoflex.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TrampoFlex. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}