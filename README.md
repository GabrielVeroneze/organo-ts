<p align="center"> <img src="https://imgur.com/4b57aFn.png" alt="React: desenvolvendo com JavaScript"> </p>
<p>Projeto desenvolvido durante o curso "React: migrando para TypeScript" da Alura.</p>

<hr>

## Índice

- [Descrição](#descricao)
- [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
   - [Páginas Principais](#páginas-principais)
   - [Recursos de Interatividade](#recursos-de-interatividade)
   - [Navegação](#navegação)
- [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
   - [Estilização e Componentes](#estilização-e-componentes)
   - [Roteamento](#roteamento)
   - [Hooks e Contextos](#hooks-e-contextos)
   - [Consumo de API](#consumo-de-api)
   - [Responsividade](#responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#camera-demonstração-visual)

<h1 align="center" id="descricao">Organo TS</h1>
<p align="center">O Organo TS é uma versão em TypeScript da aplicação <a href="https://github.com/GabrielVeroneze/organo">Organo</a> original em JavaScript, mantendo todas as funcionalidades do Organo e enriquecendo o projeto com melhorias proporcionadas pelo TypeScript, que garantem maior segurança de tipos e um desenvolvimento mais robusto e escalável.</p>

<p align="center">O Organo é um organograma interativo, proporcionando uma representação visual hierárquica da estrutura de colaboradores organizados por times categorizados em áreas de especialização.</p>

## :rocket: Funcionalidades e Recursos



- `Criação de Card do Colaborador`: Permite a criação de cards de colaboradores com informações como nome, cargo, imagem e time, tornando cada card visualmente identificável e personalizado.



<!-- Upload de Imagem: Oferece a opção de fazer upload da imagem do colaborador diretamente pelo formulário de criação de card.

Seleção de Equipe Específica: Disponibiliza uma lista de opções de equipes, incluindo programação, Front-end, Data Science, DevOps, UX e Design, Mobile e Inovação, e gestão.

Adição Automática ao Organograma: Após a criação do card do colaborador, o card é automaticamente adicionado ao organograma, no local correspondente à equipe escolhida. -->



- `Upload de imagem`: Possui a opção de fazer o upload da imagem do colaborador diretamente pelo formulário.

- `Seleção de time`: Oferece uma lista de opções de times, como programação, Front-end, Data Science, DevOps, UX e Design, Mobile e Inovação e gestão.

- `Adição do card ao organograma`: Após a criação do card do colaborador, ele é adicionado automaticamente ao organograma, no local correspondente ao seu time.




## :toolbox: Desenvolvimento e Implementação

## :computer: Ferramentas utilizadas

<img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> | <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
 ------------------------- | ---------------- | ----------------------
`children`                 | `Flexbox`        | `Node Package Manager`
`Componentes Controlados`  | `Media Queries`  | `create-react-app`
`Componentes Funcionais`   | `Pseudoclasses`  |
`Desestruturação de Props` | `Responsividade` |
`Eventos`                  | `Variáveis`      |
`Hooks`                    | `...`            |
`JSX`                      |                  |
`Props`                    |                  |
`Renderização Condicional` |                  |
`Renderização de Listas`   |                  |
`useState`                 |                  |
`...`                      |                  |

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/organo/archive/refs/heads/master.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/organo.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd C:\Users\SeuUsuario\projetos\meu-projeto
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
