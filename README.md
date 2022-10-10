# Ragnarök Design System
Toda documentação necessária pode ser acessada através da nossa Wiki, onde descrevemos a [arquitetura](https://lojasrenner.visualstudio.com/DataLab%20-%20Guilda%20de%20UX/_wiki/wikis/Valhalla%20DataLab%20-%20Guilda%20de%20UX.wiki/5411/Arquitetura), [processos](https://lojasrenner.visualstudio.com/DataLab%20-%20Guilda%20de%20UX/_wiki/wikis/Valhalla%20DataLab%20-%20Guilda%20de%20UX.wiki/5369/Processos) e utilização.
Seguimos uma [metodologia baseada em componentes](https://www.componentdriven.org/) começando com componentes atômicos e modulares reutilizando-os para os mais complexos e robustos.


Depois de clonar o repositório:
```git
npm install
npm run storybook

Acesse em http://localhost:6006/
```
## Design Tokens

___
São a menor parte de um design system e são responsáveis por manter a consistência visual de um produto. Pequenas constantes que são usados em todo sistema, como cores, espaçamentos, larguras, tipografia e padrões visuais.
Eles estão no projeto em uma arquitetura de arquivos **.yml** com variáveis descritivas; usando o `theo` essas variáveis são convertidas em um arquivo **SASS(tokens.scss)**, que por sua vez é convertido, juntamente com o **tema (theme.scss)**, para um arquivo **CSS (theme.css)**, este é o arquivo que deve ser importado no sistema que usará os componentes.

## Engine

___
Toda a aplicação é construída em [Nodejs](https://nodejs.org/) e os componentes usando [React](https://reactjs.org/).

(aqui precisamos de mais detalhes sobre a exportação do projeto como um pacote)

## Documentação

___
Usamos o [Storybook](https://storybook.js.org/) para gerar uma documentação interativa dos componentes do projeto, passando por todas suas variações e usos; a plataforma ainda oferece um modo Design onde todas as opções podem ser exploradas.

## Testes

___
[Jest](https://jestjs.io/) é responsável pelos testes que devem ser escritos para cada componente, esses testes vão rodar sempre que um `push` é feito, em caso de falha o `push` não é concluído, fazendo com que nada vá para o projeto principal com bugs ou mal testado.

## Componentização

___
A estrutura principal consiste em adicionar classes que alteram o visual esperado de acordo com o que foi planejado pelo **Visual Designer** e os `design tokens` do projeto. O comportamento foi planejado pela equipe juntamente com o **Product Designer** que levantou a necessidade do componente; comportamento esse que determina como serão os testes, critérios de aceite e etc.




dev
ENV REACT_APP_APOLLO_URI="http://pyramid-dev.lojasrenner.com.br/graphql" \
    REACT_APP_REPORT="http://pyramid-dev.lojasrenner.com.br/report" \
    REACT_APP_API_PREDICT="http://hpc-lab-01.lojasrenner.com.br:5001" \
    REACT_APP_GOOGLE_ANALYTICS="UA-171489359-1" \
    REACT_APP_URL_DOWN="http://pyramid-dev.lojasrenner.com.br/" \
    REACT_APP_ENV="development" \
    NODE_ENV="development"



  hlg

 ENV REACT_APP_APOLLO_URI="http://pyramid-hlg.lojasrenner.com.br/graphql" \
     REACT_APP_REPORT="http://pyramid-hlg.lojasrenner.com.br/report" \
     REACT_APP_API_PREDICT="http://hpc-lab-01.lojasrenner.com.br:5001" \
     REACT_APP_GOOGLE_ANALYTICS="UA-171489359-1" \
     REACT_APP_URL_DOWN="http://pyramid-hlg.lojasrenner.com.br/" \
     REACT_APP_ENV="homolog"\

