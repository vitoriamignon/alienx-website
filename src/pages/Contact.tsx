import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    console.log('=== ENVIANDO PARA API ===');
    console.log('URL: http://localhost/contact-api.php');
    console.log('Dados:', formData);
    
    try {
      const response = await fetch('http://localhost/contact-api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Status:', response.status);
      const data = await response.json();
      console.log('Resposta:', data);
      
      if (response.ok) {
        setResponse('✅ Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponse(data.error || '❌ Erro ao enviar');
      }
    } catch (error: any) {
      console.error('🚨 ERRO COMPLETO:', error);
      console.log('Mensagem do erro:', error.message);
      setResponse('🚨 Erro de conexão - ver console');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Entre em Contato
      </h1>

      <p className="mb-8 text-gray-400">
        Preencha o formulário abaixo e entraremos em contato com você.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Seu nome"
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Seu email"
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Sua mensagem"
          rows={5}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md text-white placeholder-gray-500 focus:border-[#B6FF2E] focus:outline-none resize-vertical"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-[#B6FF2E] text-black px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
            loading 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-[#9EFF26] active:scale-95 cursor-pointer'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {response && (
          <div className={`p-4 rounded-md ${
            response.includes('sucesso') 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {response}
          </div>
        )}
      </form>
    </main>
  );
}