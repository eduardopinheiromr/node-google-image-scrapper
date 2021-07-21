# Node Google Image Scrapper API

## Propósito do projeto

O projeto foi criado para raspar imagens do Google, utilizando a biblioteca `images-scraper`, que faz uso do Puppeteer por de baixo dos panos. A motivação para criá-lo foi outro projeto que estou desenvolvendo, que me deu a ideia de automatizar a busca pelas imagens por meio de um micro serviço gratuito.
<br/>
<br/>

<hr/>

# Rotas

- Para buscar imagens: `/image/:query/:quantity?`

O parâmetro `query` é o que será buscado no Google Images.

O parâmetro `quantity` é opcional. Se não for passado, por padrão a API retornará apenas 1 resultado.

## Requerimentos

- NodeJS 16+
- Yarn 1+

## Passos para que seja possível rodar o projeto localmente

1- Rode o comando `yarn` para instalar as dependências
2- Após a instalação rode o comando `yarn start` e o projeto estará acessível em http://localhost:5000.

## Notas sobre o uso

O projeto tem a biblioteca `nodemon` instalada, para rodar em modo desenvolvimento, digite o comando `yarn dev`.
