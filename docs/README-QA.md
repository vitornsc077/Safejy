# Resumo da Auditoria de QA — SAFEJY

Este documento resume, em linguagem simples, o que foi encontrado na revisão de qualidade e compatibilidade do site.

## O que está acontecendo hoje?

O site atual foi montado misturando **duas versões diferentes de estilo** dentro do mesmo arquivo ([styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css)): cerca de **74% do CSS (4.051 linhas)** é código antigo que não foi apagado e hoje **briga com o layout novo**.

Além disso, o projeto usa recursos modernos demais sem "plano B" para aparelhos/navegadores mais antigos e carrega **~5 MB só em fotos de fundo**, o que compromete o objetivo de extrema compatibilidade.

---

## Os 6 problemas urgentes (o que quebra de verdade hoje)

| Problema | O que acontece na prática | Onde está |
| :--- | :--- | :--- |
| **1. Pontos do mapa "fogem" do clique** | Ao passar o mouse ou focar nos marcadores da seção **A plataforma**, eles pulam para o canto superior esquerdo `(0, 0)` e ficam piscando sem parar (`transform` do CSS apaga o posicionamento do SVG). | [index.html](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/index.html#L406-L423) e [styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css#L4888) |
| **2. Menu some em tablets (`761px` a `1100px`)** | Por conflito com o CSS antigo, os links do topo desaparecem e o botão de menu (hambúrguer) ainda não aparece nessa faixa de largura. A pessoa fica sem menu. | [styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css#L3088) e [L5123](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css#L5123) |
| **3. No celular, 2 de 3 pontos do mapa somem** | O recorte do mapa (`preserveAspectRatio="slice"` em altura fixa) joga o ponto vermelho e o verde para fora da tela. Quem clica em **Alertas** não encontra o marcador vermelho (e a caixa de texto ainda cobre o canto). | [index.html](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/index.html#L368-L435) |
| **4. Navegadores antigos / sem JS veem 90% em branco** | O operador `??` (recurso de JavaScript de 2020) trava navegadores antigos logo ao ler o arquivo, e quase todas as seções começam invisíveis (`opacity: 0`) sem plano B (`<noscript>`). | [script.js](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/js/script.js#L219) e [styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css#L5080-L5086) |
| **5. Rede lenta ou bloqueio de CDN trava tudo** | O [script.js](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/js/script.js) fica na fila esperando 3 bibliotecas externas (`cdn.jsdelivr.net`, usadas só para efeito visual de rolagem) baixarem. Se a rede bloquear ou demorar, nada funciona e a página fica em branco. | [index.html](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/index.html#L41-L44) |
| **6. "Reduzir movimento" apaga as rotas** | Para quem ativa acessibilidade de menos animações no Windows/Mac/celular (`prefers-reduced-motion`), a animação de desenho para e as linhas das rotas nos dois mapas ficam invisíveis. | [styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css#L3334-L3345) |

---

## Resumo dos outros pontos importantes

### 1. Compatibilidade com aparelhos e navegadores mais antigos
- O CSS usa recursos recentes sem alternativa para versões antigas (ex.: 63 usos de `color-mix()`, 17 de `inset:`, além de `margin-inline`, `overflow-x: clip` e alinhamentos `start/end` no Flexbox).
- **Na prática (ex.: iPhone/Safari ≤ 16.1 ou Chrome antigo):** o cabeçalho fica transparente, a névoa que ajuda a ler o texto sobre as fotos some, e um **"S" gigante sólido** aparece atrás do texto na seção final.
- No JavaScript, `behavior: 'instant'` (rolagem imediata quando há redução de movimento) gera erro `TypeError` em navegadores pré-2022 e quebra cliques em links do menu.

### 2. Modo escuro, contraste e leitura no celular
- **Contraste ilegível no modo escuro:** caixas que ficaram com fundo branco fixo (`.dash`, `.panel-left`, `.map-tooltip`) recebem letras claras de tema escuro (`#92E956` e `#C0BCFF`), caindo para **1,5:1** de contraste (o mínimo recomendado é 4,5:1). O modo escuro do sistema (`prefers-color-scheme: dark`) também é ignorado na primeira visita.
- **Letras muito pequenas:** vários textos usam tamanho fixo em `px` (`9px` a `11px`), ignorando quando o usuário aumenta a fonte padrão do navegador.
- **Botões espremidos no celular:** os 3 filtros do mapa (`.switch-list`) ficam lado a lado em 3 colunas minúsculas abaixo de 760px, quebrando palavras e apertando o toque.

### 3. Acessibilidade e tradução (Português / Inglês)
- **Botão "Pular para o conteúdo" quebrado:** ele aponta para `#inicio` (o próprio cabeçalho), em vez de ir para o conteúdo principal (`<main>`).
- **Leitor de tela fala sozinho ao abrir:** o script altera a caixa do mapa (`aria-live="polite"`) logo no carregamento, fazendo leitores de tela interromperem o título para anunciar o mapa.
- **Idioma incompleto:** a opção aparece escrita `"Inglês"` em vez de `"English"`, e mais de 25 descrições para leitores de tela (`aria-label` e `title`, como nos botões das notícias e marcadores) ficam em português mesmo com o site em inglês.
- **Teclado e ARIA:** o menu mobile não fecha com a tecla `Esc`; o menu de idiomas mistura `aria-pressed` dentro de `role="menuitemradio"` e não navega por setas; há um `<aside>` decorativo no Hero que cria uma seção falsa para leitores de tela.

### 4. Peso da página, velocidade e bateria
- **5,16 MB de carga local (4,88 MB só em 5 fotos de fundo):** não há versões leves em WebP, nem tamanhos menores para celular (`srcset`), nem `width`/`height` nas imagens (o que evita "pulos" na tela ao carregar).
- **3,48 MB de sobras na pasta `assets/images/`:** arquivos como `hero-sp.png` (2,42 MB) e `news-*.jpg` não são mais usados pelo `index.html`.
- **Consumo de bateria à toa:** um `<canvas>` animado fica rodando em loop atrás das seções cheias (quase invisível), somado a uma camada de granulação animada (`feTurbulence`) pesada para celulares simples.
- **Versão única (`dist/SAFEJY.html`) tem 7,14 MB e não é 100% offline:** apesar do `LEIA-ME.txt` dizer que funciona sem internet, o arquivo ainda puxa fontes do Google e scripts do `cdn.jsdelivr.net`.

### 5. Acabamento visual, marca e documentação
- **3 barras de progresso brigando na tela:** há uma barra roxa no topo, outra verde abaixo do menu e uma bolinha com porcentagem fixa no canto inferior direito (que no celular cobre parte do rodapé, além do rodapé ficar cortado a 1280px em monitores largos).
- **Ícone do Google Tradutor:** o botão de idioma usa a marca registrada do Google ([translate-icon.svg](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/images/translate-icon.svg)), o que gera risco de marca e confunde o usuário.
- **Compartilhamento e impressão:** `og:image` usa caminho relativo (não mostra miniatura no WhatsApp/LinkedIn), o `favicon.svg` tem um PNG de 52 KB embutido, e não há regras de impressão (`@media print`) — gerar PDF sai com seções em branco.
- **Desalinhamento com o Manual da Marca:** o manual pede paleta verde + fontes sem serifa para leitura na rua, mas o site está roxo com fonte serifada; além disso, [README.md](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/README.md) e [LEIA-ME.txt](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/docs/LEIA-ME.txt) descrevem uma versão antiga do site, e as tabelas de [manual-da-marca/index.html](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/manual-da-marca/index.html) estouram no celular.

---

## Por onde começar? (Ordem recomendada)

1. **Limpar o CSS:** remover as ~4.051 linhas antigas de [styles.css](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/css/styles.css) e unificar os breakpoints do menu (resolve tablets e rodapé).
2. **Consertar o mapa interativo:** isolar o `scale` do hover em um grupo interno do SVG, ajustar o mapa para caber inteiro no celular (`meet` em vez de `slice`) e tirar a caixa de texto de cima dos pontos.
3. **Blindar a compatibilidade:** tirar o [script.js](file:///c:/Users/kelly/OneDrive/%C3%81rea%20de%20Trabalho/Programa%C3%A7%C3%A3o/Safejy/assets/js/script.js) da fila dos CDNs, remover `??` e `behavior: 'instant'`, adicionar planos B para `color-mix()`/`inset`, incluir `<noscript>` e garantir que as rotas apareçam com redução de movimento.
4. **Corrigir contraste e acessibilidade:** ajustar caixas claras no tema escuro, consertar o skip link, fechar menus com `Esc`, escrever `"English"` e traduzir todos os `aria-label`.
5. **Enxugar peso e alinhar tudo:** comprimir as imagens (WebP + JPEG leve), remover animações inúteis e arquivos órfãos, trocar o ícone de idioma, corrigir `og:image`, gerar um `dist/SAFEJY.html` realmente offline e atualizar documentação e Manual da Marca.
