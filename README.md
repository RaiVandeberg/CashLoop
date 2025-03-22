# 💸 CashLoop

**CashLoop** é uma aplicação web moderna, responsiva e intuitiva para gerenciamento financeiro, desenvolvida com **React**, **TypeScript** e **TailwindCSS**. Ela oferece uma interface fluida e amigável, seguindo as melhores práticas de desenvolvimento web.

---

## 📑 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## 🌟 Visão Geral

O **CashLoop** foi criado para facilitar o controle de finanças pessoais e corporativas, possibilitando que os usuários visualizem, organizem e acompanhem receitas, despesas e saldo em uma experiência simples e direta.

---

## 🧩 Arquitetura do Projeto

. ├── public/ │ ├── Icon.svg │ └── lo.png ├── src/ │ ├── assets/ # Ícones e imagens da interface │ ├── components/ # Componentes reutilizáveis da UI │ ├── pages/ # Páginas principais da aplicação │ ├── routes/ # Configurações de rotas │ ├── App.tsx │ ├── index.css │ ├── main.tsx │ └── vite-env.d.ts ├── .gitignore ├── index.html ├── package.json ├── tsconfig.*.json └── vite.config.ts

yaml
Copiar
Editar

---

## ⚙️ Instalação

Siga os passos abaixo para rodar o projeto localmente:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/cashloop.git
cd cashloop

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
Abra http://localhost:3000 para visualizar no navegador.

🚀 Scripts Disponíveis
Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera a versão de produção na pasta dist/
npm run preview	Visualiza a aplicação compilada localmente
🗂 Estrutura de Diretórios
components/
AppLayout.tsx: Layout principal da aplicação

AuthLayout.tsx: Layout para páginas de autenticação

Button.tsx, Input.tsx, Pagination.tsx: Componentes reutilizáveis de UI

pages/
CashLoop.tsx: Página principal do sistema financeiro

SignIn.tsx: Tela de login

SignUp.tsx: Tela de registro

NotFound.tsx: Página 404

routes/
index.tsx: Definição das rotas principais

AuthRoutes.tsx: Rotas para autenticação

EmployRoutes.tsx: Rotas para usuários autenticados

🧰 Tecnologias Utilizadas
React — Biblioteca para criação de interfaces de usuário

TypeScript — Superset do JavaScript com tipagem estática

TailwindCSS — Framework de utilitários CSS

Vite — Ferramenta de build e desenvolvimento frontend moderna

🤝 Como Contribuir
Contribuições são super bem-vindas! Para colaborar:

bash
Copiar
Editar
# Faça um fork do repositório
# Crie uma nova branch
git checkout -b feature/minha-feature

# Faça commit das suas alterações
git commit -m "feat: minha feature"

# Faça push para a branch
git push origin feature/minha-feature
Depois, abra um Pull Request no repositório original.

📄 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.