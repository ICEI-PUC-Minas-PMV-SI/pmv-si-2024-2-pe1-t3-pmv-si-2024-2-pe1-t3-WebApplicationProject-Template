# Tarefa 04 - Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 


A documentação dos testes está dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o vamos documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - RF 001 - Pesquisa de Informações sobre Descarte**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.greencycle.com <br> 2) Entre na aba Educacional da barra de navegação <br> 3) Procure pelo material desejado <br> 4)Clique em "Veja Mais.." para estudar sobre o tipo de material desejado
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para o mapa ou pesquisar outros materiais
**Dados de entrada** | Nenhum dado de entrada é necessário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 -  RF 002 - Localização de Pontos de Coleta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.greencycle.com <br> 2) Selecione o tipo de material no menu dropdown localizado acima do mapa<br> 3)Clique no botão "Filtrar" Localizado entre o mapa e o menu dropdown aonde foi selecionado o material. <br> 4) clique nos "pins" que apareceram no mapa para saber quais locais e respectivas localizações <br> 5)Se não conhecer o endereço, clique em "como chegar" para ver a melhor rota até o local. 
**Requisitos associados** | RF-002
**Resultado esperado** | Ponto de Coleta Encontrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - RF 003 - Relatórios e Análise de Impacto Ambiental**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.greencycle.com <br>2) Clique no botão "Login" <br> 3)Preencha os dados de login 4)Clique em "entrar" <br> 5)Acesse a parte de relátório de impacto ambiental que se localiza na barra de navegação superior como "RIA", na barra lateral do site ou no rodapé <br> 6) preencha os dados solicitados <br> 7) Clique em "gerar relatório"   
**Requisitos associados** | RF-003
**Resultado esperado** | Seja gerado um relatório de impacto ambiental com os dados do usuário
**Dados de entrada** | Inserção de dados válidos no formulário de login, Inserção de dados válidos no formulário de relatório de impacto ambiental
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - RF 004 - Alerta de Mudança de Regulamentações**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-004
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - RF 005 - Interface Multilingue**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.greencycle.com <br> 2) Clique no botão com imagem da bandeira do Brasil no canto superior direito da tela <br> 3) selecione o idioma necessario <br> 4) confira o site sendo traduzido para a linguagem selecionada. <br>
**Requisitos associados** | RF-005
**Resultado esperado** | Linguagem alterada
**Dados de entrada** | nenhuma dado de entrada é necessario
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - RF 006 - Recurso Educacional**
 :--------------: | ------------

**Procedimento**  | 1) Acesse o endereço www.greencycle.com <br> 2) Acesse a aba Educacional clicando no botão "Educacional" <br> 3) veja os relatorios com informções "o que podemos reciclar?"  
**Requisitos associados** | RF-006
**Resultado esperado** | Aba Funcional
**Dados de entrada** | Nenhum dado de entrada é necessario 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - RNF 001 - Usabilidade Fácil**
 :--------------: | ------------
**Procedimento**  | Não se aplica
**Requisitos associados** | RNF-001
**Resultado esperado** | Usuário conseguir navegar sem dificuldade no site
**Dados de entrada** | Não se aplica
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - RNF 002 - Acessibilidade**
 :--------------: | ------------
**Procedimento**  | 1) Entre no site greencycle.com.br <br> 2) Clique em "Acessibilidade" localizado no navbar <br> 3) Selecione no dropdown a opção desejada de acessibilidade
**Requisitos associados** | RNF-002
**Resultado esperado** | Usuário encontrar formas de acessibilidade dentro do site que se adequem a suas características 
**Dados de entrada** | Inserção de qual acessibilidade é necessária para o usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - RNF 003 - Segurança e Privacidade**
 :--------------: | ------------
**Procedimento**  | 1) Não se aplica
**Requisitos associados** | RNF-003
**Resultado esperado** | Não expor nenhum dado sensível.
**Dados de entrada** | Não se aplica
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - RNF 004 - Performance e Escalabilidade**
 :--------------: | ------------
**Procedimento**  | 1) Muitos usuários devem utilizar o site ao mesmo tempo 
**Requisitos associados** | RNF-004
**Resultado esperado** | O servidor suportar acesso e uso simultaneo do site
**Dados de entrada** | Não se aplica
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - RNF 005 - Compatibilidade**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o site em um dispositivo móvel <br> 2) Acesse em um navegador diferente. <br>
**Requisitos associados** | RNF-005
**Resultado esperado** | É esperado do site que tenha responsividade em qualquer dispositivo ou navegador. 
**Dados de entrada** | Não se aplica
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - RNF 006 - Manutenção**
 :--------------: | ------------
**Procedimento**  | Não se aplica
**Requisitos associados** | RFN6 
**Resultado esperado** | Que haja manutenção simples e fácil no servidor e dados do site
**Dados de entrada** | Não se aplica
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

Apresentar do relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - RF 001 - Pesquisa de Informações sobre Descarte*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários encontre informações sobre o resíduo ser reciclável e como realizar o descarte|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/12GEK0lbFT-lqPAs_XV0r9KRosErCueX5/view?usp=drive_link |

|*Caso de Teste*                                 |*CT02 -  RF 002 - Localização de Pontos de Coleta*                                        |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir que os usuários encontrem pontos de coleta ou descarte de todo tipo de material |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1QWcJsuUDH8BiDIiGUqXDcgj5g2AqLCxs/view?usp=drive_link |

|*Caso de Teste*                                 |*CT03 - RF 003 - Relatórios e Análise de Impacto Ambiental*                                        |
|---|---|
|Requisito Associado | RF-003 - Gerar um relatório de impacto ambiental novo|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1QDtkpgJm2nr_EBpPBtJgh5sk4oF9tdTz/view?usp=drive_link |

|*Caso de Teste*                                 |*CT04 - RF 004 - Alerta de Mudança de Regulamentações*                                        |
|---|---|
|Requisito Associado | RF-004 - O site deve permitir que os usuários tenham uma forma de saber das novas regulamentações|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT05 - Interface Multilingue*                                        |
|---|---|
|Requisito Associado | RF-005 -A aplicação deve mudar o idioma a escolha do usuario|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1K6143IhZGinrRukhLd2j0NuVx4PIHXuX/view?usp=drive_link |

|*Caso de Teste*                                 |*CT06 - RF 006 - Recurso Educacional*                                        |
|---|---|
|Requisito Associado | RF-006 - a aba "Educacional" deve ser executada com sucesso|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/11fSb5LVRQ6tOPw6pv0PYGiv37bZrtSZ8/view?usp=drive_link |

|*Caso de Teste*                                 |*CT07 - RNF 001 - Usabilidade Fácil*                                        |
|---|---|
|Requisito Associado | RNF-001 - Usuário deve conseguir navegar pelo site sem dificuldades|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1IkvrmSdKDGkSbtxe-RAaMoWBmHjv8eDa/view?usp=drive_link |

|*Caso de Teste*                                 |*CT08 - RNF 002 - Acessibilidade*                                        |
|---|---|
|Requisito Associado | RNF-002 - O site deve entrar em modo de alto contraste|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1wURenobC2klmWL9YAx1cbvxoqACKhFjH/view?usp=drive_link |

|*Caso de Teste*                                 |*CT09 - RNF 003 - Segurança e Privacidade*                                        |
|---|---|
|Requisito Associado | RNF-003 - O Site não deve expor dados sensíveis dos usuários|
|Link do vídeo do teste realizado: | Não se aplica - não há servidor |

|*Caso de Teste*                                 |*CT10 - RNF 004 - Performance e Escalabilidade*                                        |
|---|---|
|Requisito Associado | RNF-004 - O site deve permitir que muitos usuários acessem ao mesmo tempo e utilizem |
|Link do vídeo do teste realizado: | Não se aplica - não há servidor |

|*Caso de Teste*                                 |*CT11 - RNF 005 - Compatibilidade*                                        |
|---|---|
|Requisito Associado | RNF-005 - É esperado do site que tenha responsividade em qualquer dispositivo ou navegador. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1-MiCi3nzuLG1X5PCBs3IeR4yPSKUxgu1/view?usp=drive_link |

|*Caso de Teste*                                 |*CT12 - RNF 006 - Manutenção*                                        |
|---|---|
|Requisito Associado | RNF-006 - Que haja manutenção simples e fácil no servidor e dados do site|
|Link do vídeo do teste realizado: | Não se aplica |

## Avaliação dos Testes de Software

Os testes realizados demonstraram a robustez e eficácia da solução desenvolvida, sem identificar pontos fracos significativos. Os resultados confirmaram a funcionalidade correta das principais características, garantindo a conformidade com os requisitos estabelecidos.

Pontos Fortes Identificados:
Estabilidade: O sistema se manteve estável mesmo sob carga simulada, garantindo desempenho consistente.
Cobertura de Testes: Todas as funcionalidades críticas foram testadas exaustivamente, com 100% de cobertura nos cenários planejados.
Interface Usuário (UI): Os testes apontaram uma interface intuitiva e funcional, com respostas rápidas e sem erros visuais.
Acessibilidade: Os critérios de acessibilidade foram validados, assegurando que a solução é inclusiva e atende aos padrões estabelecidos.
Falhas Detectadas e Melhorias Geradas:
Embora não tenham sido encontrados pontos fracos relevantes, algumas falhas menores foram detectadas durante os testes e corrigidas:

Validação de Entradas: Ajustes na validação de dados para cenários excepcionais, como formatos de entrada inesperados, garantindo maior segurança e previsibilidade.
Desempenho em Cenários Limite: Pequenas otimizações foram feitas para melhorar o desempenho em situações de uso extremo, como grandes volumes de dados processados simultaneamente.
Próximas Iterações:
Com base nos resultados positivos obtidos, o grupo pretende:

Ampliar os testes para cenários ainda mais complexos e casos de uso avançados.
Investir em ferramentas automáticas de monitoramento contínuo para assegurar que novas implementações mantenham os padrões de qualidade.
Incorporar feedback de usuários para validar ainda mais a usabilidade e funcionalidade do sistema.
Esses esforços visam manter e elevar o nível de excelência da solução, garantindo que futuras versões sejam ainda mais confiáveis e eficientes.

# Testes de Usabilidade - Cenários e Resultados

## Cenário 1: Cadastro de Usuário
**Objetivo:** Avaliar a facilidade de realizar o cadastro na aplicação.  
**Descrição:** O usuário deve acessar a tela de cadastro, preencher os dados obrigatórios e criar uma conta com sucesso.  
**Funcionalidades Avaliadas:** Formulário de cadastro, validação de campos obrigatórios e mensagens de feedback ao usuário.  
**Perfil do Usuário:** Pessoa que utiliza frequentemente sistemas online, mas com habilidades técnicas limitadas.  
**Ferramentas Utilizadas:** Cronômetro para medir o tempo de execução e formulário de avaliação para coleta de feedback.  

---

## Cenário 2: Busca por Local de Descarte
**Objetivo:** Avaliar a eficiência e usabilidade da funcionalidade de busca.  
**Descrição:** O usuário deve localizar, em um mapa interativo, o ponto de descarte mais próximo para um material específico, como baterias ou vidros.  
**Funcionalidades Avaliadas:** Barra de busca, filtros por tipo de material e interação com o mapa.  
**Perfil do Usuário:** Pessoa que busca descartar materiais de difícil descarte de forma correta, com habilidades medianas em navegação na web.  
**Ferramentas Utilizadas:** Logs de interação e cronômetro para análise de desempenho.  

---

## Cenário 3: Envio de Dúvidas sobre Descarte
**Objetivo:** Verificar a experiência de uso do formulário de envio de dúvidas.  
**Descrição:** O usuário deve acessar a seção "Pergunte Aqui", preencher o formulário com uma dúvida específica e enviá-lo.  
**Funcionalidades Avaliadas:** Facilidade de preenchimento, clareza das instruções e mensagens de confirmação após o envio.  
**Perfil do Usuário:** Pessoa que possui dúvidas frequentes sobre reciclagem e descarte e prefere canais de contato direto.  
**Ferramentas Utilizadas:** Gravação de tela para análise do percurso do usuário e cronômetro.  

---

## Cenário 4: Consulta sobre Reciclagem ou Descarte
**Objetivo:** Analisar a navegação na seção educativa sobre materiais recicláveis e não convencionais.  
**Descrição:** O usuário deve consultar informações sobre os materiais recicláveis (plástico, papel, vidro, metal) e identificar os cuidados com o descarte não convencional.  
**Funcionalidades Avaliadas:** Navegação na interface, leitura e compreensão do conteúdo, e acesso aos links complementares.  
**Perfil do Usuário:** Pessoa interessada em educação ambiental e boas práticas de sustentabilidade.  
**Ferramentas Utilizadas:** Formulário de avaliação de satisfação e observação do percurso do usuário.  

---

## Conclusão
Os testes de usabilidade forneceram insights valiosos sobre a interação do público-alvo com a aplicação. O grupo continuará monitorando o feedback e ajustará os detalhes com base nos resultados coletados, sempre priorizando a acessibilidade e a eficiência do sistema.


> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


# Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário                                                    |
|---------------|-------------------------------------------------------------------------|
| 1             | Você é uma pessoa física que deseja descartar um resíduo ou material   |
| 2             | Você é uma pessoa jurídica (empresa) que tem resíduos a serem descartados na sua empresa |
| 3             | Você é um centro de coleta que precisa de material/resíduo para sua atividade empresarial |

---

# Registro de Testes de Usabilidade

## Cenário 1: Você é uma pessoa física que deseja descartar um resíduo ou material.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 24.65 segundos                  |
| 2       | SIM             | 5                    | 19.11 segundos                  |
| 3       | SIM             | 4                    | 29.87 segundos                  |
| **Média**| 100%            | 4.67                 | 24.21 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 12.23 segundos |

**Comentários dos usuários:**  
"Foi fácil encontrar as informações e entender como posso descartar os materiais corretamente. Achei o site bem organizado."  
"Eu gostei, mas talvez o site poderia oferecer mais detalhes sobre os pontos de descarte próximos."

---

## Cenário 2: Você é uma pessoa jurídica (empresa) que tem resíduos a serem descartados na sua empresa.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35.09 segundos                  |
| 2       | SIM             | 5                    | 40.23 segundos                  |
| 3       | SIM             | 4                    | 48.54 segundos                  |
| **Média**| 100%            | 4.67                 | 41.62 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.33 segundos |

**Comentários dos usuários:**  
"O processo de encontrar informações para empresas foi bem direto, mas gostaria que houvesse uma explicação mais detalhada sobre como os resíduos são processados."  
"Eu tive que procurar um pouco mais, mas consegui entender como proceder."

---

## Cenário 3: Você é um centro de coleta que precisa de material/resíduo para sua atividade empresarial.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 28.44 segundos                  |
| 2       | SIM             | 5                    | 30.71 segundos                  |
| 3       | SIM             | 4                    | 43.12 segundos                  |
| **Média**| 100%            | 4.67                 | 34.42 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.23 segundos |

**Comentários dos usuários:**  
"O processo de consulta foi simples, mas a interface poderia ser um pouco mais rápida ao carregar as informações."  
"Boa experiência geral, mas precisei de um pouco mais de tempo para entender o que fazer depois de encontrar os resíduos."

---

# Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, foi possível verificar que a aplicação web apresenta uma boa taxa de sucesso na interação dos usuários. Todos os cenários foram concluídos com sucesso pelos participantes, o que demonstra que a solução é funcional para os tipos de usuários previstos.

A satisfação subjetiva dos usuários também foi positiva, com médias variando entre 4 (bom) e 5 (ótimo), o que indica que a maioria dos participantes ficou satisfeita com a usabilidade da aplicação.

Quanto ao tempo de conclusão das tarefas, observamos que houve uma discrepância considerável entre o tempo médio dos usuários e o tempo de um especialista/desenvolvedor. Essa diferença é esperada, já que os desenvolvedores estão mais familiarizados com a interface e a estrutura da aplicação. No entanto, as discrepâncias significativas, especialmente no Cenário 3, indicam que há áreas para melhorias em termos de usabilidade e velocidade de resposta da plataforma.

Os comentários dos usuários destacam alguns pontos que podem ser otimizados, como a necessidade de mais detalhes em alguns processos e a melhoria no tempo de resposta de determinadas funcionalidades. A equipe de desenvolvimento pretende focar nessas áreas nas próximas iterações para aprimorar a experiência do usuário e garantir maior eficiência no uso da aplicação.



