# Mod 35 aula 1 - Faça as configurações iniciais -

O porjeto baixado já tem o Eslint e Prettier configurados
Lembrando:

Eslint : Mostra os códigos que não estão no padrão identação
         configurado no .editorcongif .

Prettier : Altera automaticamente as salvar o documento as
           configurações determinada no .editorconfig .

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


# Mod 35 aula 2 - Construa o cabeçalho -

Criaremos a pasta src/assets onde estarão as imagens que serão usadas na
aplicação.

O cabeçalho é um componente e os componentes na aplicação são colocados
na pasta src/components/. No caso do cabeçalho; src/components/Header/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Header, src/components/Header/styles.ts

No documento App.tsx de faz uma chamada para o componente Header


# Mod 35 aula 3 - Cria o Banner -

O Banner deste projeto é uma imagem, dentro dela de varios elementos.

Esta imagem será tratada com background-image

O Banner é um componente e os componentes na aplicação são colocados
na pasta src/components/. No caso do Banner; src/components/Banner/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Banner, src/components/Banner/styles.ts

No documento App.tsx de faz uma chamada para o componente Banner.


# Mod 36 alua 4 - Componentize - Parte I -

Varios elementeos irão se repetir em varios componentes como tags e botões.
Sendo assim iremos componentizar este componentes.

A Tag que é um elemento que é usado em outros componentes da aplicação.
A Tag será criada em src/components/Tag/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Tag, src/components/Tag/styles.ts

O Botão também será um elemento que será usado em outros componentes na aplicação.
O elemento Button será usado na pasta src/components/Button/index.tsx.

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Tag, src/components/Button/styles.ts


# Mod 36 alua 5 - Componentize - Parte II -

Será criado agora o Card de Produto que também como as TAGS e BOTÕES serão
usados em demais componentes.

Será criada o componente Produto em src/components/Product/index.tsx também um
documento de estilo CSS usando o STYLED COMPONENT src/components/Product/styles.ts

Como nesta aplicação tem o componete, Lista de Produtos que é um conjunto de
componentes Product agrupados em uma linha com 4 elementos.

Sendo assim seguindo o padrão é criado os documentos
src/components/ProductList/index.tsx e o src/components/ProductList/styles.ts


# Mod 36 alua 6 - Componentize - Parte III -

O componente Produto receberá uma string para cada campo de seus dados.
Dessa forma a aplicação se torna mais dinâmica.


# Mod 36 alua 7 - Construa as páginas -

Criaremos páginas. Clicando em botões irá ocorrer a mudança de página.
As mudanças ocorreram no documento App.tsx .

Será criado uma pasta uma pasta 'pages', onde as páginas da aplicação
estarão.


Página - HOME

A primeira página da aplicação será a página HOME. Então é criada o seu
correspondente componente; src/pages/Home/index.tsx. Será transferido
para este documento todo o conteúdo renderizado (o conteúdo dentro de return)
na aplicação até agora.

As chamada do conteúdo da página HOME e as demais são chamadas no documento
src/routes.tsx e este documento será chamada pelo documento src/routes.tsx

Será criada um documento src/models/games.ts , onde o componente irá ler
os dados de suas variáveis em vez se serem preenchidos no próprio componente.
Assim permitindo que este dados sejam preenchidos de forma dinâmica ao
manipular o documento games.ts.


Página - CATEGORIES

Sera criada também a página de Categorias que é uma listagem de produtos
separada por categorias.

A página CATEGORIES é criada src/pages/Categories/index.tsx


# Mod 36 alua 8 - Construa o Rodapé -

O Rodapé e o Header são os dois componentes que estarão em toda a aplicação

Criaremos para o Rodapé o seguinte documento src/components/Rodape/index.tsx
e também o seu STYLE COMPONENT, src/components/Rodape/styles.ts

O Componente Rodapé foi inserido em src/App.tsx


# Mod 37 alua 1 - Crie a página de detalhes -

Vamos criar mais uma pagina o que significa um componente dentro
de pages que será adiconado dentro do documento src/routes.tsx


# Mod 37 alua 1 - Componentize - Parte II -

É feito uma a página do produto do jogo Hogwarts. Foi usado o
mesmo esquema de fundo preto e card cinza e vice-versa.
