# Mod 35 aula 1

Instalar o NPM.

npm i


Instalar o STYLED COMPONENT mais o REACT ROUTER DOM

npm i --save styled-components react-router-dom

Nesta especifica aplicação antes de rodar a aplicação devemos
entrar com comando para aplicar as configurações do .prettiercc

npx eslint --fix

Estes comandos acima não são necessário roda-los novamente caso precise
sair da aplicação e voltar mais tarde.


Para rodar a aplicação

npm start

Usar as fontes Roboto do Google fontes. Deve copiar o código da fonte e
cola-la em public/index.html antes da tag <head></head>.

É criado um documento CSS global usando o STYLED COMPONENT.

src/styles.ts

Fazeremos a alteração no arquivo App.tsx e deletar os documentos que não
serão mais usados. Deletamos: App.css, App.test.tsx, index.css e logo.svg.

Dentro de index.tsx removermos a referência de index.css.
