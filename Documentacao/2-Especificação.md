# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

O problema foi definido de forma exata e os pontos importantes foram feitos através de entrevistas com usuários por meio de entrevista e observação. Tudo de relevante nesse processo culminou na criação das personas e histórias de usuários.

## Personas

* ![Alt text](images/JoãoPaulo.jpg?raw=true "João Paulo") João Paulo tem 25 anos. É analista de sistemas e trabalha desde os 23 no mercado.
Pensa que quanto mais puder automatizar e digitalizar as coisas em sua vida melhor. Gosta de tocar violão e tem muitos amigos.

* ![Alt text](images/MarianaAlves.jpg?raw=true "Mariana Alves")Mariana Alves tem 33 anos, é mãe de 3 filhos e é formada como engenheira civil, mas atualmente não exerce a profissão, cuidando apenas da casa e dos filhos. Para ela é importante gerenciar as atividades e compromissos dos filhos. Tem como hobby ler e planeja conhecer a europa.

* ![Alt text](images/JoséMarinaldo.jpg?raw=true "José Marinaldo")José Marinaldo tem 65 anos. É avô de 3 netas lindas e professor de música aposentado. Para ele é difícil acompanhar todos os compromissos de saúde que tem uma vez que campanhas de vacinação ou de prevenção a doenças ou incentivos a exercícios nem sempre chegam nele no tempo adequado. Seu sonho é tocar com Chico Buarque.

* ![Alt text](images/MarcosPalheiros.jpg?raw=true "Marcos Palheiros") Marcos Palheiros, 33 anos. Engenheiro Elétrico. Bem sucedido empresário de um pequeno negócio de softwares embarcados.  Ele perde com frequência as coisas. Não usa chaves e sim uma fechadura biométrica para evitar inconvenientes. Não tem registro médicos detalhados em papéis, mas cuida bem da saúde. Seu hobby é pedalar e disputa com os colegas que faz as melhores corridas ao longo da semana a partir do aplicativo Strava.

* ![Alt text](images/MariaSantos.jpg?raw=true "Maria Santos") Maria Santos, 22 anos. Estudante universitária de direito. Vive da ajuda que recebe dos pais. Usa apps e sites para gerenciar tudo em sua vida.Seu hobby é costurar e só pensa em se formar.
 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                                  |
|--------------------|--------------------------------------------------|----------------------------------------------------------------------------------------|
|João Paulo          | Registrar minhas vacinas                         | Para ter acesso as vacinas que ja tomou de forma digital                               |
|Mariana Alves       | Ter acesso as vacinas que tomou em um único lugar| tenho vários cartões de vacina e gostaria de centralizar isso                          |
|José Marinaldo      |Receber notícias sobre campanhas de vacinação     |Os canais que são divulgados as campanhas são muitos e nem sempre chega até mim em tempo hábil |
|Mariana Alves       |Poder manter um registro dos meus filhos digital  |O cartão de vacina em papel pode ser perdido e é limitado                               |
|Marcos Palheiros    |Não perder os registros de vacinação que tomei    |Porque cartões de papéis são fáceis de perder enquanto o digital está sempre disponível |
|Maria Santos | Ter acesso ao cartão de vacina tanto no desktop quanto no celular | Poder acessar de forma fácil o cartão de vacina quando precisar |


## Requisitos

As tabelas que a seguir apresentam os requisitos funcionais e não funcionais, estes detalham o escopo do projeto.

### Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RF-001| O sistema deve prover o cadastro do usuário contendo as entradas: nome, e-mail e senha. | ESSENCIAL | 
|RF-002| O sistema deve prover o cadastro de informações usuário contendo as entradas:  idade, sexo, tipo sanguíneo, alergias. |  ALTA |
|RF-003| O sistema deve prover o cadastro do histórico de vacinas do usuário. O cadastro deve possibilitar as entradas: vacina aplicada, data de aplicação, data da próxima dose (se houver), observações (campo aberto - local, cidade, etc). | ESSENCIAL |
|RF-004| O sistema deve prover o cadastro do nome e data das próximas vacinas a serem aplicadas no usuário. | ALTA |
|RF-005| O sistema deve conter um calendário com marcação das futuras doses já cadastradas. | ALTA |
|RF-006| O sistema deve indicar as próximas doses cadastradas com antecedência de 7 dias e no dia da vacinação. O aviso deve ser dado por meio de mensagem pop-up e/ou email. | MÉDIA |
|RF-007| O sistema deve informar sobre as campanhas de vacinação que estão em andamento ou vão começar. | MÉDIA |
|RF-008| O sistema deve prover um menu de configurações. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O layout deve ser responsivo possibilitando uma experiência de usuário completa em dispositivos desktops e mobile. | ALTA |
|RNF-002| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA |
|RNF-003| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID    | Restrição                                             |
|------|-------------------------------------------------------|
|RE-001| O programa deve ser implementado em HTML/CSS e JavaScript. |
|RE-002| O projeto deverá ser entregue no final do semestre letivo. |
|RE-003| A equipe não pode subcontratar o desenvolvimento do trabalho. |

