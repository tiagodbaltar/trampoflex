import React, { useState } from 'react';
import { Calendar, MapPin, Upload, X, Camera, DollarSign, AlertCircle } from 'lucide-react';

interface PostTaskProps {
  onClose: () => void;
}

export default function PostTask({ onClose }: PostTaskProps) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    isFlexible: false,
    state: '',
    city: '',
    neighborhood: '',
    description: '',
    budget: ''
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const brazilianStates = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ];

  const charCount = formData.description.length;
  const minChars = 25;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedImages(prev => [...prev, ...files].slice(0, 5)); // Max 5 images
    
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: '' }));
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Este campo é obrigatório';
    }

    if (!formData.date && !formData.isFlexible) {
      newErrors.date = 'Selecione uma data ou marque como flexível';
    }

    if (!formData.state) {
      newErrors.state = 'Selecione um estado';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Este campo é obrigatório';
    }

    if (!formData.neighborhood.trim()) {
      newErrors.neighborhood = 'Este campo é obrigatório';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Este campo é obrigatório';
    } else if (charCount < minChars) {
      newErrors.description = `Descrição deve ter pelo menos ${minChars} caracteres`;
    }

    if (uploadedImages.length === 0) {
      newErrors.images = 'Adicione pelo menos uma foto';
    }

    if (!formData.budget) {
      newErrors.budget = 'Este campo é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData, uploadedImages);
      // Here you would typically send the data to your backend
      alert('Tarefa publicada com sucesso!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Descreva sua tarefa</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Campo 1: O que você precisa? */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              O que você precisa? *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ex: Pintar quarto, Consertar torneira, Limpar jardim"
              className={`w-full px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.title && (
              <p className="mt-2 text-red-600 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.title}
              </p>
            )}
          </div>

          {/* Campo 2: Quando precisa do serviço? */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Quando precisa do serviço? *
            </label>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  disabled={formData.isFlexible}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    formData.isFlexible ? 'bg-gray-100 text-gray-500' : ''
                  } ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isFlexible"
                  checked={formData.isFlexible}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-gray-700 whitespace-nowrap">Sou flexível com as datas</span>
              </label>
            </div>
            {errors.date && (
              <p className="mt-2 text-red-600 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.date}
              </p>
            )}
          </div>

          {/* Campo 3: Onde o serviço será realizado? */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Onde o serviço será realizado? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o estado</option>
                    {brazilianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                {errors.state && (
                  <p className="mt-1 text-red-600 text-sm">{errors.state}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Digite a cidade"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="mt-1 text-red-600 text-sm">{errors.city}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bairro</label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  placeholder="Digite o bairro"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.neighborhood ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.neighborhood && (
                  <p className="mt-1 text-red-600 text-sm">{errors.neighborhood}</p>
                )}
              </div>
            </div>
          </div>

          {/* Campo 4: Descreva os detalhes da tarefa */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Descreva os detalhes da tarefa *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              placeholder="Descreva detalhadamente o que precisa ser feito, materiais necessários, prazo, etc."
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <div className="flex justify-between items-center mt-2">
              <span className={`text-sm ${charCount >= minChars ? 'text-green-600' : 'text-gray-500'}`}>
                {charCount} / {minChars} caracteres mínimos
              </span>
            </div>
            {errors.description && (
              <p className="mt-2 text-red-600 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.description}
              </p>
            )}

            {/* Upload de fotos */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Adicione pelo menos uma foto do serviço (obrigatório) *
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Clique para adicionar fotos</p>
                  <p className="text-sm text-gray-500">PNG, JPG até 5MB cada (máximo 5 fotos)</p>
                </label>
              </div>

              {uploadedImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {errors.images && (
                <p className="mt-2 text-red-600 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.images}
                </p>
              )}
            </div>
          </div>

          {/* Campo 5: Orçamento */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Qual seu orçamento sugerido? *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="0,00"
                min="0"
                step="0.01"
                className={`w-full pl-16 pr-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.budget ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Este valor é uma sugestão inicial. O preço final pode ser negociado diretamente com o profissional.
            </p>
            {errors.budget && (
              <p className="mt-2 text-red-600 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.budget}
              </p>
            )}
          </div>

          {/* Observação em destaque */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Serviço Gratuito</h4>
                <p className="text-green-700 text-sm">
                  Este serviço é totalmente gratuito para você! O pagamento será feito diretamente ao profissional após a conclusão do serviço.
                </p>
              </div>
            </div>
          </div>

          {/* Botão de envio */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg text-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Publicar Tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}