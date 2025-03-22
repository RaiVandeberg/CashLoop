# 💸 CashLoop

CashLoop é uma aplicação web moderna e responsiva desenvolvida com React, TypeScript e TailwindCSS. Esta aplicação tem como objetivo fornecer uma interface intuitiva e eficiente para gerenciamento financeiro.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🌟 Visão Geral

CashLoop é uma aplicação web que permite aos usuários gerenciar suas finanças de forma eficiente. A aplicação é construída utilizando as melhores práticas de desenvolvimento web, garantindo uma experiência de usuário fluida e responsiva.

## 🗂 Estrutura do Projeto

```
.gitignore
index.html
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    Icon.svg
    lo.png
src/
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    assets/
        accommodation.svg
        approved.svg
        chevron-down.svg
        file.svg
        food.svg
        left.svg
        logo.svg
        logout.svg
        ok.svg
        others.svg
        remove.svg
        right.svg
        search.svg
        services.svg
        transport.svg
        upload.svg
    components/
        AppLayout.tsx
        AuthLayout.tsx
        Button.tsx
        Input.tsx
        Pagination.tsx
    pages/
        NotFound.tsx
        SignIn.tsx
        SignUp.tsx
        CashLoop.tsx
    routes/
        index.tsx
        AuthRoutes.tsx
        EmployRoutes.tsx
```

## 🛠 Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/cashloop.git
    cd cashloop
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## 🚀 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build`

Compila a aplicação para produção na pasta `dist`.

### `npm run preview`

Pré-visualiza a aplicação compilada.

## 📁 Estrutura de Arquivos

### `src/components`

- **AppLayout.tsx**: Componente de layout principal da aplicação.
- **AuthLayout.tsx**: Componente de layout para páginas de autenticação.
- **Button.tsx**: Componente de botão reutilizável.
- **Input.tsx**: Componente de input reutilizável.
- **Pagination.tsx**: Componente de paginação.

### `src/pages`

- **NotFound.tsx**: Página de erro 404.
- **SignIn.tsx**: Página de login.
- **SignUp.tsx**: Página de cadastro.
- **CashLoop.tsx**: Página principal da aplicação.

### `src/routes`

- **index.tsx**: Configuração das rotas principais.
- **AuthRoutes.tsx**: Rotas de autenticação.
- **EmployRoutes.tsx**: Rotas de usuários autenticados.

### `public`

- **Icon.svg**: Ícone da aplicação.
- **lo.png**: Logo da aplicação.

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS**: Framework CSS para estilização rápida e eficiente.
- **Vite**: Ferramenta de build rápida para desenvolvimento web.

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.