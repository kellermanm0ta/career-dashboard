# 📊 Resume Dashboard

> Um dashboard interativo e orientado a dados para visualizar minha trajetória profissional, acadêmica e stack tecnológica.

![Dashboard Preview](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20D3.js-blue)

Este projeto foi criado com o objetivo de apresentar as informações do meu currículo de uma maneira mais visual, interativa e analítica, fugindo do formato tradicional estático. Utilizando **D3.js**, os dados de experiência e proficiência técnica ganham vida através de gráficos customizados.

## ✨ Funcionalidades

O dashboard é composto pelos seguintes painéis:

- **Indicadores Principais (KPIs):** Cartões de acesso rápido exibindo dados consolidados, como total de anos de experiência e quantidade de tecnologias principais.
- **Linha do Tempo (Gantt Chart):** Um gráfico temporal interativo que mapeia os períodos de atuação em cada empresa e os períodos de formação acadêmica.
- **Expertise em Tecnologias (Bar Chart):** Gráfico de barras horizontais detalhando as tecnologias nas quais possuo vivência. As barras são ordenadas por anos de exposição e categorizadas por níveis de proficiência (Expert, Advanced, Intermediate e Basic) usando uma escala de cores intuitiva.
- **Principais Cursos Complementares:** Uma tabela sumarizando treinamentos e especializações recentes de curta duração.
- **Tooltips Interativos:** Todos os gráficos contam com interações no *hover* (passar o mouse) para detalhamento dos dados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído puramente focado nos fundamentos da web e visualização de dados, sem o peso de frameworks complexos:

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização responsiva construída do zero, com aplicação de variáveis (Design Tokens), *Dark Mode* e *Glassmorphism*.
- **JavaScript (ES6+):** Lógica de estruturação de dados e manipulação do DOM.
- **[D3.js (Data-Driven Documents) v7](https://d3js.org/):** Biblioteca JavaScript essencial para a renderização dinâmica e escalável de gráficos SVG baseados em dados.

## 🚀 Como executar o projeto localmente

Como o projeto é construído apenas com arquivos estáticos, não é necessário um processo complexo de build ou instalação de dependências node.

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/resume-dashboard.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd resume-dashboard
   ```
3. Para visualizar, você pode usar uma extensão como o *Live Server* do VSCode ou simplesmente iniciar um servidor HTTP simples via Python:
   ```bash
   python3 -m http.server 8000
   ```
4. Acesse no seu navegador: `http://localhost:8000`

> **Nota:** Não é recomendado abrir o arquivo `index.html` dando apenas dois cliques no arquivo local, pois algumas políticas de segurança dos navegadores modernas (CORS) podem bloquear a execução adequada de scripts locais de fontes externas ou manipulação de DOM pelo D3.

## 📁 Estrutura de Arquivos

```text
/
├── index.html   # Estrutura principal e layout da página
├── style.css    # Regras de estilo, design system e animações
├── data.js      # Base de dados (JSON estruturado)
├── script.js    # Lógica do D3.js para desenhar os gráficos e tooltips
└── README.md    # Documentação do projeto
```

## 📬 Contato

**Kellerman Mota**  
Senior Software Engineer

- [LinkedIn](https://www.linkedin.com/in/kellerman-paulo-da-mota)
- [GitHub](https://github.com/kellerman-mota)
