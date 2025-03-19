# CashLoop

CashLoop é um projeto React que utiliza TypeScript e TailwindCSS para criar uma aplicação web moderna e responsiva.

## Estrutura do Projeto

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

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/cashloop.git
    cd cashloop
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build`

Compila a aplicação para produção na pasta `dist`.

### `npm run preview`

Pré-visualiza a aplicação compilada.

## Estrutura de Arquivos

### `src/components`

- **AppLayout.tsx**: Componente de layout principal da aplicação.
- **AuthLayout.tsx**: Componente de layout para páginas de autenticação.
- **Button.tsx**: Componente de botão reutilizável.
- **Input.tsx**: Componente de input reutilizável.

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

## Configuração

### `vite.config.ts`

Configuração do Vite com suporte ao TailwindCSS.

### `tsconfig.json`

Configuração do TypeScript.

### `package.json`

Dependências e scripts do projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.