# Especificações do Projeto

Os investidores enfrentam desafios significativos devido à sobrecarga informacional e à complexidade das notícias financeiras. Eles lutam para filtrar informações relevantes e compreendê-las rapidamente, o que pode levar a decisões apressadas e mal fundamentadas. Essa dificuldade é sentida tanto por investidores iniciantes, que precisam de orientação e clareza, quanto por profissionais experientes, que necessitam de dados detalhados e organizados.
# Perspectiva do Usuário:
O FinanceHub oferecerá uma plataforma centralizada que organiza e apresenta informações financeiras de forma clara e acessível. A solução permitirá que os usuários filtram notícias relevantes, compreendam conceitos com facilidade e tomem decisões informadas de maneira mais eficiente.

## Personas

 - Iniciante: Busca aprender sobre investimentos e precisa de informações educacionais e simples.
 - Investidor Experiente: Deseja análises detalhadas e atualizações rápidas para tomar decisões estratégicas.
 - Profissional de Finanças: Requer dados precisos e ferramentas para análise aprofundada.
 - Profissional de Empresas Financeiras: Necessita de integrações e relatórios para otimizar operações e aconselhamentos.
 - Estudante de Finanças: Utiliza a plataforma para aprendizado e pesquisa.


## Histórias de Usuários

|  COMO                    |     QUERO/PRECISO                                  |     PARA                                               |
|--------------------------|--------------------------------------------------- |------------------------------------------------------- |
|Investidor Iniciante      | Receber notícias e análises simples de rendimentos | Investir pelas primeira vez em renda fixa e variável   |
|Profissional de Finanças  | Relatórios detalhados e atualizações em tempo real | Enviar os próprios reports para os clientes da carteira|
|Investidor Experiente     | Análises contábeis, balancetes e relatórios        | Analisar resultados para escolher novos investimentos  |
|Profissional de empresas  | Relatórios detalhados e atualizações em tempo real | Tomar decisões de investimentos da sua carteira        |
|Estudante                 | Receber notícias e estudos                         | Utilizar o material como fonte de pesquisa             |

 - Investidor Individual:
"Como um investidor que segue várias fontes de notícias financeiras, quero consolidar todas as informações em um único lugar, para que eu possa acompanhar as atualizações mais recentes sem ter que visitar diversos sites."
   
Critérios de Aceitação:

> O FinanceHub reune e apresenta notícias financeiras de diferentes fontes confiáveis em um feed único e atualizado.

> O usuário pode ser capaz de personalizar suas fontes e tópicos de interesse para filtrar as notícias que mais lhe interessam.

 - Gestor de Fundos:
"Como um gestor de fundos, preciso gerar relatórios detalhados sobre as tendências do mercado e o desempenho dos investimentos, para que eu possa apresentar análises precisas e recomendação de estratégias para os meus clientes."

Critérios de Aceitação:
> A plataforma oferece ferramentas para criar e personalizar relatórios financeiros com gráficos, tabelas e análises detalhadas.

> O sistema permite a exportação dos relatórios em diversos formatos, como PDF e Excel.

> O usuário pode agendar a geração automática de relatórios periódicos e receber notificações sobre novos dados e análises.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O sistema permitirá cadastro de novos usuários, com nome, senha e e-mail | ALTA | 
|RF-002| Efetuar a troca de senha do usuário| MÉDIA |
|RF-003| Cadastro de notícias, Análises financeiras, Relatórios e Balancetes | ALTA|
|RF-004| Cadastro de Tipos de Usuários| MÉDIA|
|RF-005| List de notícias, análises financeiras, relatórios e Balancetes com filtro do usuário| MÉDIA|
|RF-006| Asset de notícias, análises financeiras, relatórios e balancetes| MÉDIA

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RN-001| Aplicação responsiva para rodar em celulares, tablets, e desktops| ALTA | 
|RN-002| O sistema dever ser utilizando utilizando HTML, CSS e JavaScript |  MÉDIA |
|RN-003| Ao utlizar a aplicação os dados devem ser salvos em localStorage | BAIXA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O Projeto não pode ser usado com nenhuma biblioteca, como React, Vue.js ou Angular|
