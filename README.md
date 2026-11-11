# SAFEJY

Protótipo de uma página de apresentação do projeto SAFEJY.

## Estrutura do Projeto

```text
Safejy/
├── assets/
│   ├── css/
│   │   └── styles.css          # Cores, temas e layout responsivo
│   ├── js/
│   │   └── script.js           # Tradução (PT/EN), alternador de tema e navegação
│   └── images/                 # Imagens, logos e favicon
│       ├── favicon.svg
│       ├── logo-safejy.png
│       ├── logo-safejy.jpg
│       ├── news-cnn.jpg
│       ├── news-fecap.jpg
│       └── news-ssp.jpg
├── dist/
│   └── SAFEJY.html             # Versão única e autônoma (tudo embutido)
├── docs/
│   └── LEIA-ME.txt             # Detalhes do protótipo, fontes e créditos
├── index.html                  # Página principal (estrutura e conteúdo em português)
├── README.md                   # Documentação do repositório
└── .gitignore                  # Arquivos ignorados pelo Git
```

## Como abrir o projeto

Abra `index.html` no seu navegador (Chrome, Edge, Safari ou Firefox). Não é necessário instalar nenhuma dependência.

Caso precise de uma versão em arquivo único autônomo (com estilos, scripts e imagens embutidos em base64), utilize o arquivo `dist/SAFEJY.html`.

## Onde editar

- `index.html`: estrutura e conteúdo em português.
- `assets/css/styles.css`: cores, temas e layout.
- `assets/js/script.js`: tradução em inglês, troca de tema e navegação interna.
- `assets/images/`: logos e fotos usadas pela página.
- `docs/LEIA-ME.txt`: detalhes do protótipo e créditos das imagens.

> **Atenção:** Para o trabalho em equipe, editem os arquivos em `index.html` e `assets/`. O arquivo `dist/SAFEJY.html` é um pacote consolidado e não se atualiza automaticamente.

## Colaboração

1. Crie uma branch para a alteração que pretende fazer.
2. Edite os arquivos e abra `index.html` para conferir o resultado.
3. Verifique o layout em tamanhos de tela diferentes, os temas claro/escuro, a troca PT/EN e os links.
4. Envie um pull request explicando a alteração para que outro integrante possa revisá-la.

## Escopo do protótipo

O mapa usa uma rota fictícia e ilustrativa. Não consulta GPS ou dados reais e não serve para navegação comercial. Consulte `docs/LEIA-ME.txt` para informações sobre as fontes e funcionamento.
