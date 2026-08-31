const projetos = [
  {
    id: "vertice",
    nome: "Vértice Sports",
    tipo: 'Full Stack',
    linguagens: ["ReactJs", "TailwindCSS", "MongoDB", "Node.Js"],
    descricao: "E-commerce Full Stack de artigos esportivos com catálogo dinâmico, carrinho e checkout, integrado a uma API REST própria e banco de dados MongoDB.",
    sobre:"A Vértice Sports é um e-commerce de artigos esportivos desenvolvido com o objetivo de construir uma aplicação completa, conectando interface, API e banco de dados.",
    desenvolvimento: "Desenvolvi tanto o frontend quanto o backend da aplicação, trabalhando desde a construção das interfaces até a modelagem e disponibilização dos dados. No frontend, implementei catálogo e filtros de produtos, páginas individuais, seleção de tamanhos, carrinho de compras persistente e um fluxo completo de checkout.No backend, desenvolvi uma API REST utilizando Node.js e Express, conectada ao MongoDB através do Mongoose. A integração com o frontend é realizada utilizando Axios e variáveis de ambiente para configuração da API.",
    desafio:"O principal desafio foi sair de uma aplicação exclusivamente frontend e entender como as diferentes camadas de uma aplicação se comunicam. Foi necessário estruturar os dados no MongoDB, criar uma API capaz de disponibilizá-los, realizar requisições no frontend e transformar as respostas da API em elementos da interface. Outro desafio importante foi a lógica do carrinho, principalmente no controle de quantidade, seleção de variações dos produtos, persistência dos itens no navegador e atualização dos valores durante o fluxo de compra.",
    aprendizado:"A Vértice Sports marcou meu primeiro contato prático com o desenvolvimento de um backend próprio e me ajudou a compreender melhor o funcionamento de uma aplicação Full Stack. Durante o projeto, aprofundei meus conhecimentos em criação de APIs REST com Express, modelagem de dados com Mongoose, MongoDB, requisições HTTP com Axios, variáveis de ambiente, gerenciamento de estado no React, rotas dinâmicas e persistência de dados com LocalStorage.",
    funcionalidades: ["Catálogo dinâmico", "Filtros por categoria", "Página individual de produto", "Carrinho com LocalStorage", "Cálculo de subtotal, frete e total", "Checkout com opções de pagamento",],
    github: "https://github.com/SophiAoAmaral/Vertice",
    img: [
  `${import.meta.env.BASE_URL}vertice-1.jpeg`,
  `${import.meta.env.BASE_URL}vertice-2.jpeg`,
  `${import.meta.env.BASE_URL}vertice-3.jpeg`,
  `${import.meta.env.BASE_URL}vertice-4.jpeg`,
  `${import.meta.env.BASE_URL}vertice-5.jpeg`,
],
    projeto:'https://sophiaoamaral.github.io/Vertice/'
    
  },
  {
    id: "aurora",
    nome: "Café Aurora",
    tipo: 'Front End',
    linguagens: ["ReactJs", "Tailwind CSS", "React Router"],
    descricao:"Aplicação responsiva para uma cafeteria fictícia. Com cardápio interativo, filtros dinâmicos, menu responsivo e sistema de reserva de mesas, explorando componentização, gerenciamento de estado e criação de interfaces adaptáveis a diferentes dispositivos.",
    sobre:"O Café Aurora é uma aplicação desenvolvida para criar uma experiência moderna e intuitiva para uma cafeteria, combinando apresentação do estabelecimento, cardápio e reserva de mesas.",
    desenvolvimento:"Desenvolvi a aplicação com React e Tailwind CSS, criando componentes reutilizáveis, navegação SPA, menu responsivo, carrossel, cardápio com filtros e um formulário interativo para reservas.",
    desafio:"O principal desafio foi trabalhar diferentes comportamentos dinâmicos na mesma aplicação, controlando filtros, menu mobile, formulário, carrossel e modal de confirmação através dos estados do React.",
    aprendizado:"O projeto aprofundou meus conhecimentos em componentização, useState, useEffect, React Router, gerenciamento de estado, renderização dinâmica e desenvolvimento responsivo com Mobile First.",
    funcionalidades: ["Header e menu responsivos", "Carrossel animado", "Cardápio com filtros dinâmicos", "Galeria do ambiente", "Reserva de mesas", "Seleção de data e horário" , "Formulário interativo", "Modal de confirmação",],
    github: "https://github.com/SophiAoAmaral/aurora-cafe",
    img: [
    `${import.meta.env.BASE_URL}aurora-1.jpeg`,
    `${import.meta.env.BASE_URL}aurora-2.jpeg`,
    `${import.meta.env.BASE_URL}aurora-3.jpeg`,
    `${import.meta.env.BASE_URL}aurora-4.jpeg`,
  ],
    projeto:'https://sophiaoamaral.github.io/aurora-cafe/'
  },
  {
    id: "mira",
    nome: "Mira Arquitetura",
    tipo: 'Front End',
    linguagens: ["HTML5", "CSS3", "JavaScript"],
    descricao:"Landing page para um estúdio de arquitetura, desenvolvida com foco em design minimalista. Conta com animações durante o scroll, formulário de contato com validação e diferentes seções para apresentar os serviços e a identidade do estúdio.",
    sobre:"A Mira Arquitetura é uma landing page desenvolvida para representar um estúdio de arquitetura residencial, combinando uma identidade visual sofisticada com uma navegação simples e intuitiva.",
    desenvolvimento:"Desenvolvi a aplicação utilizando HTML, CSS e JavaScript puro, criando a estrutura da página, galeria de projetos, animações durante o scroll, carrossel, navegação por seções e formulário com validação.",
    desafio:"O principal desafio foi criar interações e comportamentos dinâmicos sem frameworks, trabalhando diretamente com JavaScript e manipulação do DOM para animações, validações e elementos interativos.",
    aprendizado:"O projeto fortaleceu meus fundamentos em JavaScript, manipulação do DOM, Intersection Observer, validação de formulários, CSS Grid, Flexbox e construção de interfaces responsivas.",
    funcionalidades: ["Animações durante o scroll", "Galeria de projetos", "Carrossel de premiações", "Formulário com validação", "Navegação suave entre seções", "Layout responsivo",],
    github: "https://github.com/SophiAoAmaral/mira-arquitetura",
     img: [
    `${import.meta.env.BASE_URL}mira-1.jpeg`,
    `${import.meta.env.BASE_URL}mira-2.jpeg`,
    `${import.meta.env.BASE_URL}mira-3.jpeg`,
    `${import.meta.env.BASE_URL}mira-4.jpeg`,

  ],
    projeto: 'https://sophiaoamaral.github.io/mira-arquitetura/'
  },

  {
    id: "plump",
    nome: "Plump",
    tipo: 'Front End',
    linguagens: ["ReactJs", "Tailwind CSS", "JavaScript", "React Router", "Vite"],
    descricao:"Landing page para apresentação de um produto de skincare, com interface moderna, responsiva e focada na experiência do usuário.",
    sobre:"Plump é uma aplicação desenvolvida para apresentar um sérum facial, destacando seus ingredientes, benefícios e diferenciais através de uma experiência visual moderna e intuitiva.",
    desenvolvimento:"Desenvolvi a interface com React e Tailwind CSS, criando componentes reutilizáveis, navegação entre páginas, formulário interativo e um layout responsivo seguindo a abordagem Mobile First.",
    desafio:"O principal desafio foi construir uma experiência visual consistente em diferentes dispositivos, organizando os componentes e adaptando o conteúdo sem perder a identidade do projeto.",
    aprendizado:"O projeto aprofundou meus conhecimentos em componentização, React Router, gerenciamento de estado, formulários, responsividade e desenvolvimento de interfaces com Tailwind CSS.",
    funcionalidades: ["Navegação SPA", "Formulário com validação", "Apresentação de ingredientes", "Seção de benefícios", "Componentes reutilizáveis", "Layout responsivo", "Animações e transições",],
    github:'https://github.com/SophiAoAmaral/plump',
    img: [
    `${import.meta.env.BASE_URL}plump-1.jpeg`,
    `${import.meta.env.BASE_URL}plump-2.jpeg`,
    `${import.meta.env.BASE_URL}plump-3.jpeg`,
    `${import.meta.env.BASE_URL}plump-4.jpeg`,
  ],
    projeto:'sophiaoamaral.github.io/plump/'
  },

  {
  id: 'nagomi',
  nome: 'Nagomi 和み',
  tipo: 'Front End',
  linguagens: ['ReactJs', 'JavaScript', 'HTML5', 'CSS3'],
  descricao:'Aplicação web para um restaurante japonês, desenvolvida com foco em uma experiência visual elegante, responsiva e inspirada na cultura japonesa.',
  sobre:'O Nagomi é uma aplicação inspirada na gastronomia japonesa, criada para representar digitalmente a identidade de um restaurante através de uma interface moderna e agradável.',
  desenvolvimento:'Desenvolvi a interface com React, utilizando componentes reutilizáveis, organização modular e CSS para criar animações, transições e um layout adaptado a diferentes dispositivos.',
  desafio:'O principal desafio foi manter a identidade visual consistente em toda a aplicação, equilibrando responsividade, animações e reutilização de componentes.',
  aprendizado:'O projeto fortaleceu meus conhecimentos em React, componentização, reutilização de código, organização de componentes, responsividade e criação de interfaces interativas.',
  funcionalidades: ['Interface responsiva', 'Componentes reutilizáveis', 'Animações e transições','Navegação entre seções','Apresentação do cardápio', 'Layout adaptado para diferentes dispositivos'],
  github: 'https://github.com/SophiAoAmaral/Nagomi',
  projeto:'https://sophiaoamaral.github.io/Nagomi/',
  img: [
    `${import.meta.env.BASE_URL}nagomi-1.jpeg`,
    `${import.meta.env.BASE_URL}nagomi-2.jpeg`,
    `${import.meta.env.BASE_URL}nagomi-3.jpeg`,
    `${import.meta.env.BASE_URL}nagomi-4.jpeg`,
  ],
},
{
  id: 'filmes',
  nome: 'Buscar Filmes',
  tipo: 'Front End',
  linguagens: ['ReactJs', 'Tailwind CSS', 'JavaScript', 'API'],
  descricao: 'Aplicação web para busca e descoberta de filmes, desenvolvida com React e Tailwind CSS a partir do consumo de uma API externa.',
  sobre: 'O Buscar Filmes é uma aplicação criada para explorar dados de filmes de forma dinâmica, permitindo trabalhar com informações vindas de uma API e transformá-las em uma interface visual e organizada.',
  desenvolvimento: 'Desenvolvi a interface com React e Tailwind CSS, realizando o consumo de uma API de filmes e utilizando os dados retornados para montar os conteúdos da aplicação de forma dinâmica.',
  desafio: 'O principal desafio foi trabalhar com dados externos e entender melhor o fluxo entre requisição, resposta da API e renderização das informações na interface.',
  aprendizado: 'O projeto fortaleceu meus conhecimentos em consumo de APIs, renderização dinâmica, gerenciamento de estado, componentização e desenvolvimento de interfaces com React.',
  funcionalidades: ['Consumo de API de filmes', 'Exibição dinâmica de conteúdos', 'Interface responsiva', 'Componentização com React', 'Organização visual com Tailwind CSS'],
  github: 'https://github.com/SophiAoAmaral/Buscar-Filmes',
   img: [
    `${import.meta.env.BASE_URL}filmes-1.jpeg`,
    `${import.meta.env.BASE_URL}filmes-2.jpeg`,
    `${import.meta.env.BASE_URL}filmes-3.jpeg`,
  ],
  projeto: 'https://sophiaoamaral.github.io/Buscar-Filmes/'
}
];

export default projetos