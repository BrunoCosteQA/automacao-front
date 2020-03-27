$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PesquisarFilmesGoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language:pt"
    },
    {
      "line": 2,
      "value": "# encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Pesquisa de Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"\u003cdiretor\u003e\" e o ano de nascimento \"\u003cnascimento\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"\u003cfilme\u003e\" e ano de lancamento \"\u003cano\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;",
  "rows": [
    {
      "cells": [
        "diretor",
        "nascimento",
        "filme",
        "ano"
      ],
      "line": 14,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;1"
    },
    {
      "cells": [
        "Zack Synder",
        "01 de março de 1966",
        "Liga da Justiça",
        "2017"
      ],
      "line": 15,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;2"
    },
    {
      "cells": [
        "Quentin Tarantino",
        "27 de março de 1963",
        "Bastardos Inglórios",
        "2009"
      ],
      "line": 16,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;3"
    },
    {
      "cells": [
        "Martin Scorsese",
        "17 de novembro de 1942",
        "O Irlândes",
        "2019"
      ],
      "line": 17,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;4"
    },
    {
      "cells": [
        "Todd Phillips",
        "20 de dezembro de 1970",
        "Coringa",
        "2019"
      ],
      "line": 18,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Pesquisar Diretores e Filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretores-e-filmes;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@pesquisa-teste"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Zack Synder\" e o ano de nascimento \"01 de março de 1966\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Liga da Justiça\" e ano de lancamento \"2017\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Zack Synder",
      "offset": 23
    },
    {
      "val": "01 de março de 1966",
      "offset": 59
    }
  ],
  "location": "PesquisaGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
