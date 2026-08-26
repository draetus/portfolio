# ControlVP — Sistema Core de Seguros, Previdência e Seguro Viagem (SulAmérica)

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas.

---

## Resumo curto

Atuo como desenvolvedor no ControlVP, o **sistema core de seguros, previdência e seguro viagem da SulAmérica**, uma plataforma corporativa com mais de **15 anos em produção**, construída sobre uma arquitetura Java multi-módulo (Spring puro 3.2, JSF/PrimeFaces, Hibernate, ActiveMQ, JasperReports) que sustenta operações críticas de negócio como apólices, sinistros, resgates, previdência, cobrança, comissionamento e conformidade regulatória. Trabalho de forma **transversal**, atuando conforme a demanda em diferentes áreas de negócio do sistema, com foco em desenvolvimento e sustentação de um ambiente de altíssima criticidade e complexidade. A cultura da empresa incentiva os desenvolvedores a contribuir em decisões técnicas, mesmo não sendo a função formal do cargo.

---

## Case study detalhado

### Visão geral

O ControlVP é o sistema core da SulAmérica para os produtos de **seguro de vida, seguro viagem e previdência privada**. É um sistema corporativo de grande porte, com mais de 15 anos em produção contínua, organizado em múltiplos módulos especializados dentro de uma base de código unificada, cobrindo desde a camada web até processamento em lote (batch), serviços expostos via REST e SOAP, geração de relatórios e regras de negócio.

Diferente dos projetos anteriores do meu portfólio — onde atuei como Tech Lead desde a concepção —, aqui atuo como **desenvolvedor dentro de um time**, em um sistema já maduro e crítico para a operação da empresa. A cultura da SulAmérica incentiva desenvolvedores a contribuir ativamente em decisões técnicas, mesmo essa não sendo a função formal do cargo, o que me permite ter voz em discussões de arquitetura e implementação mesmo sem ser o responsável final por elas.

### Meu papel

- Desenvolvimento e **sustentação** de um sistema de produção com mais de 15 anos de operação contínua, em um domínio de altíssima criticidade (dados financeiros e de seguros)
- Atuação **transversal**: diferente de um projeto pequeno onde se domina o todo, aqui trabalho conforme a demanda em diferentes áreas de negócio do sistema — apólices, sinistros, cobrança, comissionamento, integrações, entre outras — o que exige adaptação rápida a diferentes domínios e áreas de código dentro de uma base gigantesca
- Contribuição em decisões técnicas pontuais, dentro da cultura da empresa que estimula esse tipo de participação por parte dos desenvolvedores

### Arquitetura e stack técnico

O sistema é organizado em camadas e módulos especializados dentro de uma base de código unificada, cobrindo de forma independente:

- **Regras de negócio e processamento em lote** — camada central de regras de negócio, com um subsistema próprio de processamento em lote (batch), incluindo componentes de mensageria, polling e execução assíncrona
- **Modelagem de dados e acesso a banco** — camadas dedicadas à modelagem de domínio e acesso a banco (Oracle e DB2)
- **Camada web** — interfaces em **JSF + PrimeFaces**, rodando em JBoss
- **Camada de serviços** — exposição via **REST** (com documentação OpenAPI/Swagger) e **SOAP** (múltiplos serviços para integrações como implantação de proposta de previdência, seguro viagem e faturamento financeiro)
- **Geração de relatórios** — com **JasperReports** (apólices, sinistros, resseguro, cobrança)
- **Suporte a qualidade** — testes automatizados (Selenium) e geração dinâmica de relatórios

Stack técnico: **Spring Framework puro (3.2)** — sem Spring Boot —, **Hibernate**, **ActiveMQ** para mensageria, **FF4j** para feature toggles, banco de dados **Oracle** e **DB2**, deploy containerizado (Docker) com pipelines Jenkins, convivendo lado a lado com componentes mais modernos (REST/OpenAPI) e mais antigos (SOAP/WSDL, JSF), refletindo a evolução natural de um sistema com mais de uma década de vida.

### Escopo de negócio

O sistema cobre uma amplitude muito grande de domínios de negócio do setor de seguros e previdência, incluindo (entre muitos outros): emissão e gestão de apólices, sinistros, resgates e portabilidade de previdência, cobrança e boletos, comissionamento de corretores, resseguro, conciliação e contabilização financeira, conformidade regulatória (FATCA, PEP, LGPD, normas da SUSEP), e integrações com sistemas corporativos como PeopleSoft, além de parceiros externos (Mondial, Livelo, entre outros).

### Contexto e aprendizado

Trabalhar no ControlVP é uma experiência bem diferente dos projetos onde atuei como líder técnico: em vez de moldar a arquitetura desde o início, o desafio aqui é **navegar e evoluir com segurança um sistema legado de altíssima criticidade**, entender decisões arquiteturais tomadas ao longo de mais de 15 anos, e contribuir tecnicamente dentro de um time maior e de uma estrutura corporativa consolidada — competências complementares às de liderança técnica que desenvolvi em projetos anteriores.
