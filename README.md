#  ALIEN X — Site Institucional

## 📌 Visão Geral

O **ALIEN-X** é um site institucional desenvolvido para divulgar os jogos do estúdio AlienX, apresentando informações claras sobre os projetos, fortalecendo a identidade visual da marca e facilitando o contato com o público.

O projeto foi construído com foco em **experiência do usuário (UX)**, **design moderno**, **responsividade** e **boas práticas de desenvolvimento front-end**, servindo também como projeto acadêmico.

---

## 🎯 Objetivos do Projeto

* Apresentar os jogos desenvolvidos pelo estúdio AlienX
* Fortalecer a presença digital e identidade visual da marca
* Centralizar informações institucionais
* Disponibilizar um canal de contato funcional
* Aplicar conceitos modernos de desenvolvimento front-end

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **CSS / CSS Modules**
* **Context API** (internacionalização)
* **PHP** (envio de formulário de contato)
* **XAMPP** (ambiente local para PHP)

---

## 🌍 Funcionalidades

* 🌐 Site responsivo (desktop, tablet e mobile)
* 🌎 Sistema de idiomas (Português / Inglês)
* 🎮 Página de detalhes dos jogos
* 📩 Formulário de contato com envio de e-mail via PHP
* 🎨 Design moderno alinhado à identidade AlienX

---

## 📂 Estrutura do Projeto

```
alienx-website/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── locales/
│   │   ├── pt.json
│   │   └── en.json
│   ├── styles/
│   └── main.tsx
├── api/
│   └── send-email.php
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

* Node.js instalado
* XAMPP instalado (Apache ativo)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/alienx-website.git

# Acesse o projeto
cd alienx-website

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Configuração do PHP

* O projeto deve estar dentro da pasta `htdocs` do XAMPP
* Inicie o **Apache** no painel do XAMPP
* O arquivo responsável pelo envio do formulário está em `api/send-email.php`

---

## 📧 Formulário de Contato

O formulário da página **Contact** envia os dados diretamente para o e-mail do cliente utilizando PHP, sem uso de banco de dados.

Campos enviados:

* Nome
* E-mail
* Mensagem

---

## 📚 Contexto Acadêmico

Projeto desenvolvido como parte do **Projeto Integrador**, aplicando conceitos de:

* Desenvolvimento Front-end
* Componentização
* Internacionalização
* Integração Front-end com Back-end (PHP)

---

## 👩‍💻 Desenvolvedores

**Jorge Miguel**
**Luan Mota**
**Quézia Moura**
**Tamyres Lopes**
**Vitória Mignon**


---

## 📄 Licença

Este projeto é de uso acadêmico e educacional.
