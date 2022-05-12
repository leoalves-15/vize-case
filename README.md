## Instruções e informações
# Resumo
O projeto foi criado com finalidade avaliativa para prestação de serviços para Vize.
# Tecnologias utilizadas
> Create React App( para criação do projeto ) (https://github.com/facebook/create-react-app).

> Eslint - Aibnb( para padronização e qualidade do codigo ) (https://eslint.org/docs/user-guide/getting-started) .

> Axios ( como cliente HTTP ) (https://axios-http.com/ptbr/docs/intro).

> React Router Dom ( para o roteamento ) (https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md).

> Styled-components ( para estilizar os componentes ) (https://styled-components.com/docs).

> Api de login da Apps Love Workd ( backend, para registrar, logar e listar users ) (https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication/).


# Organizacional
> Notion( para gerenciamento de task do projeto) (https://concise-vase-dc5.notion.site/2a799b87d12242f582c3bfc9ed9bc649?v=c9e49baaf2e549a0983d83a834fc0ef9).

> mensageria: preferir usar a da api pois fica mais dinâmica. 
# Funcionalidades

> O users pode Criar, um cadastro, pode logar, e ver uma lista de users.

> Responsividade
# Observações

    Limitei o campo de users para 5, para ficar mais fiel ao protótipo.
Podem ver como foi o andamento do projeto no link do [Notion](https://concise-vase-dc5.notion.site/2a799b87d12242f582c3bfc9ed9bc649?v=c9e49baaf2e549a0983d83a834fc0ef9), lá você pode ver as tasks e também as datas.

As dificuldades que tive foi ao estilizar a tabela (exatamente como no protótipo) (iria fazer com display flex, entretanto ficou entendido que era requisito usar o table), além disso o input com a animação deu trabalho pois o seletor :valid não funcinou, não queria usar classe para não despradonizar, fazer todo o estilo somente com o Styled-Components sem classes, entretanto foi necessário, Eu iria fazer uma feature de logout mas como não tinha no protótipo, retirei, adicionei também responsividade.

Prefirir utilizar o session pois ao fechar a aba, a sessão é excluida, adicionando uma melhor segurança que no localstorage.

# Instruções

> 1 - Depois do baixar o repositório, você deve rodar o comando npm install
> 2 - Em seguida rodar o comando npm start

## Default Read.me

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
