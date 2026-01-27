# Portfolio Maria Helena

Site de portfólio moderno e responsivo para a artista plástica Maria Helena.

## 🎨 Características

- **Design Minimalista**: Layout limpo e elegante com foco nas obras de arte
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Galeria Interativa**: Grid responsivo com lightbox para visualização ampliada
- **Animações Suaves**: Efeitos de hover e animações ao rolar a página
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- **Performance**: Código leve e otimizado para carregamento rápido

## 📁 Estrutura do Projeto

```
Portfolio-MariaHelena/
├── index.html          # Página inicial
├── galeria.html        # Página da galeria
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── images/             # Pasta de imagens
│   ├── featured-1.jpg  # Obra em destaque 1
│   ├── featured-2.jpg  # Obra em destaque 2
│   └── obra-1.jpg até obra-8.jpg  # Obras da galeria
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Visualização Local

1. Abra o arquivo `index.html` diretamente no seu navegador
2. Ou use um servidor local (recomendado):

**Opção 1 - Python:**
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

**Opção 2 - Node.js (http-server):**
```bash
npx http-server -p 8000

# Acesse: http://localhost:8000
```

**Opção 3 - VS Code:**
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html` > "Open with Live Server"

### Publicação

O site pode ser hospedado gratuitamente em:

- **GitHub Pages**: Faça upload para um repositório GitHub e ative GitHub Pages
- **Netlify**: Arraste a pasta do projeto para netlify.com/drop
- **Vercel**: Conecte seu repositório Git ou faça upload direto
- **Neocities**: Upload manual dos arquivos

## 🎨 Personalização

### Substituir Imagens

1. Substitua as imagens na pasta `images/` mantendo os mesmos nomes
2. Ou adicione novas imagens e atualize os caminhos em `index.html` e `galeria.html`

**Formatos recomendados:**
- JPG para fotografias de obras
- PNG para imagens com transparência
- WebP para melhor compressão (navegadores modernos)

**Tamanhos recomendados:**
- Obras em destaque: 1200x1500px (proporção 4:5)
- Galeria: 900x1200px (proporção 3:4)

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css` (linhas 12-20):

```css
:root {
    --color-primary: #2c2c2c;      /* Cor principal (texto escuro) */
    --color-secondary: #6b6b6b;    /* Cor secundária (texto médio) */
    --color-accent: #a8a8a8;       /* Cor de destaque */
    --color-light: #f5f5f5;        /* Fundo claro */
    --color-white: #ffffff;        /* Branco */
}
```

### Modificar Textos

- **Nome da artista**: Edite em `index.html` e `galeria.html`
- **Descrições**: Atualize os textos nas seções correspondentes
- **Títulos das obras**: Modifique em `galeria.html` dentro de cada `.gallery-item-overlay`

### Adicionar Mais Obras à Galeria

Em `galeria.html`, copie e cole este bloco dentro de `.gallery-grid`:

```html
<div class="gallery-item fade-in-up" data-index="8">
    <img src="images/obra-9.jpg" alt="Obra de arte 9" class="gallery-image">
    <div class="gallery-item-overlay">
        <h3>Título da Obra</h3>
        <p>Técnica utilizada</p>
    </div>
</div>
```

**Importante**: Atualize o `data-index` sequencialmente (0, 1, 2, 3...).

## 🎯 Funcionalidades

### Navegação
- Menu fixo no topo que acompanha o scroll
- Links suaves entre páginas
- Indicador visual da página ativa

### Galeria
- Grid responsivo que se adapta ao tamanho da tela
- Efeito hover com zoom suave nas imagens
- Overlay com informações da obra

### Lightbox
- Clique em qualquer obra para visualizar em tamanho maior
- Navegação por setas (← →) ou botões
- Teclas do teclado:
  - `Esc`: Fechar lightbox
  - `→`: Próxima imagem
  - `←`: Imagem anterior
- Clique fora da imagem para fechar

### Animações
- Fade in ao carregar a página
- Elementos aparecem suavemente ao rolar
- Transições suaves em todos os elementos interativos

## 📱 Responsividade

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (> 768px): Grid de 3-4 colunas
- **Tablet** (481-768px): Grid de 2 colunas
- **Mobile** (≤ 480px): Grid de 1 coluna

## 🌐 Navegadores Suportados

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Opera (últimas 2 versões)

## 📝 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript ES6+**: Vanilla JS (sem frameworks)
- **Google Fonts**: Cormorant Garamond, Montserrat

## 🔧 Otimizações Implementadas

- CSS minificado e organizado
- Lazy loading de imagens (nativo)
- Preconnect para Google Fonts
- Intersection Observer para animações eficientes
- Preload de imagens da galeria

## 📄 Licença

Este projeto foi criado para Maria Helena. Todos os direitos das obras de arte pertencem à artista.

## 🤝 Suporte

Para dúvidas ou personalizações adicionais, entre em contato.

---

**Desenvolvido com ❤️ para Maria Helena**
