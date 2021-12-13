# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>


> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes
<br>

CT 01 - Local storage do usuário
-------
Requisito associado: RF001

Objetivo do Teste: Verificar se está sendo feito o armazenamento dos dados do CRUD de usuário no local storage.

Passos:
1. Acessar a Home Page pelo navegador
2. Acesso ao castro de usuário pelo menu
3. Informar email, nome e senha
4. Acessar a área de inspeção do site em Aplicação
5. Verifica se houve o armazenamento de dados no local storage

Critérios de êxito: <br>
Os dados são apresentados em formato JSON no local storage em db_cadastros.

<br>
<hr>
<br>

CT 02 - Teste de login/logout
----------
Requisito associado: RF001, RF009

Objetivo do Teste: Verificar se o login de usuário ocorre e persiste durante a navegação no site e se o logout ocorre.

Passos:
1. Executar o login de usuário na Home page.
2. Navegar/acessar em todas as páginas do site disponíveis para o usuário.
3. Executar o logout

Critérios de êxito: 
- Login deve ser executado com sucesso
- Deve ser possível acessar todo o conteúdo disponível para o usuário sem ocorrencia de logout
- Logout deve ser executado com sucesso levando para a página de login

<br>
<hr>
<br>

CT 03 - Funcionalidades do HTML
---------------------------
Requisito associado: RNF001

Objetivo do Teste: Verificar se a responssividade do site, a funcionalidade dos botões e os modais se comportam corretamente nos principais navegadores.

Passo:
1. Hospedar o site em um ambiente da internet
2. Executar o login de usuário na Home page
3. Testar o carregamento e navegação do site nos principais navegadores (Google Chrome, Firefox, Opera, MicrosoftEdge)
4. Testar todas  todas as páginas do site disponíveis para o usuário
5. Acessar a área de inspeção do site em Aplicação e verificar a responssividade do site

Critérios de êxito: 
- O site deve mostrar-se completamente responssivo a partir dos elementos CSS e Bootstrap.
- Todos os botões e links de acesso do site devem operar normalmente nos principais navegadores.

<br>
<hr>
<br>

CT 04 - Local storage do histórico de vacinas
---------------
Requisito associado: RF003

Objetivo do Teste: Verificar se está sendo feito o armazenamento dos dados do CRUD de vacinas no local storage.

Passos:
1. Executar o login de usuário
2. Acessar a página do histórico pelo botão da Home Page ou pelo botão do menu
3. Acessar o modal pelo botão Adicionar
4. Inserir nome da vacina, data da aplicação, data da próxima aplicação(opcional) e observações(opcional)
5. Salvar os dados pelo botão Salvar
6. Acessar a área de inspeção do site em Aplicação
7. Verificar se houve o armazenamento de dados no local storage

Critérios de êxito: <br>
Os dados são apresentados em formato JSON no local storage em dbVac

<br>
<hr>
<br>

CT 05 - Edição dos dados do usuário
-----------------
Requisito associado: RF008

Objetivo do Teste: Verificar se as informações do usuário são editadas com sucesso no local storage.

Passos:
1. Executar o login de usuário
2. Acessar a página pelo botão Configurações no menu
3. Os dados email e nome do usuário são inseridos automaticamente nos campos e o campo senha pode ser preenchido 
4. Os dados que são modificados nos campos são salvos ao clicar no botão Salvar
5. Acessar a área de inspeção do site em Aplicação
6. Verificar se houve o edição dos dados do usuário no local storage 

Critérios de êxito: 
- Mensagem informa se a edição cadastro foi executado com sucesso.
- Os dados do usuário são substituidos pelos novos no local storage.

<br>
<hr>
<br>


CT 06 - Exclusão do usuário
-----------------
Requisito associado: RF008

Objetivo do Teste: Verificar se as informações usuário são excluidas com sucesso do local storage.

Passos:
1. Executar o login de usuário
2. Acessar a página pelo botão Configurações no menu
3. Os dados email e nome do usuário são inseridos automaticamente nos campos
4. Os dados do usuário são excluidos ao clicar no botão Excluir
5. Acessar a área de inspeção do site em Aplicação
6. Verificar se houve o exclusão do usuário no local storage 

Critérios de êxito: 
- Mensagem informa se houve sucesso na exclusão do usuário.
- Os dados do usuário são excluidos do local storage.

## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.
