# Seguro Viagem REST — Middleware de Modernização de Integração (SulAmérica)

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas. Sem menção a nomes internos de módulos do sistema core.

---

## Resumo curto

Conduzi o desenvolvimento do Seguro Viagem REST, um **middleware satélite** do sistema core de seguros da SulAmérica, responsável por expor uma API REST moderna que traduz e repassa requisições para os serviços SOAP legados do sistema principal, com validações adicionais voltadas a performance. Toquei o projeto junto com um desenvolvedor júnior, discutindo arquitetura com os arquitetos mais experientes da empresa e tomando decisões técnicas a partir dessa avaliação conjunta. O middleware usa **Apache Kafka** para transformar rotas originalmente síncronas em assíncronas, e **Keycloak** para autenticação.

---

## Case study detalhado

### Visão geral

O Seguro Viagem REST é um projeto satélite do sistema core de seguros da SulAmérica, criado para modernizar a forma como sistemas externos e front-ends consomem as funcionalidades do produto de seguro viagem. Em vez de expor diretamente os serviços SOAP legados do sistema principal, o middleware oferece uma **API REST moderna e documentada**, que internamente traduz e repassa as requisições para os serviços SOAP correspondentes — adicionando validações e regras voltadas à performance no meio do caminho.

### Meu papel

Toquei este projeto junto com um desenvolvedor júnior, atuando com mais protagonismo técnico do que no sistema core: discuti decisões de arquitetura diretamente com os arquitetos mais experientes da empresa, e as decisões técnicas do projeto foram tomadas com avaliação e validação desses arquitetos.

### Arquitetura e stack técnico

- **Spring Boot**, com documentação de API via Swagger/OpenAPI
- Autenticação e autorização via **Keycloak**, com suporte a múltiplos realms
- Camada de tradução REST → SOAP: recebe requisições REST, monta e assina as chamadas SOAP correspondentes, valida os códigos de retorno do serviço legado e traduz erros para respostas REST consistentes
- **Apache Kafka** (com producers e consumers dedicados) para transformar rotas originalmente síncronas em assíncronas — por exemplo, operações de cancelamento de apólice e contratação em lote passaram a ter uma variante assíncrona, processada via mensageria, além da variante síncrona original
- Testes automatizados incluindo testes de API/serviço e testes de comportamento (BDD)
- Integração com cofre de senhas para gestão segura de credenciais de acesso aos serviços integrados

### Funcionalidades expostas

O middleware cobre boa parte das operações do produto de seguro viagem consumidas por terceiros e canais digitais, como: cotação, contratação (individual e em lote), cancelamento de apólice, consulta de apólices, emissão de segunda via, cadastro e consulta de cartão de pagamento, consulta de pagamento via Pix, consulta de corretores, faixas etárias, formas de pagamento e localidades — parte dessas operações com variante síncrona e assíncrona.

### Decisões técnicas de destaque

- **Tradução REST/SOAP com validação intermediária**: em vez de um proxy simples, o middleware valida e interpreta os códigos de retorno dos serviços SOAP legados, padronizando o tratamento de erro para os consumidores REST
- **Assincronismo seletivo via Kafka**: identificação de quais operações se beneficiavam de processamento assíncrono (tipicamente operações mais pesadas ou não bloqueantes para o usuário final) e implementação de uma variante assíncrona ao lado da síncrona, sem descontinuar a última
- **Segurança multi-realm com Keycloak**, permitindo suportar diferentes contextos de autenticação de forma centralizada

### Contexto

Diferente da minha atuação no sistema core — mais reativa e transversal, conforme demanda —, neste projeto satélite tive protagonismo técnico maior: liderei o desenvolvimento junto com um desenvolvedor júnior e participei ativamente das decisões de arquitetura, com validação dos arquitetos seniores da empresa.
