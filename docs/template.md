## Template Padrão do Site GreenCycle
### Layout Padrão do Site
O layout padrão do site será utilizado em todas as páginas e incluirá os seguintes elementos:

### Estrutura Geral
Cabeçalho (Header): Contém o logo da GreenCycle e a barra de navegação com links para as principais seções do site.
Conteúdo Principal (Main): Área dedicada ao conteúdo específico de cada página, como informações sobre descarte, regulamentações, e recursos educacionais.
Rodapé (Footer): Informações de copyright, links adicionais e contato.
Logo
O logo será posicionado no canto superior esquerdo do cabeçalho, garantindo que esteja sempre visível e acessível. O tamanho do logo será de aproximadamente 50px de altura, mantendo a proporção.

### Menus Padrões
Menu de Navegação: Links para as páginas "Home", "Regulamentação", "Educacional", "Sobre Nós" e um dropdown para opções de acessibilidade e linguagem.
Barra de Busca: Localizada à direita na barra de navegação, permite que os usuários procurem informações no site.
Cores

### A paleta de cores utilizada no site GreenCycle será a seguinte:

Verde (#28a745): Usado para botões e elementos de destaque.
Cinza Claro (#e2e6ea): Fundo da navbar e do rodapé.
Cinza Escuro (#343a40): Cor do texto principal.
Branco (#ffffff): Fundo principal do conteúdo, garantindo boa legibilidade.
Paleta de Cores
| Nome        | Cor Hex  |
|-------------|----------|
| Verde      | #28a745  |
| Cinza Claro | #e2e6ea  |
| Cinza Escuro| #343a40  |
| Branco      | #ffffff  |

Tipografia
As fontes utilizadas no site serão escolhidas para garantir legibilidade e uma estética moderna.

Título de Página: Fonte Montserrat, tamanho 36px, peso bold.
Título de Seção: Fonte Montserrat, tamanho 24px, peso semi-bold.
Rótulos de Componentes: Fonte Arial, tamanho 14px, peso regular.
Corpo de Texto: Fonte Arial, tamanho 16px, peso regular.

Tipografia
| Elemento          | Fonte        | Tamanho | Peso       |
|-------------------|--------------|---------|------------|
| Título de Página   | Montserrat   | 36px    | Bold       |
| Título de Seção    | Montserrat   | 24px    | Semi-Bold  |
| Rótulos            | Arial        | 14px    | Regular    |
| Corpo de Texto     | Arial        | 16px    | Regular    |

Iconografia
Os ícones utilizados no site serão escolhidos para facilitar a navegação e melhorar a usabilidade. Exemplos incluem:

Ícone de Busca: Para o campo de busca, facilitando a localização de informações.
Ícone de Acessibilidade: Para o dropdown de opções de acessibilidade.
Ícones de Redes Sociais: Para links de contato no rodapé.

Funções dos Ícones

| Ícone               | Função                        |
|---------------------|-------------------------------|
| Ícone de Busca      | Facilitar a pesquisa no site  |
| Ícone de Acessibilidade | Acesso às opções de acessibilidade |
| Ícones de Redes Sociais | Links para redes sociais   |


Estilos CSS
Os estilos CSS definidos para cada um dos elementos são os seguintes:

/* Estilos do Cabeçalho */
header {
    background-color: #e2e6ea; /* Cor de fundo da navbar */
    padding: 10px 0;
}

.logo-image {
    width: 50px; /* Tamanho do logo */
    height: auto;
}

.nav-list a {
    color: #343a40; /* Cor do texto */
}

/* Estilos do Botão */
.btn-procurar {
    background-color: #28a745; /* Cor do botão */
    color: white;
}

/* Estilos do Rodapé */
.footer {
    background-color: #e2e6ea; /* Cor de fundo do rodapé */
}

/* Estilos do Corpo de Texto */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}