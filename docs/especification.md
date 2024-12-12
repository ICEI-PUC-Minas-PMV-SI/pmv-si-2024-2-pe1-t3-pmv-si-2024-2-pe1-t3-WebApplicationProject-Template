# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. O projeto é composto pela definição do Diagrama de Personas, Histórias de Usuários, Requisitos Funcionais e Não Funcionais, além das Restrições do Projeto. Esta seção detalha como o sistema será projetado para atender às necessidades dos usuários e os parâmetros técnicos a serem respeitados.

##Diagrama de Persona

###João: Pequeno empresário
João é um empresário de 45 anos que administra uma empresa de manutenção de eletrônicos. Com o aumento do volume de dispositivos danificados, ele precisa de soluções práticas para o descarte correto de componentes e materiais não convencionais, como baterias e resíduos eletrônicos.

Objetivos: Garantir que sua empresa descarte materiais de forma responsável, conforme regulamentações ambientais.
Desafios: Encontra dificuldades para acessar informações sobre pontos de coleta específicos e formas de descarte seguro.
Necessidades: Precisa de uma plataforma simples que conecte sua empresa a pontos de descarte especializados e forneça orientações claras sobre regulamentações.

###Maria: Responsável por um Centro de Coleta
Maria tem 50 anos e é gerente de um centro de coleta especializado em reciclagem de eletrônicos. Seu objetivo é melhorar o acesso ao centro para empresas e indivíduos que precisam descartar materiais perigosos e não convencionais.

Objetivos: Aumentar a visibilidade de seu centro de coleta e simplificar o processo de agendamento de coletas e recebimento de materiais.
Desafios: Gerenciar a logística de recebimento de grandes volumes de materiais, além de manter uma comunicação eficiente com os doadores.
Necessidades: Precisa de uma plataforma que integre os pontos de coleta e ofereça um canal de comunicação fácil e rápido com os usuários.
Carlos: Consumidor Consciente
Carlos é um cidadão de 30 anos preocupado com o impacto ambiental de seus resíduos. Ele tem acumulado dispositivos eletrônicos antigos em casa e quer descartá-los corretamente, mas não sabe onde e como realizar o descarte.

Objetivos: Encontrar locais para descartar eletrônicos de maneira ambientalmente responsável.
Desafios: Falta de informação clara e acessível sobre pontos de coleta e processos de descarte seguro.
Necessidades: Uma plataforma que ofereça orientação simplificada, localize pontos de coleta próximos e ofereça instruções para o descarte correto de materiais não convencionais.

##Histórias de Usuários

Com base nas personas identificadas, foram elaboradas as seguintes histórias de usuários:

### Histórias de Usuários

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                 |
|----------------------|------------------------------------|----------------------------------------|
| João                 | Localizar pontos de coleta especializados | Descartar corretamente os resíduos da minha empresa |
| Maria                | Receber notificações sobre agendamentos de coleta | Organizar e gerenciar o fluxo de materiais no centro de coleta |
| Carlos               | Saber quais materiais posso descartar e onde | Evitar poluir o meio ambiente com resíduos eletrônicos |
| João                 | Receber lembretes sobre regulamentações ambientais | Manter minha empresa em conformidade com as leis de descarte |
| Carlos               | Encontrar instruções de como preparar itens para descarte | Garantir que meus resíduos sejam aceitos nos pontos de coleta |


# REQUISITOS FUNCIONAIS E NÃO FUNCIONAIS

## 5.1 Requisitos Funcionais

| ID    | Requisito Funcional                            | Descrição                                                                                      | História de Usuário Relacionada                  | Categoria                    |
|-------|------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------|------------------------------|
| RF-001| Pesquisa de Informações sobre Descarte         | A plataforma deve permitir que os usuários pesquisem informações sobre como e onde descartar diferentes tipos de resíduos. | Pequeno e médio porte, Consumidor               | Funcionalidade principal      |
| RF-002| Localização de Pontos de Coleta                | A plataforma deve fornecer uma funcionalidade de busca por localização que permita aos usuários encontrar pontos de coleta próximos. | Pequeno e médio porte, Grande porte             | Funcionalidade principal      |
| RF-003| Relatórios e Análise                            | A plataforma deve gerar relatórios detalhados sobre o descarte de resíduos e fornecer ferramentas analíticas para análise de dados. | Grande porte, Órgão público                      | Funcionalidade avançada       |
| RF-004| Alertas de Mudança em Regulamentações          | O sistema deve notificar os usuários sobre alterações nas regulamentações relacionadas ao descarte de resíduos. | Grande porte, Órgão público                      | Funcionalidade adicional       |
| RF-005| Interface Multilíngue                          | A plataforma deve oferecer suporte em vários idiomas para atender a um público diversificado.  | Pequeno e médio porte, Consumidor               | Funcionalidade de acessibilidade |
| RF-006| Recursos Educacionais                           | A plataforma deve incluir conteúdo educativo sobre práticas de reciclagem e descarte correto.  | Consumidor                                      | Funcionalidade educativa       |

## 5.2 Requisitos Não Funcionais

| ID    | Requisito Não Funcional                        | Descrição                                                                                      | História de Usuário Relacionada                  | Categoria                    |
|-------|------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------|------------------------------|
| RNF-001| Usabilidade                                   | A plataforma deve ser fácil de usar e ter uma interface intuitiva para todos os perfis de usuários. | Todos os perfis                                  | Usabilidade                  |
| RNF-002| Acessibilidade                                | A plataforma deve ser acessível para usuários com deficiências, incluindo suporte para leitores de tela e navegação por teclado. | Todos os perfis                                  | Acessibilidade               |
| RNF-003| Segurança e Privacidade                       | A plataforma deve garantir a segurança e privacidade dos dados dos usuários e conformidade com regulamentações de proteção de dados. | Órgão público, Grande porte                     | Segurança                    |
| RNF-004| Performance e Escalabilidade                  | A plataforma deve ser capaz de lidar com grandes volumes de dados e tráfego de usuários sem comprometer o desempenho. | Grande porte, Órgão público                      | Performance                  |
| RNF-005| Compatibilidade                               | A plataforma deve ser compatível com diferentes dispositivos e navegadores, incluindo smartphones, tablets e desktops. | Pequeno e médio porte, Consumidor               | Compatibilidade              |
| RNF-006| Manutenção                                    | O sistema deve ser fácil de manter e atualizar, com documentação adequada e suporte para futuras melhorias. | Todos os perfis                                  | Manutenção                   |

## Restrições

| ID  | Restrição                                             |
|-----|-------------------------------------------------------|
| 01  | O projeto deve ser entregue em até seis meses         |
| 02  | A plataforma deve ser desenvolvida utilizando HTML, CSS, JavaScript e o framework Bootstrap 5 |
| 03  | O sistema deve ser implantado em servidores locais e não pode depender de soluções de nuvem de terceiros |
| 04  | Funcionalidades devem ser aprovadas pelo Product Owner antes de serem implementadas |
| 05  | A plataforma não pode utilizar bibliotecas pagas para implementar as funcionalidades principais |
| 06  | Todas as interfaces devem ser testadas para acessibilidade com ferramentas recomendadas pelo W3C |
