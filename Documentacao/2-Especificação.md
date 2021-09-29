# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

O problema foi definido de forma exata e os pontos importantes foram feitos através de entrevistas com usuários por meio de entrevista e observação. Tudo de relevante nesse processo culminou na criação das personas e histórias de usuários.

## Personas

* João Paulo tem 25 anos. É analista de sistemas e trabalha desde os 23 no mercado.
Pensa que quanto mais puder automatizar e digitalizar as coisas em sua vida melhor. Gosta de tocar violão e tem muitos amigos.

* Mariana Alves tem 33 anos, é mãe de 3 filhos e é formada como engenheira civil, mas atualmente não exerce a profissão, cuidando apenas da casa e dos filhos. Para ela é importante gerenciar as atividades e compromissos dos filhos. Tem como hobby ler e planeja conhecer a europa.

* José Marinaldo tem 65 anos. É avô de 3 netas lindas e professor de música aposentado. Para ele é difícil acompanhar todos os compromissos de saúde que tem uma vez que campanhas de vacinação ou de prevenção a doenças ou incentivos a exercícios nem sempre chegam nele no tempo adequado. Seu sonho é tocar com Chico Buarque.

* Marcos Palheiros, 33 anos. Engenheiro Elétrico. Bem sucedido empresário de um pequeno negócio de softwares embarcados.  Ele perde com frequência as coisas. Não usa chaves e sim uma fechadura biométrica para evitar inconvenientes. Não tem registro médicos detalhados em papéis, mas cuida bem da saúde. Seu hobby é pedalar e disputa com os colegas que faz as melhores corridas ao longo da semana a partir do aplicativo Strava.

* Maria Santos, 22 anos. Estudante universitária de direito. Vive da ajuda que recebe dos pais. Usa apps e sites para gerenciar tudo em sua vida.Seu hobby é costurar e só pensa em se formar.
 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`        |PARA ... `MOTIVO/VALOR`                                  |
|--------------------|-------------------------------------------|---------------------------------------------------------|
|João Paulo          | Registrar minhas vacinas                  | Para ter acesso as vacinas que ja tomou de forma digital|
|Mariana Alves       | Lembrar de tomar as vacinas no tempo certo| Permitir que possam administrar contas                  |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
