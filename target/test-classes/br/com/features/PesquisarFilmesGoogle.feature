# language:pt
# encoding: utf-8

@pesquisa-teste
Funcionalidade: Pesquisa de Diretores e Filmes

  Esquema do Cenario: Pesquisar Diretores e Filmes
    Dado que informo o diretor "<diretor>" e o ano de nascimento "<nascimento>"
    E informo o filme "<filme>" e ano de lancamento "<ano>"
    Quando clico em pesquisar
    Entao recebo o total de resultados para a pesquisa
    
	Exemplos: 
      | diretor						| nascimento             | filme                | ano  |
      | Zack Synder				| 01 de março de 1966    | Liga da Justiça      | 2017 |
      | Quentin Tarantino | 27 de março de 1963    | Bastardos Inglórios  | 2009 |
      | Martin Scorsese		| 17 de novembro de 1942 | O Irlândes						| 2019 |
      | Todd Phillips			| 20 de dezembro de 1970 | Coringa			        | 2019 |