export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        Contato
      </h1>

      <p className="mb-8 text-textSecondary">
        Entre em contato com a equipe AlienX.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Nome"
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <textarea
          placeholder="Mensagem"
          rows={5}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-md"
        />

        <button
          type="submit"
          className="bg-accent-green text-black px-6 py-3 rounded-md font-semibold"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
