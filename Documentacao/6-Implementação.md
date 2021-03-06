# Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="4-Gestão-Configuração.md"> Ambiente e Ferramentas de Trabalho</a></span>

## Tecnologias Utilizadas

* Ferramentas de organização
> Miro
> 
> Figma
> 
> Kanban
* IDEs
> Visual Studio Code
> 
> Sublime Text
* Ferramentas de teste
> Ferramenta de desenvolvedor do Chrome (para verificação de erros)
* Ferramentas de controle de versão
> GitHub
* Linguagens
>HTML 5
>
>CSS 3
>
>JavaScript

## Arquitetura da solução

A solução implementada conta com os seguintes módulos:

> Navegador - Interface básica do sistema 
> 
> Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
> 
> Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles:
> 
	* Usuários - Armazenamento dos dados das pessoas que se cadastram no sistema;

	* Vacinas - Armazenamento dos dados das vacinas inseridas por usuário;
		
> Hospedagem: Plataforma foi hospedada para permitir acesso ao público pelo Replit e GitHub Pages
> 
	* URL GitHub Pages: https://icei-puc-minas-pples-ti.github.io/PLF-ES-2021-2-TI1-7946100-projeto-saude/ 
   
	* URL Replit: https://digitavac.veridianathayna.repl.co/


A imagem a seguir demostra o fluxo que o usuário percorre no uso da nossa solução. 

Depois de acessar o site, o usuário efetua o seu cadastro e posteriormente o login, entrando na home do sistema. (1)

Caso ele precise editar os dados que cadastrou, pode ir à tela de configurações e realizar todas as alterações necessárias, ou excluir a conta. (2)

Caso prefira acompanhar suas vacinas ele vai à tela de histórico usando o menu ou o botão da tela inicial do sistema. (3)

Na listagem ele pode visualizar tudo que foi cadastrado por ele anteriormente e pode escolher editar um registro alterando qualquer dado dele ou mesmo excluindo da listagem, ou ainda pode adicionar uma nova vacina recebida informando os dados básicos da mesma. (4)

Ele pode sair do sistema clicando no menu Sair. (5)

![Passo 1](images/1.png)
![Passo 2](images/2.png)
![Passo 3](images/3.png)
![Passo 4](images/4.png)
![Passo 5](images/5.png)
