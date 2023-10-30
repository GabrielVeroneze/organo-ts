<p align="center"><img src="https://github.com/GabrielVeroneze/organo-ts/assets/95183901/501be422-1f2d-4bf7-a219-3b59eec05188"></p>
<p>Projeto desenvolvido durante o curso "React: migrando para TypeScript" da Alura.</p>

<hr>

## Índice

- [Descrição](#descricao)
- [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
- [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
   - [Migração para TypeScript](#migração-para-typescript)
   - [Integração de Componentes](#integração-de-componentes)
   - [Tipagem de Funções e Componentes](#tipagem-de-funções-e-componentes)
   - [Utilização de Generics](#utilização-de-generics)
   - [Estilização e Responsividade](#estilização-e-responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#camera-demonstração-visual)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/organo-ts/assets/95183901/45c9da4b-5f2d-4a5e-89b8-2097a56e6bc6"></h1>
<p align="center">O Organo TS é uma versão em TypeScript da aplicação <a href="https://github.com/GabrielVeroneze/organo">Organo</a> original em JavaScript, mantendo todas as funcionalidades do Organo e enriquecendo o projeto com melhorias proporcionadas pelo TypeScript, que garantem maior segurança de tipos e um desenvolvimento mais robusto e escalável.</p>

<p align="center">O Organo é um organograma interativo, proporcionando uma representação visual hierárquica da estrutura de colaboradores organizados por times categorizados em áreas de especialização.</p>

## :rocket: Funcionalidades e Recursos

- `Criação de Card do Colaborador`: Permite a criação de cards de colaboradores com informações como nome, cargo, imagem e time, tornando cada card visualmente identificável e personalizado.

- `Upload de Imagem`: Oferece a opção de fazer upload da imagem do colaborador diretamente pelo formulário de criação de card.

- `Seleção de Time`: Disponibiliza uma lista de opções de times, incluindo programação, Front-end, Data Science, DevOps, UX e Design, Mobile e Inovação e gestão.

- `Adição ao Organograma`: Após a criação do card do colaborador, ele é adicionado automaticamente ao organograma, no local correspondente ao time escolhido.

## :toolbox: Desenvolvimento e Implementação

### Migração para TypeScript

- `Migração Gradual`: O Organo TS é uma migração do projeto Organo de JavaScript para TypeScript. Essa migração ocorreu de forma gradual e cuidadosa, incorporando os benefícios do TypeScript.

- `Configuração do tsconfig.json`: Gera o arquivo `tsconfig.json` com configurações padrões para o TypeScript, incluindo configurações para a sintaxe JSX do React e detecção de variáveis e parâmetros não utilizados.

### Integração de Componentes

- `Alteração de Extensões`: Durante o processo de migração, as extensões dos arquivos JavaScript foram modificadas para `.tsx` para indicar explicitamente o uso do TypeScript nos componentes React.

- `Uso de Interfaces`: Foram criadas interfaces para definir a estrutura de propriedades que um componente pode receber. Uma interface "global" foi criada para ser utilizada em diferentes partes da aplicação.

- `Propriedades da Interface`: Foram configuradas propriedades opcionais e propriedades com múltiplos tipos, permitindo uma maior flexibilidade na definição de componentes.

### Tipagem de Funções e Componentes

- `Tipagem de Componentes`: Componentes que recebem tipos primitivos como props, assim como componentes que recebem arrays de strings e objetos como props, são tipados de acordo com as necessidades da aplicação.

- `Tipagem de Funções`: Inclui a tipagem de funções que recebem argumentos e não retornam valor, tornando o código mais explícito e seguro.

- `Tipagem de Eventos`: Inclui a tipagem de funções que lidam com eventos como o `onChange` de um input para garantir a correta manipulação dos eventos.

### Utilização de Generics

- `Generics em Hooks useState`: Para especificar explicitamente o tipo de dado que será armazenado no estado, foram utilizados generics nos hooks `useState`.

### Estilização e Responsividade

- `BEM para CSS`: Utiliza a metodologia BEM para nomeação de classes em CSS, garantindo uma estrutura consistente e organizada.

- `Media Queries`: Implementa media queries para garantir a responsividade da aplicação em dispositivos móveis, tablets e desktops.

## :computer: Ferramentas utilizadas

| &nbsp; React | TypeScript | Create React App |
| ------------ | ---------- | ---------------- |
<img height="65px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="65px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> | &nbsp; <img height="65px" src="https://github.com/GabrielVeroneze/organo-ts/assets/95183901/e3ad7d09-fa06-4385-a817-4eb524caa98d" />

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/organo-ts/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/organo-ts.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd organo-ts
   ```
3. Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:
   ```
   npm install
   ```
&nbsp; &nbsp; &nbsp; &nbsp;Isso irá instalar todas as dependências listadas no arquivo package.json.

4. Após a instalação das dependências, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm start
   ```
&nbsp; &nbsp; &nbsp; &nbsp;Isso abrirá automaticamente a aplicação no seu navegador. Se não abrir, acesse o endereço http://localhost:3000.
<br>

## :camera: Demonstração Visual
`Formulário`
![Organo](https://imgur.com/fjCFeFY.png)

`Seção de Colaboradores`
![Organo](https://imgur.com/gapXooK.png)

`Criando Colaborador`
![Organo](https://imgur.com/F2xf4SZ.gif)
