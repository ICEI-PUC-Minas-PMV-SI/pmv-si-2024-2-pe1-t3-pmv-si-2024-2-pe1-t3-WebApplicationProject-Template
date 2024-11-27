# Cadastro de Novo Usuário

**Requisito**
• RF-001 - O sistema permitirá cadastro de novos usuários, com nome, senha e e-mail.

Para atender ao requisito RF-001 foi desenvolvido a página de Cadastro com a seguinte estrutura.

Ao clicar em Cadastre-se disponível na tela de Login, o usuário será redirecionado para a tela de Cadastro.

imagem

Será exibido cinco campos, Insira seu Email/Insira sua Senha/Confirme seu Email/Confirme sua Senha/Insira sua Palavra de Recuperação, do tipo input email com id email, input password com id password, input email com id confirmEmail, input password com id confirmPassword e input text com id recover que receberão os valores digitados pelo usuário para fazer o cadastro no site. O button do tipo submit e de classe botao é para o usuário concluir o cadastro no site.

Imagem html

Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/registro.js, como mostra a seguir:

imagem

## Recuperação de Senha

Requisito
• RF-002 - Efetuar a troca de senha do usuário

## Cadastro de Notícias

Requisito
• RF-003 - Cadastro de notícias, Análises financeiras, Relatórios e Balancetes

## Cadastro de Tipo de Usuários

Requisito
• RF-004 - Cadastro de Tipos de Usuários

## List de Notícias

Requisito
• RF-005 - List de notícias, análises financeiras, relatórios e Balancetes com filtro do usuário

## Asset de Notícias

Requisito
• RF-006 -  Asset de notícias, análises financeiras, relatórios e balancetes

## Responsividade

Requisito
• RN-001 -  Aplicação responsiva para rodar em celulares, tablets, e desktops

## Programação

Requisito
• RN-002 - O sistema dever ser utilizando utilizando HTML, CSS e JavaScript

## LocalStorage

Requisito
• RN-003 - Ao utlizar a aplicação os dados devem ser salvos em localStorage


