# SAFEJY

Protótipo da landing page de apresentação do projeto **SAFEJY — Cada segundo conta.**

## Estrutura do Projeto

```text
Safejy/
├── assets/
│   ├── css/
│   │   └── styles.css          # Identidade visual, temas claro/escuro, responsividade e impressão
│   ├── js/
│   │   └── script.js           # Tradução (PT/EN), alternador de tema, filtros e mapa interativo
│   └── images/                 # Logotipos, favicons e fotos de fundo otimizadas (WebP + JPEG)
│       ├── apple-touch-icon.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon.svg         # Ícone vetorial puro
│       ├── logo-lockup.png / .webp
│       ├── logo-lockup-dark.png / .webp
│       ├── sp-paulista-dawn.jpg / .webp (+ versões -mobile)
│       ├── sp-skyline-aerial.jpg / .webp (+ versões -mobile)
│       ├── sp-night-corridor.jpg / .webp (+ versões -mobile)
│       ├── sp-avenue-overcast.jpg / .webp (+ versões -mobile)
│       └── sp-arbor-avenue.jpg / .webp (+ versões -mobile)
├── dist/
│   └── SAFEJY.html             # Versão única 100% offline (CSS, JS e imagens embutidos)
├── docs/
│   ├── LEIA-ME.txt             # Detalhes do protótipo, fontes e funcionamento
│   ├── PROMPT-MANUAL-DA-MARCA.md
│   └── README-QA.md            # Relatório da auditoria de QA
├── manual-da-marca/
│   ├── index.html              # Manual da Marca v2.0 (alinhado ao site atual)
│   ├── manual.css
│   └── SAFEJY-Manual-da-Marca.pdf
├── favicon.ico
├── index.html                  # Página principal (conteúdo base em português)
├── intro.html                  # Redirecionamento para index.html
├── README.md                   # Documentação do repositório
└── .gitignore                  # Arquivos ignorados pelo Git
```

## Como abrir o projeto

Abra `index.html` diretamente no navegador (Chrome, Edge, Safari ou Firefox). Não é necessário instalar nenhuma dependência.

Caso precise de uma versão em arquivo único **100% offline** (sem requisições a fontes ou CDNs externos, com estilos, scripts e imagens embutidos), utilize `dist/SAFEJY.html`.

## Onde editar

- `index.html`: estrutura semântica e conteúdo em português (Hero, O problema, A plataforma, Notícias reais e Nossa visão).
- `assets/css/styles.css`: tokens de cor, temas claro/escuro, responsividade, movimento reduzido e regras de impressão (`@media print`).
- `assets/js/script.js`: tradução completa PT/EN (incluindo textos e atributos de acessibilidade), tema claro/escuro com detecção de `prefers-color-scheme`, filtros de notícias, mapa interativo e navegação acessível por teclado.
- `assets/images/`: logotipos (claro/escuro), favicon vetorial e fotografias de fundo em WebP e JPEG responsivo.
- `manual-da-marca/`: diretrizes de identidade visual v2.0.
- `docs/LEIA-ME.txt`: resumo de uso, escopo e fontes editoriais.

> **Atenção:** Para o trabalho em equipe, editem `index.html` e os arquivos em `assets/`. O pacote `dist/SAFEJY.html` é uma compilação autônoma e deve ser regerado após alterações.

## Escopo do protótipo

O mapa na seção **A plataforma** apresenta camadas e marcadores fictícios com finalidade ilustrativa. Não consulta GPS nem dados em tempo real e não substitui canais de emergência ou órgãos de segurança pública. Consulte `docs/LEIA-ME.txt` para detalhes das fontes verificadas.
